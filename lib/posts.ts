import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Tipos para o frontmatter
export interface SEO {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  og_title?: string
  og_description?: string
  og_image?: string
  faq?: Array<{
    pergunta: string
    resposta: string
  }>
}

export interface Frontmatter {
  title: string
  excerpt: string
  date: string
  author: string
  cover: string
  category: string
  tags: string[]
  seo?: SEO
}

export interface Post {
  slug: string
  frontmatter: Frontmatter
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

/**
 * Obtém todos os slugs dos arquivos .mdx na pasta content/posts
 */
export function getAllSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Erro ao ler diretório de posts:', error)
    return []
  }
}

/**
 * Obtém um post específico por slug (sem import dinâmico)
 */
export function getPost(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Valida e tipifica o frontmatter
    const frontmatter: Frontmatter = {
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '',
      cover: data.cover || '',
      category: data.category || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      seo: data.seo || {}
    }
    
    return {
      slug,
      frontmatter,
      content
    }
  } catch (error) {
    console.error(`Erro ao carregar post ${slug}:`, error)
    return null
  }
}

/**
 * Obtém todos os posts ordenados por data (mais recente primeiro)
 */
export function getAllPosts(): Post[] {
  try {
    const slugs = getAllSlugs()
    const posts: Post[] = []
    
    for (const slug of slugs) {
      const post = getPost(slug)
      if (post) {
        posts.push(post)
      }
    }
    
    // Ordena por data (mais recente primeiro)
    return posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date)
      const dateB = new Date(b.frontmatter.date)
      return dateB.getTime() - dateA.getTime()
    })
  } catch (error) {
    console.error('Erro ao carregar posts:', error)
    return []
  }
}

/**
 * Obtém posts por categoria
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.frontmatter.category === category)
}

/**
 * Obtém posts por tag
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.frontmatter.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

/**
 * Obtém posts relacionados (mesma categoria ou tags similares)
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const allPosts = getAllPosts()
  const currentPost = allPosts.find(post => post.slug === currentSlug)
  
  if (!currentPost) return []
  
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0
      
      // Pontua por categoria
      if (post.frontmatter.category === currentPost.frontmatter.category) {
        score += 3
      }
      
      // Pontua por tags em comum
      const commonTags = post.frontmatter.tags.filter(tag =>
        currentPost.frontmatter.tags.includes(tag)
      )
      score += commonTags.length * 2
      
      return { post, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
  
  return relatedPosts
}

/**
 * Obtém categorias únicas
 */
export function getCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = allPosts.map(post => post.frontmatter.category)
  return [...new Set(categories)].sort()
}

/**
 * Obtém tags únicas
 */
export function getTags(): string[] {
  const allPosts = getAllPosts()
  const allTags = allPosts.flatMap(post => post.frontmatter.tags)
  return [...new Set(allTags)].sort()
}

/**
 * Busca posts por termo
 */
export function searchPosts(term: string): Post[] {
  const allPosts = getAllPosts()
  const searchTerm = term.toLowerCase()
  
  return allPosts.filter(post => 
    post.frontmatter.title.toLowerCase().includes(searchTerm) ||
    post.frontmatter.excerpt.toLowerCase().includes(searchTerm) ||
    post.frontmatter.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.content.toLowerCase().includes(searchTerm)
  )
}

/**
 * Valida se um slug existe
 */
export function slugExists(slug: string): boolean {
  const slugs = getAllSlugs()
  return slugs.includes(slug)
}

/**
 * Gera slug a partir do título
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
}

# Documentação - lib/posts.ts

## 📋 Visão Geral

O arquivo `lib/posts.ts` contém funções utilitárias para gerenciar posts MDX do blog, incluindo leitura de frontmatter, busca, filtros e operações relacionadas.

## 🏗️ Estrutura de Tipos

### `SEO`
```typescript
interface SEO {
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
```

### `Frontmatter`
```typescript
interface Frontmatter {
  title: string
  excerpt: string
  date: string
  author: string
  cover: string
  category: string
  tags: string[]
  seo?: SEO
}
```

### `Post`
```typescript
interface Post {
  slug: string
  frontmatter: Frontmatter
  content: string
}
```

## 🔧 Funções Principais

### `getAllSlugs(): string[]`
Obtém todos os slugs dos arquivos `.mdx` na pasta `content/posts`.

```typescript
import { getAllSlugs } from '@/lib/posts'

const slugs = getAllSlugs()
// Retorna: ['introducao-ia', 'transformacao-digital']
```

### `getPost(slug: string): Post | null`
Obtém um post específico por slug, incluindo frontmatter e conteúdo.

```typescript
import { getPost } from '@/lib/posts'

const post = getPost('introducao-ia')
if (post) {
  console.log(post.frontmatter.title) // "Introdução à Inteligência Artificial..."
  console.log(post.content) // Conteúdo MDX do post
}
```

### `getAllPosts(): Post[]`
Obtém todos os posts ordenados por data (mais recente primeiro).

```typescript
import { getAllPosts } from '@/lib/posts'

const posts = getAllPosts()
// Retorna array de posts ordenados por data decrescente
```

## 🔍 Funções de Busca e Filtro

### `getPostsByCategory(category: string): Post[]`
Filtra posts por categoria.

```typescript
import { getPostsByCategory } from '@/lib/posts'

const iaPosts = getPostsByCategory('Inteligência Artificial')
```

### `getPostsByTag(tag: string): Post[]`
Filtra posts por tag (case-insensitive).

```typescript
import { getPostsByTag } from '@/lib/posts'

const techPosts = getPostsByTag('tecnologia')
```

### `searchPosts(term: string): Post[]`
Busca posts por termo no título, resumo, tags ou conteúdo.

```typescript
import { searchPosts } from '@/lib/posts'

const results = searchPosts('inteligência artificial')
```

### `getRelatedPosts(currentSlug: string, limit: number = 3): Post[]`
Obtém posts relacionados baseado em categoria e tags em comum.

```typescript
import { getRelatedPosts } from '@/lib/posts'

const related = getRelatedPosts('introducao-ia', 3)
```

## 📊 Funções de Metadados

### `getCategories(): string[]`
Obtém lista de categorias únicas.

```typescript
import { getCategories } from '@/lib/posts'

const categories = getCategories()
// Retorna: ['Inteligência Artificial', 'Transformação Digital', ...]
```

### `getTags(): string[]`
Obtém lista de tags únicas.

```typescript
import { getTags } from '@/lib/posts'

const tags = getTags()
// Retorna: ['ia', 'tecnologia', 'negócios', ...]
```

## 🛠️ Funções Utilitárias

### `slugExists(slug: string): boolean`
Verifica se um slug existe.

```typescript
import { slugExists } from '@/lib/posts'

const exists = slugExists('introducao-ia') // true
```

### `generateSlug(title: string): string`
Gera slug a partir do título (remove acentos, caracteres especiais, etc.).

```typescript
import { generateSlug } from '@/lib/posts'

const slug = generateSlug('Introdução à Inteligência Artificial!')
// Retorna: 'introducao-a-inteligencia-artificial'
```

## 📝 Exemplos de Uso

### 1. Lista de Posts na Página Principal do Blog

```typescript
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.excerpt}</p>
          <span>{post.frontmatter.category}</span>
        </article>
      ))}
    </div>
  )
}
```

### 2. Página Individual de Post

```typescript
import { getPost, getAllSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <div>{post.frontmatter.excerpt}</div>
      {/* Renderizar conteúdo MDX aqui */}
    </article>
  )
}
```

### 3. Posts Relacionados

```typescript
import { getRelatedPosts } from '@/lib/posts'

export default function PostPage({ params }: { params: { slug: string } }) {
  const relatedPosts = getRelatedPosts(params.slug, 3)
  
  return (
    <div>
      <h3>Posts Relacionados</h3>
      {relatedPosts.map(post => (
        <div key={post.slug}>
          <h4>{post.frontmatter.title}</h4>
        </div>
      ))}
    </div>
  )
}
```

### 4. Filtros por Categoria

```typescript
import { getPostsByCategory, getCategories } from '@/lib/posts'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category)
  const categories = getCategories()
  
  return (
    <div>
      <h1>Posts em {params.category}</h1>
      {posts.map(post => (
        <div key={post.slug}>
          <h2>{post.frontmatter.title}</h2>
        </div>
      ))}
    </div>
  )
}
```

## 🔄 Integração com Next.js

### generateStaticParams
Use `getAllSlugs()` para gerar rotas estáticas:

```typescript
export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}
```

### generateMetadata
Use `getPost()` para gerar metadados dinâmicos:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) {
    return { title: 'Post não encontrado' }
  }
  
  return {
    title: post.frontmatter.seo?.title || post.frontmatter.title,
    description: post.frontmatter.seo?.description || post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.seo?.og_title || post.frontmatter.title,
      description: post.frontmatter.seo?.og_description || post.frontmatter.excerpt,
      images: post.frontmatter.seo?.og_image || post.frontmatter.cover,
    }
  }
}
```

## ⚠️ Considerações Importantes

1. **Performance**: As funções leem arquivos do sistema de arquivos, então use com moderação em componentes que renderizam frequentemente.

2. **Cache**: Para melhor performance, considere implementar cache das funções que leem múltiplos arquivos.

3. **Erro Handling**: Todas as funções incluem tratamento de erro e retornam valores seguros em caso de falha.

4. **Tipagem**: Todas as funções são totalmente tipadas com TypeScript.

## 🚀 Próximos Passos

Para usar essas funções com MDX real, você precisará:

1. Implementar um renderizador MDX para o conteúdo
2. Configurar o `mdx-components.tsx` para componentes customizados
3. Integrar com o sistema de roteamento do Next.js

As funções estão prontas para uso e podem ser facilmente integradas ao seu sistema de blog existente.

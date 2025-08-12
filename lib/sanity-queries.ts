import { client } from './sanity'

// Query para buscar todos os posts
export const postsQuery = `
  *[_type == "post" && publishedAt != null] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    category,
    tags,
    publishedAt,
    seo
  }
`

// Query para buscar um post específico
export const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    category,
    tags,
    publishedAt,
    body,
    seo
  }
`

// Query para buscar slugs de todos os posts
export const postSlugsQuery = `
  *[_type == "post" && publishedAt != null] {
    "slug": slug.current
  }
`

// Query para buscar posts por categoria
export const postsByCategoryQuery = `
  *[_type == "post" && publishedAt != null && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    category,
    tags,
    publishedAt,
    seo
  }
`

// Query para buscar posts por tag
export const postsByTagQuery = `
  *[_type == "post" && publishedAt != null && $tag in tags] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    category,
    tags,
    publishedAt,
    seo
  }
`

// Query para buscar serviços
export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    content
  }
`

// Query para buscar um serviço específico
export const serviceQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    content
  }
`

// Funções para buscar dados
export async function getAllPosts() {
  return await client.fetch(postsQuery)
}

export async function getPost(slug: string) {
  return await client.fetch(postQuery, { slug })
}

export async function getAllPostSlugs() {
  const slugs = await client.fetch(postSlugsQuery)
  return slugs.map((item: any) => item.slug)
}

export async function getPostsByCategory(category: string) {
  return await client.fetch(postsByCategoryQuery, { category })
}

export async function getPostsByTag(tag: string) {
  return await client.fetch(postsByTagQuery, { tag })
}

export async function getAllServices() {
  return await client.fetch(servicesQuery)
}

export async function getService(slug: string) {
  return await client.fetch(serviceQuery, { slug })
}

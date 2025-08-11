import { groq } from 'next-sanity'

// Query para buscar todos os posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    seo
  }
`

// Query para buscar um post específico
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    body,
    seo
  }
`

// Query para buscar todos os slugs de posts
export const postSlugsQuery = groq`
  *[_type == "post"] {
    slug
  }
`

// Query para buscar todos os serviços
export const servicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    content
  }
`

// Query para buscar um serviço específico
export const serviceQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    content
  }
`

// Query para buscar posts por categoria
export const postsByCategoryQuery = groq`
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt
  }
`

// Query para buscar posts por tag
export const postsByTagQuery = groq`
  *[_type == "post" && $tag in tags] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt
  }
`

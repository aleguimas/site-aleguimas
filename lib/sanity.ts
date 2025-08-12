import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '548uc9hr',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source).url()
}

// Helper para converter Portable Text para HTML
export const portableTextToHtml = (blocks: any[]): string => {
  if (!blocks || !Array.isArray(blocks)) return ''
  
  return blocks.map(block => {
    if (block._type === 'block') {
      const style = block.style || 'normal'
      const children = block.children?.map((child: any) => {
        if (child._type === 'span') {
          let text = child.text || ''
          if (child.marks?.includes('strong')) {
            text = `<strong>${text}</strong>`
          }
          if (child.marks?.includes('em')) {
            text = `<em>${text}</em>`
          }
          if (child.marks?.includes('code')) {
            text = `<code>${text}</code>`
          }
          return text
        }
        return ''
      }).join('') || ''
      
      switch (style) {
        case 'h1':
          return `<h1>${children}</h1>`
        case 'h2':
          return `<h2>${children}</h2>`
        case 'h3':
          return `<h3>${children}</h3>`
        case 'h4':
          return `<h4>${children}</h4>`
        case 'blockquote':
          return `<blockquote>${children}</blockquote>`
        default:
          return `<p>${children}</p>`
      }
    }
    
    if (block._type === 'image') {
      const imageUrl = urlFor(block)
      const alt = block.alt || ''
      return `<img src="${imageUrl}" alt="${alt}" class="rounded-lg" />`
    }
    
    return ''
  }).join('')
}

import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '548uc9hr',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // `false` if you want to ensure fresh data
})

// Helper function to get image URL
export const urlFor = (source: any) => {
  return client.image(source).url()
}

// Helper function to get portable text
export const portableTextToHtml = (blocks: any) => {
  if (!blocks) return ''
  
  return blocks
    .map((block: any) => {
      if (block._type === 'block') {
        const text = block.children
          .map((child: any) => {
            if (child._type === 'span') {
              let text = child.text
              if (child.marks && child.marks.includes('strong')) {
                text = `<strong>${text}</strong>`
              }
              if (child.marks && child.marks.includes('em')) {
                text = `<em>${text}</em>`
              }
              if (child.marks && child.marks.includes('code')) {
                text = `<code>${text}</code>`
              }
              return text
            }
            return ''
          })
          .join('')
        
        const style = block.style || 'normal'
        if (style === 'normal') {
          return `<p>${text}</p>`
        }
        if (style.startsWith('h')) {
          return `<${style}>${text}</${style}>`
        }
        if (style === 'blockquote') {
          return `<blockquote>${text}</blockquote>`
        }
        return `<p>${text}</p>`
      }
      if (block._type === 'image') {
        return `<img src="${urlFor(block)}" alt="${block.alt || ''}" />`
      }
      return ''
    })
    .join('')
}

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '548uc9hr',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Optional: for private datasets
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
          
          // Aplicar marcas (marks) na ordem correta
          if (child.marks?.includes('strong')) {
            text = `<strong>${text}</strong>`
          }
          if (child.marks?.includes('em')) {
            text = `<em>${text}</em>`
          }
          if (child.marks?.includes('code')) {
            text = `<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">${text}</code>`
          }
          if (child.marks?.includes('underline')) {
            text = `<u>${text}</u>`
          }
          if (child.marks?.includes('strike-through')) {
            text = `<del>${text}</del>`
          }
          
          // Tratar links - procurar nos markDefs do bloco
          if (child.marks && child.marks.length > 0) {
            for (const mark of child.marks) {
              if (mark.startsWith('link-')) {
                const linkDef = block.markDefs?.find((def: any) => def._key === mark)
                if (linkDef && linkDef._type === 'link' && linkDef.href) {
                  text = `<a href="${linkDef.href}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${text}</a>`
                  break // Só aplicar o primeiro link encontrado
                }
              }
            }
          }
          
          return text
        }
        return ''
      }).join('') || ''
      
      // Aplicar estilo do bloco
      switch (style) {
        case 'h1':
          return `<h1 class="text-3xl font-bold mb-4 mt-8">${children}</h1>`
        case 'h2':
          return `<h2 class="text-2xl font-bold mb-3 mt-6">${children}</h2>`
        case 'h3':
          return `<h3 class="text-xl font-semibold mb-2 mt-4">${children}</h3>`
        case 'h4':
          return `<h4 class="text-lg font-semibold mb-2 mt-4">${children}</h4>`
        case 'blockquote':
          return `<blockquote class="border-l-4 border-blue-500 pl-4 italic bg-gray-50 dark:bg-gray-800 py-2 my-4">${children}</blockquote>`
        case 'normal':
          return `<p class="mb-4 leading-relaxed">${children}</p>`
        default:
          return `<p class="mb-4 leading-relaxed">${children}</p>`
      }
    }
    
    // Tratar imagens
    if (block._type === 'image') {
      const imageUrl = urlFor(block)
      const alt = block.alt || ''
      const caption = block.caption ? `<figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">${block.caption}</figcaption>` : ''
      return `<figure class="my-6"><img src="${imageUrl}" alt="${alt}" class="rounded-lg w-full max-w-2xl mx-auto" />${caption}</figure>`
    }
    
    // Tratar listas
    if (block._type === 'list') {
      const listType = block.listItem === 'bullet' ? 'ul' : 'ol'
      const listClass = block.listItem === 'bullet' ? 'list-disc' : 'list-decimal'
      const children = block.children?.map((child: any) => {
        if (child._type === 'listItem') {
          const itemText = child.children?.map((itemChild: any) => {
            if (itemChild._type === 'span') {
              let text = itemChild.text || ''
              if (itemChild.marks?.includes('strong')) {
                text = `<strong>${text}</strong>`
              }
              if (itemChild.marks?.includes('em')) {
                text = `<em>${text}</em>`
              }
              return text
            }
            return ''
          }).join('') || ''
          return `<li class="mb-1">${itemText}</li>`
        }
        return ''
      }).join('') || ''
      return `<${listType} class="${listClass} ml-6 mb-4">${children}</${listType}>`
    }
    
    return ''
  }).join('')
}

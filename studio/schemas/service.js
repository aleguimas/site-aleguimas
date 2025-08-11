export default {
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Título', 
      type: 'string',
      validation: Rule => Rule.required()
    },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    { 
      name: 'description', 
      title: 'Descrição', 
      type: 'text',
      validation: Rule => Rule.required()
    },
    { 
      name: 'icon', 
      title: 'Ícone', 
      type: 'image',
      options: {
        hotspot: true
      }
    },
    { 
      name: 'content', 
      title: 'Conteúdo', 
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon'
    }
  }
}

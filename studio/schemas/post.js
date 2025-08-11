export default {
  name: 'post',
  title: 'Post',
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
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.'
        }
      ]
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Tecnologia', value: 'tecnologia'},
          {title: 'Inovação', value: 'inovacao'},
          {title: 'Liderança', value: 'lideranca'},
          {title: 'Estratégia', value: 'estrategia'},
          {title: 'Inteligência Artificial', value: 'inteligencia-artificial'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Título',
          type: 'string',
          description: 'Título para SEO (máx 60 caracteres)'
        },
        {
          name: 'metaDescription',
          title: 'Meta Descrição',
          type: 'text',
          rows: 3,
          description: 'Descrição para SEO (máx 160 caracteres)'
        },
        {
          name: 'keywords',
          title: 'Palavras-chave',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      category: 'category'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `por ${author}`,
      })
    },
  },
  orderings: [
    {
      title: 'Data de Publicação, Nova',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
}

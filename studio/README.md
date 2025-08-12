# Sanity Studio - Simpli Digital CMS

Este é o Sanity Studio para o site do Alexandre Guimarães, configurado para gerenciar conteúdo do blog e serviços.

## 🚀 Como usar

### Desenvolvimento
```bash
# Na raiz do projeto
npm run studio

# Ou diretamente no diretório studio
cd studio
npm run dev
```

### Build
```bash
# Na raiz do projeto
npm run studio:build

# Ou diretamente no diretório studio
cd studio
npm run build
```

### Deploy
```bash
# Na raiz do projeto
npm run studio:deploy

# Ou diretamente no diretório studio
cd studio
npm run deploy
```

## 📁 Estrutura

```
studio/
├── schemas/
│   ├── index.js          # Exporta todos os schemas
│   ├── post.js           # Schema para posts do blog
│   ├── service.js        # Schema para serviços
│   └── blockContent.js   # Schema para conteúdo rico
├── sanity.config.js      # Configuração do Sanity
└── package.json          # Dependências do studio
```

## 📝 Schemas

### Post (Blog)
- **title**: Título do post
- **slug**: URL amigável (gerado automaticamente)
- **author**: Autor do post
- **excerpt**: Resumo do post
- **mainImage**: Imagem principal
- **category**: Categoria (Tecnologia, Inovação, etc.)
- **tags**: Tags do post
- **publishedAt**: Data de publicação
- **body**: Conteúdo rico (Portable Text)
- **seo**: Metadados para SEO

### Service (Serviços)
- **title**: Título do serviço
- **slug**: URL amigável
- **description**: Descrição do serviço
- **icon**: Ícone do serviço
- **content**: Conteúdo rico

### BlockContent
- **Texto rico** com formatação
- **Imagens** com hotspot
- **Links** e anotações

## 🔧 Configuração

### Project ID
O projeto está configurado com o ID: `548uc9hr`

### Dataset
Dataset de produção: `production`

### Base Path
O studio está acessível em: `/studio`

## 🌐 Acesso

- **Desenvolvimento**: http://localhost:3333
- **Produção**: https://www.aleguimas.com.br/studio

## 📚 Recursos

- **Vision Tool**: Para testar queries GROQ
- **Desk Tool**: Interface principal de edição
- **Image Hotspot**: Para posicionar imagens
- **Portable Text**: Editor de texto rico
- **Slug Generation**: URLs automáticas
- **SEO Fields**: Metadados otimizados

## 🔗 Integração

O studio está integrado com o Next.js através do `@sanity/client` e `next-sanity`. As queries estão definidas em `lib/sanity-queries.ts` e a configuração do cliente em `lib/sanity.ts`.

# Configuração MDX + Frontmatter

Este projeto está configurado para usar MDX com frontmatter no Next.js App Router.

## 📦 Dependências Instaladas

```bash
pnpm add @next/mdx remark-frontmatter remark-mdx-frontmatter
```

## ⚙️ Configurações Implementadas

### 1. next.config.mjs
- Configurado `createMDX` com `remarkFrontmatter` e `remarkMdxFrontmatter`
- Adicionado `pageExtensions: ['ts', 'tsx', 'md', 'mdx']`
- Mantidas todas as configurações existentes (imagens, experimental, etc.)

### 2. mdx-components.tsx
- Mapeamento de componentes MDX para o design system existente
- Tipografia otimizada com classes Tailwind
- Componentes customizados disponíveis: `Button`, `Badge`, `Card`, `OptimizedImage`, etc.

## 🚀 Como Usar

### Criar um arquivo MDX

```mdx
---
title: "Meu Post"
description: "Descrição do post"
date: "2024-01-15"
author: "Alexandre Guimarães"
tags: ["tag1", "tag2"]
---

# Título do Post

Conteúdo do post com **markdown** e componentes React.

<Button variant="default">Botão do Design System</Button>

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

### Importar em uma página

```tsx
import Post from './post.mdx'

export default function BlogPage() {
  return (
    <div>
      <h1>{Post.frontmatter.title}</h1>
      <p>{Post.frontmatter.description}</p>
      <Post />
    </div>
  )
}
```

## 🎨 Componentes Disponíveis

### Componentes HTML Padrão
- `h1`, `h2`, `h3`, `h4` - Títulos com tipografia otimizada
- `p` - Parágrafos com espaçamento adequado
- `ul`, `ol`, `li` - Listas estilizadas
- `blockquote` - Citações com borda lateral
- `table`, `tr`, `th`, `td` - Tabelas responsivas
- `pre`, `code` - Blocos de código com syntax highlighting
- `img` - Imagens com bordas arredondadas

### Componentes do Design System
- `Button` - Botões com variantes (default, destructive, outline, etc.)
- `Badge` - Badges para tags e labels
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`
- `OptimizedImage` - Imagem otimizada do Next.js
- `Link` - Links com estilização consistente

## 🎯 Funcionalidades

- ✅ **Frontmatter**: Metadados estruturados para posts
- ✅ **Design System**: Integração completa com shadcn/ui
- ✅ **Tipografia**: Classes Tailwind otimizadas
- ✅ **Tema**: Suporte a tema escuro/claro
- ✅ **Imagens**: Otimização automática com next/image
- ✅ **SEO**: Metadados estruturados
- ✅ **Performance**: Build otimizado

## 📁 Estrutura Recomendada para Blog

```
app/
├── blog/
│   ├── layout.tsx
│   ├── page.tsx (lista de posts)
│   ├── [slug]/
│   │   └── page.tsx (post individual)
│   └── posts/
│       ├── post-1.mdx
│       ├── post-2.mdx
│       └── ...
```

## 🔧 Configurações Mantidas

Todas as configurações existentes foram preservadas:
- ✅ Export estático (`output: 'export'`)
- ✅ Configurações de imagens (WebP, AVIF, remote patterns)
- ✅ Configurações experimentais do Next.js
- ✅ Configurações de SEO e performance
- ✅ Configurações do Tailwind CSS

## 🧪 Teste

Acesse `/exemplo-mdx` para ver um exemplo completo de como usar MDX no projeto.

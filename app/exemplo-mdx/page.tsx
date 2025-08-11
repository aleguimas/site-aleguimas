import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Exemplo MDX com Frontmatter',
  description: 'Demonstração de como usar MDX com frontmatter no Next.js App Router',
}

// Exemplo de como importar e usar um arquivo MDX
// import TestPost from './test-post.mdx'

export default function ExemploMDXPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Exemplo MDX com Frontmatter</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Como usar MDX no projeto</CardTitle>
            <CardDescription>
              Este projeto está configurado para usar MDX com frontmatter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Criar arquivo MDX</h3>
                <p className="text-gray-600">
                  Crie arquivos <code className="bg-gray-100 px-2 py-1 rounded">.mdx</code> na pasta <code className="bg-gray-100 px-2 py-1 rounded">app/</code>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">2. Adicionar Frontmatter</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`---
title: "Título do Post"
description: "Descrição do post"
date: "2024-01-15"
author: "Alexandre Guimarães"
tags: ["tag1", "tag2"]
---`}
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Usar Componentes do Design System</h3>
                <p className="text-gray-600">
                  Os componentes estão disponíveis automaticamente nos arquivos MDX:
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="default">Button</Badge>
                  <Badge variant="secondary">Card</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="destructive">Image</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Importar em Páginas</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import Post from './post.mdx'

export default function BlogPage() {
  return (
    <div>
      <h1>{Post.frontmatter.title}</h1>
      <Post />
    </div>
  )
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Funcionalidades Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Frontmatter com metadados</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Componentes do design system</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Tipografia otimizada</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Suporte a imagens otimizadas</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Sintaxe highlight para código</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">✓</Badge>
                <span>Tema escuro/claro</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

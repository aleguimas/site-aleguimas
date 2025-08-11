import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import OptimizedImage from '@/app/components/optimized-image'
import { cn } from '@/lib/utils'

export function useMDXComponents(components: any): any {
  return {
    // Headings - usando classes otimizadas para Core Web Vitals
    h1: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground mb-6",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground mb-4 mt-8",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground mb-3 mt-6",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight text-foreground mb-3 mt-6",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h5
        className={cn(
          "scroll-m-20 text-lg font-semibold tracking-tight text-foreground mb-2 mt-4",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <h6
        className={cn(
          "scroll-m-20 text-base font-semibold tracking-tight text-foreground mb-2 mt-4",
          className
        )}
        {...props}
      />
    ),

    // Parágrafos - usando classes otimizadas
    p: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <p
        className={cn(
          "leading-7 [&:not(:first-child)]:mt-6 text-foreground/80 mb-4",
          className
        )}
        {...props}
      />
    ),

    // Links - usando classes otimizadas com melhor acessibilidade
    a: ({ className, href, ...props }: { className?: string; href?: string; [key: string]: any }) => (
      <Link
        href={href || '#'}
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors focus-visible",
          className
        )}
        {...props}
      />
    ),

    // Listas - usando classes otimizadas
    ul: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc [&>li]:mt-2 text-foreground space-y-2",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground space-y-2",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <li
        className={cn(
          "text-foreground/80",
          className
        )}
        {...props}
      />
    ),

    // Blockquotes - usando classes otimizadas
    blockquote: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),

    // Código - usando classes otimizadas
    code: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <code
        className={cn(
          "relative rounded bg-muted px-2 py-1 font-mono text-sm font-medium text-foreground",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4 my-6",
          className
        )}
        {...props}
      />
    ),

    // Imagens - usando OptimizedImage com lazy loading
    img: ({ className, alt, src, width, height, ...props }: { className?: string; alt?: string; src?: string; width?: number; height?: number; [key: string]: any }) => (
      <div className={cn("my-6", className)}>
        <OptimizedImage
          src={src || ''}
          alt={alt || ''}
          width={width || 800}
          height={height || 600}
          className="rounded-lg border shadow-sm image-optimized"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </div>
    ),

    // Separadores - usando componente otimizado
    hr: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <Separator className={cn("my-8", className)} {...props} />
    ),

    // Tabelas - usando classes otimizadas
    table: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <div className={cn("my-6 w-full overflow-y-auto", className)}>
        <table className="w-full" {...props} />
      </div>
    ),
    tr: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <tr
        className={cn(
          "m-0 border-t p-0 even:bg-muted",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <td
        className={cn(
          "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),

    // Componentes do design system disponíveis no MDX
    Button: ({ className, variant, size, ...props }: { className?: string; variant?: any; size?: any; [key: string]: any }) => (
      <Button className={cn("focus-visible", className)} variant={variant} size={size} {...props} />
    ),
    Badge: ({ className, variant, ...props }: { className?: string; variant?: any; [key: string]: any }) => (
      <Badge className={className} variant={variant} {...props} />
    ),
    Card: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <Card className={cn("mb-6", className)} {...props} />
    ),
    CardHeader: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <CardHeader className={className} {...props} />
    ),
    CardTitle: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <CardTitle className={className} {...props} />
    ),
    CardDescription: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <CardDescription className={className} {...props} />
    ),
    CardContent: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <CardContent className={className} {...props} />
    ),
    Separator: ({ className, ...props }: { className?: string; [key: string]: any }) => (
      <Separator className={cn("my-6", className)} {...props} />
    ),

    // Componente de imagem otimizada
    OptimizedImage: ({ src, alt, width, height, className, ...props }: { src: string; alt: string; width?: number; height?: number; className?: string; [key: string]: any }) => (
      <div className={cn("my-6", className)}>
        <OptimizedImage
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          className="rounded-lg border shadow-sm image-optimized"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </div>
    ),

    // Link customizado com acessibilidade
    Link: ({ className, href, ...props }: { className?: string; href?: string; [key: string]: any }) => (
      <Link
        href={href || '#'}
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors focus-visible",
          className
        )}
        {...props}
      />
    ),

    // Preservar outros componentes customizados
    ...components,
  }
}

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  loading?: 'lazy' | 'eager'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  quality = 85, // Aumentado para melhor qualidade
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Determinar sizes baseado no contexto
  const defaultSizes = sizes || (fill 
    ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    : undefined
  )

  // Determinar loading baseado na prioridade
  const imageLoading = priority ? 'eager' : loading

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`
          transition-all duration-300 ease-in-out
          ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
          ${hasError ? 'opacity-50' : 'opacity-100'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        priority={priority}
        sizes={defaultSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={imageLoading}
        // Otimizações para Core Web Vitals
        unoptimized={false} // Usar otimização do Next.js quando possível
        {...props}
      />
      
      {/* Placeholder durante carregamento */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      
      {/* Fallback para erro */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Erro ao carregar imagem
          </div>
        </div>
      )}
    </div>
  )
} 
import YoutubeFacade from "@/components/youtube-facade"

interface YouTubeVideoCardProps {
  videoId: string
  title: string
  aspectRatio?: "9/16" | "16/9" | "video"
  className?: string
}

/**
 * Card de vídeo do YouTube. Mantém a API antiga, mas renderiza o
 * padrão único do site (YoutubeFacade: play vermelho + facade).
 * Vídeo normal mantém 16:9; apenas Shorts (9/16) ficam verticais.
 */
export default function YouTubeVideoCard({
  videoId,
  title,
  aspectRatio = "9/16",
  className = "",
}: YouTubeVideoCardProps) {
  return (
    <YoutubeFacade
      id={videoId}
      title={title}
      vertical={aspectRatio === "9/16"}
      className={className}
    />
  )
}

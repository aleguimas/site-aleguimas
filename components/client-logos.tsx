import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    { name: "FICR - Faculdade Imaculada Conceição do Recife", logo: "/images/logos/logo-ficr.webp" },
    { name: "Broomer", logo: "/images/logos/logo-broomer.webp" },
    { name: "Fecomércio PE", logo: "/images/logos/logo-fecomercio-pe.webp" },
    { name: "EBDI", logo: "/images/logos/logo-ebdi.webp" },
    { name: "Liner", logo: "/images/logos/logo-liner.webp" },
    { name: "Senac", logo: "/images/logos/logo-senac.webp" },
    { name: "Prefeitura de Jaboatão dos Guararapes", logo: "/images/logos/logo-prefeitura-jaboatao.webp" },
    { name: "Sebrae", logo: "/images/logos/logo-sebrae.webp" },
    { name: "Natal Home Center", logo: "/images/logos/logo-natal-home-center.webp" },
    { name: "Mirroah", logo: "/images/logos/logo-mirroah.webp" },
    { name: "FENEAUTO BR", logo: "/images/logos/logo-feneauto-br.webp" },
    { name: "UNINASSAU", logo: "/images/logos/logo-uninassau.webp" },
    { name: "Work Avanti Soluções", logo: "/images/logos/logo-work-avanti.webp" },
    { name: "Magno Tech Gestão", logo: "/images/logos/logo-magno-tech.webp" },
    { name: "Mundo do Cabeleireiro", logo: "/images/logos/logo-mundo-do-cabeleireiro.webp" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {logos.map((client, index) => (
        <div key={index} className="w-36 h-20 md:w-44 md:h-24 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="relative w-full h-full">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 144px, 176px"
              loading={index < 6 ? "eager" : "lazy"} // Carrega apenas as primeiras 6 logos imediatamente
            />
          </div>
        </div>
      ))}
    </div>
  )
}

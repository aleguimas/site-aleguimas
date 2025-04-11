import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TrajetoriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Minha Trajetória</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história e experiência que me trouxeram até aqui como especialista em Inteligência Artificial e
            Transformação Digital.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar com foto */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <div className="relative w-full" style={{ height: "500px" }}>
                    <Image
                      src="/images/alexandre-guimaraes-palestrante-consultor-ia-3.webp"
                      alt="Alexandre Guimarães"
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Formação Acadêmica</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>MBA em Gestão de Projetos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Graduação em Gestão de Tecnologia da Informação</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Especialização em Inteligência Artificial</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Desenvolvimento Full Stack com Inteligência Artificial</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card de Premiações atualizado */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Premiações</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Innovation Leader Award 2022 | Optmize Group</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Corporate Ninja 2019 | Cubo Itaú</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>Innovation Leader Award 2019 | Optmize Group</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Certificações</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>ITIL® Foundation Certificate in IT Service Management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-1.5 mr-2"></span>
                        <span>COBIT® 4.1 Foundation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline principal */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                  Minha História
                </Badge>
                <h2 className="text-3xl font-bold mb-6">De Estagiário a Especialista em IA</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Minha trajetória profissional teve início em 1999, quando atuei como estagiário em uma pequena loja
                    de informática na cidade de São Vicente, litoral de São Paulo. Foi ali que, ainda jovem, descobri
                    minha paixão pelo universo da tecnologia e percebi como o conhecimento técnico poderia abrir portas
                    e transformar realidades.
                  </p>
                  <p>
                    Com dedicação e curiosidade constante, fui construindo minha carreira e, a partir de 2002, comecei a
                    assumir posições de liderança em tecnologia em diferentes empresas e setores. Ao longo desses anos,
                    tive a oportunidade de conduzir equipes, implementar soluções robustas e atuar diretamente na
                    construção de estratégias tecnológicas que impactaram os negócios de forma significativa.
                  </p>
                  <p>
                    Em 2015, uma inquietação começou a crescer dentro de mim: a necessidade de ir além do tradicional,
                    de provocar mudanças reais e significativas por meio da inovação. Esse foi o ponto de virada que me
                    levou a buscar novos caminhos, novas formas de pensar e aplicar a tecnologia de forma mais
                    inteligente, humana e estratégica.
                  </p>
                  <p>
                    Foi nesse contexto que encontrei na Inteligência Artificial uma verdadeira paixão e um campo fértil
                    para transformar ideias em soluções inovadoras. Com uma visão ampliada dos desafios das empresas,
                    uni minha bagagem em liderança tecnológica à especialização em IA, com foco em criar experiências
                    personalizadas, automatizar processos de forma inteligente e gerar valor real por meio da
                    transformação digital.
                  </p>
                  <p>
                    Hoje, atuo como Especialista em Inteligência Artificial, ajudando organizações a repensarem seus
                    modelos, adotarem tecnologias emergentes e explorarem todo o potencial da IA para inovar com
                    propósito.
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-blue-600 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">1999 - 2002</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">Início da Carreira em Tecnologia</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Iniciei minha trajetória em uma pequena loja de informática em São Vicente-SP, onde desenvolvi as
                      primeiras habilidades técnicas e firmei minha paixão pela tecnologia. Atuei na criação do primeiro
                      curso técnico de montagem e manutenção de computadores da Baixada Santista, também como professor.
                      Nesse período, ingressei como analista de suporte em uma grande empresa da região, atendendo
                      clientes locais e na capital.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2002 - 2008</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">Liderança em Tecnologia</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Com a mudança para Recife no final de 2002 por motivos familiares, iniciei minha jornada em
                      posições de liderança na área de tecnologia. Atuei em empresas dos segmentos de Saúde e Logística,
                      conduzindo equipes e implementando soluções que geraram impacto direto nos resultados do negócio.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2008 - 2012</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">Início do Empreendedorismo</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Iniciei minha trajetória empreendedora com a fundação da minha própria empresa, atendendo clientes
                      de diversos segmentos. Liderei projetos de infraestrutura, implantação de sistemas e expansão de
                      lojas, incluindo iniciativas de grande porte e alta complexidade. Atuei também na gestão de equipe
                      própria, consolidando minha experiência em liderança e entrega de soluções tecnológicas.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2012 - 2023</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">Crescimento na Carreira</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Retornei ao mercado corporativo assumindo posições de gestão em empresas de diversos segmentos,
                      como transporte, jurídico, distribuição, varejo alimentar, cosméticos, beleza e farmácias. Evoluí
                      para cargos de Head, com foco em Inovação e Digital, liderando grandes projetos de estruturação de
                      áreas digitais, incluindo e-commerce, aplicativos e transformação tecnológica. Nesse período,
                      também fui um dos membros fundadores do GETIC (Grupo de Executivos de TI e Comunicação), que hoje
                      possui atuação nacional.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Presente</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">Palestrante e Consultor em Digital e IA</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Atualmente, atuo em projetos de transformação digital e estratégias de IA com foco em resultados
                      tangíveis. Participo da estruturação digital de empresas, com iniciativas que incluem automação
                      inteligente, desenvolvimento de portais e soluções com IA. Como palestrante, já realizei mais de
                      100 apresentações para empresas de diversos setores. Tenho forte atuação junto ao SEBRAE, SENAC e
                      Fecomércio-PE, promovendo o uso prático de tecnologias emergentes para gerar vantagem competitiva.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Missão e Visão</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Minha missão é desmistificar a Inteligência Artificial e mostrar como ela pode ser aplicada de forma
                    prática e eficiente em diferentes setores e empresas de todos os portes. Acredito que a tecnologia
                    deve ser uma aliada dos negócios, gerando resultados tangíveis e impactando positivamente a
                    sociedade.
                  </p>
                  <p>
                    Busco constantemente me manter atualizado sobre as últimas tendências e inovações em IA, para poder
                    oferecer insights valiosos e soluções eficazes para os desafios enfrentados pelas organizações na
                    era digital.
                  </p>
                  <p>
                    Meu objetivo é continuar contribuindo para a disseminação do conhecimento sobre IA e transformação
                    digital no Brasil, ajudando empresas e profissionais a se adaptarem e prosperarem em um mundo cada
                    vez mais tecnológico e conectado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

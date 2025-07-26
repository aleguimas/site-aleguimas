import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Alexandre Guimarães",
  description: "Política de Privacidade do site de Alexandre Guimarães. Saiba como coletamos, usamos e protegemos suas informações pessoais.",
  keywords: [
    "política de privacidade",
    "privacidade",
    "proteção de dados",
    "LGPD",
    "Alexandre Guimarães"
  ],
  openGraph: {
    title: "Política de Privacidade - Alexandre Guimarães",
    description: "Política de Privacidade do site de Alexandre Guimarães. Saiba como coletamos, usamos e protegemos suas informações pessoais.",
    url: "https://www.aleguimas.com.br/politica-de-privacidade",
  },
  alternates: {
    canonical: "/politica-de-privacidade",
  },
}

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Informações Gerais</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Esta Política de Privacidade descreve como Alexandre Guimarães ("nós", "nosso" ou "site") coleta, 
                    usa e protege suas informações pessoais quando você visita nosso site www.aleguimas.com.br.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Informações que Coletamos</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2.1 Informações Fornecidas por Você</h3>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Número de telefone</li>
                        <li>Nome da empresa/organização</li>
                        <li>Mensagens e comunicações</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2.2 Informações Coletadas Automaticamente</h3>
                      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Endereço IP</li>
                        <li>Tipo de navegador e dispositivo</li>
                        <li>Páginas visitadas e tempo de permanência</li>
                        <li>Referência (site de origem)</li>
                        <li>Cookies e tecnologias similares</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Como Usamos Suas Informações</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Responder a suas solicitações e perguntas</li>
                    <li>Fornecer informações sobre palestras, workshops e consultorias</li>
                    <li>Enviar propostas comerciais e orçamentos</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                    <li>Cumprir obrigações legais</li>
                    <li>Enviar comunicações relacionadas aos nossos serviços (com seu consentimento)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Compartilhamento de Informações</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>Com prestadores de serviços que nos ajudam a operar o site (sempre com proteções adequadas)</li>
                    <li>Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Cookies e Tecnologias Similares</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Utilizamos cookies e tecnologias similares para:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Melhorar a funcionalidade do site</li>
                    <li>Analisar o tráfego e uso do site</li>
                    <li>Personalizar sua experiência</li>
                    <li>Lembrar suas preferências</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Você pode controlar o uso de cookies através das configurações do seu navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Segurança das Informações</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                    pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, 
                    nenhum método de transmissão pela internet é 100% seguro.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Seus Direitos (LGPD)</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Acesso às suas informações pessoais</li>
                    <li>Correção de dados incompletos ou incorretos</li>
                    <li>Exclusão de dados desnecessários</li>
                    <li>Portabilidade dos dados</li>
                    <li>Revogação do consentimento</li>
                    <li>Oposição ao tratamento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Retenção de Dados</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
                    descritos nesta política, ou conforme exigido por lei. Quando não precisarmos mais de suas 
                    informações, elas serão excluídas de forma segura.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Links para Terceiros</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas 
                    de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de 
                    qualquer site que visite.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Alterações nesta Política</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
                    significativas através do site ou por e-mail. Recomendamos que você revise esta política 
                    regularmente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contato</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de suas 
                    informações pessoais, entre em contato conosco:
                  </p>
                  <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><strong>Alexandre Guimarães</strong></p>
                      <p>E-mail: aleguimas@gmail.com</p>
                      <p>Telefone: (81) 99194-2628</p>
                      <p>Endereço: Recife - PE, Brasil</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
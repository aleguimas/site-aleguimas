export default function FAQSchema() {
  const faqData = [
    {
      question: "Quais são os principais temas das palestras sobre Inteligência Artificial?",
      answer: "Minhas palestras abordam Inteligência Artificial Aplicada, Transformação Digital, Inovação e Disrupção, Automação Inteligente, Liderança na Era Digital e o Futuro do Trabalho. Todos os temas são adaptados para diferentes públicos e objetivos empresariais."
    },
    {
      question: "Como posso contratar Alexandre Guimarães para uma palestra?",
      answer: "Você pode entrar em contato através do formulário no site, por email ou telefone. Ofereço palestras presenciais e online, workshops e consultoria personalizada para empresas de todos os portes."
    },
    {
      question: "Qual é a duração das palestras e workshops?",
      answer: "As palestras têm duração de 60 a 90 minutos, enquanto os workshops podem durar de 4 a 8 horas. Também ofereço programas de imersão de 1 a 3 dias, dependendo das necessidades da sua empresa."
    },
    {
      question: "Alexandre Guimarães trabalha com empresas de qualquer porte?",
      answer: "Sim, trabalho com empresas de todos os portes, desde startups até grandes corporações. Minha experiência inclui atendimento a mais de 50 empresas e mais de 5.000 pessoas impactadas em 2024."
    },
    {
      question: "Os temas são adaptados para diferentes setores?",
      answer: "Absolutamente! Cada palestra e workshop é personalizado para o setor e objetivos específicos da sua empresa. Já trabalhei com setores como varejo, saúde, educação, governo e tecnologia."
    },
    {
      question: "Há material de apoio disponível após as palestras?",
      answer: "Sim, forneço material de apoio, apresentações e recursos adicionais para que os participantes possam continuar aplicando os conhecimentos em suas organizações."
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })
      }}
    />
  )
} 
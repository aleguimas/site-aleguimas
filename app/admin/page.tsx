import { readFileSync } from 'fs'
import { join } from 'next/server'

export default function AdminPage() {
  // Em desenvolvimento, ler o arquivo HTML
  let htmlContent = ''
  
  try {
    if (process.env.NODE_ENV === 'development') {
      const adminPath = join(process.cwd(), 'public', 'admin', 'index.html')
      htmlContent = readFileSync(adminPath, 'utf-8')
    }
  } catch (error) {
    console.error('Erro ao ler arquivo admin:', error)
  }

  // Se estamos em desenvolvimento e conseguimos ler o arquivo
  if (process.env.NODE_ENV === 'development' && htmlContent) {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  }

  // Fallback para produção ou erro
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Painel Admin
          </h1>
          <p className="text-gray-600 mb-6">
            Este painel só está disponível em produção após o deploy no Netlify.
          </p>
          
          <div className="space-y-3 text-left text-sm text-gray-500">
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">ℹ️</span>
              <span>Em desenvolvimento, o admin é servido via arquivos estáticos</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>Em produção, acesse: <code className="bg-gray-100 px-2 py-1 rounded">/admin</code></span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-500 mr-2">⚠️</span>
              <span>Configure Netlify Identity e Git Gateway</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a 
              href="/admin/index.html" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Tentar Acessar Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

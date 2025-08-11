# Decap CMS - Gerenciador de Conteúdo

## 📋 Visão Geral

O blog utiliza o **Decap CMS** (anteriormente Netlify CMS) para gerenciar conteúdo. É um CMS baseado em Git que permite editar posts diretamente no repositório.

**URL do Admin**: `https://www.aleguimas.com.br/admin`

---

## 🚀 Configuração Inicial

### 1. Ativar Netlify Identity

1. **Acesse o Netlify Dashboard**
   - Vá para [app.netlify.com](https://app.netlify.com)
   - Selecione seu site

2. **Ativar Identity**
   - Vá para **Site settings** → **Identity**
   - Clique em **Enable Identity**
   - Aguarde a ativação

3. **Configurar Git Gateway**
   - Na mesma página Identity
   - Clique em **Enable Git Gateway**
   - Isso permite que o CMS faça commits no repositório

### 2. Configurar Domínio (Opcional)

Se você quiser usar um domínio personalizado para o admin:

1. **Vá para Site settings** → **Domain management**
2. **Adicione um subdomínio**: `admin.aleguimas.com.br`
3. **Configure DNS** para apontar para o Netlify

---

## 👥 Gerenciar Usuários

### Convidar Editores

1. **Acesse Identity** no Netlify Dashboard
2. **Vá para a aba "Users"**
3. **Clique em "Invite users"**
4. **Digite o email** do editor
5. **Selecione o role**:
   - **Editor**: Pode criar/editar posts
   - **Admin**: Acesso total ao CMS

### Roles Disponíveis

- **Admin**: Acesso completo (criar, editar, deletar, gerenciar usuários)
- **Editor**: Criar e editar posts
- **Guest**: Apenas visualização (se configurado)

---

## 🔐 Acessar o CMS

### Método 1: URL Direta
```
https://www.aleguimas.com.br/admin
```

### Método 2: Via Netlify Dashboard
1. Acesse o Netlify Dashboard
2. Vá para **Site settings** → **Identity**
3. Clique em **Open admin panel**

### Primeiro Acesso
1. **Digite seu email** (deve estar convidado)
2. **Verifique o email** de confirmação
3. **Defina uma senha**
4. **Faça login** no CMS

---

## 📝 Usando o CMS

### Criar um Novo Post

1. **Acesse** `/admin`
2. **Clique em "New Post"**
3. **Preencha os campos**:
   - **Título**: Título do post
   - **Resumo**: Descrição curta
   - **Data**: Data de publicação
   - **Autor**: Nome do autor
   - **Imagem de Capa**: Upload da imagem
   - **Categoria**: Selecione uma categoria
   - **Tags**: Adicione tags relevantes
   - **SEO**: Metadados para SEO
   - **Conteúdo**: Corpo do post em Markdown

4. **Clique em "Publish"** ou **"Save as draft"**

### Editar um Post Existente

1. **Acesse** `/admin`
2. **Clique no post** que deseja editar
3. **Faça as alterações**
4. **Salve** as mudanças

### Preview

- **Clique em "Preview"** para ver como o post ficará
- **Use o editor Markdown** para formatação
- **Suporte a imagens** via drag & drop

---

## ⚙️ Configuração Avançada

### Variáveis de Ambiente

Configure no Netlify Dashboard → **Site settings** → **Environment variables**:

```env
NEXT_PUBLIC_SITE_URL=https://www.aleguimas.com.br
```

### Workflow Editorial

O CMS está configurado com **Editorial Workflow**:

1. **Draft**: Rascunho (não publicado)
2. **In Review**: Em revisão
3. **Ready**: Pronto para publicação
4. **Published**: Publicado

### Backup e Versionamento

- **Todos os posts** são versionados no Git
- **Backup automático** via repositório
- **Histórico de mudanças** disponível

---

## 🔒 Segurança (Opcional)

### Basic Auth em Produção

Para adicionar uma camada extra de segurança:

1. **Configure no Netlify Dashboard**:
   - Vá para **Site settings** → **Build & deploy** → **Environment**
   - Adicione variáveis:
     ```
     BASIC_AUTH_USER=admin
     BASIC_AUTH_PASS=sua_senha_segura
     ```

2. **Configure no `netlify.toml`**:
   ```toml
   [[headers]]
     for = "/admin"
     [headers.values]
       Basic-Auth = "admin:$BASIC_AUTH_PASS"
   ```

3. **Recomendações**:
   - Use senhas fortes
   - Troque regularmente
   - Limite acesso apenas a `/admin`

### Autenticação Dupla

1. **Ative 2FA** no Netlify Identity
2. **Configure TOTP** (Google Authenticator)
3. **Obrigue 2FA** para todos os usuários

---

## 🛠️ Solução de Problemas

### Erro de Login
- **Verifique** se o email está convidado
- **Confirme** o email de verificação
- **Limpe** cache do navegador

### Erro de Git Gateway
- **Verifique** se Git Gateway está ativo
- **Confirme** permissões do repositório
- **Reinicie** o Git Gateway se necessário

### Posts não aparecem
- **Verifique** se o build foi executado
- **Confirme** se os arquivos estão no repositório
- **Verifique** logs do Netlify

### Problemas de Upload
- **Verifique** tamanho do arquivo (máx. 10MB)
- **Confirme** formato suportado (jpg, png, webp)
- **Verifique** permissões de pasta

---

## 📞 Suporte

### Recursos Úteis
- [Documentação Decap CMS](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Docs](https://docs.netlify.com/visitor-access/git-gateway/)

### Contato
- **Issues**: Abra no repositório do projeto
- **Netlify Support**: Via dashboard do Netlify
- **Email**: contato@aleguimas.com.br

---

## 🔄 Próximos Passos

### Melhorias Futuras
1. **Preview personalizado** com tema do site
2. **Validação de campos** customizada
3. **Workflow de aprovação** mais robusto
4. **Integração com analytics**
5. **Backup automático** para cloud storage

### Monitoramento
1. **Logs de acesso** ao admin
2. **Métricas de uso** do CMS
3. **Alertas de segurança**
4. **Backup de dados**

---

**Status**: ✅ CMS configurado e funcionando

O Decap CMS está pronto para uso com todas as funcionalidades de gerenciamento de conteúdo do blog.

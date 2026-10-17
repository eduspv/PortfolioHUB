# Projetos pessoais

Os códigos permanecem nos repositórios originais. Descrições baseadas nos READMEs e nas linguagens detectadas pelo GitHub.

## SASBIO — Plataforma de Saúde Mental Corporativa

- **Repositório:** https://github.com/eduspv/Plataforma-Saude-Mental
- **O que é:** plataforma multi-tenant para triagem de riscos psicossociais no trabalho, alinhada à NR-01. Empresas contratam um plano, cadastram colaboradores e aplicam um questionário; a empresa vê apenas indicadores agregados.
- **Destaques:** autenticação JWT com três papéis (RBAC), isolamento por `company_id`, checkout com webhook de pagamento (Asaas, ambiente sandbox), auditoria e dashboards por papel.
- **Tecnologias:** Go, Gin, pgx, PostgreSQL, golang-migrate, React 19, TypeScript, Vite, Tailwind CSS, TanStack Query.
- **Status:** em desenvolvimento.

## Chatbot WhatsApp

- **Repositório:** https://github.com/eduspv/Chatbot-Whatsapp
- **O que é:** chatbot com menu e submenus para WhatsApp, usando o Twilio como ponte de mensagens.
- **Tecnologias:** Python, Flask, Twilio, ngrok (testes locais), TwiML.

## Instagram Cleaner Bot

- **Repositório:** https://github.com/eduspv/Deleting-Instagram-Bot
- **O que é:** automação com Selenium que remove curtidas e comentários da área de atividade do Instagram, em lotes de 10. O login é feito manualmente. Uso educacional e pessoal.
- **Tecnologias:** Python, Selenium, Google Chrome/ChromeDriver.

## Portfólio Tech Showcase

- **Repositório:** https://github.com/eduspv/portfolio
- **O que é:** primeira versão de portfólio, gerada com Lovable. O PortfolioHUB é a versão em GitHub Pages.
- **Demo:** a publicação antiga na Vercel exige login e por isso não é listada.
- **Tecnologias:** React, TypeScript, Vite.

## Sites institucionais

| Projeto | Descrição | Tecnologias | Repositório |
|---|---|---|---|
| Anisio David | Site moderno para escritório de advocacia | React, TypeScript, Vite, shadcn-ui, Tailwind | [link](https://github.com/eduspv/Anisio-David-Website) |
| Ricardo Marques | Site institucional | HTML, CSS, JavaScript | [link](https://github.com/eduspv/Site-Ricardo-Marques) |

## Não incluídos

Os repositórios `pocket-planner-backend` e `pocket-planner-vue` ficaram de fora porque o README do backend é o modelo padrão do GitLab e não deixa claro o escopo da minha autoria. Podem ser incluídos depois de confirmação.

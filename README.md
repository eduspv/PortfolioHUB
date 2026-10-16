# PortfolioHUB

Repositório de portfólio e versionamento criado para o **Desafio Bootcamp I — Entrega Intermediária: Criação de Repositório com Versionamento**.

- **Site (GitHub Pages):** https://eduspv.github.io/PortfolioHUB/
- **Repositório:** https://github.com/eduspv/PortfolioHUB
- **Versão atual:** ver [tags](https://github.com/eduspv/PortfolioHUB/tags) · versão inicial: `v1.0.0`

## Estudante

| | |
|---|---|
| Nome | Eduardo Serra Pierre Vidal |
| Curso | Ciência da Computação — UniCEUB |
| Interesses | Desenvolvimento de software e cibersegurança |
| GitHub | https://github.com/eduspv |
| LinkedIn | https://www.linkedin.com/in/eduardo-s-p-vidal/ |

## A atividade

O desafio pede um repositório no GitHub que demonstre planejamento, organização de diretórios, uso de Git com uma versão 1.0 e alterações posteriores no histórico, documentação em `README.md`, uma página no GitHub Pages, integração com o LinkedIn, uma apresentação de cerca de cinco minutos e um PDF individual. Prazo: **17/10/2026, 23h55 (Brasília)**.

## Tecnologias

HTML5, CSS3 e JavaScript puros, sem build nem dependências, para publicar direto no GitHub Pages. Git e GitHub para versionamento.

## Estrutura

```text
PortfolioHUB/
├── README.md
├── .gitignore
├── index.html                  # página do portfólio
├── css/style.css
├── js/main.js
├── assets/images/
├── projetos-academicos/        # documentação dos projetos acadêmicos
├── projetos-pessoais/          # documentação dos projetos pessoais
├── documentacao/
│   ├── planejamento.md
│   ├── versionamento.md
│   └── integracao-linkedin.md
└── entrega/
    └── roteiro-apresentacao.md
```

## Projetos reunidos

Os projetos continuam nos repositórios originais; aqui há apenas links e documentação.

| Tipo | Projeto | Tecnologias | Repositório |
|---|---|---|---|
| Acadêmico | Study Hub | Markdown, Git | [link](https://github.com/eduspv/Study-Hub-Eduardo-Vidal-) |
| Acadêmico | Exercícios de HTML, CSS e JS | HTML, CSS, JavaScript | [link](https://github.com/eduspv/exerciciosrafael) |
| Pessoal | SASBIO — Plataforma de Saúde Mental | Go, Gin, PostgreSQL, React, TypeScript | [link](https://github.com/eduspv/Plataforma-Saude-Mental) |
| Pessoal | Chatbot WhatsApp | Python, Flask, Twilio | [link](https://github.com/eduspv/Chatbot-Whatsapp) |
| Pessoal | Instagram Cleaner Bot | Python, Selenium | [link](https://github.com/eduspv/Deleting-Instagram-Bot) |
| Pessoal | Portfólio Tech Showcase | React, TypeScript, Vite | [link](https://github.com/eduspv/portfolio) · [demo](https://portfolio-edu-c1a4.vercel.app) |
| Pessoal | Site Anisio David | React, TypeScript, Tailwind | [link](https://github.com/eduspv/Anisio-David-Website) |
| Pessoal | Site Ricardo Marques | HTML, CSS, JavaScript | [link](https://github.com/eduspv/Site-Ricardo-Marques) |

Detalhes em [projetos-academicos](projetos-academicos/README.md) e [projetos-pessoais](projetos-pessoais/README.md).

## Executar localmente

```bash
git clone https://github.com/eduspv/PortfolioHUB.git
cd PortfolioHUB
# opção 1: abrir index.html no navegador
# opção 2: servidor local (requer Node.js)
npx serve .
```

## Git e versionamento

Versionamento é registrar a evolução do código em pontos identificáveis, para poder consultar, comparar e desfazer mudanças. Neste projeto:

1. O repositório foi iniciado com um commit inicial contendo a estrutura e o site.
2. Esse ponto foi marcado com a tag **`v1.0.0`**.
3. Melhorias posteriores entraram em commits separados, no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

Detalhes e histórico em [documentacao/versionamento.md](documentacao/versionamento.md). Para ver o histórico real: `git log --oneline --decorate`.

## Versão 1.0

A `v1.0.0` contém: estrutura de diretórios, site com seções Sobre, Projetos, Competências e Contato, layout responsivo, menu acessível, animações leves e toda a documentação base.

## Manutenção

- Novo projeto: adicionar um `<article class="card">` em `index.html` e uma linha nas tabelas deste README e das pastas de projetos.
- Use somente informações verificáveis (links, tecnologias e descrições reais).
- Faça commits pequenos e descritivos (`feat:`, `fix:`, `docs:`, `style:`).
- Mudanças relevantes recebem uma nova tag (`v1.1.0`, `v1.2.0`, ...).
- Antes de publicar, confira links e a ausência de credenciais.

## Documentação

- [Planejamento](documentacao/planejamento.md)
- [Versionamento](documentacao/versionamento.md)
- [Integração com o LinkedIn](documentacao/integracao-linkedin.md)
- [Roteiro da apresentação](entrega/roteiro-apresentacao.md)

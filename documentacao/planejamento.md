# Planejamento do repositório

## Objetivo

Reunir projetos acadêmicos e pessoais em um único ponto, com histórico de versionamento visível e um site publicado no GitHub Pages.

## Levantamento

Foram analisados os 13 repositórios públicos de `github.com/eduspv`. Critérios de seleção:

- autoria clara e descrição possível a partir do README e das linguagens do repositório;
- diversidade de tecnologias (Go, React, Python, HTML/CSS/JS);
- relevância para a área de interesse (desenvolvimento de software).

Dois repositórios (`pocket-planner-*`) foram deixados de fora por falta de clareza sobre a autoria.

## Decisões

| Decisão | Justificativa |
|---|---|
| HTML, CSS e JS puros | Publicação direta no GitHub Pages, sem etapa de build. |
| Projetos por link, sem cópia de código | Evita duplicação e mantém uma única fonte de verdade. |
| Pastas `projetos-academicos` e `projetos-pessoais` | Separação pedida pelo desafio. |
| Pasta `documentacao` | Planejamento, versionamento e LinkedIn em arquivos próprios. |
| Pasta `entrega` | Material de apresentação e PDF. |
| Publicação pela branch `main` (raiz) | Configuração mais simples do Pages. |

## Decisões da v2.0

O site foi redesenhado após a v1.1: nova identidade visual, destaque para o projeto principal e seção Sobre com a trajetória profissional. A demo da Vercel foi retirada por exigir login.

## Etapas

1. Levantamento dos repositórios.
2. Estrutura de diretórios e site base → commit inicial e tag `v1.0.0`.
3. Melhorias pós-v1.0 em commits separados.
4. Publicação no GitHub Pages.
5. Textos do LinkedIn, roteiro, vídeo e PDF.

## Itens que dependem de ação manual

Realizadas manualmente: vídeo no YouTube (https://youtu.be/dOqBznyDTQo) e projeto no LinkedIn. Resta apenas o envio do PDF.

# Versionamento

## O que é

Versionamento é o registro organizado das mudanças feitas em um projeto ao longo do tempo. Cada mudança fica associada a um autor, uma data e uma mensagem. Assim é possível ver o que mudou, voltar a um estado anterior e trabalhar em equipe sem perder trabalho.

## Como o Git foi usado

- `git init` na pasta do projeto (branch `main`).
- Um commit inicial com a estrutura e o site.
- Tag anotada `v1.0.0` para marcar a versão inicial.
- Commits posteriores, um por melhoria.
- `git push` e `git push --tags` para o GitHub.

## Padrão de mensagens

[Conventional Commits](https://www.conventionalcommits.org/pt-br/): `feat:` nova funcionalidade, `fix:` correção, `docs:` documentação, `style:` aparência, `chore:` manutenção.

## Importância dos commits

Commits pequenos e descritivos tornam o histórico legível, facilitam achar a origem de um problema (`git log`, `git blame`, `git bisect`) e permitem reverter uma mudança isolada (`git revert`).

## Versão inicial

`v1.0.0`: estrutura de diretórios, site responsivo (Sobre, Projetos, Competências, Contato) e documentação base.

## Histórico das principais alterações

O histórico completo e verdadeiro está no Git: `git log --oneline --decorate`. O resumo abaixo é atualizado a partir dele.

| Versão/commit | Descrição |
|---|---|
| `v1.0.0` (`8c8c766`) | Versão inicial: estrutura, site e documentação. |
| `0722c81` | `feat:` filtro de projetos por tecnologia. |
| `beaa7a2` | `feat:` alternância de tema claro e escuro. |
| `v1.1.0` | Marca as melhorias acima. |

## Referências

- Tags: https://github.com/eduspv/PortfolioHUB/tags
- Commits: https://github.com/eduspv/PortfolioHUB/commits/main

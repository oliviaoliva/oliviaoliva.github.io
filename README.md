# Portfolio — Olivia Oliva

Site feito com [Astro](https://astro.build). Cada trabalho de IA aparece como um pipeline (input → configuração → output), com um painel animado no hero que percorre os projetos.

No ar em **https://oliviaoliva.github.io**.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist (site estático)
```

## Publicar

Todo push na `main` publica sozinho no GitHub Pages (workflow em `.github/workflows/deploy.yml`).

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Trabalhos com IA (anonimizados), números de impacto, stack | `src/data/work.ts` |
| Projetos pessoais | `src/content/projects/*.md` |
| Bio / "model card" | `src/components/About.astro` |
| E-mail e links | `src/components/Contact.astro` |
| Cores e fontes | `src/styles/global.css` (tokens no `:root`) |

## Adicionar um projeto pessoal

1. Copie `src/content/projects/_template.md` para `src/content/projects/meu-projeto.md`
2. Preencha o frontmatter (título, descrição, status, tags, links)
3. Escreva o conteúdo em Markdown. A página `/projects/meu-projeto/` é criada sozinha

Arquivos que começam com `_` são ignorados. Use `draft: true` para esconder um projeto.

## Regra de ouro

Nada de nomes de empresas ou clientes: descreva **o problema, o pipeline e o resultado**.

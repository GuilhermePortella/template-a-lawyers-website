# Aurora Advocacia - Esboco Web

Projeto web em React + Vite para um site de advogadas. Este repositorio traz a
estrutura inicial e um layout base para o primeiro build.

## Stack
- React + TypeScript
- Vite

## Como rodar
1) Instale as dependencias:
   `npm install`
2) Ambiente de desenvolvimento:
   `npm run dev`
3) Build de producao:
   `npm run build`
4) Preview do build:
   `npm run preview`

## Estrutura
- `index.html`: ponto de entrada.
- `src/main.tsx`: bootstrap do React e import do CSS.
- `src/App.tsx`: estrutura do layout (hero, atuacao, metodo, sobre, equipe, contato).
- `src/styles.css`: identidade visual, cores, tipografia e responsividade.
- `public/`: assets publicos.

## Onde editar conteudo
- Textos e cards principais: `src/App.tsx`
- Paleta, fontes, espacamentos e efeitos: `src/styles.css`

## Observacoes
- O layout usa fontes do Google Fonts (DM Serif Display e Spline Sans).
- Ha animacoes de entrada; respeita `prefers-reduced-motion`.
- Contatos e dados sao placeholders e podem ser trocados conforme necessidade.

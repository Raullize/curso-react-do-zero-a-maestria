# Introdução: Vite vs Create React App (CRA)

Ao iniciar um projeto React, é comum se deparar com essas duas ferramentas. Aqui está um resumo simples das diferenças e recomendações:

## Create React App (CRA)
Foi por muito tempo a ferramenta padrão para criar aplicações React.
- **Comando:** `npx create-react-app meu-projeto`
- **Status:** Atualmente considerado **legado** e não é mais a recomendação principal da documentação oficial do React.
- **Desvantagens:** É mais lento para iniciar o servidor de desenvolvimento e realizar o build, pois usa o Webpack de uma forma mais pesada.

## Vite
É a ferramenta moderna, criada para ser extremamente rápida e leve.
- **Comando:** `npm create vite@latest`
- **Vantagens:**
  - **Velocidade:** Inicia o servidor quase instantaneamente (usa ES Modules nativos).
  - **Performance:** Builds muito mais rápidos.
  - **Ecossistema:** Moderno e flexível.

## Qual é melhor?
**Vite** é a melhor escolha atualmente.
Ele oferece uma experiência de desenvolvimento (DX) muito superior devido à sua velocidade. O Create React App ainda é útil para fins didáticos ou manutenção de projetos antigos, mas para novos projetos, o padrão da indústria é o Vite.

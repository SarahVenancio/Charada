# 🤔 Charadas

Este é um projeto simples em JavaScript que consome uma API de charadas de forma aleatória e permite que o usuário tente adivinhar a resposta.

## Tela inicial
![Início](image-4.png)

## 🚀 Funcionalidades

- Busca uma charada aleatória a partir da [API Charadas](https://api-charadas-seven.vercel.app);
- Exibe a pergunta ao usuário;
- Permite que o usuário digite uma resposta e verifique se está correta;
- Fornece feedback visual:
  - ✅ Resposta correta
  - 🟠 Resposta parcialmente correta
  - ❌ Resposta errada

## Tecnologias Utilizadas
 ![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
 ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
 ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Autora
[<img src="https://avatars.githubusercontent.com/u/165316263?v=4" width=115><br><sub>Sarah Dias Venâncio</sub>](https://github.com/SarahVenancio)

## 📦 Estrutura Básica do Código

```js
const baseUrl = "https://api-charadas-seven.vercel.app";
const aleatorio = "/charadas";
# 🌍 mundoApp

Aplicativo mobile feito em **React Native (Expo)** com o objetivo de **estudar consumo de API**. O app permite buscar informações sobre países (bandeira, capital, código de discagem) através da [REST Countries API](https://restcountries.com/).

> ⚠️ Este projeto foi criado **apenas para fins de estudo**, com foco em requisições HTTP, manipulação de estado e estilização em React Native.

## 📱 Sobre o projeto

O app conta com:

- Tela de splash inicial (com logo e animação de tempo)
- Campo de busca para digitar o nome do país
- Consumo de API pública para buscar dados do país digitado
- Exibição da bandeira, nome, capital e código de discagem
- Interface com tema visual futurista (neon/dark)

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [REST Countries API](https://restcountries.com/)

## 🧠 Objetivo de estudo

Este projeto foi desenvolvido para praticar:

- Consumo de APIs REST com `fetch`
- Gerenciamento de estado com `useState` e `useEffect`
- Estilização inline com `style={{}}` no React Native
- Renderização condicional de componentes
- Estruturação básica de um app Expo com TypeScript

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/natanrodriguesz/mundoApp.git
cd mundoApp
```

Instale as dependências:

```bash
npm install
```

Rode o projeto com Expo:

```bash
npx expo start
```

Escaneie o QR Code com o app **Expo Go** (Android/iOS) ou rode em um emulador.

## 📂 Estrutura principal

```
mundoApp/
├── assets/          # Imagens usadas no app (splash, ícones, etc.)
├── App.tsx          # Componente principal com toda a lógica e telas
├── app.json         # Configurações do Expo
├── index.ts         # Ponto de entrada do app
└── package.json
```

## 📌 Observações

- Projeto simples, sem gerenciamento de estado global ou navegação entre telas.
- Voltado para prática pessoal e aprendizado, não para uso em produção.

## 📄 Licença

Este projeto está sob a licença MIT.

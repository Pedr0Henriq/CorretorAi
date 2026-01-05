# Corretor AI 📝

> Um aplicativo móvel inteligente capaz de ler e transcrever redações manuscritas com alta fidelidade utilizando Inteligência Artificial.

![Badge License](https://img.shields.io/badge/license-MIT-green)
![Badge React Native](https://img.shields.io/badge/React%20Native-Expo-blue)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC)
![Badge Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange)

## 📱 Sobre o Projeto

O **Corretor AI** foi desenvolvido para auxiliar estudantes e professores no processo de digitalização de textos manuscritos. Utilizando a poderosa API do **Google Gemini (modelo 1.5 Flash)**, o aplicativo processa imagens de redações e retorna o texto transcrito, respeitando parágrafos, acentuação e pontuação originais.

### ✨ Funcionalidades

- 📸 **Envio de Imagens:** Processamento de fotos da galeria ou câmera (via Assets/FileSystem).
- 🧠 **OCR Inteligente:** Transcrição de alta precisão focada em caligrafia manuscrita em português.
- 📋 **Cópia Rápida:** Botão dedicado para copiar o texto transcrito para a área de transferência.
- 🎨 **Interface Amigável:** Feedback visual de carregamento e navegação fluida.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React Native](https://reactnative.dev/)** com **[Expo](https://expo.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai)**
- **[React Navigation](https://reactnavigation.org/)** (Native Stack)
- **Expo FileSystem** & **Expo Asset** (Manipulação de arquivos)
- **Expo Clipboard** (Funcionalidade de copiar e colar)

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (LTS)
- [Git](https://git-scm.com/)
- Aplicativo **Expo Go** no seu celular (Android ou iOS) ou um emulador configurado.

---

## 🔧 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/SEU-USUARIO/corretor-ai.git](https://github.com/SEU-USUARIO/corretor-ai.git)
   cd corretor-ai
   
2. **Instale as dependências**
    ```bash
    npm install
    # ou
    yarn install

3. **Configuração da API Key** Crie um arquivo src/constants/index.ts (ou onde seu projeto puxa a chave) e adicione sua chave do Google AI Studio:

    ```TypeScript
    export const API_KEY = "SUA_CHAVE_GEMINI_AQUI";
    
4. **Execute o projeto**

    ```bash
    npx expo start -c

5. **Teste no celular**

    Leia o QR Code gerado no terminal com o aplicativo Expo Go.

# 🤖 Desafio Técnico Cypress - Preencher Abas

Este projeto é um desafio técnico desenvolvido durante a Academia de Testes QA Accenture 2025, referente ao módulo de automação de testes com Cypress, utilizando a metodologia BDD.

Para aplicação dos conceitos de Page Object Model (POM), foi realizado o mapeamento dos elementos contidos nas páginas por meio da criação e utilização da pasta "Elements", visando maior reutilização e facilidade na manutenção futura do código.

Encontrei bons desafios durante a fase de desenvolvimento, os quais foram superados com perseverança e resiliência. Estou feliz com o resultado e, ainda mais, com a jornada percorrida. Espero que o resultado atenda ou, quem sabe, supere as expectativas! 😁

---

## 📦 Requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm (gerenciador de pacotes do Node)

---

## 🚀 Instalação

# 1. Clone este repositório 
```
git clone https://github.com/giulms/Academia_Accenture2025.git
```
# 2. Acesse a pasta do projeto
```
cd Academia-Accenture2025
```
# 3. Instale as dependências (inclui Cypress)
```
npm install
```
---

## 🧪 Como executar os testes

# 1. Abra o cypress no modo interativo
```
npx cypress open
```
# 2. Selecione o tipo de teste E2E Testing

<p align="center">
  <img src="https://github.com/user-attachments/assets/4ca9bde7-d333-48b7-bfbb-7e49b2a7b31a" alt="Print do tipo de teste em cypress" style="margin-right: 20px; float: left;" />
</p>

# 3. Selecione o navegador que vai carregar seus testes e clique em 'Start E2E Testing'

<p align="center">
  <img src="https://github.com/user-attachments/assets/e8daf0c6-62e7-4d11-98fe-ce2b55b547c1" alt="Print dos navegadores disponiveis" style="margin-right: 20px; float: left;" />
</p>

# 4. Pronto! Agora é so selecionar a feature que você quer testar primeiro

<p align="center">
  <img src="https://github.com/user-attachments/assets/04c00bb8-2145-4132-8ae3-f43d5a63a5be" alt="Print das features disponiveis" style="margin-right: 20px; float: left;" />
</p>

---

## 📂 Estrutura do Projeto - O que faz cada parte?

<p align="center">
  <img src="https://github.com/user-attachments/assets/6da5210c-579a-4316-bbd5-a2e8d9ebbe85" alt="Print das pastas" style="margin-right: 20px; float: left;" />
</p>

| Pasta                             | 🧾 Descrição                                                                 |
|-----------------------------------|------------------------------------------------------------------------------|
| `📁 cypress/`                      | Pasta principal onde ficam todos os arquivos relacionados aos testes.       |
| `📁 cypress/downloads/`           | Armazena arquivos que são baixados durante os testes, caso existam.         |
| `📁 cypress/e2e/`                 | Contém os testes end-to-end (E2E), organizados por categoria (sucesso, erro).|
| `📁 cypress/e2e/Erro/`           | Agrupa os testes que validam cenários de erro ou comportamento inesperado.  |
| `📁 cypress/e2e/Sucesso/`        | Agrupa os testes que validam os cenários bem-sucedidos da aplicação.        |
| `📁 cypress/e2e/elements/`       | Contém os arquivos de mapeamento dos elementos da interface (page elements).|
| `📁 cypress/fixtures/`            | Guarda arquivos estáticos, como imagens e dados de exemplo para os testes.  |
| `📁 cypress/support/`             | Armazena comandos customizados, configurações globais e estruturas auxiliares.|
| `📁 cypress/support/pages/`      | Contém a lógica das interações com cada página (padrão Page Object Model).  |
| `📁 cypress/support/step-definitions/` | Onde ficam os testes implementados usando os métodos e elementos definidos.  |
| `📁 node_modules/`                | Diretório automático que contém todas as dependências instaladas via `npm`. |

---
## ▶️  Vídeo Detalhando o Desenvolvimento do Projeto

<div style="text-align: center;">
  <a href="https://youtu.be/Opw-NqOWjBg" target="_blank">
    <img src="https://github.com/user-attachments/assets/95602afe-9510-48f6-9000-21e8e01d86df"
         alt="Vídeo de detalhes do desenvolvimento"
         width="800" />
  </a>
</div>

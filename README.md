# 🤖 Desafio Técnico Cypress - Preencher Abas

Esse é um projeto que fiz na Academia Accenture 2025, onde foi abordado conceitos de teste automatizados com Cypress e com a metodologia BDD, ao longo do caminho encontrei alguns bons desafios mas nada que não conseguisse superar, gostei bastante do resultado final, confesso que superou as minhas expectativas, um ponto que vale destacar é que nesse projeto utilizei a pasta Elements onde pude organizar melhor o mapeamento de cada página, espero que gostem do resultado!😁

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
## 📼 Detalhes do Desenvolvimento do Projeto

https://youtu.be/Opw-NqOWjBg

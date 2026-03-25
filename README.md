# 🚀 Automação E2E com Cypress (Sauce Demo)

![Cypress Version](https://img.shields.io/badge/cypress-13.x-brightgreen)
![Node Version](https://img.shields.io/badge/node-24.x-blue)
[![Testes E2E Cypress](https://github.com/ryan23nobrega/NovoProjetoCy/actions/workflows/cypress.yml/badge.svg)](https://github.com/ryan23nobrega/NovoProjetoCy/actions/workflows/cypress.yml)

Este projeto contém uma suíte de testes automatizados End-to-End (E2E) desenvolvida para garantir a qualidade dos fluxos críticos de um e-commerce, utilizando as melhores práticas como o padrão **Page Objects**.

---

## 🧪 Cenários de Teste Abrangidos

### 🔐 Autenticação (Login)
* [x] **Sucesso:** Login com usuário e senha válidos.
* [x] **Erro de Credenciais:** Tentativas com senha ou usuário inválidos.
* [x] **Validação:** Verificação de mensagens de erro exibidas pelo sistema.

### 🛒 Fluxos de Negócio
* [x] **Carrinho:** Adição de produtos ao carrinho com sucesso.
* [x] **Sessão:** Fluxo completo de logout do usuário.

---

## 🛠️ Tecnologias e Ferramentas
* **Framework:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript
* **CI/CD:** GitHub Actions (Execução automática a cada push)
* **Padrão de Projeto:** Page Objects (Arquitetura limpa e reutilizável)

---

## ▶️ Como Rodar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ryan23nobrega/NovoProjetoCy.git](https://github.com/ryan23nobrega/NovoProjetoCy.git)
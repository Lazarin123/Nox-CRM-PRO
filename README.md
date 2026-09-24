# 🌙 Nox CRM PRO

<div align="center">

### Sistema completo de CRM e Ordem de Serviços

Gerencie clientes, ordens de serviço, orçamentos, financeiro e produtividade em uma única plataforma.

![Status](https://img.shields.io/badge/status-finalizado-2563EB?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black?style=for-the-badge)

**Desenvolvido por Samuel Lazarin**

</div>

---

## ✨ Sobre o projeto

O **Nox CRM PRO** é uma plataforma moderna de gestão empresarial desenvolvida para empresas de assistência técnica, prestadores de serviços e equipes comerciais.

O sistema reúne em um único ambiente:

- 👥 Cadastro de clientes
- 📋 Ordem de Serviço (OS)
- 💰 Orçamentos e faturamento
- 📦 Controle de produtos e estoque
- 📊 Dashboard com indicadores em tempo real
- 🔐 Controle de usuários e permissões

Seu objetivo é oferecer uma experiência rápida, elegante e intuitiva, com arquitetura escalável para uso profissional.

---

# 🚀 Funcionalidades

## CRM

- Cadastro completo de clientes
- Histórico de atendimentos
- Pesquisa inteligente
- Etiquetas e observações
- Contatos múltiplos

## Ordem de Serviço

- Abertura de OS
- Status personalizados
- Equipamentos
- Defeitos relatados
- Soluções executadas
- Assinatura do cliente
- Impressão em PDF

## Financeiro

- Orçamentos
- Controle de pagamentos
- Contas a receber
- Relatórios financeiros
- Fluxo de caixa

## Estoque

- Cadastro de produtos
- Controle de quantidade
- Movimentações
- Baixa automática por OS

## Dashboard

- Clientes cadastrados
- OS abertas
- Faturamento
- Serviços concluídos
- Gráficos em tempo real

---

# 🛠 Stack

## Front-end

- React 19
- Vite
- React Router
- Axios
- SCSS
- TypeScript

## Back-end

- Node.js
- Express
- Prisma ORM
- JWT
- Multer
- Nodemailer

## Banco de dados

- PostgreSQL

---

# 📁 Estrutura do projeto

```text
Nox-CRM-PRO/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── prisma/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
├── docs/
│
├── package.json
└── README.md
```

---

# ⚙️ Instalação

## 1. Clone o projeto

```bash
git clone https://github.com/Lazarin123/Nox-CRM-PRO.git
cd Nox-CRM-PRO
```

## 2. Instale as dependências

```bash
npm install

cd client
npm install

cd ../server
npm install
```

## 3. Configure o ambiente

Crie o arquivo:

```text
server/.env
```

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/noxcrm"

JWT_SECRET="sua_chave_super_secreta"

PORT=3001

CLIENT_URL=http://localhost:5173
```

No client:

```text
client/.env
```

```env
VITE_API_URL=http://localhost:3001
```

---

# 🗄 Banco de dados

Execute as migrations do Prisma:

```bash
cd server

npx prisma generate

npx prisma db push
```

---

# ▶ Executando

Na raiz:

```bash
npm run dev
```

Aplicação:

| Serviço   | Porta |
| --------- | ----- |
| Front-end | 5173  |
| API       | 3001  |

---

# 🔐 Autenticação

O sistema utiliza:

- JWT
- Hash de senha
- Middleware de autenticação
- Controle de permissões por usuário

---

# 📊 Roadmap

- [x] Login
- [x] Dashboard
- [x] Clientes
- [x] Ordem de Serviço
- [ ] Estoque
- [ ] Financeiro
- [ ] Agenda
- [ ] WhatsApp
- [ ] Assinatura Digital
- [ ] Aplicativo Mobile

---

# 🤝 Contribuição

Contribuições são bem-vindas.

1. Faça um Fork
2. Crie uma branch

```bash
git checkout -b feature/minha-feature
```

3. Commit

```bash
git commit -m "Minha nova feature"
```

4. Push

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request

---

# 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

<div align="center">

## 🌙 Nox CRM PRO

Sistema desenvolvido com foco em performance, organização e experiência do usuário.

**Samuel Lazarin**

</div>

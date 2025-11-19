<h1 align="center">
  ecom-ai · MERN Commerce 
  <img 
    alt="AI"
    height="36"
    src="data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='80' height='36'>
      <text x='0' y='28' fill='orange' font-size='28' font-family='Arial'>X AI</text>
    </svg>"
    style="vertical-align:middle; display:inline-block; margin:0; padding:0;" 
  />
  🛍️🤖
</h1>

<p align="center">
User | Seller | Admin + Gemini-powered AI
</p>

<!-- <p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node-18+-brightgreen?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://github.com/Sarthak_Aloria/ecom-ai/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Sarthak_Aloria/ecom-ai?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/npm-v10.3.0-red?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  </a>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/status-alpha-orange?style=for-the-badge" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/mongoDB-v6.0.6-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</p> -->

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node-18+-brightgreen?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/npm-v10.3.0-red?style=for-the-badge" />
  </a>&nbsp;&nbsp;
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  </a>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/mongoDB-v6.0.6-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />&nbsp;&nbsp;
  <a href="https://github.com/SarthakAloria/ecom-ai/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/SarthakAloria/ecom-ai?style=for-the-badge" />
  </a>
</p>

---

A full-stack MERN ecommerce starter with **User, Seller, and Admin panels**, featuring **AI-powered assistance** for search, recommendations, and chat/RAG helpers. Designed for **team collaboration, demos, and learning** — production-minded but chill.

> **Status:** alpha — basic flows done (server scaffold, auth skeleton, product model). More features incoming. PRs welcome.

---

## 📚 Table of Contents

- [🚀 About](#-about)
- [✨ Features](#-features)
- [📦 Tech Stack](#-tech-stack)
- [🏗️ Architecture](#%EF%B8%8F-project-architecture-mermaid) 
- [⚙️ Setup & Run](#%EF%B8%8F-setup--run)
- [👩‍💻 Authors](#%E2%80%8D-authors)

---

## 🚀 About

**ecom-ai** is a starter MERN ecommerce project built for a college minor project.  
It includes **User, Seller, and Admin panels**, along with a basic AI-assisted scaffold for features like semantic search and recommendations.  

Designed for **team collaboration** and learning, this repo serves as the foundation for expanding into a full-featured ecommerce platform.

---

## ✨ Features

- Multi-role system scaffold: **User**, **Seller**, **Admin**  
- MERN stack setup: Node.js + Express + MongoDB  
- Folder structure ready for backend, frontend, and AI features  
- Ready for team collaboration and further development

---

## 📦 Tech Stack

- **Frontend:** React (planned / future)  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (via Mongoose)  
- **Authentication:** JWT (planned)  
- **AI / Assistant:** Gemini AI (planned integration for semantic search, recommendations, and RAG-style helpers)  
- **Dev Tools:** ESLint, Prettier, Git
---

## 🏗️ Project Architecture (Mermaid)

```mermaid
graph TD
    subgraph Frontend
        A[User Panel] -->|API Calls| B[Backend]
        C[Seller Panel] -->|API Calls| B
        D[Admin Panel] -->|API Calls| B
    end

    subgraph Backend
        B[Express Server] --> E[MongoDB Database]
        B --> F[Gemini AI Service]
    end

    subgraph AI
        F --> G[Semantic Search]
        F --> H[Recommendations]
        F --> I[Chat / RAG Assistant]
    end
```
### Notes:
- **Frontend**: React panels for User, Seller, Admin  
- **Backend**: Express server + MongoDB  
- **AI**: Gemini integration for search, recommendations, and chat/RAG  

---

## ⚙️ Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/ecom-ai.git
cd ecom-ai/server
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
```bash
cp .env.example .env
```
### 4. Start the server
```bash
npm run dev
```
Your server is now ready for development. Frontend setup will be added later.

---

## 🧑‍💻 Authors



| Name | GitHub | Role |
|------|--------|------|
| Sarthak Aloria | [SarthakAloria](https://github.com/SarthakAloria) | Backend & AI (Express server, MongoDB models, Gemini AI chatbot, semantic search) |
| Jivesh Koli | [Jivesh-koli](https://github.com/Jivesh-koli) | Backend support (API routes, authentication, server-side validation, user & seller panels) |
| Teammate-Name | [GitHub-ID](https://github.com/teammate2) | Frontend (React components for User, Seller, Admin dashboards, UI/UX polish) |
| Teammate-Name | [GitHub-ID](https://github.com/teammate3) | QA & DevOps (testing, deployment scripts, documentation, backend utilities) |

---

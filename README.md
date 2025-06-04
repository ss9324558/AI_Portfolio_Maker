# AI Portfolio Maker

**Beautiful, responsive portfolio websites—auto-generated from your LinkedIn or resume, with stunning 3D and animated themes. Simple, powerful, and ready for everyone.**

---

## Project Overview

**AI Portfolio Maker** lets anyone create a professional, visually striking portfolio site in minutes—no coding or design skills required.

- **Link your LinkedIn profile or upload your resume:** Instantly generate a clean, personalized portfolio with one click.
- **Choose from multiple themes:** Start with several free, simple templates, or browse a marketplace of premium, highly-animated portfolios (3D, Framer Motion, GSAP, and more).
- **AI-powered customization (Premium):** Upgrade to unlock an AI builder that personalizes your portfolio’s content, layout, and visuals. Generate smart summaries, custom sections, and even chatbot interactions.
- **No hosting hassle:** Your portfolio lives at `portfolio.com/your-name`. Want a custom domain? Connect and redirect seamlessly.
- **For everyone:** Not just for developers! Perfect for job seekers, creatives, freelancers, and anyone who wants a standout online presence.

---

## Key Features

- ✨ **Instant Generation:** Link your resume or LinkedIn, and get a beautiful portfolio in seconds.
- 🎨 **Modern Templates:** Choose from a gallery of responsive, animated designs (free & paid).
- 🤖 **AI Personalization:** Advanced users can use AI to customize copy, sections, and even visuals.
- 💼 **Marketplace:** Premium, cutting-edge 3D/animated themes for professionals who want to stand out.
- 🌐 **Easy Publishing:** Free subdomain for all (`portfolio.com/your-name`), with paid custom domain support.
- 🛡️ **No Code Access:** We host everything for you. Focus on content and presentation—no deployment headaches.
- 🚀 **Scalable & Fast:** Built with React, Three.js, Framer Motion, Styled Components/SCSS, and cloud hosting (Vercel, Netlify, or static).

---

## Tech Stack

- **Frontend:** React, Three.js, GSAP / Framer Motion, Styled Components / SCSS
- **AI Integration:** OpenAI, Hugging Face, or custom models (for content suggestions, chatbots, and personalization)
- **Hosting:** Vercel, Netlify, or static hosting
- **Marketplace & Monetization:** Free themes for all; advanced and 3D templates available for purchase

---

## Who Is This For?

- **Non-developers:** Instantly generate a professional portfolio from a resume or LinkedIn link—no technical skills needed.
- **Developers & Designers:** Advanced customization, 3D, and animation-rich themes available.
- **Anyone:** Seeking a fast, stylish, and effective online presence.

---

## Monetization & Domains

- **Free** for simple portfolios & themes
- **Premium marketplace** for advanced themes & AI-powered customization
- **Default subdomain** for everyone (`portfolio.com/your-name`)
- **Easy upgrade** for custom domains and advanced features

---

## Project Strucutre

```
project-root/
│
├── frontend/                 # Next.js frontend
├── backend/                  # Express.js backend
│
├── .husky/                   # Git hooks via Husky
├── .github/                  # GitHub workflows / issue templates
│
├── commitlint.config.js      # Commit message rules
├── commit-lint.js            # Custom commit lint script
├── lint-all.js               # Lint frontend & backend together
├── format-all.js             # Format frontend & backend together
│
├── LICENSE                   # MIT or your preferred license
├── README.md                 # This file
├── SECURITY.md               # Vulnerability reporting process
├── CONTRIBUTING.md           # Contribution guidelines
│
├── package.json              # Root-level scripts (e.g. dev, lint)
├── package-lock.json         # Lock file

```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ss9324558/AI_Portfolio_Maker.git
cd AI_Portfolio_Maker
````

### 2. Install Dependencies (root, frontend & backend)

```bash
npm install 
cd frontend && npm install  # installs  frontend deps
cd ../backend && npm install # installs  backend deps
```

Or use the root command if workspaces are configured.

---

## 🔄 Run the Project

You can run both frontend and backend from the **root folder** using:

```bash
npm run dev
```
This will start both servers concurrently in development mode.

If you want to run them separately, you can do so by navigating to each folder:
```bash
cd frontend && npm run dev  # starts Next.js frontend
cd ../backend && npm run dev # starts Express backend
```

This uses `concurrently` to run both servers:

* Frontend runs at: `http://localhost:3000`
* Backend runs at: `http://localhost:8080` (or configured port)

---

## 🔧 Available Scripts

### At root:

* `npm run dev` – Run both frontend and backend
* `npm run build` – Build both frontend and backend
* `npm run lint-all` – Lint all folders
* `npm run format-all` – Format with Prettier

### In `/frontend`

* `npm run dev` – Start Next.js dev server
* `npm run build` – Build frontend
* `npm run lint` – Lint frontend only
* `npm run format` – Format frontend only


### In `/backend`

* `npm run dev` – Start Express server with auto-restart
* `npm run build` – Build backend TypeScript code
* `npm run start` – Start built backend server
* `npm run lint` – Lint backend only
* `npm run format` – format backend only
* `npx prisma generate` – (Re)generate Prisma client
* `npx prisma migrate` – Run Prisma migrations

---

## ✅ Code Quality

* **ESLint + Prettier** – Linting and formatting
* **Husky + Commitlint** – Ensures all commits follow conventional format
* **lint-all.js** – Runs lint for both backend and frontend
* **format-all.js** – Runs prettier for both backend and frontend

---

> **Join us in building the easiest, most powerful portfolio generator on the web—designed for everyone, powered by cutting-edge AI and web tech!**


* **Frontend:** Next.js (with TypeScript, TailwindCSS, ShadCN UI)
* **Backend:** Express.js (TypeScript, Prisma, PostgreSQL)
* **Tooling:** ESLint, Prettier, Commitlint, Husky

---

# ✅ **Coding Standards and Guidelines**

This document outlines the coding standards and best practices for our fullstack project using **Next.js**, **Express**, **PostgreSQL**, **Prisma**, and **TypeScript**. Follow these guidelines to maintain consistency, readability, and scalability.

---

## ✅ **Frontend (Next.js + TypeScript) Standards**

### **Naming Conventions**

- **app/PageName**: PascalCase (e.g., `UserProfile.tsx`)
- **components**:PascalCase  (e.g., `AnimatedText.tsx`)
- **Hooks/Utils/Services**: camelCase (e.g., `useAuth.ts`, `dateUtils.ts`)
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: kebab-case (`main-wrapper`)
- **Environment Variables**: `NEXT_PUBLIC_` prefix for client-safe variables

---

### **Recommended Folder Structure**


```markdown
frontend/
├── app/                    # Next.js App Router structure
│   └── page.tsx           # Root page
├── components/            # Shared UI components
│   └── Button.tsx
├── lib/                   # Reusable logic & helpers (e.g., auth.ts)
├── hooks/                 # Custom React hooks
├── context/               # Context providers
├── styles/                # Global styles (e.g., globals.css)
├── public/                # Static assets
├── constants/             # Global constants
└── types/                 # Global TypeScript types
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```
---

## ✅ **Backend (Express + Prisma + PostgreSQL + TS) Standards**

### **Naming Conventions**

- **Controllers**: camelCase ending with `Controller.ts` (e.g., `userController.ts`)
- **Models (Prisma)**: PascalCase (e.g., `User`)
- **Routes**: kebab-case (e.g., `user-routes.ts`)
- **Services/Helpers**: camelCase
- **Env Vars**: UPPER_SNAKE_CASE

---

### **Recommended Folder Structure**

```
backend/
├── src/
│   ├── config/            # DB and environment config
│   │   └── db.ts
│   ├── controllers/       # Business logic (e.g., authController.ts)
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware (e.g., auth.ts)
│   ├── services/          # Service logic (e.g., emailService.ts)
│   ├── prisma/            # Prisma schema & migration config
│   │   └── schema.prisma
│   ├── types/             # Shared TS types/interfaces
│   └── index.ts           # Entry point
├── .env
└── tsconfig.json
```

---

## ✅ **Backend Code Review Checklist**

- [ ] TypeScript types are properly used
- [ ] Controllers are modular and slim
- [ ] Prisma queries are secure and optimized
- [ ] Sensitive info is secured via `.env`
- [ ] No console.log or debug code in production
- [ ] Consistent API response format (status + message + data)
- [ ] Middleware handles errors globally
- [ ] Linting passes (no ESLint/TS errors)
- [ ] Tests exist for critical routes and services
- [ ] Prisma schema is committed and migrated properly

---

## ✅ **Cross-Project Best Practices**

### **Code Quality**

- 🧹 **Linting:** ESLint + Prettier setup with `npm run lint` and Husky pre-commit hooks
- 📝 **Formatting:** Use Prettier for consistent code style
- ✅ **Testing:** Write unit tests using Jest or Vitest (frontend) and Supertest/Jest (backend)

### **Version Control**

- 🧾 **Commits:** Follow Conventional Commits (`feat:`, `fix:`, etc.)
- 🌱 **Branches:** `feature/`, `bugfix/`, `hotfix/`, `release/`
- 🔀 **Pull Requests:** Require at least one reviewer

### **Deployment & CI/CD**

- Use GitHub Actions or similar for:
  - Lint + Test on PRs
  - Build checks
  - Auto-deploy (optional)

---

## ✅ **General Standards**

- 🔐 **Security:**
  - Never commit `.env` or secrets
  - Validate input on both client and server
  - Use HTTPS in production

- 🧠 **Error Handling:**
  - Use centralized middleware on backend
  - Show user-friendly messages on frontend

- 🧑‍💻 **Docs & Comments:**
  - Use JSDoc or TSDoc for services/functions
  - Document API using Swagger or Postman

- 🌍 **Internationalization:** Optional, but recommended via `next-i18next`

- 📱 **Responsive Design:** Use Tailwind’s mobile-first approach

- 🌐 **Accessibility (a11y):**
  - Semantic HTML
  - ARIA labels where necessary
  - Keyboard navigation

---

## ✅ **Dev Tooling**

- **Commitlint + Husky:** Enforce commit message standards
- **ESLint + Prettier:** Auto-format & lint TS code
- **Lint-All Script:** Runs linting for frontend and backend
- **Concurrently:** Allows `npm run dev` to run both servers



> This guideline is a living document — feel free to improve and contribute via PR!


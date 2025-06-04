# Git Commit Standards

## Branch Naming Convention

- Use `feature/` prefix for new features
- Use `bugfix/` prefix for bug fixes
- Use `hotfix/` prefix for critical fixes
- Use `chore/` for maintenance tasks
- Use `docs/` for documentation updates
- Use kebab-case for the descriptive part: `feature/user-authentication`

## Commit Message Format

We follow a **flexible Conventional Commits** style.

### Format:

```
type(scope): subject
```

- **scope** is optional.
- No enforced casing rules for scope.
- Subject can be written in **sentence case**, **lowercase**, or **start case**.

---

## Allowed `type` values

| Type       | Purpose                                                       |
| ---------- | ------------------------------------------------------------- |
| `feat`     | A new feature                                                 |
| `feature`  | A new feature (alternative name)                              |
| `fix`      | A bug fix                                                     |
| `docs`     | Documentation changes only                                    |
| `style`    | Changes that do not affect code logic (formatting, CSS, etc.) |
| `refactor` | Code improvement without behavior change                      |
| `test`     | Adding or correcting tests                                    |
| `chore`    | Maintenance tasks like updating dependencies                  |
| `revert`   | Reverting a previous commit                                   |

---

## Subject Rules

- Prefer **sentence case**, **lowercase**, or **start case**.
- Maximum **120 characters** (soft warning only, not strict).
- Keep the subject short and descriptive.
- Do **not** put an extra space between `)` and `:`.

---

## Good Commit Examples

| Example                                              | Purpose                               |
| ---------------------------------------------------- | ------------------------------------- |
| `fix: fix login bug`                                 | Fixing a bug without specifying scope |
| `feat(user-profile): add profile picture upload`     | Adding a feature                      |
| `chore(deps): update react version to 18.2.0`        | Maintenance                           |
| `docs: updated API documentation`                    | Documentation update                  |
| `refactor(authService): improve token validation`    | Refactoring                           |
| `test(login-module): add tests for login validation` | Tests                                 |
| `feature: initial project setup`                     | New feature                           |

---

## Common Mistakes (Avoid These)

| Mistake                         | Why it’s wrong                                            |
| ------------------------------- | --------------------------------------------------------- |
| `fix (login): fix bug`          | ❌ Space before `:` — should be `fix(login): fix bug`     |
| `Fix(userProfile): Added login` | ❌ Wrong casing for type and subject                      |
| `feature user login`            | ❌ Missing parentheses, missing `:`                       |
| `docs-update readme`            | ❌ Wrong format, missing `type(scope): subject` structure |

---

## Quick Golden Rules

- No space between `)` and `:`
- Type must be from the allowed list.
- Scope is **optional**.
- No strict scope casing rules.
- Keep subject under 120 characters.
- Start subject in sentence case / lowercase / start case (flexible).

---

# Example Commit Commands

```bash
git commit -m "fix: correct typo in login page"
git commit -m "feat(user-profile): add profile edit functionality"
git commit -m "docs: update API usage section"
git commit -m "chore: clean up old test files"
git commit -m "revert(login-page): rollback last login validation"
```

---

# Final Note:

> These rules help keep the Git history **organized**, **easy to read**, and **professional** — while allowing developers flexibility during fast work.

---

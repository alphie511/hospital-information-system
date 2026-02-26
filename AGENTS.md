# AGENTS.md

## Cursor Cloud specific instructions

- **Project**: Hospital Information System (医院信息管理系统) — a Next.js 15.2.4 app with React 19, TypeScript, Tailwind CSS v4, and Radix UI / shadcn/ui components.
- **Package manager**: npm with `--legacy-peer-deps` flag required (React 19 peer dep conflicts with some packages). Lockfile: `package-lock.json`.
- **Dev server**: `npm run dev` (port 3000). No external services, databases, or Docker required — all data is mock/in-memory.
- **Lint**: `npm run lint` (runs `next lint`). Uses ESLint 8 with `eslint-config-next@15.2.4`. The `.eslintrc.json` config is in the repo root.
- **Build**: `npm run build`. The project sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true` in `next.config.mjs`.
- **Path alias**: `@/*` maps to the workspace root (configured in `tsconfig.json`).
- **UI components**: shadcn/ui components in `components/ui/`, utility `cn()` in `lib/utils.ts`.
- **Auth**: Mock auth via localStorage. Test accounts: `admin`, `manager`, `engineer`, `user` (any password works).
- **ESLint version**: Must use ESLint 8.x and `eslint-config-next@15.2.4` — ESLint 9+/10+ is incompatible with Next.js 15.2.4's lint command.

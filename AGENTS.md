# AGENTS.md

## Cursor Cloud specific instructions

- **Project**: Hospital Information System (Next.js 15.2.4, React 19, TypeScript, Tailwind CSS v4, Radix UI / shadcn/ui components).
- **Package manager**: npm (lockfile: `package-lock.json`). Run `npm install` to refresh dependencies.
- **Dev server**: `npm run dev` (runs `next dev`). No external services (databases, Docker) required.
- **Lint**: `npm run lint` (runs `next lint`). Note: ESLint is not configured yet — first run will prompt to set it up.
- **Build**: `npm run build`. The project sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true` in `next.config.mjs`.
- **Known issue**: `app/page.tsx` contains garbled characters (极速赛车开奖直播) that cause TypeScript parse errors and SWC build failures. This is a pre-existing issue in the repo.
- **Path alias**: `@/*` maps to the workspace root (configured in `tsconfig.json`).
- **UI components**: shadcn/ui components live in `components/ui/`, utility `cn()` in `lib/utils.ts`.

# Project Overview

This is a Next.js 16 project configured with Turbopack, React 19, and Tailwind CSS. It utilizes `shadcn/ui` for component management and `ink` for terminal-based UI rendering, suggesting a focus on hybrid web/CLI capabilities.

## Architecture

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (v4)
- **UI Components:** `shadcn/ui` (managed via `components/ui/`)
- **Theme Management:** `next-themes`
- **Utility/Misc:** `clsx`, `tailwind-merge`, `lucide-react`
- **CLI/Terminal:** `ink`

## Development

### Key Commands

- `npm run dev` / `bun dev`: Starts the development server with Turbopack.
- `npm run build` / `bun build`: Builds the application for production.
- `npm run start` / `bun start`: Runs the production server.
- `npm run lint`: Runs ESLint checks.
- `npm run format`: Formats all `.ts` and `.tsx` files using Prettier.
- `npm run typecheck`: Runs TypeScript type checking.

### Adding Components

To add UI components from the `shadcn/ui` library, use:

```bash
npx shadcn@latest add <component-name>
```

## Conventions

- **Components:** UI components should reside in `components/ui/` and follow the `shadcn/ui` pattern.
- **Styling:** Use Tailwind CSS utility classes.
- **State/Theme:** Use `next-themes` for theme management.
- **Code Style:** Strict TypeScript is enforced. Format code regularly with `npm run format`.

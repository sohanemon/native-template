# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev              # Start Expo dev server (runs prebuild + asset generation first)
bun run ios              # Run on iOS simulator
bun run android          # Run on Android emulator
bun run web              # Run in browser
bun run test             # Run Vitest tests (watch mode)
bun run test:run         # Run tests once
bun run check            # Biome lint + format check
bun run fix              # Auto-fix lint/format issues
bun run typecheck        # TypeScript type check
bun run generate:assets  # Regenerate type-safe asset imports (auto-runs on dev start)
```

## Architecture

### Stack
- **React Native 0.81.5** (New Architecture + Hermes), **Expo 54**, **React 19**
- **Expo Router 6** — file-based routing with typed routes enabled
- **tRPC 11** — end-to-end type-safe API with HTTP batch link and SuperJSON serialization
- **TanStack React Query 5** — server state, configured in `lib/providers/react-query.tsx`
- **Zustand** — client UI state (see `lib/store/`)
- **Uniwind** — Tailwind CSS 4 for React Native (configured in `metro.config.js`, styles in `styles/`)
- **Biome** via Ultracite preset — linting and formatting (no ESLint/Prettier)

### Routing Structure
```
app/
  _layout.tsx              # Root: wraps in Providers (GestureHandler, SafeArea, Theme, Keyboard, ReactQuery)
  (stack)/_layout.tsx      # Stack navigator
    (drawer)/_layout.tsx   # Drawer navigator
      index.tsx            # Home screen
      (tabs)/_layout.tsx   # Tab navigator (inside drawer)
        index.tsx
        two.tsx
    other.tsx
    setting/index.tsx
  trpc/[trpc]+api.ts       # tRPC API route handler (Expo Router server middleware)
```

### Provider Pattern
Providers are composed with `stackProviders()` utility in `lib/providers/index.tsx`. Add new providers there rather than nesting them manually in the root layout.

### tRPC Setup
- Router defined in `server/router.ts`, subranged routers in `server/routers/`
- Client configured in `lib/trpc.tsx` with SuperJSON transformer and HTTP batch link
- API handler at `app/trpc/[trpc]+api.ts`
- Use `trpc.procedure.query/mutation` on the server; `trpc.someRoute.useQuery()` on the client

### Theming
- 10 OKLCH-based themes (5 light/dark pairs: classic, ocean, forest, sunset, lavender) in `styles/`
- Theme selection persisted via `expo-secure-store` (see `lib/contexts/theme-context.tsx`)
- Access theme in components with `useTheme()` hook
- Extra themes registered in `metro.config.js` under `extraThemes`

### Assets
- Static assets live in `assets/static/`
- Run `bun run generate:assets` after adding assets — it generates type-safe imports in `lib/assets.ts`
- Served via tRPC `asset.from` and `asset.lottieSplash` procedures

### Styling Conventions
- Use `cn()` (from `lib/utils.ts`) for merging Tailwind classes: combines `clsx` + `tailwind-merge`
- Component variants use CVA (Class Variance Authority)
- Avoid barrel files — import directly from source files

## Code Standards (Ultracite/Biome)

- **No `any`** — use `unknown` and type narrow
- **No `console.log`** in production code
- **`for...of`** over `.forEach()` and indexed loops
- **`async/await`** over promise chains; always handle errors with try-catch
- **Early returns** to reduce nesting
- Don't define components inside other components
- Run `bun run fix` before committing to auto-resolve most issues

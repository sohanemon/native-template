# Native Template

Elevate your React Native development with this premium template featuring **full-stack TypeScript**, **10+ stunning themes**, modern navigation, and cutting-edge tooling. Built for developers who demand excellence and speed.

### 🔥 Full-Stack Type Safety
- **tRPC 11** for end-to-end type-safe APIs between client and server
- Automatic type generation eliminates API mismatches
- Zod validation with type inference for bulletproof data handling

### 🎨 Stunning Theming System
- **10 Beautiful Themes**: Light, Dark, Ocean, Forest, Sunset, and Lavender (each with light/dark variants)
- OKLCH color space for vibrant, accessible colors
- One-tap theme switching with haptic feedback
- Context-based theming that works across all components

### 🚀 Modern Navigation & UX
- **Expo Router 6** with drawer and tab navigation patterns
- Typed routes for compile-time navigation safety
- Smooth animations and gesture handling
- Professional drawer with app branding and social links

### ⚡ Lightning-Fast Development
- **Bun** package manager for 3x faster installs and scripts
- **Biome** for blazing-fast linting and formatting (Rust-powered)
- **Vitest** for ultra-quick unit testing with jsdom
- Auto-generated type-safe asset imports from your assets folder

### 🛠 Cutting-Edge Tech Stack
- React Native 0.81.5 with **New Architecture** enabled
- **React 19** with compiler optimizations
- Expo 54 with latest features
- TanStack React Query for intelligent data fetching
- TypeScript 5 with strict mode and latest features

### 📱 Multi-Platform Excellence
- Seamless iOS, Android, and Web support
- Platform-specific optimizations and icons
- Edge-to-edge Android support
- React Native Web for instant web previews

## 🛠 Tech Stack in Detail

- **Framework**: React Native 0.81.5 with Expo 54
- **Navigation**: Expo Router 6 with typed routes
- **API**: tRPC 11 + TanStack React Query
- **Styling**: Uniwind (custom Tailwind CSS 4 integration) + OKLCH colors
- **Language**: TypeScript 5 with strict configuration
- **Testing**: Vitest + jsdom for browser-like testing
- **Linting**: Biome (ultra-fast Rust-based)
- **Package Manager**: Bun (lightning-fast)
- **State**: React Query for server state, Context for UI state

## 📱 Quick Start

Get up and running in minutes:

```bash
git clone https://github.com/sohanemon/native-template.git
cd native-template
bun install
cp .env.example .env
bun run dev
```

Choose your platform:
- `bun run ios` - iOS Simulator
- `bun run android` - Android Emulator
- `bun run web` - Web browser

## 🏗 Project Structure

```
├── app/                    # Screens & layouts (Expo Router)
│   ├── (stack)/           # Stack navigation group
│   │   ├── (drawer)/      # Drawer navigation
│   │   │   ├── (tabs)/    # Tab navigation inside drawer
│   │   │   │   ├── index.tsx
│   │   │   │   └── two.tsx
│   │   │   └── index.tsx
│   │   └── other.tsx
│   └── trpc/[trpc]+api.ts # tRPC API route
├── components/            # Reusable UI components
│   ├── ui/               # Core UI primitives (button, card, etc.)
│   ├── layout/           # Layout components (drawer, stack)
│   └── icon.tsx          # Icon system
├── lib/                  # Core utilities & configurations
│   ├── context/          # React contexts (theme provider)
│   ├── hooks/            # Custom hooks
│   ├── scripts/          # Build scripts (asset generation)
│   ├── trpc/             # tRPC client setup
│   └── utils/            # Helper functions
├── server/               # tRPC server implementation
│   └── routers/          # API route handlers
├── styles/               # Global styles & theme definitions
│   ├── colors.css        # 10 theme color palettes
│   └── theme.css         # CSS custom properties
└── tests/                # Test files & configuration
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Expo development server |
| `bun run start` | Start Expo in production mode |
| `bun run android` | Run on Android emulator |
| `bun run ios` | Run on iOS simulator |
| `bun run web` | Run in web browser |
| `bun run test` | Run Vitest tests |
| `bun run test:ui` | Run tests with UI |
| `bun run check` | Run Biome linting & formatting |
| `bun run fix` | Auto-fix linting issues |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run generate:assets` | Auto-generate type-safe asset imports |
| `bun run analyze-bundle` | Analyze Android bundle size with Expo Atlas |

## 📊 Bundle Analysis

Monitor your app's bundle size to keep it optimized:

```bash
bun run analyze-bundle  # Export and analyze Android bundle
npx expo-atlas          # View interactive bundle visualization
```

Expo Atlas provides detailed insights into which libraries and modules contribute most to your bundle size, helping you identify optimization opportunities.

## 🎨 Theme Showcase

This template ships with **10 professionally designed themes** using modern OKLCH color space:

- **Classic**: Clean light and dark themes
- **Ocean**: Cool blue tones with light/dark variants
- **Forest**: Earthy green palettes
- **Sunset**: Warm orange and pink hues
- **Lavender**: Soft purple color schemes

Each theme includes carefully crafted color tokens for backgrounds, foregrounds, accents, and UI components. Switch themes instantly with haptic feedback!

## 🚀 Deployment

Pre-configured for production deployment:

- **Vercel**: Automatic API routes and serverless functions
- **EAS Build**: Optimized native builds for iOS/Android
- **Environment Variables**: Configured for different deployment targets
- **Build Scripts**: Automated asset generation and optimization

Update `EXPO_PUBLIC_TRPC_SERVER` for your production API endpoint.

---

**Built with ❤️ by [Sohan Emon](https://sohanscript.web.app)** - Follow on [GitHub](https://github.com/sohanemon) | [LinkedIn](https://linkedin.com/in/sohanemon)


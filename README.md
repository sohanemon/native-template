# Native Template

A comprehensive React Native template built with Expo, featuring full-stack type-safe development with tRPC, modern UI components, and robust tooling.

## 🚀 Features

- **Full-Stack Type Safety**: tRPC for end-to-end type-safe API communication between client and server
- **Modern Navigation**: Expo Router with drawer and tab navigation patterns
- **UI Components**: HeroUI Native component library with customizable themes
- **Styling**: Tailwind CSS for consistent, responsive design across platforms
- **Theme Support**: Built-in dark/light mode toggle with context-based theming
- **Data Fetching**: React Query for efficient server state management and caching
- **TypeScript**: Full TypeScript support for enhanced developer experience
- **Testing**: Vitest for fast, reliable unit testing with jsdom environment
- **Linting & Formatting**: Biome for lightning-fast code checking and formatting
- **Git Hooks**: Husky pre-commit hooks for code quality enforcement
- **Multi-Platform**: Runs on iOS, Android, and Web with Expo

## 🛠 Tech Stack

- **Framework**: React Native 0.81.5 with Expo 54
- **Navigation**: Expo Router
- **API**: tRPC 11 with React Query
- **UI**: HeroUI Native
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Testing**: Vitest
- **Linting**: Biome
- **Package Manager**: Bun

## 📱 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd native-template
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```

## 📜 Available Scripts

- `bun run dev` - Start Expo development server
- `bun run start` - Start Expo in production mode
- `bun run android` - Run on Android emulator
- `bun run ios` - Run on iOS simulator
- `bun run web` - Run in web browser
- `bun run test` - Run Vitest tests
- `bun run check` - Run Biome linting and formatting

## 🏗 Project Structure

```
├── api/              # API routes
├── app/              # App screens and layouts (Expo Router)
├── components/       # Reusable UI components
├── lib/              # Utilities, contexts, and configurations
├── server/           # tRPC server setup and routers
├── styles/           # Global styles and theme files
├── tests/            # Test files and setup
└── types/            # TypeScript type definitions
```

## 🎯 Key Components

- **Navigation**: Drawer and tab-based navigation with Expo Router
- **API Layer**: tRPC client/server with automatic type generation
- **Theming**: Context-based theme provider with dark/light modes
- **Forms**: Zod validation with tRPC input/output schemas
- **Testing**: Comprehensive test setup with mocks for browser APIs

## 🚀 Deployment

This template is configured for deployment on Vercel with automatic API routes and serverless functions. Update the `EXPO_PUBLIC_TRPC_SERVER` environment variable for production API endpoints.

## 📄 License

MIT License - feel free to use this template for your projects!</content>
<parameter name="filePath">/home/oneman/Code/native-template/README.md
# Build & Run

Tauri 2 + React/TypeScript desktop app (scaffolded by AutoTauri).

## Prerequisites

- Node.js (LTS) - node and npm on PATH
- Rust - rustc and cargo on PATH
- Windows: [Tauri prerequisites](https://tauri.app/start/prerequisites/) including:
  - **WebView2** (usually preinstalled on Windows 11)
  - **Visual Studio Build Tools 2022** with the **Desktop development with C++** workload (provides `link.exe`)

Install Build Tools (winget):

```powershell
winget install -e --id Microsoft.VisualStudio.2022.BuildTools --override "--wait --passive --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
```

Restart your terminal after installing, then verify: `where link`

## Troubleshooting

### `link.exe` not found

Rust on Windows needs the MSVC linker. Install Build Tools (see above), open a **new** terminal, then run `npm run tauri dev` again.

### `cannot read properties of undefined (reading 'invoke')`

You are not inside the Tauri desktop window. Common causes:

- Ran `npm run dev` and opened http://localhost:1420 in Chrome/Edge
- Rust failed to compile, so `tauri dev` never launched the app window

**Fix:** Install Build Tools, then run only:

```powershell
npm run tauri dev
```

Use the **desktop window** that opens, not a browser tab.

## First time

    npm install

## One-liners

| Action | Command |
|--------|---------|
| Dev (hot reload + app window) | npm run tauri dev |
| Release build | npm run tauri build |
| Install + dev | npm install && npm run tauri dev |

## Project layout

| Path | Purpose |
|------|---------|
| src/ | Frontend (React) |
| src/app/ | App shell - src/app/README.md |
| src/components/ | Shared UI - src/components/README.md |
| src/features/ | Feature modules - src/features/example/README.md |
| src/hooks/ | React hooks - src/hooks/README.md |
| src/lib/ | Tauri invoke wrappers - src/lib/README.md |
| src/stores/ | Global state - src/stores/README.md |
| src/types/ | TS types - src/types/README.md |
| src/assets/ | Static assets - src/assets/README.md |
| src-tauri/src/commands/ | Rust commands - src-tauri/src/commands/README.md |
| src-tauri/src/models/ | Data models - src-tauri/src/models/README.md |
| src-tauri/src/services/ | Business logic - src-tauri/src/services/README.md |
| src-tauri/src/state/ | Managed state - src-tauri/src/state/README.md |

## Example flow (wired)

1. UI: src/features/example/ExampleFeature.tsx
2. Hook: src/hooks/useExample.ts
3. Invoke: src/lib/tauri.ts -> greet_example
4. Rust: src-tauri/src/commands/example.rs

## Re-run AutoTauri

    .\AutoTauri\setup.ps1 -Root ".\Testing" -Force
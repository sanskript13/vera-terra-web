# QA Checklist — Next.js Dev Verification

## Confirm Execution Mode

- Must be `next dev` (or `pnpm dev` that runs `next dev`).
- Terminal should show a dev server start line (e.g., Local: <http://localhost:3000>).

## Check Console Output

- No red stack traces on boot.
- On first page load you should see compile logs (Compiling/Compiled).

## Verify Page Load

- Open in Incognito to bypass browser cache.
- DevTools Console should not show hydration errors.

## Test HMR (Hot Reload)

- Make a visible text change in `apps/web/app/page.tsx`.
- Save the file.
- Terminal shows Compiling/Compiled.
- Browser updates automatically without refresh.

## Common Failure Modes & Fixes

### 1) Port conflict (EADDRINUSE)

- `lsof -ti:3000 | xargs kill -9`
- or `pnpm dev -- -p 3001`

### 2) Stale build cache

- Stop server
- `rm -rf .next`
- `pnpm dev`

### 3) Running production build by mistake

- Ensure `pnpm dev`, not `pnpm start` / `next start`.

### 4) Wrong working directory

- Ensure you run from `apps/web` where the app’s package.json exists.

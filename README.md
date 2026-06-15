# STORYBOOK FOR TOUJOU THEMES
Stories, components, styles, assets and documentation for the Toujou themes.

## Getting started
1. `npm use` and `npm install` (or `npm ci`)
2. Open Storybook with `npm run sb`


## Theme architecture
We Support multiple themes (e.g., 'kojo', 'toujou') built from a shared codebase.
Currently only Kojo has been implemented, Toujou ist just a proof of concept for now

Each theme can provide / override:
- CSS
- JS
- Tests
- Assets
- build files


### Simplified file structure
```text
assets/
└── themes/
    ├── kojo/
    ├── toujou/
src/
└── shared/
    ├── components/    # shared UI components (theme-agnostic)
    ├── utils/         # shared JS utils, like the video-autoplay, ... (theme-agnostic)
├── stories/           # shared Storybook stories (markup only)
└── themes/
    ├── kojo/          # Kojo-specific implementation
    │   ├── js/
    │   ├── styles/
    │   └── tests/
    ├── toujou/        # Other themes
```

### How theming works
Each theme is activated via an environment variable: `VITE_THEME=kojo`
This affects:
- Vite builds (`npm run build:kojo`)
- Storybook builds ('npm run build:sb:kojo')
- Theme-specific CSS/JS bundling
- Cypress test selection

## Scripts

### 🦄 Development

| Script                | Description                               |
|-----------------------|-------------------------------------------|
| `npm run dev`         | Run the app in dev mode with HMR          |
| `npm run sb`          | Start Storybook on port 6006 (kojo theme) |
| `npm run sb:kojo`     | Start Storybook with kojo theme           |
| `npm run sb:toujou`   | Start Storybook with toujou theme         |
| `npm run clean:cache` | Clear Storybook and Vite caches           |

### 🧱 Build

| Script                    | Description                         |
|---------------------------|-------------------------------------|
| `npm run build:kojo`      | Build JS + CSS for the kojo theme   |
| `npm run build:toujou`    | Build JS + CSS for the toujou theme |
| `npm run build:all`       | Build all themes sequentially       |
| `npm run build:sb`        | Build Storybook static output       |
| `npm run build:sb:kojo`   | Build Storybook for kojo theme      |
| `npm run build:sb:toujou` | Build Storybook for toujou theme    |
| `npm run build:sb:all`    | Build Storybook for all themes      |

### 🚀 Deploy

| Script                | Description                                |
|-----------------------|--------------------------------------------|
| `npm run deploy:sb`   | Deploy `storybook-static/` to GitHub Pages |
| `npm run deploy:full` | Build all themes + Storybook, then deploy  |

### 🧪 Testing

| Script                    | Description                         |
|---------------------------|-------------------------------------|
| `npm run test:unit`       | Run unit tests with Web Test Runner |
| `npm run test:e2e:kojo`   | Open Cypress for kojo theme         |
| `npm run test:e2e:toujou` | Open Cypress for toujou theme       |
| `npm run test:e2e:all`    | Run Cypress for all themes          |
| `npm run test:all`        | Run unit + e2e tests for all themes |

### 🧹 Linting

| Script             | Description                             |
|--------------------|-----------------------------------------|
| `npm run lint:css` | Lint all theme CSS files with Stylelint |


## Troubleshooting
1. **`node: --openssl-legacy-provider is not allowed in NODE_OPTIONS`**
   Run `nvm use && npm install` before retrying.

2. **Storybook showing stale output after refactor**
   Clear the cache: `npm run clean:cache`


## Github page
We can deploy storybook to a [github page](https://toujou.github.io/toujou-v2-prototypes/).
   `npm run deploy::full` → Build everything and deploy to github pages

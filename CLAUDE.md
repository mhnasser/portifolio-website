# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

No build step, no package manager. Open `Portfolio.html` directly in a browser. All dependencies are loaded from CDN at runtime.

For local development, use any static file server:
```
npx serve .
# or
python -m http.server 8080
```

## Architecture

### No-Build Stack
- React 18 and Babel 7 loaded via unpkg CDN as UMD bundles
- Babel transpiles JSX in-browser at runtime (`type="text/babel"` script tags)
- Zero npm dependencies — no package.json, no node_modules

### File Roles
- **`Portfolio.html`** — Entry point; loads CDN scripts and all `.jsx`/`.js` files in order
- **`app.jsx`** — Root `App` component; owns theme/language state, wires everything together
- **`sidebar.jsx`** — VS Code-style explorer sidebar with intersection-observer-based active section tracking
- **`sections.jsx`** — All 8 page sections: Hero, About, Skills, Experience, Projects, Certificates, Reading, Contact
- **`tweaks-panel.jsx`** — Draggable dev-controls panel (bottom-right); exports `useTweaks()` hook and form primitives (`TweakSlider`, `TweakRadio`, `TweakToggle`, `TweakColor`)
- **`i18n.js`** — All user-facing content as `window.I18N = { pt: {...}, en: {...} }`; no i18n library
- **`styles.css`** — 1890-line single stylesheet; CSS custom properties for theming, responsive breakpoints at 1100/960/760/560/480px

### State & Theming
- `useTweaks()` (in `tweaks-panel.jsx`) is the single source of truth for theme (`light`/`dark`) and language (`pt`/`en`)
- Theme applied via CSS custom properties defined on `:root`; two palettes: emerald/gold (light) and teal/gold (dark)
- Language switching re-renders sections using `I18N[lang]` lookups — no routing, pure re-render

### Content
All copywriting, skill lists, certificates, and book entries live in `i18n.js`. To add/edit content, edit that file only — no component changes needed for most text updates.

### Script Load Order (Portfolio.html)
CDN scripts → `styles.css` → `i18n.js` → `tweaks-panel.jsx` → `sidebar.jsx` → `sections.jsx` → `app.jsx`

Components lower in the list can reference globals set by earlier files (e.g., `window.I18N`).

## Available Skills

The following skills are available via the `Skill` tool and can be invoked when relevant:

- **`frontend-design`** — for creating or redesigning UI components with high design quality
- **`superpowers:brainstorming`** — before adding features or changing behavior
- **`superpowers:systematic-debugging`** — when diagnosing unexpected behavior
- **`superpowers:verification-before-completion`** — before claiming a task is done
- **`skill-creator:skill-creator`** — for creating or improving skills

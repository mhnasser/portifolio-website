# Mohamad Hussein Nasser — Portfolio

Personal portfolio website built with React 18 and pure CSS, with no build step.

## Stack

- **React 18** + **Babel 7** — loaded via CDN, JSX transpiled in-browser
- **Vanilla CSS** — single stylesheet with CSS custom properties for theming
- **No npm, no bundler** — open `index.html` and it works

## Running locally

```bash
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:3000` (or `:8080`).

## Project structure

```
index.html          Entry point
app.jsx             Root component — theme & language state
sidebar.jsx         VS Code-style navigation sidebar
sections.jsx        All page sections (Hero, About, Skills, Experience, Projects, Certificates, Reading, Contact)
tweaks-panel.jsx    Dev controls panel (theme / language switcher)
i18n.js             All content in PT and EN
styles.css          Single stylesheet (~1900 lines)
assets/             Static images
certificates/       Certificate PDFs (served for download)
```

## Features

- Light / dark theme
- Portuguese / English language switching
- Animated bookshelf (Reading section)
- Certificate gallery with download buttons
- Fully responsive

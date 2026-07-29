# PJ's Lense portfolio

The portfolio of Joseph Limo, a Nairobi-based communications and multimedia
specialist. The site presents selected photography, graphic design,
documentary film and visual storytelling work.

## Local development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

Production-ready public assets live in `static/`. The original high-resolution
source files remain in `public/`, but Vite is configured not to include that
source directory in production builds.

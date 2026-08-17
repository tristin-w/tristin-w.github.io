# Portfolio Site

A dark, signal/circuit-themed personal site built with plain HTML, CSS, and JavaScript — no build step, no framework. Designed for an Electrical Engineering student's portfolio (projects, experience, résumé, contact) and deployable straight to GitHub Pages.

## Structure

```
portfolio-site/
├── index.html          # all page content lives here
├── css/
│   └── style.css       # design system + layout
├── js/
│   └── script.js       # nav toggle, animations, contact form
└── assets/
    ├── resume.pdf       # <-- add your résumé PDF here
    └── images/          # project screenshots, headshot, etc.
```

## 1. Open it in VS Code

```bash
cd portfolio-site
code .
```

Install the **Live Server** extension (Ritwick Dey) if you don't have it, then right-click `index.html` → **Open with Live Server** to preview with auto-reload as you edit.

## 2. Customize the content

Everything you'll want to change lives in `index.html`. Search for these and replace them:

| Find | Where |
|---|---|
| `YOUR_NAME` / "Your Name" | nav brand, hero, footer |
| `your.email@nmsu.edu` | contact section + `js/script.js` mailto address |
| `github.com/yourusername`, `linkedin.com/in/...` | contact section |
| "Project Name One/Two/Three/Four" | `#projects` — swap in your real projects |
| Timeline entries | `#experience` — swap in real roles/orgs/dates |
| `assets/resume.pdf` | drop your actual résumé PDF in `assets/` with that exact filename, or update the `href`/`src` if you name it differently |

The **stack** section (`#stack`) has chips grouped by category — add/remove `<span class="chip">` items to match your actual toolset.

## 3. Add your résumé PDF

Place your résumé at `assets/resume.pdf`. It's referenced twice in `index.html` (hero download button and the `#resume` section's embedded preview) — same file, so you only need to add it once.

## 4. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Then in your GitHub repo: **Settings → Pages → Source → Deploy from branch → main / (root)**.

- If your repo is named `yourusername.github.io`, the site goes live at `https://yourusername.github.io/` automatically.
- If it's named something else (e.g. `portfolio`), it'll be at `https://yourusername.github.io/portfolio/` — same steps, just a different URL.

GitHub Pages usually takes 1–2 minutes to build after you enable it or push a change.

## Design notes

- **Palette:** near-black graphite background, amber accent (`--accent`, evokes a circuit trace/solder joint), cyan accent (`--signal`, used for data/ML-flavored elements).
- **Type:** Space Grotesk for headings, Inter for body text, IBM Plex Mono for labels/data — all loaded from Google Fonts in `index.html`.
- **Signature element:** the vertical "trace rail" running down the left margin (desktop only) with a pulse that tracks scroll position, plus the animated oscilloscope waveform in the hero — both nod to signal/circuit work without leaning on a literal circuit-board cliché.
- All tokens (colors, fonts, spacing) are CSS custom properties at the top of `css/style.css` — change them there to retheme the whole site at once.
- Respects `prefers-reduced-motion` throughout.

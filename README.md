# Portfolio Site

A clean, professional personal site built with plain HTML, CSS, and JavaScript — no build step, no framework. Populated with your real experience, projects, leadership, education, and skills, and deployable straight to GitHub Pages.

## Structure

```
portfolio-site/
├── index.html          # all page content lives here
├── css/
│   └── style.css       # design system + layout
├── js/
│   └── script.js        # nav toggle, scroll reveal, contact form
└── assets/
    ├── resume.pdf       # <-- add your résumé PDF here
    └── images/          # headshot, project screenshots, etc.
```

## 1. Open it in VS Code

```bash
cd portfolio-site
code .
```

Install the **Live Server** extension (Ritwick Dey), then right-click `index.html` → **Open with Live Server** to preview with auto-reload as you edit.

## 2. What to fill in

Search `index.html` for these placeholders:

| Find | Where |
|---|---|
| "Your Name" | nav brand, hero, footer |
| `your.email@nmsu.edu` | contact section + `js/script.js` mailto address |
| `github.com/yourusername`, `linkedin.com/in/...` | contact section |
| `assets/resume.pdf` | drop your actual résumé PDF here with that exact filename |

Everything else — education, both work experiences, both projects, leadership roles, skills, awards, and your current programs (SCALE, NM AMP, UR2PhD) — is already filled in from your résumé. Double check dates, bullet wording, and the GPA figures before publishing, and update if anything changes next semester.

## 3. Add your résumé PDF

Place it at `assets/resume.pdf`. It's referenced twice (hero download button and the `#resume` section's embedded preview) — same file, add it once.

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

- Repo named `yourusername.github.io` → live at `https://yourusername.github.io/`.
- Any other repo name → live at `https://yourusername.github.io/reponame/`.

Takes 1–2 minutes to build after enabling Pages or pushing a change.

## Design notes

- **Palette:** white/near-white background, a confident primary blue for CTAs and links, teal as a secondary accent (role titles, orgs), amber used only for award chips.
- **Type:** Space Grotesk for headings, Inter for body text, JetBrains Mono for small technical labels (dates, tags) — loaded from Google Fonts in `index.html`.
- **Structure:** sections mirror your résumé (About/Education, Experience, Projects, Leadership, Skills & Programs, Résumé, Contact) so a recruiter can scan it the same way they'd scan a resume, with slightly more room to show context per bullet.
- All tokens (colors, fonts, spacing) are CSS custom properties at the top of `css/style.css`.
- Respects `prefers-reduced-motion`.

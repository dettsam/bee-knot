# Bee Knot Apparel

A simple static website for **Bee Knot Apparel**, a fictional small local Catholic apparel
shop specializing in clothing for babies and kids. Built as a sandbox project for testing
Claude Code and a GitHub workflow — plain HTML/CSS/JS, no build step required.

## Pages

- `index.html` — Home page with a hero, this week's deals (6 sample products), and a values section
- `about.html` — Our story, a short timeline, and workshop photos
- `contact.html` — Contact info cards and a demo contact form (front-end only, no backend yet)
- `faq.html` — Grouped FAQ with an accordion (sizing, shipping, custom orders, care)

## Structure

```
beeknot/
├── index.html
├── about.html
├── contact.html
├── faq.html
├── assets/
│   ├── style.css
│   └── main.js
└── README.md
```

## Running locally

No build tools needed — it's plain HTML/CSS/JS. Easiest way to preview:

```bash
cd beeknot
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or just double-click `index.html` to open it directly in a browser (note: the mobile
nav toggle and FAQ accordion still work fine opened this way, since there's no
server-side logic).

## Notes on content

- Product names and descriptions are placeholder (lorem ipsum) — swap in real copy,
  pricing, and photography before this goes anywhere near production.
- The About page images are hotlinked from Pexels for now. For a real site, download
  the images you like, add proper attribution/licensing, and serve them from `assets/images/`.
- The contact form doesn't submit anywhere yet — see next steps below for a couple of
  easy ways to make it live.

---

## Next steps: getting this into a GitHub repo

1. **Create the repo on GitHub**
   - Go to github.com → New repository (e.g. `bee-knot-apparel`)
   - Leave it empty (no README/license/gitignore) since you already have files locally

2. **Initialize git locally and make your first commit**
   ```bash
   cd beeknot
   git init
   git add .
   git commit -m "Initial commit: Bee Knot Apparel site"
   ```

3. **Connect and push to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/bee-knot-apparel.git
   git push -u origin main
   ```

4. **(Optional) Turn on GitHub Pages to host it for free**
   - Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)`
   - Your site will be live at `https://<your-username>.github.io/bee-knot-apparel/` in a minute or two

5. **Try Claude Code against the repo**
   - Clone it wherever you'll run Claude Code, then try prompts like:
     - "Add a products page that lists all the deals with filtering by size"
     - "Make the contact form actually send an email using Formspree"
     - "Add a simple blog section for parish news"
     - "Write a GitHub Action that checks HTML validity on every push"
   - This repo is intentionally small and self-contained, so it's a good low-stakes
     place to test Claude Code's edit/commit/PR workflow before pointing it at
     something bigger.

6. **Good habits once you're iterating**
   - Create a branch per feature (`git checkout -b add-products-page`) rather than
     committing straight to `main`
   - Open a PR even if you're the only one reviewing it — good practice for letting
     Claude Code (or a human) describe *what* changed and *why*
   - Add a `.gitignore` if you introduce any build tooling later (e.g. `node_modules/`)

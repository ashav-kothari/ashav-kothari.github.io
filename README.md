# Ashav Kothari — Developer Portfolio

A fast, static portfolio site built with plain HTML, CSS and JavaScript. No framework, no build step, no backend. It runs on GitHub Pages for free.

```
my-portfolio/
├── index.html        Page structure and written content (About, Experience, Skills, Contact)
├── css/style.css     All styling, light/dark themes, responsive layout
├── js/projects.js    ← Your project list (edit this to add projects)
├── js/main.js        ← Your GitHub / LinkedIn / email links (top of file), plus site behaviour
├── assets/
│   ├── images/       Project screenshots
│   ├── icons/        Optional extra icons
│   └── resume.pdf    ← Your resume (replace this file to update it)
├── favicon.svg       Browser tab icon
└── README.md
```

---

## Before you publish: fill in these details

| What | Where | Status |
|---|---|---|
| LinkedIn URL | `js/main.js` → `PROFILE.linkedin` | **Empty — link is hidden until you add it** |
| GitHub URL | `js/main.js` → `PROFILE.github` | **Empty — link is hidden until you add it** |
| Resume PDF | `assets/resume.pdf` | Current resume included. Replace with your revised version. |
| Tech stack for Patches and Focus & Catch | `js/projects.js` | Empty, marked `TODO` |
| Light / dark | Dark is the default; visitors can switch with the sun icon | — |
| Live site address | `index.html` → `og:url` meta tag | Empty — add after deploying |

Empty links never show as broken buttons; they are simply hidden.

Your phone number is intentionally **not** on the site, because a public page gets scraped by spam bots. Email and LinkedIn are enough for recruiters.

---

## Preview it on your computer

Double-click `index.html` to open it in your browser. Everything works this way.

---

## Deploy to GitHub Pages (free)

### 1. Create a repository
1. Sign in at <https://github.com> and click **New repository**.
2. Choose a name:
   - **`<your-username>.github.io`** (recommended) → your site will be at `https://<your-username>.github.io/`
   - Any other name, e.g. **`portfolio`** → your site will be at `https://<your-username>.github.io/portfolio/`
3. Set it to **Public** (free GitHub Pages needs a public repo), and click **Create repository**.

### 2. Upload the files
**Easiest (browser):** On the new repo page, click **uploading an existing file**, then drag in **the contents** of the `my-portfolio` folder (`index.html`, `css`, `js`, `assets`, `favicon.svg`, `README.md`). Do not drag the outer `my-portfolio` folder itself, or `index.html` will end up one level too deep. Click **Commit changes**.

**Or with Git:**
```bash
cd my-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. Turn on GitHub Pages
1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.

### 4. Open your site
Wait 1–2 minutes, then refresh the Pages settings screen. It shows **"Your site is live at …"** with the link. Open it and check that styles, projects and the resume link all work.

### 5. Updating later
Edit files on GitHub (pencil icon) or push with Git. GitHub Pages republishes automatically within a minute or two.

---

## Adding or editing a project

Open `js/projects.js`. Each project is one `{ … }` block in the `projects` list.

Every project becomes a card in the grid: 4 per row on laptops and desktops, 3 on small laptops, 2 on tablets, 1 on phones.

```js
{
  title: "Weather Now",
  description: "Offline-first weather app built with Jetpack Compose.",
  category: "Indie app",
  organization: "Personal project",
  role: "Design, development and publishing",
  technologies: ["Kotlin", "Jetpack Compose", "Room"],
  link: "https://play.google.com/store/apps/details?id=com.example.weather",
  linkLabel: "Google Play"
},
```

Tips:
- **Clickable cards:** when a project has a `link`, the whole card opens it. Leave `link: ""` for no link.
- **Order** on the page follows the order in the file.
- **Screenshots (optional):** add `image: "assets/images/name.png"` (16:9, under 200 KB). A missing image is simply hidden.
- **Removing a project:** delete its `{ … },` block. Watch the commas between blocks.

## Updating the resume

Replace `assets/resume.pdf` with your new PDF, keeping the same file name. Every resume button on the site points to that path. (The "Download resume" link in the Contact section saves it as `Ashav_Kothari_Android_Developer_Resume.pdf`.)

## Updating profile links, skills and text

- **GitHub / LinkedIn / email:** edit `PROFILE` at the top of `js/main.js`. Each link on the page (hero, contact, footer) updates from there.
- **About, Experience, Skills, Contact text:** edit `index.html` directly; each section is clearly marked with a comment like `<!-- ============ SKILLS ============ -->`.
- **Colors:** change the variables at the top of `css/style.css` (dark theme first, light theme below it). `--accent` is the single highlight color.

---

## Troubleshooting

| Problem | Likely cause and fix |
|---|---|
| Page shows plain unstyled text | `css/` folder is missing or nested. Check that `index.html`, `css/`, `js/` and `assets/` sit at the **top level** of the repo. |
| 404 on the site URL | Pages isn't enabled, or `index.html` isn't in the root. Re-check **Settings → Pages** and the file layout. Also wait a couple of minutes after enabling. |
| Projects section is empty | A syntax error in `js/projects.js` (usually a missing comma or quote). Open the browser dev tools (F12 → Console) to see the line number. |
| Resume link gives 404 | The file must be exactly `assets/resume.pdf` (lowercase, no spaces). |
| Images don't show | Paths are case-sensitive on GitHub Pages: `MyApp.PNG` ≠ `myapp.png`. Paths must be relative (no leading `/`). |
| Changes not appearing | Wait 1–2 minutes, then hard-refresh (Ctrl/Cmd + Shift + R). |

All paths in this site are relative (`css/style.css`, not `/css/style.css`), so it works both at `username.github.io/` and at `username.github.io/repo-name/`.

## Custom domain (optional, later)

Buy a domain, then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions. No code changes are needed.

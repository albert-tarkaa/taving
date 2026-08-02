# tarkaa.ng

Personal site of Albert Tarkaa — portfolio, writing, and musings.
Live at **[www.tarkaa.ng](https://www.tarkaa.ng)**.

- **Framework**: [Jekyll](https://jekyllrb.com/)
- **CMS**: this repository — content is markdown, committed to `main`
- **Deployment**: [GitHub Pages](https://pages.github.com/) (native build, no CI)
- **Styling**: Custom CSS

There is no CMS account and no build server to babysit. Commit to `main` — from
your machine or straight from the GitHub web editor — and the site rebuilds.

## Layout

```
index.html          the one-page homepage (surface / signal / build / words / bedrock)
blog.html           /blog/     — index of long-form posts
musings.html        /musings/  — index of short pieces
_posts/             blog posts, one markdown file each
_musings/           musings, one markdown file each
_data/projects.yml    the "Selected work" list on the homepage
_data/experience.yml  the "Record" (work history) list on the homepage
_layouts/           page shells
_includes/          shared footer
assets/css/main.css all styling
CNAME               custom domain for GitHub Pages
legacy/             the previous Next.js + DatoCMS site, kept for reference only
```

## Adding content

### A blog post

Create `_posts/YYYY-MM-DD-some-slug.md`:

```markdown
---
title: What cathedrals know about codebases
description: One line shown on the /blog index. Optional.
date: 2026-08-02
---

Body goes here, in markdown.
```

The filename slug sets the URL: `/blog/some-slug/`.

### A musing

Create `_musings/YYYY-MM-DD-HHMM-some-slug.md`:

```markdown
---
title: I live amongst the stars and draw breath each time a star dies
date: 2026-08-02 21:35:00
slug: i-live-amongst-the-stars
---

I live amongst the stars and draw breath each time a star dies
```

The `title` is what shows on the `/musings/` index and in the "Words" section
of the homepage; the body is what shows on the musing's own page. For a
one-line musing they're the same text — that's fine and expected.

The `slug` sets the URL (`/musings/i-live-amongst-the-stars/`), which is why
the filename can keep its date prefix without it leaking into the link. The
date prefix is only there so the folder sorts chronologically.

The three most recent musings appear in the homepage "Words" section
automatically. Two on the same minute? Vary the seconds in `date:` so the
ordering is deterministic.

### A project

Add an entry to `_data/projects.yml`. Order in the file is order on the page,
and the `01`, `02`, … numbering is generated:

```yaml
- name: Qedly
  url: https://getqedly.com
  description: >-
    What it is, in a sentence or two.
  tags: [".NET 9", "PostgreSQL"]
```

### A job

Add an entry to `_data/experience.yml`, most recent first — it renders the
"Record" section:

```yaml
- role: Software Engineer, Tenece Professional Services
  when: 2020, 2023
  detail: >-
    What you did there, in a sentence or two.
```

### Everything else

The homepage prose (the hero lede, the "Signal" paragraphs, the "Currently"
line) is plain HTML in `index.html`. Name, email, and social links live in
`_config.yml` and are used across every page.

## Running locally

Optional — you can edit and commit without ever running this.

```bash
git clone https://github.com/albert-tarkaa/taving.git
cd taving
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The server rebuilds on save.

## Deployment

GitHub Pages builds the site natively from `main` — there is no Actions
workflow to maintain. In **Settings → Pages**, the source is `main` / `/ (root)`
and the custom domain is `www.tarkaa.ng`, which is what `CNAME` pins.

The plugins in `_config.yml` (`jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`)
are all on the GitHub Pages allowlist. Adding a plugin that isn't on that list
would mean switching to a GitHub Actions build, so prefer ones that are.

## Note on the legacy site

The previous version was a Next.js app pulling blog and musings content from
DatoCMS, deployed on Netlify. It lives in `legacy/` for reference and is
excluded from the Jekyll build.

All 11 musings were recovered by scraping the live pages after CMS access was
lost, and now live in `_musings/`. Each keeps its `source_id` and `source_url`
front matter, pointing at the old numeric URL it came from. See
[MUSINGS-RECOVERY.md](MUSINGS-RECOVERY.md) for what that recovery did and did
not capture. Blog posts that only ever existed in DatoCMS were **not**
recovered.

## Cloning / Forking

Please review the [license](https://github.com/albert-tarkaa/taving/blob/main/License.txt)
and remove all of my personal information (resume, blog posts, images, etc.)

Readme and License inspired by [Lee Robinson](https://leerob.io/)

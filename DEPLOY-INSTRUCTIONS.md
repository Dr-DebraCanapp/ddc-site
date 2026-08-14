# Deploy — marketing site (ddc-site)

Everything in this folder goes into **`Dr-DebraCanapp/ddc-site`**, at the top level of the repository.
GitHub Pages serves it at **drdebracanapp.com**.

---

## Upload

1. Open **github.com/Dr-DebraCanapp/ddc-site**
2. **Add file → Upload files**
3. Drag in **the contents of this folder** — the files themselves, not the enclosing folder.
   `index.html` must land at the top level, not inside a subfolder.
   The `assets/` and `i18n/` folders come along with it.
4. Commit.
5. Wait one to two minutes, then hard-refresh (**Cmd-Shift-R**). Seeing the old version straight
   after a commit is the cache, not a failed deploy.

Uploading replaces files of the same name and leaves everything else alone.

⚠️ **Keep the `CNAME` file.** It holds `drdebracanapp.com` and is what ties the domain to this
repository. Delete it and the custom domain stops working until it is restored.

---

## What's in this deploy

Three separate pieces of work, all waiting on this one push.

### 1. The favicon — the tab icon

A linear ultrasound probe, replacing the browser's grey "D". On all 12 pages.

New files in `assets/`: `favicon.svg`, `favicon-32.png` (older Safari),
`apple-touch-icon.png` (iOS home screen).

The mark carries its own dark ground rather than sitting transparent, so it holds up on light and
dark browser tabs alike.

### 2. `verify.html` — certificate verification ⚠️ deploy this before issuing any certificate

Every course certificate prints a verification URL. **A printed URL that 404s is worse than no URL**,
so this page must be live before the first certificate goes out.

It works standalone today: a visitor types a code and gets an answer. It will read real certificates
once the course database is running.

### 3. `privacy.html` and `terms.html` — required by Twilio

Already deployed once and unchanged in substance. Included because the favicon touched them.

Also here: `extensions.html`, which fixed the 404 on the two course extension buttons.

---

## After deploying — 30 seconds

Open these and confirm the probe icon appears in the tab:

```
drdebracanapp.com
drdebracanapp.com/verify.html
drdebracanapp.com/terms.html
```

If a page loads but the tab still shows the old icon, hard-refresh. Favicons are cached
aggressively — sometimes closing and reopening the tab is what does it.

---

## Not included

The **portal** is a different repository (`ddc-portal`, from the `deploy/` folder) and still has no
favicon. Adding the same one there is a separate, small job.

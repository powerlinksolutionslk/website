# Powerlink Solutions

A responsive, single-page Next.js website for Powerlink Solutions.

## Development

```sh
npm install
npm run dev
```

## Static hosting

```sh
npm run build
```

Deploy the contents of `out/` to any static web host. No application server or environment variables are needed.

## GitHub Pages

1. Push this project, including `.github/workflows/deploy-pages.yml`, to `main`.
2. In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages** and select **Run workflow** if the initial push ran before Pages was enabled.

Every subsequent push to `main` builds and deploys the site automatically. The default address is https://powerlinksolutionslk.github.io/website/.

The workflow reads the Pages base path so scripts, styles, and images work under `/website` and on a custom domain. Local development continues to use `/`. To check the repository-path build locally:

```sh
NEXT_PUBLIC_BASE_PATH=/website npm run build
```

## Content and branding

- Update the verified Facebook page URL and WhatsApp number in `src/lib/site.ts`. Use a full Facebook URL and an international WhatsApp number with country code. Until configured, contact links lead to the contact section and display a coming-soon note.
- Product content lives in `src/app/page.tsx`.
- Product visuals are illustrative SVGs, not photos of a specific model.
- `public/powerlink-logo.png` is the original supplied brand artwork, used in the header and footer.
- `src/app/icon.svg` is the matching P/lightning favicon.

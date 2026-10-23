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

## Content and branding

- Update the verified Facebook page URL and WhatsApp number in `src/lib/site.ts`. Use a full Facebook URL and an international WhatsApp number with country code. Until configured, contact links lead to the contact section and display a coming-soon note.
- Product content lives in `src/app/page.tsx`.
- Product visuals are illustrative SVGs, not photos of a specific model.
- `public/powerlink-logo.png` is the original supplied brand artwork, used in the header and footer.
- `src/app/icon.svg` is the matching P/lightning favicon.

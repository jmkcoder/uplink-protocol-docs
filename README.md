This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sitemap Generation

This project includes automated sitemap generation as part of the build process. The sitemap is generated using the following scripts:

1. `npm run generate-sitemaps` - Generates a basic sitemap based on the project's routes
2. `npm run fix-sitemap` - Fixes the sitemap by:
   - Adding trailing slashes to all URLs (required for Google Search Console consistency)
   - Removing source file paths (.tsx files) that shouldn't be in the sitemap
   - Ensuring the base domain and uplink-protocol-docs URLs are properly formatted

These scripts run automatically during the build process via the `prebuild` script. You can also run them manually if needed:

```bash
npm run generate-sitemaps
npm run fix-sitemap
```

The sitemap can be found at `public/sitemap.xml` after generation.

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

1. In [vercel.com](https://vercel.com): **Add New** → **Project** → import your Git provider and select this repo. Leave root directory as `.` and keep the auto-detected Next.js preset.
2. Before deploying, add **environment variables** in **Project → Settings → Environment Variables**. Required variables are listed in [.env.local.example](.env.local.example):
   - `EMAILJS_PUBLIC_KEY`, `EMAILJS_PRIVATE_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_AUTOREPLY`, `EMAILJS_TEMPLATE_NOTIFY`, `CONTACT_TO`
   - Enable them for **Production** (and **Preview** if you want the contact form on preview deployments).
3. In [EmailJS Security](https://dashboard.emailjs.com/admin/account), enable **Allow non-browser (API) requests** so the contact API works on Vercel.
4. Deploy. Pushes to the default branch trigger production deploys; other branches get preview URLs.

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

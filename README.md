# Hamna Arshad — Portfolio

Personal site for software engineering, full-stack, and AI/ML internship applications.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check the production build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Deploy on Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel. Framework preset: Next.js. Root directory: this folder.
3. Set `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://your-domain.vercel.app`.
4. Deploy. The resume PDFs are static files in `public/resumes`.

If `NEXT_PUBLIC_SITE_URL` is unset, Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` is used when it is present. Locally, metadata falls back to `http://localhost:3000`.

## Edit content

- Featured projects: `src/data/projects.ts`
- About, skills, additional projects, resumes: `src/data/profile.ts`
- Name, links, navigation: `src/data/site.ts`

Screenshots, repository URLs, demo URLs, and engineering challenges are left empty until real ones are supplied. The project file comments explain how to fill them in.

## Resumes

| Button | Public file | Source PDF |
| --- | --- | --- |
| Software / Full-Stack Resume | `public/resumes/hamna-arshad-fullstack.pdf` | `HAMNA_ARSHAD_FuLLStack.pdf` |
| AI / ML Resume | `public/resumes/hamna-arshad-ai-ml.pdf` | `HAMNA_ARSHAD_AI_ML.pdf` |

# Happyland Schools website concept

A frontend-only Next.js redesign with a responsive homepage, campus profiles, programme information and admissions links.

## Run locally

Use Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open [the local preview](http://localhost:3000).

## Share the sample

```sh
npm run build
```

Upload the generated `out/` folder to a static web host to share a link. The site includes four campus pages under `/campuses/`. Serve the export over HTTP so navigation and assets resolve correctly.

For the GitHub Pages preview, set `NEXT_PUBLIC_BASE_PATH=/happy-lands-schools` when building and publish the contents of `out/` with a `.nojekyll` file at the root of the `gh-pages` branch.

Admissions links open the visitor’s email or phone app. The crest, campus information and school photographs come from [Happyland Schools](https://happylandschools.com/). The homepage hero uses a labelled illustrative image.

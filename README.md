# Next.js Conf 2025 Demo app

This is the demo app showcased in my Next.js Conf 2025 talk: "Type-Safe URL State in Next.js with nuqs".

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qpczQVJMG1Y?si=5fAy0jOxlfVeq7Uy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Slides & useful links (shown at the end): https://nuqs.dev/nextjs-conf-25

## Installation

It requires a Node.js version capable of running TypeScript natively.

Run `fnm use` (or whichever Node.js version manager you use) to switch to the correct version, then install the dependencies with pnpm:

```
pnpm install
pnpm dev
```

It will run the demo app on http://localhost:3000.

## Albums demo

A prerequisite for the albums demo is to download the cover images
to the public folders for each framework (to avoid fetching from the
Spotify CDN at runtime, which requires a network connection).

You can do so by running:

```
cd packages/db
pnpm db:dl-images
```

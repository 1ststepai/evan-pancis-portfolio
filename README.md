# Evan Pancis — portfolio

Plain static HTML, CSS, and vanilla JavaScript. No framework, bundler, application server, or npm dependencies.

**Production:** https://evan-pancis-portfolio.vercel.app/

## Local preview and tests

Serve the repository root with any static HTTP server (ES modules require HTTP). For example, with Python installed:

```sh
python -m http.server 8080
```

Open http://localhost:8080. Run the capacity calculation tests with Node 22+:

```sh
npm test
```

No `npm install` or build step is needed. GitHub Actions runs the tests on pushes and pull requests.

## Structure

- `index.html` — proof → role fit → method → interactive proof → career → contact.
- `styles.css` — responsive consulting-style design, reduced-motion support, visible keyboard focus.
- `js/roi.js` — pure exported `computeRoi({ tasksPerWeek, minutesBefore, minutesAfter, hourlyRate, annualToolCost, implementationCost })`.
- `js/main.js` — live calculator, validation, reset, progressive IntersectionObserver reveals.
- `tests/roi.test.js` — approved formulas, zero/negative net, precision, invalid input, and overflow checks.
- `assets/` — local favicon. Fonts use Google Fonts with system fallbacks.

## Claims and scope

The $15–25M annual spend and ~10% annual savings are Formosa procurement results, not AI savings. Career copy is ported from the previous live portfolio and the owner's approved brief. The calculator is an **illustrative capacity model**, not a cash forecast: capacity is not cash unless spend actually drops. Its defaults are sample assumptions. No analytics, account, chatbot, or visitor-data storage is included.

The three project links are the owner's exact supplied destinations. The diagram above each card is an explanatory illustration, not a product screenshot or performance claim.

## Vercel

Use the **existing** `evan-pancis-portfolio` project on team **1ststep**. Link it to this repository. Framework preset: **Other** (`null`); root: repository root; output: **`.`**; build and install commands: **empty**. `vercel.json` records these static settings. Do not create a duplicate project.

After linking with `vercel link --project evan-pancis-portfolio --scope 1ststep`, connect Git with `vercel git connect https://github.com/1ststepai/evan-pancis-portfolio --scope 1ststep` if needed. Pushes to non-production branches create previews. The production branch remains `main`.

Release sequence: run `npm test`, inspect the preview on desktop and mobile, stage production with `vercel deploy --prod --skip-domain --scope 1ststep`, inspect that deployment, then `vercel promote <staged-url> --scope 1ststep`. Keep `.vercel/` local. Deployment protection may require Vercel sign-in on unique preview URLs.

See `docs/design-and-validation.md` for the approved design mapping and validation scope.

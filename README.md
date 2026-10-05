# Animated Sign-in / Sign-up UI

A login and registration layout with a large rotating background panel. JavaScript changes one CSS class, and CSS handles the transition between the two form views.

**Stack:** HTML5 · CSS3 · JavaScript

## Highlights

- Separate sign-in and signup views.
- Rotating blue background with a 1.5-second transform transition.
- Delayed visibility and opacity changes for the active form.
- Username, email, and password field examples.
- Font Awesome input icons loaded from a CDN.

## Run locally

Clone the repository and open `index.html` in a browser. There is no package installation or build step.

```sh
git clone https://github.com/itzhoman/sign-in-form.git
cd sign-in-form
```

Alternatively, serve the directory with your editor's static-server extension.

## Project structure

| Path | Responsibility |
| --- | --- |
| `index.html` | Form views, fields, and navigation links |
| `style.css` | Background rotation, form visibility, and input styling |
| `script.js` | Adds or removes `.navigate` on the container |

## Customize

- Update labels, fields, and headings in `index.html`.
- Tune the `.form-wrapper-bg` transform and transitions in `style.css`.
- Add actual form submission and validation when connecting a backend.

## Current scope

The form buttons are `type="button"` and do not submit or authenticate. The form wrapper is fixed at 100rem×65rem, so mobile layout, explicit field labels, and keyboard focus styling need attention before reuse in a product.

## Try the interaction

1. Click **Sign up** to rotate the panel and show registration.
2. Click **Sign in** to return to the login view.

## Repository

[Source on GitHub](https://github.com/itzhoman/sign-in-form) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`f4dab64`](https://github.com/itzhoman/sign-in-form/commit/f4dab640d514bd60917e3fb56b6173921f9eeaa7).

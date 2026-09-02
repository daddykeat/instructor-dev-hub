# Instructor Development Reference Hub — Design-System Specimen
'Repository: https://github.com/daddykeat/instructor-dev-hub

'Published specimen: https://daddykeat.github.io/instructor-dev-hub

A responsive, single-page design-system specimen for an instructor-development reference hub serving both instructors building curriculum and trainees completing coursework. This documents foundational tokens and reusable patterns — not a finished marketing site.

## Architecture

Tokens follow a two-tier primitive → semantic pattern across six categories: spacing, color, measure, radius, elevation, and typography. Primitives hold raw scale values; semantic tokens map named roles (e.g. `--color-action`, `--space-card-padding`) to those primitives, so component code never references raw literals directly.

## Theming

A default (light) theme and a scoped dark alternate theme are provided via `[data-theme="dark"]`, remapping seven semantic tokens (surface, surface-raised, text, text-heading, border, action, focus) without duplicating any component rules. A `<button>`-based toggle sets `data-theme` on `<html>` and persists the choice via `localStorage`; a small inline script in `<head>` reads that value before first paint to prevent a flash of the wrong theme.

## Files

- `index.html` — specimen markup, all six required sections
- `css/reset.css` — selective reset with usage notes
- `css/tokens.css` — primitive and semantic design tokens
- `css/themes.css` — dark-theme scoped override
- `css/components.css` — component styles built from tokens
- `js/theme.js` — theme toggle logic
- `test-record.md` — required test conditions and results
- `ai-disclosure.md` — AI assistance disclosure and verification record

## Fonts

Body text uses a system-safe stack for performance and offline reliability. Headings (h1–h3) use Chakra Petch (SIL Open Font License, served via Google Fonts) for a restrained technical character; h4–h6 use the system stack. See in-page attribution for full license note.
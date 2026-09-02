# AI Disclosure and Verification Record

AI assistance was used under the course's AI-Assisted with Disclosure policy. AI (Claude) identified repeated literals, suggested token names, flagged accessibility issues, and compared small alternatives. All architectural decisions, token values, naming, and content were made and verified by the student.

## Meaningful AI Assistance

- Flagged that a stray `+` character had been accidentally committed into `index.html`'s `<head>`, breaking the page; student diagnosed and fixed it.
- Calculated WCAG contrast ratios for candidate color pairs (e.g. `#274a63` on white ≈ 9.3:1) so the student could evaluate options against real numbers rather than estimates.
- Pointed out that a proposed `.media-placeholder` background (`--color-border`) would fail text contrast (~2.6:1); student corrected it to a properly contrasting semantic token.
- Suggested standard technical patterns (e.g. `clamp()` syntax shape, `localStorage` theme-persistence pattern, W3C-recommended `<meta charset>` placement) which the student implemented and adapted.
- Reviewed CSS/HTML syntax after each addition (e.g. caught a `//*` comment using invalid JS-style syntax instead of CSS `/* */`).

## Student-Verified Decisions

All token values (spacing scale, color palette and contrast ratios, radius scale, elevation intensity, type scale, measure widths), naming conventions (`--space-*`, `.layout-list`, `.prose--compact`, etc.), the two-tier primitive/semantic architecture, the dark-theme remapping logic, and all component markup were decided and independently reasoned through by the student, including several corrections to AI-suggested code (contrast failures, missing states, token misuse).

No AI-generated content was used without review. All CSS and HTML in this repository was written or directly approved by the student after understanding its function.
# Code Defense

## Reset Strategy

The reset in `reset.css` is deliberately targeted rather than global. `box-sizing: border-box` is applied universally so that padding and borders never push a component past its declared width — critical for cards, buttons, and form controls built with generous padding. Margins are zeroed only on elements with historically inconsistent browser defaults (headings, paragraphs, figures, blockquotes) rather than on every element, because a blanket `* { margin: 0 }` reset would strip the semantic spacing rhythm from `<ul>`/`<ol>` elements needed for content like the skill checklist. That checklist relies on native list styling being left untouched — a deliberate omission, documented in the reset itself, not an oversight. A `.layout-list` utility class handles the opposite case (nav bars, card grids) where list semantics are wanted but visual list styling is not, keeping both use cases available without one reset rule fighting the other. An `img` rule (`max-width: 100%; height: auto`) prevents oversized images from causing horizontal overflow at the required 320px viewport.

## Token Hierarchy

Every token category (spacing, color, measure, radius, elevation, typography) follows a two-tier primitive-to-semantic pattern. Primitives hold raw scale values (e.g. `--space-16: 16px`, `--blue-800: #274a63`) with no assumptions about where they're used. Semantic tokens map named roles onto those primitives (`--space-card-padding: var(--space-16)`, `--color-action: var(--blue-800)`), and only semantic tokens are referenced in component code — never raw primitives or literal values. This decoupling is what allows the alternate theme to remap seven semantic roles to different primitives without touching a single rule in `components.css`: the *role* stays the same, only which primitive fills it changes.

## Scoped Override Example

The dark theme is implemented as a single `[data-theme="dark"]` block that overrides `--color-surface`, `--color-surface-raised`, `--color-text`, `--color-text-heading`, `--color-border`, `--color-action`, and `--color-focus`. For example, `--color-action` maps to `--blue-800` (a dark, high-contrast blue) in the light theme, but to `--blue-200` (a light blue) in the dark theme — the light-theme logic of "dark color for contrast against a light background" reverses entirely against a dark surface. Every dark-theme color was verified against its actual background before being finalized, not assumed from the light-theme values.

## Evidence-Based Revision

During 320px viewport testing, the navigation list overflowed the page by 77px because five nav items were forced onto a single row. The fix — adding `flex-wrap: wrap` to the nav's layout — was made in direct response to that observed failure, then reverified by rerunning the same test, which passed. This is documented in `test-record.md` as a genuine fail-then-fix rather than a hypothetical pass.
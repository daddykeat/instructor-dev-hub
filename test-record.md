# Test Record

| Condition | Expected Result | Observed Result | Revision |
|---|---|---|---|
| 320px viewport | No horizontal overflow | Initial FAIL: nav overflowed by 77px, five items forced onto one row | Added `flex-wrap: wrap` to nav; rerun PASSED |
| 768px viewport | No overflow, intact layout | PASS — nav intact, card grid renders two equal columns | None |
| 1280px viewport | No overflow, intact layout | PASS — card grid scales to two wider columns | None |
| 200% browser zoom | No clipping or overlap | PASS with limitation — test browser did not support native zoom; verified equivalent 640px and stricter 320px CSS viewports instead, neither showed clipping, overlap, or overflow | None |
| Keyboard navigation | All interactive elements reachable with visible focus | PASS — nav links, theme toggle, buttons, text fields, select, checkbox, radio group, and submit reachable; focus indicators visible in both themes; disabled button correctly skipped | None |
| Default/alternate theme contrast | Both themes readable and coherent | PASS — dark theme renders documented `gray-900` surface, `gray-100` text, visible `blue-400` focus ring; contrast ratios calculated during development (e.g. `#274a63` on white ≈ 9.3:1 AAA) | None |
| Preferred font blocked | Graceful fallback to system stack | PASS — Chakra Petch blocked via DevTools; headings fell back to declared system stack; content remained readable, no overflow | None |
| HTML validation | 0 errors | PASS — W3C validator, 0 errors, 0 warnings | None |
| CSS validation | 0 errors | PASS — all four CSS files, 0 errors. `components.css` produced 43 informational warnings; W3C's validator cannot statically evaluate CSS custom-property values at parse time, so this is expected behavior for a token-based system, not a defect. | None |
| Published-site verification | Live site matches local build | PASS — repository confirmed connected, final files pushed, live GitHub Pages URL verified to match local build | None |
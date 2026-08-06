# Card Action Pill Consistency

## Scope

Use the existing project action-pill styles for the achievement cards. Keep all card content, links, order, and bottom alignment unchanged.

## Visual rule

- Every project and achievement action uses the same height, padding, type weight, border radius, focus treatment, and hover behavior.
- The first action in each card uses the accent treatment because it is also the card's primary destination.
- Remaining actions use the neutral treatment.
- Achievement cards therefore show LinkedIn as the accent action, with GitHub and Pitch Deck as neutral actions.

## Implementation

Replace the three one-off achievement link class strings with the existing `project-action-link`, `project-action-link-primary`, and `project-action-link-secondary` classes. Do not add a component, helper, dependency, or CSS rule.

## Verification

Check project and achievement cards at desktop and mobile widths. Confirm matching control dimensions, visible focus styles, expected wrapping, and aligned action rows. Run the existing type check, production build, and portfolio content tests.

# Custom Scrollbar

## Scope

Style only the page scrollbar. Keep scrolling behavior, page layout, the hidden mobile navigation scrollbar, and all site content unchanged.

## Visual rule

- Use a 10px page scrollbar with a near-black `#030712` track.
- Use `#475569` for the thumb and `#64748b` on hover.
- Give the thumb a rounded shape and a 2px track-colored border in browsers that support WebKit scrollbar selectors.
- Keep the thumb visible so visitors can judge page length and scroll position.

## Browser behavior

- Set the root color scheme to dark because the layout is permanently rendered with the `dark` class.
- Use `scrollbar-color` and `scrollbar-width` for standards-based styling.
- Add `html::-webkit-scrollbar` selectors for Chromium, Edge, and Safari rendering details.
- Allow forced-colors mode and browser accessibility settings to override author colors.

## Implementation

Add the scrollbar rules near the existing root and `html` declarations in `styles/globals.css`. Do not add JavaScript, a component, a dependency, or a custom scroll-position indicator.

## Verification

Inspect the page scrollbar at desktop width in its default and hover states. Confirm that scrolling, section navigation, keyboard scrolling, and the hidden mobile navigation scrollbar still work. Run the existing type check, production build, portfolio content tests, and design detector.

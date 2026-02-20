# Specification

## Summary
**Goal:** Improve text readability in light mode by changing all white text to black.

**Planned changes:**
- Update all white text colors to black in light mode across all components (HeroSection, GameplaySection, RewardsSection, ShopInfoSection, CallToAction, Footer)
- Modify CSS custom properties in index.css to use black text for light theme
- Update Tailwind configuration to define black foreground colors for light mode
- Preserve white text colors for dark mode

**User-visible outcome:** All text elements are clearly readable with black color against light backgrounds in light mode, particularly fixing the unreadable white "REWARDS" heading.

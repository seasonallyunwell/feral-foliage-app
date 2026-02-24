# 404 Page Design Specification

## Project: Feral Foliage Custom 404 Page
**Date:** 2026-02-23
**Version:** 1.0

---

## Overview

This document outlines the visual design specifications for the Feral Foliage custom 404 error page. The design maintains consistency with the existing dark theme while providing a friendly, helpful experience for users who land on a non-existent page.

---

## Brand Identity

### Brand Colors (from base.njk)
- **Primary Background:** `#0f1110` (deep dark green-black)
- **Card/Content Background:** `#171a18` (slightly lighter dark)
- **Primary Text:** `#e7e7e7` (off-white)
- **Secondary Text:** `#d7d7d7` (muted white)
- **Meta/Accent Text:** `#a7a7a7` (gray)
- **Accent/Link Color:** `#7ee081` (vibrant green)
- **Border Color:** `#2a2f2c` (subtle dark gray-green)

### Brand Personality
- **Tone:** Unapologetically practical, helpful, slightly playful
- **Theme:** Dark plant-themed aesthetic with lush green accents

---

## Typography

### Font Stack
```
font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

### Sizes
- **Main Heading (404):** 6rem (96px), bold, accent green
- **Subheading:** 1.5rem (24px), primary text
- **Body Text:** 1rem (16px), secondary text
- **Nav Links:** 1rem, accent green with hover underline

---

## Layout Structure

### Page Layout
1. **Navigation Bar** - Consistent with base.njk (horizontal nav with Home, Blog, Starter Kit, Pest ID)
2. **Main Content Area** - Centered, max-width 600px
3. **Footer** - Consistent with base.njk (brand name, tagline, affiliate disclosure link)

### Content Elements (Top to Bottom)
1. **404 Number** - Large, prominent, centered, green accent color
2. **Emoji/Icon** - Plant-related icon (🌱 or 🌿) above the 404
3. **Heading** - "Lost in the foliage?" or similar friendly message
4. **Description** - Brief explanation that the page doesn't exist
5. **Suggestion Links** - Home, Blog, Starter Kit, Pest ID
6. **Search Prompt** - Optional suggestion to search the site

---

## Visual Design Details

### Color Palette for 404 Page
| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep dark | `#0f1110` |
| Content card background | Dark green-black | `#171a18` |
| Border | Subtle green-gray | `#2a2f2c` |
| Main 404 text | Vibrant green | `#7ee081` |
| Heading text | Off-white | `#e7e7e7` |
| Body text | Muted white | `#d7d7d7` |
| Link text | Vibrant green | `#7ee081` |

### Spacing
- **Page padding:** 24px
- **Content card padding:** 32px
- **Element spacing:** 16px between items
- **Card border-radius:** 16px (slightly more rounded than standard cards)

### Visual Effects
- **Card:** Subtle border with `#2a2f2c`, slight glow effect on 404 number
- **404 Number:** Text shadow for depth/glow effect
- **Links:** Hover underline animation

---

## Messaging Guidelines

### Primary Message
- **Heading:** "Lost in the foliage?" 
- **Subtext:** "This page has gone missing like a begonia in low light."

### Navigation Messaging
- **Primary CTA:** "Here's where you can go:"
- **Links:** Home, Blog, Starter Kit, Pest ID

### Tone
- Helpful but not apologetic
- On-brand with "unapologetically practical plant care"
- Slightly whimsical to match plant theme

---

## Responsive Behavior

### Desktop (>768px)
- Centered content card, max-width 600px
- Full navigation visible
- Large 404 display

### Mobile (<768px)
- Full-width content, reduced padding (16px)
- 404 number scales to 4rem
- Navigation links stack or remain horizontal if space allows
- Touch-friendly tap targets (min 44px)

---

## Implementation Notes

### Template File
- **Location:** `/src/404.njk`
- **Extends:** Can use base.njk layout or minimal.njk for cleaner 404-specific styling
- **CSS:** Inline in `<style>` tags for simplicity, matching base.njk pattern

### SEO Considerations
- **Title:** "404 - Page Not Found • Feral Foliage"
- **Description:** "The page you're looking for doesn't exist. Explore our plant care guides instead."

---

## Success Criteria

- [x] Page displays within existing site framework
- [x] Consistent dark theme with Feral Foliage branding
- [x] Clear, helpful messaging
- [x] Easy navigation to main site sections
- [x] Responsive on mobile devices
- [x] Fast loading (no external dependencies beyond site assets)

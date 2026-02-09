# Feral Foliage Brand Style Guide

## Overview

This guide documents the Feral Foliage color system, optimized for dark-mode interfaces with earthy, plant-inspired tones. All colors are chosen to maintain readability while supporting the brand's nature-forward aesthetic.

---

## 1. Primary Palette

### Background Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Forest** | `#0f1110` | Body background, page foundations |
| **Dark Moss** | `#101311` | Callout backgrounds, result boxes |
| **Night Soil** | `#171a18` | Card backgrounds, tool panels |
| **Shadow Canopy** | `#1a2a1c` | Category card gradients, highlight cards |
| **Charred Earth** | `#1f2420` | Interactive hover states |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Mist** | `#e7e7e7` | Primary text, headings, body copy |
| **Sage** | `#d7d7d7` | Paragraph text, general reading |
| **Frost** | `#c7c7c7` | Form labels, field descriptions |
| **Lichen** | `#a7a7a7` | Meta information, timestamps, captions |
| **Bark** | `#888` | Secondary footer text |
| **Moss Shadow** | `#666` | Tertiary footer text |
| **Deep Bark** | `#444` | Version info, timestamps |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Fresh Growth** | `#7ee081` | Links, headings, CTAs, highlights |
| **Forest Floor** | `#2d5a30` | Primary button backgrounds |
| **New Leaves** | `#3a7a3e` | Primary button hover, active states |

---

## 2. Interactive Element Colors

### Buttons

| Element | Background | Border | Text | Hover Background | Hover Border |
|---------|-----------|--------|------|------------------|--------------|
| **Primary CTA** | `#2d5a30` | `#3a7a3e` | `#ffffff` | `#3a7a3e` | `#4a9a4e` |
| **Secondary** | `#252a27` | `#3a3f3c` | `#7ee081` | `#2f3532` | `#4a4f4c` |
| **Navigation** | `#171a18` | `#2a2f2c` | `#7ee081` | `#1f2420` | `#3a3f3c` |

### Form Elements

| Element | Background | Border | Text |
|---------|-----------|--------|------|
| **Input fields** | `#252a27` | `#3a3f3c` | `#e7e7e7` |
| **Select dropdowns** | `#252a27` | `#3a3f3c` | `#e7e7e7` |

### Cards & Panels

| Element | Background | Border | Corner Radius |
|---------|-----------|--------|---------------|
| **Tool cards** | `#171a18` | `#2a2f2c` | 10px |
| **Category cards** | `linear-gradient(135deg, #1a2a1c 0%, #171a18 100%)` | `#2a3f2c` | 12px |
| **Calculator sections** | `#171a18` | `#2a2f2c` | 10px |
| **Callouts** | `#101311` | `#2a2f2c` | 10px |

### Light Level Indicators

| Level | Background | Text | Usage |
|-------|-----------|------|-------|
| **Low Light** | `#1a1a2e` | `#a0a0ff` | Windows, placement guidance |
| **Medium Light** | `#2e2e1a` | `#ffff80` | Windows, placement guidance |
| **Bright Light** | `#2e2a1a` | `#ffcc00` | Windows, placement guidance |
| **Direct Sun** | `#2e1a1a` | `#ff8888` | Windows, placement guidance |

---

## 3. Color Usage Guidelines

### Do: Use These Colors For

| Element | Color(s) | Notes |
|---------|----------|-------|
| **Page background** | `#0f1110` | Never use lighter backgrounds |
| **Card backgrounds** | `#171a18` | Standard for all content cards |
| **Primary links** | `#7ee081` | Always on dark backgrounds |
| **Headings (h1, h2)** | `#7ee081` | Creates brand consistency |
| **Primary buttons** | `#2d5a30` | Background color |
| **Form inputs** | `#252a27` | Background with `#3a3f3c` border |
| **Table headers** | `#7ee081` | Text color with `#2a2f2c` borders |
| **Separators** | `#2a2f2c` | Horizontal rules, borders |
| **Light level badges** | See Light Level Indicators above | Each level has distinct colors |

### Don't: Avoid These Combinations

| Avoid | Reason |
|-------|--------|
| **Light cream/white backgrounds** | Contradicts dark mode aesthetic, eye strain |
| **Pure white text (#ffffff) on dark** | Too harsh; use `#e7e7e7` or `#d7d7d7` |
| **Bright neon accents** | Unnatural for plant brand; use `#7ee081` instead |
| **Light text on light backgrounds** | Legibility issues |
| **Yellow/green on green backgrounds** | Poor contrast |
| **Pure black backgrounds** | Too harsh; use `#0f1110` instead |

### Warning & Threat Colors

| Threat Level | Background | Text | Usage |
|--------------|-----------|------|-------|
| **Yellow (Caution)** | `#554400` | `#ffcc00` | Mild warnings, watch items |
| **Orange (Alert)** | `#553300` | `#ff9900` | Moderate issues, prompt attention |
| **Red (Danger)** | `#550000` | `#ff4444` | Critical problems, urgent action |

---

## 4. CSS Variables (Recommended)

Add these to your CSS root for easy theming and reuse:

```css
:root {
  /* === Background Colors === */
  --ff-bg-body: #0f1110;
  --ff-bg-card: #171a18;
  --ff-bg-callout: #101311;
  --ff-bg-input: #252a27;
  --ff-bg-category: linear-gradient(135deg, #1a2a1c 0%, #171a18 100%);
  --ff-bg-hover: #1f2420;
  
  /* === Text Colors === */
  --ff-text-primary: #e7e7e7;
  --ff-text-body: #d7d7d7;
  --ff-text-label: #c7c7c7;
  --ff-text-muted: #a7a7a7;
  --ff-text-footer: #666;
  --ff-text-footer-alt: #444;
  
  /* === Accent Colors === */
  --ff-accent-primary: #7ee081;
  --ff-accent-btn-primary: #2d5a30;
  --ff-accent-btn-hover: #3a7a3e;
  
  /* === Border Colors === */
  --ff-border-subtle: #2a2f2c;
  --ff-border-card: #2a3f2c;
  --ff-border-input: #3a3f3c;
  
  /* === Light Level Indicators === */
  --ff-light-low-bg: #1a1a2e;
  --ff-light-low-text: #a0a0ff;
  --ff-light-medium-bg: #2e2e1a;
  --ff-light-medium-text: #ffff80;
  --ff-light-bright-bg: #2e2a1a;
  --ff-light-bright-text: #ffcc00;
  --ff-light-direct-bg: #2e1a1a;
  --ff-light-direct-text: #ff8888;
  
  /* === Threat Levels === */
  --ff-threat-yellow-bg: #554400;
  --ff-threat-yellow-text: #ffcc00;
  --ff-threat-orange-bg: #553300;
  --ff-threat-orange-text: #ff9900;
  --ff-threat-red-bg: #550000;
  --ff-threat-red-text: #ff4444;
  
  /* === Sizing === */
  --ff-radius-sm: 6px;
  --ff-radius-md: 10px;
  --ff-radius-lg: 12px;
}
```

### Example Usage

```css
/* Card component */
.card {
  background-color: var(--ff-bg-card);
  border: 1px solid var(--ff-border-subtle);
  border-radius: var(--ff-radius-md);
  color: var(--ff-text-body);
}

/* Primary button */
.btn-primary {
  background-color: var(--ff-accent-btn-primary);
  border: 1px solid var(--ff-accent-btn-hover);
  color: #ffffff;
  border-radius: var(--ff-radius-sm);
}

.btn-primary:hover {
  background-color: var(--ff-accent-btn-hover);
}

/* Link */
a {
  color: var(--ff-accent-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

---

## 5. Calculator-Specific Colors

For interactive tools (light calculator, water calculator, fertilizer calculator):

| Element | Colors |
|---------|--------|
| **Tab buttons** | Inactive: `#252a27` bg, `#a7a7a7` text / Active: `#2d5a30` bg, `#ffffff` text |
| **Result box** | `#101311` bg, `#2a2f2c` border, `#c7c7c7` text |
| **Category cards** | Gradient `#1a2a1c` → `#171a18` bg, `#2a3f2c` border, `#7ee081` headings |

---

## 6. Dark Mode Compatibility Notes

All colors in this palette are designed for dark-mode-first interfaces. When adding new colors:

1. **Test contrast ratios** — All text should meet WCAG AA standards (4.5:1 minimum)
2. **Avoid light backgrounds** — Never use backgrounds lighter than `#171a18` for content areas
3. **Use accent sparingly** — `#7ee081` should draw attention, not overwhelm
4. **Maintain depth** — Use `#0f1110` for backgrounds, `#171a18` for cards to create visual hierarchy
5. **Green tones only** — Avoid blue-greens or other unnatural plant colors

---

## 7. Quick Reference Card

```
PRIMARY COLORS
├── Background: #0f1110 (body), #171a18 (cards)
├── Text: #e7e7e7 (primary), #d7d7d7 (body), #a7a7a7 (muted)
└── Accent: #7ee081 (links/headings), #2d5a30 (buttons)

INTERACTIVE
├── Primary Button: bg #2d5a30 → hover #3a7a3e
├── Input Fields: bg #252a27, border #3a3f3c
└── Borders: #2a2f2c (subtle), #2a3f2c (cards)

LIGHT LEVELS
├── Low: #1a1a2e / #a0a0ff
├── Medium: #2e2e1a / #ffff80
├── Bright: #2e2a1a / #ffcc00
└── Direct: #2e1a1a / #ff8888

THREAT LEVELS
├── Yellow: #554400 / #ffcc00
├── Orange: #553300 / #ff9900
└── Red: #550000 / #ff4444
```

---

*Last updated: 2026-02-09 | Version 1.0*

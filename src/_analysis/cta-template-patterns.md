# CTA Template Patterns Analysis

## Overview

This document analyzes the three existing CTA (Call-to-Action) templates in the Feral Foliage project to identify common structural patterns, styling conventions, and content hierarchy. The templates analyzed are:
- `cta-humidifier.njk` - Humidifier product recommendations
- `cta-humidity-bundle.njk` - Hygrometer/humidity bundle recommendations
- `cta-tds-meter.njk` - TDS water quality meter recommendations

---

## 1. Common HTML Structure Patterns

### Container Wrapper
All three templates use an identical outer wrapper structure:

```html
<div class="affiliate-cta" style="[styles]">
  <!-- content -->
</div>
```

The wrapper includes:
- **Class name:** `affiliate-cta` for potential CSS targeting
- **Inline styles:** Gradient background, border-radius, padding, margin, and border

### Heading Element
Each template includes a single `<h3>` element with:
- Emoji prefix (🌫️, 📊, 💧)
- Descriptive headline in title case
- Inline styles: `color: #fff; margin: 0 0 12px 0; font-size: 1.25rem;`

### Introduction Paragraph
A descriptive `<p>` element follows the heading:
- Provides context for the product category
- Uses muted text color (`#e0e0e0`) for readability
- Line height of 1.5 for comfortable reading
- Inline styles: `color: #e0e0e0; margin: 0 0 16px 0; line-height: 1.5;`

### Product Grid Container
Products are wrapped in a `<div>` with:
- **Class:** `affiliate-products`
- **Layout:** CSS Grid with 12px gap
- **Inline style:** `style="display: grid; gap: 12px;"`

### Individual Product Cards
Each product uses a `<div>` with:
- **Class:** `affiliate-product`
- **Background:** Semi-transparent white (`rgba(255,255,255,0.1)`)
- **Border radius:** 8px
- **Padding:** 16px

Inside each product card:
- **Flex container** for horizontal layout: `display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;`
- **Product name** in `<strong>` tag with accent color
- **Product details** in span with muted gray color
- **Call-to-action button** as an anchor tag

### Disclosure Footer
All templates end with a small disclaimer:
```html
<p style="color: #888; font-size: 0.75rem; margin: 16px 0 0 0; text-align: center;">
  *As an Amazon Associate, we earn from qualifying purchases.
</p>
```

---

## 2. CSS Styling Conventions

### Background Gradients

| Template | Start Color | End Color | Accent Border |
|----------|-------------|-----------|---------------|
| Humidifier | `#1a472a` (dark forest green) | `#2d5a3d` | `#3d7a52` |
| Humidity Bundle | `#4a1e6d` (deep purple) | `#5a2e7d` | `#7a4e9d` |
| TDS Meter | `#1e3a5f` (navy blue) | `#2d4a6f` | `#3d5a7f` |

**Pattern:** All gradients use a 135-degree angle (`linear-gradient(135deg, ...)`), transitioning from a darker starting color to a slightly lighter ending color. Each template has a unique color theme appropriate to its product category.

### Border Radius Values

| Element | Radius |
|---------|--------|
| Main container | 12px |
| Product cards | 8px |
| Buttons | 6px |

### Padding & Margins

| Element | Padding | Margin |
|---------|---------|--------|
| Main container | 24px | 32px 0 |
| Product cards | 16px | - |
| Between cards (grid gap) | - | 12px |

### Color Schemes

- **Primary text (headings):** White (`#fff`)
- **Secondary text:** Light gray (`#e0e0e0`)
- **Muted text:** Gray (`#a0a0a0` for details, `#888` for footer)
- **Product name accent:**
  - Humidifier: `#7dcea0` (mint green)
  - Humidity Bundle: `#c49ddf` (lavender)
  - TDS Meter: `#7dadd4` (sky blue)
- **Button background:** Amazon orange (`#ff9900`)
- **Button text:** Black (`#000`)

### Typography

- **Headings (h3):** 1.25rem, bold, white
- **Product names:** 1rem, bold, accent color
- **Product details:** 0.875rem, muted gray
- **Buttons:** 0.875rem, bold (600 weight)
- **Disclosure:** 0.75rem, dark gray, centered

### Button Styling

```html
<a href="[affiliate-link]" 
   target="_blank" 
   rel="nofollow"
   style="background: #ff9900; color: #000; padding: 8px 16px; 
          border-radius: 6px; text-decoration: none; font-weight: 600; 
          font-size: 0.875rem;">
  View on Amazon →
</a>
```

**Button pattern:**
- Background: Fixed Amazon orange (`#ff9900`)
- Text color: Black (`#000`)
- Padding: 8px vertical, 16px horizontal
- Border radius: 6px
- Font weight: 600 (semi-bold)
- Font size: 0.875rem
- Decoration: None (removes underline)
- Opens in new tab with `target="_blank"` and `rel="nofollow"`

---

## 3. Affiliate Link Format

### URL Structure
All affiliate links follow the Amazon Associates format:

```
https://www.amazon.com/dp/[PRODUCT_ID]?tag=feralfoliage-20
```

- **Domain:** `www.amazon.com`
- **Link type:** Direct product page (`/dp/`)
- **Tag parameter:** `tag=feralfoliage-20`
- **All links:** Use `target="_blank"` and `rel="nofollow"` attributes

### Consistent Elements
- Same affiliate tag across all products: `feralfoliage-20`
- All links open in new tabs
- All links include `nofollow` for SEO

---

## 4. Product Display Hierarchy

Each template presents 2-3 products in a ranked hierarchy. The first product is the "Top Pick" or "Smart Pick" and subsequent products are labeled as "Premium" or "Budget Pick."

### Hierarchy Labels

| Position | Label Used | Example |
|----------|------------|---------|
| 1st (Primary) | "Top Pick", "Smart Pick", "Professional Pick" | Premium quality, featured features |
| 2nd (Secondary) | "Premium", "Budget Pick" | Mid-range or budget option |
| 3rd (Tertiary) | "Budget Pick", "Multi-Function" | Budget option or specialized variant |

### Label Placement
- Labels appear in the product details line (second line below product name)
- Format: `Label • Feature 1 • Feature 2`
- Separator: Bullet point (•) or em dash (—)

### Product Name Styling
- Product name is bold (`<strong>`)
- Uses template-specific accent color
- Font size: 1rem

### Product Details Styling
- Appears in a `<span>` with `display: block`
- Color: Muted gray (`#a0a0a0`)
- Font size: 0.875rem
- Contains: Tier label + feature highlights

---

## 5. Common Template Elements Summary

### Structural Consistency
1. **Wrapper div** with gradient background and border
2. **H3 heading** with emoji and white text
3. **Intro paragraph** explaining the product need
4. **Grid of 2-3 product cards**
5. **Disclosure footer** with Amazon Associates disclaimer

### Styling Consistency
- 12px outer border-radius, 8px inner card radius, 6px button radius
- 24px container padding, 32px vertical margin
- Grid gap of 12px between product cards
- Fixed Amazon orange button color
- Muted text hierarchy (white → light gray → gray)

### Functional Consistency
- All affiliate links use same tag format
- All buttons open in new tabs with nofollow
- All products display name, tier label, and features
- Responsive flexbox layout with wrap capability

---

## 6. Recommendations for Future CTA Templates

Based on this analysis, new CTA templates should:

1. **Maintain the wrapper structure:** Use `.affiliate-cta` class with inline gradient styles
2. **Keep color theming consistent:** Choose a unique gradient that matches the product category
3. **Follow the 2-3 product pattern:** Include a primary pick plus budget/alternative options
4. **Use the same button style:** Amazon orange with black text, 6px radius
5. **Include tier labels:** Top Pick / Premium / Budget Pick hierarchy
6. **Add the disclosure:** Amazon Associates disclaimer at the bottom
7. **Use flexbox for cards:** Allow wrapping on mobile with `flex-wrap: wrap`
8. **Keep accent colors consistent per category:** Define a palette for each product type

---

*Analysis completed: March 1, 2026*
*Templates analyzed: cta-humidifier.njk, cta-humidity-bundle.njk, cta-tds-meter.njk*

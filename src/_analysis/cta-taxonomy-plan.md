# CTA Taxonomy Plan

## Overview

This document maps product categories from affiliate recommendations to required CTA (Call-to-Action) template types for the Feral Foliage blog. It identifies gaps in current coverage and provides guidelines for template usage across different content contexts.

---

## Product Categories → Template Mapping

### 1. HUMIDIFIERS

| Template Type | Status | Products Included | Usage Context |
|--------------|--------|-------------------|---------------|
| **Single: Top Pick** | ✅ Existing (`cta-humidifier.njk`) | LEVOIT 6L (primary) | Blog posts focused on "best humidifier for calatheas" |
| **Single: Premium Pick** | 🔄 Needs variant | MIRO NR08M | Posts emphasizing ease of cleaning, aesthetic design |
| **Single: Budget Pick** | 🔄 Needs variant | TaoTronics 4L | "Affordable humidifier" roundups, beginner guides |
| **Comparison (Full)** | ❌ Missing | All 3 + alternatives | Comprehensive "humidifier comparison" guide posts |
| **Bundle (Humidifier + Hygrometer)** | ✅ Existing (`cta-humidity-bundle.njk`) | Any humidifier + Govee/AcuRite | "Complete humidity setup" content |

**Insertion Guidelines:**
- **Top Pick** → Use in problem-solution content where reader needs a reliable, all-around best
- **Premium Pick** → Use in "worth the investment" contexts, emphasize long-term value
- **Budget Pick** → Use in beginner guides, first-time buyer content
- **Comparison** → Use in dedicated review/buying guide pages
- **Bundle** → Use in "get started" guides, gift guides, comprehensive care posts

---

### 2. TDS METERS

| Template Type | Status | Products Included | Usage Context |
|--------------|--------|-------------------|---------------|
| **Single: Professional Pick** | ✅ Existing (`cta-tds-meter.njk`) | HM Digital (primary) | Water quality posts, advanced care guides |
| **Single: Budget Pick** | 🔄 Needs variant | iPstyle | "First TDS meter" content, casual monitoring |
| **Single: Multi-Function** | 🔄 Needs variant | Lxuemlu (TDS+EC+Temp) | Posts for serious plant parents, nutrient monitoring |
| **Comparison (Full)** | ❌ Missing | All 3 + alternatives | "Best TDS meters for plants" guide |
| **Water Quality Explainers** | ❌ Missing | Educational CTA | Posts explaining why TDS matters |

**Insertion Guidelines:**
- **Professional Pick** → Use when recommending a reliable, industry-standard meter
- **Budget Pick** → Use for casual readers who just want basic monitoring
- **Multi-Function** → Use for advanced care content, nutrient management posts
- **Comparison** → Use in dedicated buying guides
- **Explainers** → Use in educational content about water quality

---

### 3. HYGROMETERS

| Template Type | Status | Products Included | Usage Context |
|--------------|--------|-------------------|---------------|
| **Single: Smart Pick** | 🔄 Needs variant | Govee Wireless | Tech-forward readers, app integration content |
| **Single: Budget Pick** | 🔄 Needs variant | AcuRite Digital | Simple, no-frills monitoring |
| **Pair: Hygrometer + Humidifier Bundle** | ✅ Existing (`cta-humidity-bundle.njk`) | Govee + any humidifier | Complete setup guides |
| **Multi-Pack** | ❌ Missing | Govee multi-pack | Large collections, greenhouse owners |
| **Comparison** | ❌ Missing | All options | Best hygrometers roundup |

**Insertion Guidelines:**
- **Smart Pick** → Use in smart home integration content, remote monitoring posts
- **Budget Pick** → Use for simple humidity tracking needs
- **Bundle** → Use in "start here" content, gift guides
- **Multi-Pack** → Use for serious collectors, greenhouse content
- **Comparison** → Use in buying guides

---

## Template Variations Summary

| Category | Existing | Needs Creation |
|----------|----------|----------------|
| Humidifiers | 1 (top pick) | 4 (premium, budget, comparison, bundle variant) |
| TDS Meters | 1 (professional) | 4 (budget, multi-function, comparison, explainer) |
| Hygrometers | 1 (bundle) | 4 (smart, budget, multi-pack, comparison) |
| **TOTAL** | **3** | **12** |

---

## Color Theme Reference

Maintain consistent color coding across templates:

| Category | Gradient Start | Gradient End | Accent Border | Accent Text |
|----------|---------------|--------------|---------------|-------------|
| Humidifier | `#1a472a` | `#2d5a3d` | `#3d7a52` | `#7dcea0` |
| TDS Meter | `#1e3a5f` | `#2d4a6f` | `#3d5a7f` | `#7dadd4` |
| Hygrometer | `#4a1e6d` | `#5a2e7d` | `#7a4e9d` | `#c49ddf` |

---

## Content Context Matrix

| Blog Post Type | Recommended CTA(s) | Priority |
|----------------|-------------------|----------|
| "Why are my calathea's edges crispy?" | Humidifier (Top Pick) + Hygrometer Bundle | HIGH |
| "Best humidifiers for tropical plants" | Humidifier Comparison | HIGH |
| "How to monitor humidity" | Hygrometer (Smart Pick) | HIGH |
| "Is my water safe for plants?" | TDS Meter (Professional) | HIGH |
| "Complete care guide for beginners" | Full Bundle (all 3 categories) | HIGH |
| "Top 5 humidifiers under $50" | Humidifier (Budget Pick) | MEDIUM |
| "Smart tools for plant parents" | Hygrometer (Smart Pick) | MEDIUM |
| "Understanding water quality" | TDS Meter + Explainers | MEDIUM |
| "My humidifier setup tour" | Any relevant (contextual) | LOW |

---

## Implementation Priority

### Phase 1: Fill Critical Gaps
1. Humidifier Budget Pick variant
2. Humidifier Premium Pick variant  
3. TDS Meter Budget Pick variant
4. Hygrometer Smart Pick variant

### Phase 2: Expand Options
5. TDS Meter Multi-Function variant
6. Hygrometer Budget Pick variant
7. Humidifier Bundle variant

### Phase 3: Comparison & Comprehensive
8. Humidifier Comparison template
9. TDS Meter Comparison template
10. Hygrometer Comparison template
11. TDS Water Quality Explainer CTA
12. Hygrometer Multi-Pack CTA

---

## Next Steps

1. **Create template variants** for Phase 1 priorities using existing `cta-humidifier.njk` and `cta-tds-meter.njk` as reference
2. **Define product data structure** for flexible template population (currently hardcoded)
3. **Build insertion workflow** into blog post markdown files
4. **Track performance** via affiliate clicks to optimize template placement

---

*Plan created: March 1, 2026*
*For: Feral Foliage CTA Taxonomy*

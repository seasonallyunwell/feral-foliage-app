# TL;DR Disclosure Locations Analysis

**Date:** 2026-02-23
**Purpose:** Input document for Identify Disclosure Callouts pipeline stage

## Overview

This document contains the analysis of TL;DR and Disclosure callout locations in the feral-foliage-app blog files.

## Statistics

- **Total blog files analyzed:** 63
- **Files with TL;DR sections:** 43
- **Files with Disclosure callouts:** 49
- **Files with BOTH TL;DR and Disclosure:** 29 (all correctly ordered)
- **Files with TL;DR only (need Disclosure):** 14
- **Files with Disclosure only (need TL;DR):** 20

## Order Analysis

All 29 files that contain both TL;DR and Disclosure sections have Disclosure positioned BEFORE TL;DR - this is the correct order.

## Disclosure Callout Pattern

Standard disclosure callout used:
```html
<div class="callout">
<strong>Disclosure:</strong> Some links on this page are affiliate links. As an Amazon Associate, we earn from qualifying purchases.
</div>
```

## TL;DR Callout Pattern

Standard TL;DR callout used:
```html
<div class="callout">
<strong>TL;DR:</strong> [summary content]
</div>
```

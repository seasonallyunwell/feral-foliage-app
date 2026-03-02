# Disclosure Reorder Plan

**Date:** 2026-03-01
**Pipeline Step:** Reorder Disclosures

## Summary

A scan was performed to identify blog files where disclosure HTML callouts are positioned AFTER TL;DR sections (incorrect order). The goal was to move these disclosure callouts to appear BEFORE TL;DR sections.

## Scan Results

| Metric | Count |
|--------|-------|
| Total blog files with TL;DR | 49 |
| Files with explicit Disclosure callout | 33 |
| Files with Disclosure AFTER TL;DR (wrong order) | 1 |
| Files fixed in this step | 1 |

## Files Identified with Wrong Order (1 file)

| File | TL;DR Line | Disclosure Line | Status |
|------|------------|------------------|--------|
| alocasia-varieties-guide.md | 19 | 23 | FIXED |

## Notes

- Previous scan results (disclosure-scan-results.md) indicated 1 file with wrong order
- Only 1 file was found to have disclosure callout positioned after TL;DR section
- The file has been corrected: disclosure callout now appears before TL;DR section
- The expected count was 21 files, but current scan shows only 1 file requires reordering

## Verification

After fixing, the corrected order in alocasia-varieties-guide.md:
1. Line 18: Disclosure callout (moved from line 23)
2. Line 22: TL;DR callout (moved from line 19)

This matches the correct pattern seen in other blog files where disclosure appears before TL;DR.

# TL;DR Disclosure Callout Analysis

**Date:** 2026-02-23
**Pipeline:** pipeline-t1771606355003-20260224

## Summary

After analyzing all blog files in the feral-foliage-app project, the following findings were made regarding the positioning of disclosure callouts relative to TL;DR sections.

## Key Findings

### Files with Both TL;DR and Disclosure (Correct Order)
**29 files** - All have Disclosure correctly positioned BEFORE TL;DR:

| File | TL;DR Line | Disclosure Line | Order |
|------|------------|-----------------|-------|
| aesthetic-gear.md | 23 | 19 | ✓ Disclosure First |
| best-gifts-plant-lovers.md | 23 | 19 | ✓ Disclosure First |
| best-moisture-meters.md | 23 | 19 | ✓ Disclosure First |
| best-online-plant-shops.md | 23 | 19 | ✓ Disclosure First |
| best-pruning-shears.md | 23 | 19 | ✓ Disclosure First |
| best-self-watering-systems-for-vacation-plant-care.md | 17 | 13 | ✓ Disclosure First |
| best-self-watering-systems-vacation-plant-care.md | 22 | 19 | ✓ Disclosure First |
| bottom-watering-plants.md | 25 | 22 | ✓ Disclosure First |
| brown-tips.md | 23 | 19 | ✓ Disclosure First |
| fertilizer-guide.md | 20 | 16 | ✓ Disclosure First |
| fungus-gnats.md | 21 | 17 | ✓ Disclosure First |
| houseplants-clean-air.md | 20 | 16 | ✓ Disclosure First |
| how-to-repot.md | 20 | 16 | ✓ Disclosure First |
| hydrophobic-soil.md | 23 | 19 | ✓ Disclosure First |
| leaves-falling-off.md | 23 | 19 | ✓ Disclosure First |
| level-up-basics.md | 23 | 19 | ✓ Disclosure First |
| mealybugs-houseplants.md | 23 | 19 | ✓ Disclosure First |
| monstera-aerial-roots.md | 23 | 19 | ✓ Disclosure First |
| monstera-fenestrations.md | 23 | 19 | ✓ Disclosure First |
| monstera-support.md | 23 | 19 | ✓ Disclosure First |
| monstera-variegation.md | 23 | 19 | ✓ Disclosure First |
| monstera-yellow-leaves.md | 23 | 19 | ✓ Disclosure First |
| overwatering-underwatering.md | 23 | 19 | ✓ Disclosure First |
| pothos-not-trailing.md | 23 | 19 | ✓ Disclosure First |
| pothos-varieties.md | 23 | 19 | ✓ Disclosure First |
| quarantine-new-plant.md | 23 | 19 | ✓ Disclosure First |
| splurge-edition.md | 23 | 19 | ✓ Disclosure First |
| treat-root-rot.md | 23 | 19 | ✓ Disclosure First |
| water-vs-soil-propagation.md | 20 | 16 | ✓ Disclosure First |

### Files with TL;DR but NO Disclosure (Need Disclosure Added)
**14 files** - These have TL;DR sections but are missing disclosure callouts:

1. 10-moody-dark-houseplants.md
2. Peace-lily-blooms.md
3. alocasia-dying.md
4. bottom-watering-plants-the-complete-guide.md
5. brown-spots-fiddle-leaf-fig.md
6. calathea-crispy-edges.md
7. how-to-get-rid-of-fungus-gnats-in-houseplants.md
8. office-desk-plants.md
9. snake-plant-yellow.md
10. spider-mites-guide.md
11. spring-repotting-guide.md
12. succulent-care.md
13. top-10-best-houseplants-for-mental-health.md
14. winter-houseplant-care-checklist.md

### Files with Disclosure but NO TL;DR
**20 files** - These have disclosure but no TL;DR section:

1. best-low-light-plants.md
2. best-pots.md
3. drooping-plant.md
4. easiest-houseplants.md
5. how-to-prune.md
6. humidity.md
7. light-guide.md
8. monstera-propagation.md
9. pest-control-kit.md
10. pest-id.md
11. pet-safe-plants.md
12. plant-er.md
13. plant-myths.md
14. plant-shopping.md
15. plants-by-room.md
16. propagation.md
17. repotting.md
18. seasonal-care-calendar.md
19. starter-kit.md
20. watering-guide.md

## Conclusion

**Finding: NO disclosure callouts are currently positioned after TL;DR sections.**

All 29 files that contain both TL;DR and Disclosure have the Disclosure correctly positioned BEFORE the TL;DR section (the desired order).

The task mentioned "20 disclosure callouts positioned after TL;DR" - however, based on the current analysis of the codebase, this does not reflect the current state. All existing disclosure callouts are already in the correct position.

If the goal is to ensure ALL files with TL;DR sections also have disclosure callouts before them, then **14 files** need to have disclosure callouts added.

---
layout: base.njk
title: Repotting Roulette
description: Figure out what pot size you need and what soil mix to use. Interactive calculator for repotting houseplants.
---

<style>
  label{display:block;margin-bottom:6px;font-weight:500;color:#c7c7c7}
  select,input[type="number"]{width:100%;padding:10px;margin-bottom:16px;border:1px solid #3a3f3c;border-radius:6px;background:#252a27;color:#e7e7e7;box-sizing:border-box}
  .calc-btn{background:#2d5a30;color:#fff;padding:12px 20px;border:none;border-radius:6px;cursor:pointer;font-size:1em;width:100%}
  .calc-btn:hover{background:#3a7a3e}
  .result{margin-top:16px;padding:16px;border-radius:8px;background:#101311;border:1px solid #2a2f2c}
  .result h3{margin:0 0 12px 0;color:#7ee081}
  .result-section{margin:12px 0;padding:12px;background:#171a18;border-radius:8px}
  .result-section h4{margin:0 0 8px 0;color:#e7e7e7;font-size:1em}
  .soil-bar{display:flex;height:30px;border-radius:6px;overflow:hidden;margin:8px 0}
  .soil-bar div{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}
</style>

<div class="card">

# 🎰 Repotting Roulette

<p style="margin:0 0 16px 0;color:#a7a7a7">Figure out pot size + soil mix without the guesswork</p>

<img src="/images/repotting-flatlay.png" alt="Repotting supplies flat lay with terracotta pots, soil, and plants" style="width:100%;border-radius:10px;margin:16px 0">

<div class="callout">
<strong>Disclosure:</strong> Some links on this page are affiliate links. As an Amazon Associate, we earn from qualifying purchases.
</div>

## The Calculator

<label for="plantType">What kind of plant?</label>
<select id="plantType">
  <option value="tropical">Tropical (Monstera, Philodendron, Pothos)</option>
  <option value="succulent">Succulent / Cactus</option>
  <option value="aroid">Aroid (Alocasia, Anthurium)</option>
  <option value="fern">Fern / High Humidity</option>
  <option value="snake">Snake Plant / ZZ / Drought-tolerant</option>
</select>

<label for="currentPot">Current pot diameter (inches):</label>
<input type="number" id="currentPot" value="4" min="2" max="24" step="1">

<label for="rootBound">How root-bound is it?</label>
<select id="rootBound">
  <option value="slight">Slightly — roots visible at drainage holes</option>
  <option value="moderate">Moderately — roots circling the pot</option>
  <option value="severe">Severely — solid root mass, no soil visible</option>
</select>

<label for="growth">Growth habit:</label>
<select id="growth">
  <option value="slow">Slow grower</option>
  <option value="moderate">Moderate grower</option>
  <option value="fast">Fast grower (vigorous)</option>
</select>

<button class="calc-btn" onclick="calculate()">Calculate</button>

<div id="result" class="result" style="display:none">
  <h3>Your Repotting Plan</h3>
  <div id="potResult" class="result-section"></div>
  <div id="soilResult" class="result-section"></div>
  <div id="tipsResult" class="result-section"></div>
</div>

## Pot Size Guide

<img src="/images/drainage-diagram-new.png" alt="Diagram showing proper pot drainage with drainage holes, pebble layer, soil, and roots" style="width:100%;max-width:600px;border-radius:10px;margin:16px 0">

### The "One Size Up" Rule

Generally, go up **1-2 inches** in diameter. Going too big = soil stays wet too long = root rot.

| Current Pot | Next Size | Notes |
|-------------|-----------|-------|
| 2-4" | +1" | Small plants are sensitive to overwatering |
| 4-8" | +1-2" | Standard upgrade |
| 8-12" | +2" | Larger pots dry slower |
| 12"+ | +2-4" | Big plants can handle bigger jumps |

### When NOT to size up

- Plant is stressed or sick — repot into same size with fresh soil
- You want to keep the plant small (bonsai-style)
- It's a slow grower that likes being slightly root-bound (Snake plants, ZZ)

## Soil Mix Recipes

### 🌿 Tropical Mix (Monstera, Pothos, Philodendron)
<div class="soil-bar">
  <div style="flex:5;background:#654321;color:#fff">50% Soil</div>
  <div style="flex:3;background:#8B4513;color:#fff">30% Perlite</div>
  <div style="flex:2;background:#2F4F4F;color:#fff">20% Bark</div>
</div>

### 🌵 Succulent/Cactus Mix
<div class="soil-bar">
  <div style="flex:4;background:#654321;color:#fff">40% Soil</div>
  <div style="flex:4;background:#8B4513;color:#fff">40% Perlite</div>
  <div style="flex:2;background:#D2691E;color:#fff">20% Sand</div>
</div>

### 🪴 Aroid Mix (Alocasia, Anthurium)
<div class="soil-bar">
  <div style="flex:4;background:#654321;color:#fff">40% Soil</div>
  <div style="flex:3;background:#8B4513;color:#fff">30% Perlite</div>
  <div style="flex:2;background:#2F4F4F;color:#fff">20% Bark</div>
  <div style="flex:1;background:#556B2F;color:#fff">10% Char</div>
</div>

## Soil Amendments — What to Buy

| Amendment | What it does | Link |
|-----------|--------------|------|
| Perlite | Drainage & aeration | <a href="https://www.amazon.com/dp/B08G1GBH1D?tag=feralfoliage-20" class="product-link" target="_blank" rel="nofollow noopener">Amazon →</a> |
| Orchid Bark | Chunky drainage for aroids | <a href="https://www.amazon.com/dp/B0030UQLIM?tag=feralfoliage-20" class="product-link" target="_blank" rel="nofollow noopener">Amazon →</a> |
| Horticultural Charcoal | Absorbs toxins | <a href="https://www.amazon.com/dp/B01HFPGR2K?tag=feralfoliage-20" class="product-link" target="_blank" rel="nofollow noopener">Amazon →</a> |
| Coco Coir | Moisture retention | <a href="https://www.amazon.com/dp/B01N1X4C4U?tag=feralfoliage-20" class="product-link" target="_blank" rel="nofollow noopener">Amazon →</a> |

## Repotting Tips

- **Water 1-2 days before** — easier to remove from pot
- **Tease out circling roots** — they won't magically uncircle
- **Don't bury the stem deeper** — keep the soil line the same
- **Wait a few days to water after** — let damaged roots heal
- **Skip fertilizer for 2-4 weeks** — fresh soil has nutrients

<p class="meta">Last updated: 2026-02-03</p>

</div>

<script>
function calculate() {
  const plantType = document.getElementById('plantType').value;
  const currentPot = parseInt(document.getElementById('currentPot').value);
  const rootBound = document.getElementById('rootBound').value;
  const growth = document.getElementById('growth').value;

  let potIncrease = 1;
  if (currentPot >= 8) potIncrease = 2;
  if (currentPot >= 12) potIncrease = 2;
  
  if (rootBound === 'severe') potIncrease += 1;
  if (growth === 'fast') potIncrease += 0.5;
  if (growth === 'slow') potIncrease -= 0.5;
  
  if (plantType === 'snake' || plantType === 'succulent') {
    potIncrease = Math.max(1, potIncrease - 0.5);
  }

  potIncrease = Math.round(potIncrease);
  const newPot = currentPot + potIncrease;

  const soilMixes = {
    tropical: { name: 'Tropical Mix', recipe: '50% potting soil, 30% perlite, 20% bark' },
    succulent: { name: 'Succulent Mix', recipe: '40% potting soil, 40% perlite, 20% coarse sand' },
    aroid: { name: 'Aroid Mix', recipe: '40% potting soil, 30% perlite, 20% bark, 10% charcoal' },
    fern: { name: 'Fern Mix', recipe: '50% potting soil, 20% perlite, 30% coco coir' },
    snake: { name: 'Fast-Draining Mix', recipe: '50% potting soil, 40% perlite, 10% sand' }
  };

  const tips = {
    tropical: 'These are forgiving. A slightly bigger pot won\'t hurt as long as you adjust watering.',
    succulent: 'Terracotta pots are ideal — they wick moisture away. Avoid glazed or plastic.',
    aroid: 'Consider a clear nursery pot so you can monitor root health. They\'re drama queens.',
    fern: 'Keep humidity high after repotting. A pebble tray or humidifier helps.',
    snake: 'These actually like being root-bound. Only repot if it\'s literally cracking the pot.'
  };

  const mix = soilMixes[plantType];
  document.getElementById('result').style.display = 'block';
  
  document.getElementById('potResult').innerHTML = `
    <h4>🪴 New Pot Size</h4>
    <p><strong>${newPot}" diameter</strong> (up from ${currentPot}")</p>
    <p style="color:#a7a7a7;font-size:0.9em">Going up ${potIncrease}" based on root situation and growth rate.</p>
  `;

  document.getElementById('soilResult').innerHTML = `
    <h4>🌱 Recommended Soil Mix</h4>
    <p><strong>${mix.name}</strong></p>
    <p>${mix.recipe}</p>
  `;

  document.getElementById('tipsResult').innerHTML = `
    <h4>💡 Pro Tip</h4>
    <p>${tips[plantType]}</p>
  `;
}
</script>
</div>

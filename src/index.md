---
layout: minimal.njk
title: Tools & Guides for Unhinged Plant Parents
description: Free plant care tools, budget gear guides, and unapologetically practical advice for keeping your houseplants alive.
permalink: /
---

<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; background-color: #0f1110; color: #e7e7e7; margin: 0; padding: 0; line-height: 1.6; }
  a { color: #7ee081; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .wrap { max-width: 900px; margin: 0 auto; padding: 24px; }
  .hero { text-align: center; padding: 60px 20px 40px; border-bottom: 1px solid #2a2f2c; background: linear-gradient(rgba(15,17,16,0.85),rgba(15,17,16,0.95)),url('/images/indoor-jungle.png') center/cover; }
  .hero .tagline { font-size: 1.15em; color: #a7a7a7; margin: 0 0 24px 0; }
  .hero-nav { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .hero-nav a { background: #171a18; border: 1px solid #2a2f2c; padding: 10px 20px; border-radius: 8px; font-weight: 600; }
  .hero-nav a:hover { background: #1f2420; text-decoration: none; }
  .hero-nav a.primary { background: #2d5a30; border-color: #3a7a3e; }
  .featured { background: #171a18; border: 1px solid #2a2f2c; border-radius: 12px; padding: 24px; margin: 32px 0; }
  .featured h2 { margin: 0 0 8px 0; color: #7ee081; font-size: 1.3em; }
  .featured p { margin: 0 0 16px 0; color: #c7c7c7; }
  .featured .cta { display: inline-block; background: #2d5a30; color: #fff; padding: 10px 20px; border-radius: 6px; font-weight: 600; }
  .featured .cta:hover { background: #3a7a3e; text-decoration: none; }
  .section-title { font-size: 1.4em; color: #7ee081; margin: 40px 0 16px 0; border-bottom: 1px solid #2a2f2c; padding-bottom: 8px; }
  .tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
  .tool-card { background: #171a18; border: 1px solid #2a2f2c; border-radius: 10px; padding: 20px; display: flex; flex-direction: column; }
  .tool-card h3 { margin: 0 0 8px 0; color: #e7e7e7; font-size: 1.1em; }
  .tool-card p { margin: 0 0 12px 0; color: #a7a7a7; font-size: 0.95em; flex-grow: 1; }
  .tool-card .btn-row { margin-top: auto; }
  .tool-card .btn { display: inline-block; background: #252a27; border: 1px solid #3a3f3c; padding: 8px 16px; border-radius: 6px; font-size: 0.9em; color: #7ee081; }
  .tool-card .btn:hover { background: #2f3532; text-decoration: none; }
  .calculator-section { background: #171a18; border: 1px solid #2a2f2c; border-radius: 10px; padding: 20px; margin-top: 16px; }
  .calc-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
  .calc-tabs button { background: #252a27; border: 1px solid #3a3f3c; color: #a7a7a7; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 0.9em; }
  .calc-tabs button.active { background: #2d5a30; border-color: #3a7a3e; color: #fff; }
  label { display: block; margin-bottom: 6px; font-weight: 500; color: #c7c7c7; }
  select, input[type="number"] { width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #3a3f3c; border-radius: 6px; background-color: #252a27; color: #e7e7e7; }
  .calc-btn { background: #2d5a30; color: #fff; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 1em; width: 100%; }
  .calc-btn:hover { background: #3a7a3e; }
  .result { margin-top: 16px; padding: 16px; border-radius: 8px; background: #101311; border: 1px solid #2a2f2c; text-align: center; color: #c7c7c7; }
  .category-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 20px; margin-top: 16px; }
  @media (max-width: 800px) { .category-grid { grid-template-columns: 1fr !important; } }
  .category-card { background: linear-gradient(135deg, #1a2a1c 0%, #171a18 100%); border: 1px solid #2a3f2c; border-radius: 12px; padding: 24px; }
  .category-card h3 { margin: 0 0 8px 0; color: #7ee081; font-size: 1.2em; }
  .category-card .count { color: #888; font-size: 0.85em; margin-bottom: 12px; }
  .category-card p { margin: 0 0 16px 0; color: #a7a7a7; font-size: 0.95em; }
  .category-card .browse-btn { display: inline-block; background: #2d5a30; color: #fff; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 0.9em; }
  .category-card .browse-btn:hover { background: #3a7a3e; text-decoration: none; }
  .footer { margin-top: 48px; padding: 24px; border-top: 1px solid #2a2f2c; text-align: center; color: #666; font-size: 0.85em; }
  .footer a { color: #7ee081; }
</style>

<div class="hero">
  <img src="/images/logo.svg" alt="Feral Foliage" style="width:200px;height:200px;margin-bottom:8px">
  <p class="tagline">Tools & guides for unhinged plant parents</p>
  <div class="hero-nav">
    <a href="#tools" class="primary">Tools</a>
    <a href="/blog/">Blog</a>
    <a href="/blog/starter-kit/">Starter Kit</a>
    <a href="/pages/about/">About</a>
  </div>
</div>

<div class="wrap">
  <div class="featured">
    <h2>🛒 The Feral Foliage Starter Kit (Budget Edition)</h2>
    <p>The cheapest set of tools that prevents the most common indoor plant disasters: light, pests, and panic-watering. 11 items, all under $20 each.</p>
    <a href="/blog/starter-kit/" class="cta">View the Starter Kit →</a>
  </div>

  <h2 class="section-title" id="tools">Free Tools</h2>
  <div class="tools-grid">
    <div class="tool-card">
      <h3>🌿 Light Guide</h3>
      <p>Window placement, light levels, grow light recs — everything about keeping plants lit.</p>
      <div class="btn-row">
        <a href="/blog/light-guide/" class="btn">View Guide</a>
        <a href="#lightCalc" class="btn" onclick="showCalc('light')" style="margin-left:8px">Quick Calc</a>
      </div>
    </div>
    <div class="tool-card">
      <h3>💦 Watering Guide</h3>
      <p>When and how to water without killing your plants.</p>
      <div class="btn-row">
        <a href="/blog/watering-guide/" class="btn">View Guide</a>
        <a href="#waterCalc" class="btn" onclick="showCalc('water')" style="margin-left:8px">Quick Calc</a>
      </div>
    </div>
    <div class="tool-card">
      <h3>🪴 Repotting Roulette</h3>
      <p>What pot size? What soil mix? Calculator + recipes.</p>
      <div class="btn-row">
        <a href="/blog/repotting/" class="btn">Use Tool</a>
      </div>
    </div>
    <div class="tool-card">
      <h3>🧪 Fertilizer Calculator</h3>
      <p>Calculate exact dilution rates for any fertilizer. NPK, PPM, and safety warnings.</p>
      <div class="btn-row">
        <a href="/tools/fertilizer-calculator/" class="btn">Use Calculator</a>
      </div>
    </div>
    <div class="tool-card">
      <h3>🐛 Pest ID Guide</h3>
      <p>Identify what's eating your plant and how to stop it.</p>
      <div class="btn-row">
        <a href="/blog/pest-id/" class="btn">View Guide</a>
      </div>
    </div>
  </div>

  <div class="calculator-section" id="calculator">
    <div class="calc-tabs">
      <button id="tabLight" class="active" onclick="showCalc('light')">Light</button>
      <button id="tabWater" onclick="showCalc('water')">Water</button>
    </div>

    <div id="lightCalc">
      <label for="plantTypeLight">Plant type:</label>
      <select id="plantTypeLight">
        <option value="low">Low Light (ZZ Plant, Snake Plant)</option>
        <option value="medium">Medium Light (Pothos, Philodendron)</option>
        <option value="bright">Bright Light (Succulents, Fiddle Leaf Fig)</option>
      </select>
      <label for="windowDirection">Window direction:</label>
      <select id="windowDirection">
        <option value="north">North (gentle indirect)</option>
        <option value="east">East (morning sun)</option>
        <option value="west">West (afternoon sun)</option>
        <option value="south">South (brightest)</option>
        <option value="none">No window</option>
      </select>
      <label for="distance">Distance from window (feet):</label>
      <input type="number" id="distance" value="3" min="0" step="0.5">
      <button class="calc-btn" onclick="calculateLight()">Calculate</button>
      <div id="resultLight" class="result">Your plant's fate awaits...</div>
    </div>

    <div id="waterCalc" style="display:none;">
      <label for="plantTypeWater">Plant type:</label>
      <select id="plantTypeWater">
        <option value="succulent">Drought-tolerant (Succulents, Cacti)</option>
        <option value="tropical">Moderate (Pothos, Monstera)</option>
        <option value="temperate">Thirsty (Ferns, Peace Lily)</option>
      </select>
      <label for="potSize">Pot diameter (inches):</label>
      <input type="number" id="potSize" value="6" min="2" step="1">
      <label for="lastWatered">Days since last watered:</label>
      <input type="number" id="lastWatered" value="7" min="0" step="1">
      <button class="calc-btn" onclick="calculateWater()">Calculate</button>
      <div id="resultWater" class="result">Your plant's hydration status awaits...</div>
    </div>
  </div>

  <h2 class="section-title">More Guides</h2>
  <div class="tools-grid">
    <div class="tool-card">
      <h3>🌱 Propagation Guide</h3>
      <p>How to turn one plant into many. Water vs soil, node cutting, and more.</p>
      <div class="btn-row">
        <a href="/blog/propagation/" class="btn">View Guide</a>
      </div>
    </div>
    <div class="tool-card">
      <h3>📅 Seasonal Care Calendar</h3>
      <p>What your plants need month-by-month. Fertilizing, repotting windows, dormancy.</p>
      <div class="btn-row">
        <a href="/blog/seasonal-care-calendar/" class="btn">View Calendar</a>
      </div>
    </div>
  </div>

  <h2 class="section-title">🍃 Pothos Hub</h2>
  <div class="tools-grid">
    <div class="tool-card">
      <h3>Complete Care Guide</h3>
      <p>Everything you need to grow healthy pothos: watering, light, soil, and propagation.</p>
      <div class="btn-row"><a href="/blog/pothos-complete-care-guide/" class="btn">Read Guide</a></div>
    </div>
    <div class="tool-card">
      <h3>Yellow &amp; Brown Leaves</h3>
      <p>Diagnose why your pothos leaves are turning yellow or brown and how to fix it fast.</p>
      <div class="btn-row"><a href="/blog/pothos-leaves-troubleshooting/" class="btn">Troubleshoot</a></div>
    </div>
    <div class="tool-card">
      <h3>Varieties Compared</h3>
      <p>Golden vs Marble Queen vs Neon vs Jade — pick the right one for your space.</p>
      <div class="btn-row"><a href="/blog/pothos-varieties/" class="btn">Compare Varieties</a></div>
    </div>
    <div class="tool-card">
      <h3>Propagation Guide</h3>
      <p>Water, soil, and division methods for multiplying your pothos collection.</p>
      <div class="btn-row"><a href="/blog/pothos-propagation-guide/" class="btn">Propagate</a></div>
    </div>
    <div class="tool-card">
      <h3>Why Is It Not Trailing?</h3>
      <p>Leggy, stubby, or just not vining? Here's why and how to get those long trailing stems.</p>
      <div class="btn-row"><a href="/blog/pothos-not-trailing/" class="btn">Fix It</a></div>
    </div>
  </div>

  <h2 class="section-title">Browse by Category</h2>
  <div class="category-grid"><div class="category-card">
      <h3>🛒 Gear Guides</h3>
      <div class="count">10+ guides</div>
      <p>From budget-friendly starter kits to splurge-worthy upgrades. Moisture meters, pruning shears, grow lights, and gear that actually works.</p>
      <a href="/blog/" class="browse-btn">Browse Gear Guides</a>
    </div><div class="category-card">
      <h3>🔧 Troubleshooting</h3>
      <div class="count">17+ guides</div>
      <p>Yellow leaves, brown tips, drooping, root rot, pests — diagnose what's wrong and fix it before it's too late.</p>
      <a href="/blog/" class="browse-btn">Browse Troubleshooting</a>
    </div><div class="category-card">
      <h3>🌿 Monstera Guides</h3>
      <div class="count">9 guides</div>
      <p>Everything Monstera: aerial roots, fenestrations, propagation, support structures, variegation types, and yellow leaves.</p>
      <a href="/blog/" class="browse-btn">Browse Monstera Guides</a>
    </div><div class="category-card">
      <h3>🍃 Pothos Guides</h3>
      <div class="count">6 guides</div>
      <p>Compare Pothos varieties (Golden, Marble, Neon, Jade) and troubleshoot non-trailing vines.</p>
      <a href="/blog/" class="browse-btn">Browse Pothos Guides</a>
    </div></div>

  <div style="text-align:center;margin:40px 0">
    <a href="/blog/" style="display:inline-block;background:#2d5a30;color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;font-size:1.1em">View All 148 Guides →</a>
  </div>
</div>

<div class="footer">
  <p>🌿 Feral Foliage — unapologetically practical plant care</p>
  <p><a href="/disclosure/">Affiliate Disclosure</a></p>
  <p style="margin-top:12px;color:#444">v2.0.0 · Last updated: 2026-02-08</p>
</div>

<script>
function showCalc(type) {
  document.getElementById('lightCalc').style.display = type === 'light' ? 'block' : 'none';
  document.getElementById('waterCalc').style.display = type === 'water' ? 'block' : 'none';
  document.getElementById('tabLight').classList.toggle('active', type === 'light');
  document.getElementById('tabWater').classList.toggle('active', type === 'water');
}

function calculateLight() {
  const plantType = document.getElementById('plantTypeLight').value;
  const windowDirection = document.getElementById('windowDirection').value;
  const distance = parseFloat(document.getElementById('distance').value);
  let lightScore = 0;

  switch (windowDirection) {
    case 'north': lightScore += 1; break;
    case 'east': lightScore += 3; break;
    case 'west': lightScore += 4; break;
    case 'south': lightScore += 5; break;
    case 'none': lightScore = 0; break;
  }

  if (windowDirection !== 'none') {
    if (distance <= 1) lightScore += 2;
    else if (distance <= 3) lightScore += 1;
    else lightScore -= 1;
  }

  let result = '';
  if (windowDirection === 'none') {
    result = "No window? Get a grow light or prepare for the inevitable. 💀";
  } else {
    switch (plantType) {
      case 'low':
        if (lightScore <= 2) result = "Your low-light lover is probably fine. Go get a snack. ✅";
        else if (lightScore <= 4) result = "Getting a bit bright. Move it back a bit. ⚠️";
        else result = "Too much sun! Move it to a darker corner before it gets crispy. 🔥";
        break;
      case 'medium':
        if (lightScore <= 1) result = "Too dark. Bring it closer to the window. 🌑";
        else if (lightScore <= 3) result = "Perfectly adequate. Your plant appreciates you. ✅";
        else if (lightScore <= 5) result = "Bright side of medium. Watch for scorched leaves. ☀️";
        else result = "Too much sun for a medium-light plant. Find it some shade. 🔥";
        break;
      case 'bright':
        if (lightScore <= 3) result = "It's basically a cave. Get it to a sunny spot! 🌑";
        else if (lightScore <= 5) result = "Solid bright light. High five! ✅";
        else result = "Excellent! Direct sun makes this plant sing. Just watch for burning. ☀️";
        break;
    }
  }
  document.getElementById('resultLight').innerHTML = result;
}

function calculateWater() {
  const plantType = document.getElementById('plantTypeWater').value;
  const potSize = parseFloat(document.getElementById('potSize').value);
  const lastWatered = parseInt(document.getElementById('lastWatered').value);
  let drynessScore = lastWatered;

  switch (plantType) {
    case 'succulent': drynessScore -= 3; break;
    case 'tropical': drynessScore += 1; break;
    case 'temperate': drynessScore += 3; break;
  }

  if (potSize <= 4) drynessScore += 2;
  else if (potSize <= 8) drynessScore += 1;
  else drynessScore -= 1;

  let result = '';
  if (drynessScore >= 7) result = "Water it NOW! Your plant is staging a dramatic faint. 💀";
  else if (drynessScore >= 4) result = "Probably thirsty. Give it a drink, but don't drown it. 💧";
  else if (drynessScore >= 0) result = "Still moist. Resist the urge! You'll drown it with love. ✋";
  else result = "Whoa there! Back away from the watering can. Let it dry out. 🚫";

  document.getElementById('resultWater').innerHTML = result;
}
</script>

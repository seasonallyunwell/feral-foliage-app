---
layout: base.njk
title: Fertilizer Dilution Calculator — Get the Math Right
description: Calculate the exact amount of fertilizer to add to your water. NPK ratios, PPM calculations, and safety warnings for houseplants.
keywords: fertilizer calculator, NPK calculator, plant fertilizer calculator, dilution calculator, houseplant fertilizer, PPM calculator
permalink: /tools/fertilizer-calculator/
---

<div class="card" style="max-width:900px;margin:0 auto">

# Fertilizer Dilution Calculator

<p style="margin:0 0 16px 0;color:#a7a7a7">Get the math right. Kill fewer plants.</p>

<div class="calculator-card" style="background:#171a18;border:1px solid #2a2f2c;border-radius:12px;padding:2rem;margin:2rem 0">
    <h2 style="font-size:1rem;color:#7ee081;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:1px solid #2a2f2c">Your Fertilizer</h2>

    <div class="input-group" style="margin-bottom:1.25rem">
        <label style="color:#c7c7c7">NPK Ratio <span style="color:#ff4444">*</span></label>
        <div class="npk-inputs" style="display:flex;gap:0.5rem;align-items:center">
            <input type="number" id="npk-n" placeholder="N" step="0.1" min="0" max="100" style="width:80px;text-align:center;padding:0.75rem 1rem;background:#252a27;border:1px solid #3a3f3c;border-radius:8px;color:#e7e7e7">
            <span style="color:#666;font-weight:600">-</span>
            <input type="number" id="npk-p" placeholder="P" step="0.1" min="0" max="100" style="width:80px;text-align:center;padding:0.75rem 1rem;background:#252a27;border:1px solid #3a3f3c;border-radius:8px;color:#e7e7e7">
            <span style="color:#666;font-weight:600">-</span>
            <input type="number" id="npk-k" placeholder="K" step="0.1" min="0" max="100" style="width:80px;text-align:center;padding:0.75rem 1rem;background:#252a27;border:1px solid #3a3f3c;border-radius:8px;color:#e7e7e7">
        </div>
        <p class="error-message" id="npk-error" style="color:#ff4444;font-size:0.8rem;margin-top:0.3rem;display:none">Enter all three NPK values (e.g., 10-10-10)</p>
    </div>

    <div class="presets" style="margin-top:1rem;padding-top:1rem;border-top:1px solid #2a2f2c">
        <p style="font-size:0.8rem;color:#a7a7a7;margin-bottom:0.5rem">Common fertilizers (click to fill):</p>
        <div class="preset-buttons" style="display:flex;flex-wrap:wrap;gap:0.5rem">
            <button class="preset-btn" data-npk="20-20-20" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">Jack's Classic 20-20-20</button>
            <button class="preset-btn" data-npk="24-8-16" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">Miracle-Gro All Purpose</button>
            <button class="preset-btn" data-npk="7-9-5" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">Dyna-Gro Grow</button>
            <button class="preset-btn" data-npk="2-2-2" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">Espoma Indoor!</button>
            <button class="preset-btn" data-npk="6-4-4" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">FoxFarm Grow Big</button>
            <button class="preset-btn" data-npk="10-30-20" style="padding:0.4rem 0.75rem;font-size:0.8rem;background:#252a27;border:1px solid #3a3f3c;border-radius:20px;cursor:pointer;color:#d7d7d7">Bloom Booster</button>
        </div>
    </div>

    <h2 style="font-size:1rem;color:#7ee081;margin:1.5rem 0 1rem 0;padding-bottom:0.5rem;border-bottom:1px solid #2a2f2c">Water Amount</h2>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem">
        <div class="input-group">
            <label style="color:#c7c7c7">Amount <span style="color:#ff4444">*</span></label>
            <input type="number" id="container-size" placeholder="1" step="0.1" min="0.01" max="1000" style="width:100%;padding:0.75rem 1rem;background:#252a27;border:1px solid #3a3f3c;border-radius:8px;color:#e7e7e7">
            <p class="error-message" id="container-error" style="color:#ff4444;font-size:0.8rem;margin-top:0.3rem;display:none">Enter a positive number (max 1000)</p>
        </div>
        <div class="input-group">
            <label style="color:#c7c7c7">Unit</label>
            <select id="container-unit" style="width:100%;padding:0.75rem 1rem;background:#252a27;border:1px solid #3a3f3c;border-radius:8px;color:#e7e7e7">
                <option value="gallon">Gallons</option>
                <option value="liter">Liters</option>
                <option value="ml">Milliliters</option>
                <option value="cup">Cups</option>
            </select>
        </div>
    </div>

    <h2 style="font-size:1rem;color:#7ee081;margin:1.5rem 0 1rem 0;padding-bottom:0.5rem;border-bottom:1px solid #2a2f2c">Fertilizer Strength</h2>

    <div class="strength-slider-container" style="margin-top:1rem">
        <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:#a7a7a7;margin-bottom:0.5rem">
            <span>⅛× (Very dilute)</span>
            <span>Standard</span>
            <span>4× (Strong)</span>
        </div>
        <input type="range" id="strength-slider" min="0.125" max="4" step="0.125" value="1" style="width:100%;height:6px;border-radius:3px;background:#3a3f3c;-webkit-appearance:none;cursor:pointer">
        <input type="range" id="strength-slider-style" min="0.125" max="4" step="0.125" value="1" style="width:100%;height:6px;border-radius:3px;background:#3a3f3c;-webkit-appearance:none;cursor:pointer;margin-top:-6px">
        <div style="text-align:center;font-size:1.25rem;font-weight:600;color:#7ee081;margin:0.5rem 0"><span id="strength-display">1×</span> Standard Strength</div>
    </div>

    <button class="calculate-btn" id="calculate-btn" style="width:100%;padding:1rem;background:#2d5a30;border:1px solid #3a7a3e;color:white;border-radius:8px;font-size:1.1rem;font-weight:600;cursor:pointer;margin-top:1.5rem;transition:background 0.2s">Calculate Dilution</button>
</div>

<div class="results-card" id="results" style="background:#101311;border:1px solid #2a2f2c;border-radius:12px;padding:2rem;display:none;margin-bottom:2rem">
    <div class="safety-badge" id="safety-badge" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border-radius:20px;font-size:0.85rem;font-weight:600;margin-bottom:1rem;background:#554400;color:#ffcc00">
        <span id="safety-icon">✓</span> <span id="safety-text">Safe for most houseplants</span>
    </div>

    <div style="background:linear-gradient(135deg,#2d5a30 0%,#1a3d1e 100%);color:white;border-radius:12px;padding:2rem;text-align:center;margin-bottom:1.5rem">
        <p style="font-size:0.9rem;opacity:0.9;margin-bottom:0.5rem">Add to your water:</p>
        <p style="font-size:2.5rem;font-weight:700;margin-bottom:0.5rem" id="result-amount">1</p>
        <p style="font-size:1.25rem;opacity:0.9" id="result-unit">tablespoon</p>
        <p style="font-size:0.95rem;opacity:0.85;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.2)" id="result-detail">per 1 gallon of water</p>
    </div>

    <div style="text-align:center;padding:1rem;background:#171a18;border-radius:8px;margin-bottom:1.5rem;border:1px solid #2a2f2c">
        Dilution ratio: <strong style="color:#7ee081" id="dilution-ratio">1:256</strong>
    </div>

    <h3 style="font-size:1rem;color:#7ee081;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:1px solid #2a2f2c">Resulting Nutrients</h3>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem">
        <div style="text-align:center;padding:1rem;background:#171a18;border-radius:8px;border:1px solid #2a2f2c">
            <p style="font-size:1.5rem;font-weight:700;color:#7ee081" id="ppm-n">150</p>
            <p style="font-size:0.8rem;color:#a7a7a7">Nitrogen (N) ppm</p>
        </div>
        <div style="text-align:center;padding:1rem;background:#171a18;border-radius:8px;border:1px solid #2a2f2c">
            <p style="font-size:1.5rem;font-weight:700;color:#7ee081" id="ppm-p">150</p>
            <p style="font-size:0.8rem;color:#a7a7a7">Phosphorus (P) ppm</p>
        </div>
        <div style="text-align:center;padding:1rem;background:#171a18;border-radius:8px;border:1px solid #2a2f2c">
            <p style="font-size:1.5rem;font-weight:700;color:#7ee081" id="ppm-k">150</p>
            <p style="font-size:0.8rem;color:#a7a7a7">Potassium (K) ppm</p>
        </div>
    </div>

    <div class="warning-box" id="warning-burn" style="padding:1rem;border-radius:8px;margin-top:1rem;display:none;background:#550000;border-left:4px solid #ff4444">
        <p style="font-weight:600;margin-bottom:0.5rem;color:#ff4444">⚠️ Fertilizer Burn Risk</p>
        <p style="font-size:0.9rem;line-height:1.5;color:#e7e7e7">This dilution may be too concentrated for most houseplants. Consider using half strength or diluting further to avoid leaf burn and root damage.</p>
    </div>

    <div class="warning-box" id="warning-sensitive" style="padding:1rem;border-radius:8px;margin-top:1rem;display:none;background:#553300;border-left:4px solid #ff9900">
        <p style="font-weight:600;margin-bottom:0.5rem;color:#ff9900">🌿 Sensitive Plants Warning</p>
        <p style="font-size:0.9rem;line-height:1.5;color:#e7e7e7">This strength is too strong for ferns, orchids, and recently repotted plants. Use half strength or weaker on these plants.</p>
    </div>

    <div class="warning-box" id="warning-dilute" style="padding:1rem;border-radius:8rem;margin-top:1rem;display:none;background:#2e2e1a;border-left:4px solid #ffcc00">
        <p style="font-weight:600;margin-bottom:0.5rem;color:#ffcc00">ℹ️ Very Dilute</p>
        <p style="font-size:0.9rem;line-height:1.5;color:#e7e7e7">This dilution is very dilute and may not provide enough nutrients. Consider standard strength (1×) for actively growing plants.</p>
    </div>

    <div class="warning-box" id="warning-winter" style="padding:1rem;border-radius:8px;margin-top:1rem;display:none;background:#2e2e1a;border-left:4px solid #ffcc00">
        <p style="font-size:0.9rem;line-height:1.5;color:#ffcc00">❄️ Winter tip: Plants need less fertilizer during low-light months. Consider reducing to half strength or less.</p>
    </div>

    <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid #2a2f2c">
        <h3 style="font-size:1rem;color:#7ee081;margin-bottom:1rem">Pro Tips</h3>
        <div style="display:flex;gap:0.75rem;margin-bottom:0.75rem;font-size:0.9rem;color:#a7a7a7">
            <span>💧</span>
            <span>Always water plants before fertilizing to prevent root burn.</span>
        </div>
        <div style="display:flex;gap:0.75rem;margin-bottom:0.75rem;font-size:0.9rem;color:#a7a7a7">
            <span>📅</span>
            <span>Feed actively growing plants every 2-4 weeks during spring/summer.</span>
        </div>
        <div style="display:flex;gap:0.75rem;font-size:0.9rem;color:#a7a7a7">
            <span>👀</span>
            <span>Watch for brown leaf tips or yellowing — signs of over-fertilizing.</span>
        </div>
    </div>

    <div style="display:flex;gap:1rem;margin-top:1.5rem">
        <button class="action-btn" id="copy-btn" style="flex:1;padding:0.75rem;border:1px solid #3a3f3c;background:#252a27;border-radius:8px;font-size:0.9rem;font-weight:500;cursor pointer;color:#e7e7e7">📋 Copy Recipe</button>
        <button class="action-btn" id="reset-btn" style="flex:1;padding:0.75rem;border:1px solid #3a3f3c;background:#252a27;border-radius:8px;font-size:0.9rem;font-weight:500;cursor:pointer;color:#e7e7e7">🔄 Start Over</button>
    </div>
</div>

---

## How to Use This Calculator

<div class="callout">
<strong>TL;DR:</strong> Enter your fertilizer's NPK ratio, how much water you're mixing, and the calculator tells you exactly how much fertilizer to use.
</div>

### Step 1: Find Your NPK

Look at your fertilizer bottle. It has three numbers like "20-20-20" or "10-5-5". Enter those values in the NPK fields.

- **N (Nitrogen):** Promotes leaf growth and green color
- **P (Phosphorus):** Supports root development and flowering
- **K (Potassium):** Boosts overall health and disease resistance

### Step 2: Choose Your Water Amount

Enter how much water you're mixing fertilizer into. Most people use 1 gallon for watering multiple plants, or 1 liter for a single plant.

### Step 3: Set Fertilizer Strength

The slider defaults to 1× (standard strength). Adjust based on:

| Strength | Best For |
|----------|----------|
| ⅛× to ½× | Sensitive plants, winter feeding, seedlings |
| 1× (Standard) | Most houseplants during growing season |
| 2× to 4× | Heavy feeders, outdoor plants (use cautiously) |

### Step 4: Calculate

Click "Calculate Dilution" and the calculator will tell you:

- **Exactly how much fertilizer to add** (in ml, teaspoons, or tablespoons)
- **Resulting PPM** (parts per million) for each nutrient
- **Safety warnings** if the concentration is too high

---

## Why PPM Matters

PPM (parts per million) measures nutrient concentration. Most houseplants do best in the **100-200 ppm range** for each nutrient.

| PPM Range | What It Means |
|-----------|---------------|
| < 50 | Very dilute — may not provide enough nutrients |
| 50-200 | Ideal range for most houseplants |
| 200-400 | Strong — fine for established plants |
| 400+ | High concentration — risk of burn |

**The golden rule:** When in doubt, use less. Over-fertilizing is harder to fix than under-fertilizing.

---

## Common Fertilizer Presets

| Preset | NPK | Best For |
|--------|-----|----------|
| Jack's Classic 20-20-20 | 20-20-20 | All-purpose for tropicals |
| Miracle-Gro All Purpose | 24-8-16 | General feeding |
| Dyna-Gro Grow | 7-9-5 | Foliage-focused, includes micronutrients |
| Espoma Indoor! | 2-2-2 | Organic, gentle, slow-release |
| FoxFarm Grow Big | 6-4-4 | Fast-growing tropicals |
| Bloom Booster | 10-30-20 | Flowering plants |

---

## Safety Notes

<div class="callout warning" style="background:#fff3e0;border-left:4px solid #ffcc00">
<strong>⚠️ Important:</strong>
</div>

- **Start at half-strength** if you're unsure — you can always increase
- **Never fertilize dry soil** — always water first to prevent root burn
- **Flush soil monthly** with plain water to prevent salt buildup
- **Reduce or stop fertilizing** in fall/winter when growth slows
- **Watch for warning signs:** brown tips, white crust on soil, wilting with wet soil

---

## Related Guides

- [Fertilizer Guide — When, What, and How Much](/blog/fertilizer-guide/) — Complete guide to NPK, schedules, and types
- [Brown Tips on Houseplants](/blog/brown-tips/) — Diagnose and fix fertilizer burn
- [Seasonal Care Calendar](/blog/seasonal-care-calendar/) — When to fertilize each season
- [How to Repot a Plant](/blog/how-to-repot/) — When NOT to fertilize after repotting

</div>

<script>
// Constants
const VOLUME_CONVERSIONS = {
    gallon: 3785.41,
    liter: 1000,
    cup: 236.59,
    ml: 1
};

// DOM Elements
const npkN = document.getElementById('npk-n');
const npkP = document.getElementById('npk-p');
const npkK = document.getElementById('npk-k');
const containerSize = document.getElementById('container-size');
const containerUnit = document.getElementById('container-unit');
const strengthSlider = document.getElementById('strength-slider');
const strengthSliderStyle = document.getElementById('strength-slider-style');
const strengthDisplay = document.getElementById('strength-display');
const calculateBtn = document.getElementById('calculate-btn');
const resultsCard = document.getElementById('results');
const presetBtns = document.querySelectorAll('.preset-btn');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');

// Sync both sliders
strengthSlider.addEventListener('input', function() {
    strengthSliderStyle.value = this.value;
    updateStrengthDisplay();
});
strengthSliderStyle.addEventListener('input', function() {
    strengthSlider.value = this.value;
    updateStrengthDisplay();
});

calculateBtn.addEventListener('click', calculate);
resetBtn.addEventListener('click', resetCalculator);
copyBtn.addEventListener('click', copyRecipe);

presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const npk = btn.dataset.npk.split('-');
        npkN.value = npk[0];
        npkP.value = npk[1];
        npkK.value = npk[2];
    });
});

function updateStrengthDisplay() {
    const value = parseFloat(strengthSlider.value);
    strengthDisplay.textContent = value === 0.125 ? '⅛' :
                                  value === 0.25 ? '¼' :
                                  value === 0.5 ? '½' :
                                  value === 1 ? '1' :
                                  value === 2 ? '2' :
                                  value === 3 ? '3' :
                                  value === 4 ? '4' : value;
}

function validateInputs() {
    let valid = true;

    const n = parseFloat(npkN.value);
    const p = parseFloat(npkP.value);
    const k = parseFloat(npkK.value);

    document.getElementById('npk-error').classList.toggle('show',
        isNaN(n) || isNaN(p) || isNaN(k) || n < 0 || n > 100 || p < 0 || p > 100 || k < 0 || k > 100);
    npkN.classList.toggle('error', isNaN(n) || n < 0 || n > 100);
    npkP.classList.toggle('error', isNaN(p) || p < 0 || p > 100);
    npkK.classList.toggle('error', isNaN(k) || k < 0 || k > 100);

    if (isNaN(n) || isNaN(p) || isNaN(k) || n < 0 || n > 100 || p < 0 || p > 100 || k < 0 || k > 100) {
        valid = false;
    }

    if (n === 0 && p === 0 && k === 0) {
        document.getElementById('npk-error').textContent = 'NPK cannot all be zero — this adds no nutrients!';
        document.getElementById('npk-error').classList.add('show');
        valid = false;
    }

    const size = parseFloat(containerSize.value);
    document.getElementById('container-error').classList.toggle('show',
        isNaN(size) || size <= 0 || size > 1000);
    containerSize.classList.toggle('error', isNaN(size) || size <= 0 || size > 1000);

    if (isNaN(size) || size <= 0 || size > 1000) {
        valid = false;
    }

    return valid;
}

function calculate() {
    if (!validateInputs()) {
        resultsCard.style.display = 'none';
        return;
    }

    const n = parseFloat(npkN.value);
    const p = parseFloat(npkP.value);
    const k = parseFloat(npkK.value);
    const size = parseFloat(containerSize.value);
    const unit = containerUnit.value;
    const strength = parseFloat(strengthSlider.value);

    const containerMl = size * VOLUME_CONVERSIONS[unit];

    const avgNpk = (n + p + k) / 3;
    const standardMlPerGallon = avgNpk > 0 ? (14.79 * (20 / avgNpk)) : 0;
    const fertilizerMl = (standardMlPerGallon * strength * containerMl) / 3785.41;

    const ppmN = (fertilizerMl * n * 10) / containerMl;
    const ppmP = (fertilizerMl * p * 10) / containerMl;
    const ppmK = (fertilizerMl * k * 10) / containerMl;

    let displayAmount, displayUnit;
    if (fertilizerMl < 5) {
        displayAmount = fertilizerMl;
        displayUnit = 'ml';
    } else if (fertilizerMl < 15) {
        displayAmount = fertilizerMl / 4.93;
        displayUnit = 'teaspoons';
    } else {
        displayAmount = fertilizerMl / 14.79;
        displayUnit = 'tablespoons';
    }

    const roundedAmount = displayAmount < 1 ?
        Math.round(displayAmount * 4) / 4 :
        Math.round(displayAmount * 10) / 10;

    const unitLabel = roundedAmount === 1 ?
        displayUnit.replace(/s$/, '') :
        displayUnit;

    const totalTbsp = containerMl / 14.79;
    const concentrateTbsp = fertilizerMl / 14.79;
    const ratio = concentrateTbsp > 0 ? `1:${Math.round(totalTbsp / concentrateTbsp)}` : 'N/A';

    const maxPpm = Math.max(ppmN, ppmP, ppmK);
    let safetyStatus, safetyText, safetyClass, safetyIcon;

    if (maxPpm > 400 || strength > 3) {
        safetyStatus = 'danger';
        safetyText = 'High concentration — use with caution';
        safetyClass = '#550000';
        safetyIcon = '🚨';
    } else if (maxPpm > 200 || strength > 1.5) {
        safetyStatus = 'caution';
        safetyText = 'Strong dilution — monitor plants';
        safetyClass = '#553300';
        safetyIcon = '⚠️';
    } else {
        safetyStatus = 'safe';
        safetyText = 'Safe for most houseplants';
        safetyClass = '#554400';
        safetyIcon = '✓';
    }

    document.getElementById('result-amount').textContent = roundedAmount;
    document.getElementById('result-unit').textContent = unitLabel;
    document.getElementById('result-detail').textContent =
        `per ${size} ${unit}${size !== 1 ? 's' : ''} of water (${Math.round(containerMl)}ml)`;

    document.getElementById('ppm-n').textContent = Math.round(ppmN);
    document.getElementById('ppm-p').textContent = Math.round(ppmP);
    document.getElementById('ppm-k').textContent = Math.round(ppmK);
    document.getElementById('dilution-ratio').textContent = ratio;

    const safetyBadge = document.getElementById('safety-badge');
    safetyBadge.style.background = safetyClass;
    safetyBadge.style.color = safetyStatus === 'danger' ? '#ff4444' : safetyStatus === 'caution' ? '#ff9900' : '#ffcc00';
    document.getElementById('safety-icon').textContent = safetyIcon;
    document.getElementById('safety-text').textContent = safetyText;

    document.getElementById('warning-burn').style.display =
        (maxPpm > 350 || strength > 2.5) ? 'block' : 'none';
    document.getElementById('warning-sensitive').style.display =
        (strength > 1) ? 'block' : 'none';
    document.getElementById('warning-dilute').style.display =
        (maxPpm < 50 || strength < 0.25) ? 'block' : 'none';
    document.getElementById('warning-winter').style.display =
        (strength > 1) ? 'block' : 'none';

    resultsCard.style.display = 'block';
    resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyRecipe() {
    const npk = `${npkN.value}-${npkP.value}-${npkK.value}`;
    const amount = document.getElementById('result-amount').textContent;
    const unit = document.getElementById('result-unit').textContent;
    const size = containerSize.value;
    const unitLabel = containerUnit.value;
    const ppmN = document.getElementById('ppm-n').textContent;
    const ppmP = document.getElementById('ppm-p').textContent;
    const ppmK = document.getElementById('ppm-k').textContent;

    const text = `Fertilizer Recipe (Feral Foliage)
━━━━━━━━━━━━━━━━━━━━━━━
Fertilizer: ${npk}
Amount: ${amount} ${unit}
Water: ${size} ${unitLabel}
Strength: ${strengthSlider.value}×

Resulting PPM:
• Nitrogen: ${ppmN}
• Phosphorus: ${ppmP}
• Potassium: ${ppmK}

Generated by Feral Foliage Fertilizer Calculator`;

    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => copyBtn.textContent = '📋 Copy Recipe', 2000);
    });
}

function resetCalculator() {
    npkN.value = '';
    npkP.value = '';
    npkK.value = '';
    containerSize.value = '1';
    containerUnit.value = 'gallon';
    strengthSlider.value = 1;
    strengthSliderStyle.value = 1;
    updateStrengthDisplay();
    resultsCard.style.display = 'none';

    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
}
</script>

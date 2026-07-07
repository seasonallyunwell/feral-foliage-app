---
layout: minimal.njk
title: Blog
description: Plant care guides, gear recommendations, and unapologetically practical advice for keeping your houseplants alive.
permalink: /blog/
---

<style>
  * { box-sizing: border-box; }
  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background: #0f1110;
    color: #e7e7e7;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }
  a { color: #7ee081; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .hero {
    text-align: center;
    padding: 48px 20px 32px;
    border-bottom: 1px solid #2a2f2c;
    background: linear-gradient(rgba(15,17,16,0.85), rgba(15,17,16,0.95)), url('/images/indoor-jungle.png') center/cover;
  }
  .hero img { width: 200px; height: 200px; margin-bottom: 8px; }
  .hero .tagline { font-size: 1.15em; color: #a7a7a7; margin: 0 0 24px 0; }
  .hero-nav { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .hero-nav a { background: #171a18; border: 1px solid #2a2f2c; padding: 10px 20px; border-radius: 8px; font-weight: 600; }
  .hero-nav a:hover { background: #1f2420; text-decoration: none; }
  .hero-nav a.primary { background: #2d5a30; border-color: #3a7a3e; }
  .wrap { max-width: 880px; margin: 0 auto; padding: 24px; }
  .section-title { font-size: 1.4em; color: #7ee081; margin: 24px 0 16px 0; border-bottom: 1px solid #2a2f2c; padding-bottom: 8px; }
  .pinned-section { background: linear-gradient(135deg, #1a2a1c 0%, #171a18 100%); border: 1px solid #2a3f2c; border-radius: 12px; padding: 20px; margin: 0 0 32px 0; }
  .pinned-section h2 { margin: 0 0 16px 0; color: #7ee081; font-size: 1.2em; }
  .pinned-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; }
  .pinned-card { background: #0f1110; border: 1px solid #2a2f2c; border-radius: 8px; padding: 16px; }
  .pinned-card h3 { margin: 0 0 4px 0; font-size: 1em; }
  .pinned-card h3 a { color: #e7e7e7; }
  .pinned-card h3 a:hover { color: #7ee081; }
  .pinned-card .meta { margin-top: 4px; font-size: 12px; color: #a7a7a7; }
  .pinned-card p { margin: 8px 0 0 0; font-size: 0.9em; color: #a7a7a7; }
  .pinned-coming { background: #0f1110; border: 1px dashed #2a2f2c; border-radius: 8px; padding: 16px; color: #666; font-style: italic; font-size: 0.9em; }
  .card { background: #171a18; border: 1px solid #2a2f2c; border-radius: 12px; padding: 20px; margin: 16px 0; }
  .card h2 { margin: 0; font-size: 1.2em; }
  .card h2 a { color: #e7e7e7; }
  .card h2 a:hover { color: #7ee081; }
  .meta { color: #a7a7a7; font-size: 13px; margin-top: 8px; }
  .card p { margin: 12px 0 0 0; color: #c7c7c7; }
  .coming-soon { color: #666; font-style: italic; margin-top: 24px; }
  .footer { margin-top: 48px; padding: 24px; border-top: 1px solid #2a2f2c; text-align: center; color: #666; font-size: 0.85em; }
  .footer a { color: #7ee081; }
</style>

<div class="hero">
  <img src="/images/logo.svg" alt="Feral Foliage">
  <p class="tagline">Tools & guides for unhinged plant parents</p>
  <div class="hero-nav">
    <a href="/">Tools</a>
    <a href="/blog/" class="primary">Blog</a>
    <a href="/blog/starter-kit/">Starter Kit</a>
    <a href="/pages/about/">About</a>
  </div>
</div>

<div class="wrap">
  
  <div class="pinned-section">
    <h2>🛒 Gear Guides</h2>
    <div class="pinned-grid">
      <div class="pinned-card">
        <h3><a href="/blog/best-budget-grow-lights-for-indoor-plants/">Best Budget Grow Lights for Indoor Plants</a></h3>
        <div class="meta">Gear guide • grow lights • affiliate links</div>
        <p>Find the best affordable grow lights for houseplants. Our top picks under $50, plus beginner tips on placement and usage.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/starter-kit/">Starter Kit: Budget Edition</a></h3>
        <div class="meta">11 items • all under $20</div>
        <p>The essentials to prevent the most common plant disasters.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/level-up-basics/">Level Up Your Basics: Gear Worth the Upgrade</a></h3>
        <div class="meta">Gear upgrades • affiliate links</div>
        <p>When cheap tools aren't cutting it anymore. The gear worth spending more on.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/aesthetic-gear/">Aesthetic Gear Guide: Stylish Stuff That Actually Works</a></h3>
        <div class="meta">Style + function • affiliate links</div>
        <p>Plant gear that looks good on your shelf and actually helps your plants thrive.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/splurge-edition/">Splurge Edition: Gear Worth the Investment</a></h3>
        <div class="meta">Premium gear • affiliate links</div>
        <p>The fancy stuff for serious plant parents. Worth it or just expensive?</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/best-moisture-meters/">Best Moisture Meters for Houseplants</a></h3>
        <div class="meta">Tool guide • affiliate links</div>
        <p>Stop guessing when to water. The best moisture meters tested and ranked.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/best-pruning-shears/">Best Pruning Shears for Houseplants</a></h3>
        <div class="meta">Tool guide • affiliate links</div>
        <p>Sharp, clean cuts prevent disease. Here's what actually works.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/best-pots/">Best Pots for Houseplants</a></h3>
        <div class="meta">Gear guide • drainage • affiliate links</div>
        <p>The complete guide to choosing the right pot. Drainage holes matter more than you think.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/best-gifts-plant-lovers/">Best Gifts for Plant Lovers</a></h3>
        <div class="meta">Gift guide • affiliate links</div>
        <p>What to buy the plant person in your life. From practical to delightfully weird.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/pest-control-kit/">Pest Control Starter Kit: The Minimal Gear That Works</a></h3>
        <div class="meta">Pest gear • affiliate links</div>
        <p>Sticky traps, BTI, insecticidal soap, and a loupe. The short list that actually works.</p>
      </div>
      <div class="pinned-card">
        <h3><a href="/blog/best-online-plant-shops/">Best Online Plant Shops</a></h3>
        <div class="meta">Shopping guide • curated</div>
        <p>Where to buy healthy plants online without getting scammed or receiving mush.</p>
      </div>
    </div>
  </div>

  <h2 class="section-title">🌱 Getting Started</h2>

  <div class="card">
    <h2><a href="/blog/identify-houseplant-by-picture-leaves-no-name/">I Don't Know What Plant This Is — Identify Your Mystery Houseplant</a></h2>
    <div class="meta">Getting Started • plant ID • leaf shape • beginner</div>
    <p>Got a plant with no label? Learn how to identify any houseplant using leaf shape, growth habit, and vein patterns — free guide with printable ID worksheet.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/feng-shui-plants-for-home-positive-energy-good-luck/">Best Feng Shui Houseplants — Plants That Attract Positive Energy to Every Room</a></h2>
    <div class="meta">Getting Started • feng shui • room guide • plant selection • beginner</div>
    <p>The best feng shui houseplants for positive energy, good luck and prosperity — with a room-by-room placement guide, bagua map tips and care advice.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-build-a-terrarium-closed-ecosystem-indoor-plants/">How to Build a Terrarium — Closed Ecosystem Guide for Indoor Plants</a></h2>
    <div class="meta">Getting Started • terrarium • closed ecosystem • DIY • beginner</div>
    <p>Learn how to build a self-sustaining closed terrarium — ecosystem science, best plants, proper layering, and troubleshooting all covered.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/indestructible-houseplants-hardest-plants-survive-neglect/">Indestructible Plants — The Hardest Houseplants That Survive Everything</a></h2>
    <div class="meta">Beginner guide • indestructible • beginner picks</div>
    <p>These 12 houseplants survive neglect, low light, and forgetful owners. Snake plant, ZZ plant, pothos, and more — pet-safe options included.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-bedroom-plants-for-sleep-air-quality/">Best Bedroom Plants for Sleep & Clean Air — Top Picks for Your Sanctuary</a></h2>
    <div class="meta">Room guide • bedroom • sleep • air quality</div>
    <p>Transform your bedroom into a sanctuary with plants that purify air and boost sleep. Expert picks, care guides, and beginner tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-plants-for-bathroom-high-humidity/">Best Plants for Your Bathroom — High Humidity Picks That Actually Thrive</a></h2>
    <div class="meta">Room guide • bathroom • high humidity</div>
    <p>Transform your bathroom with plants that actually love humidity. Discover the best high-humidity houseplants for steamy bathrooms, plus placement tips.</p>
  </div>
  <div class="card">
    <h2><a href="/blog/best-humidifier-for-houseplants-indoor-plants/">Best Humidifiers for Houseplants: Stop Misting, Start Thriving</a></h2>
    <div class="meta">Getting Started • humidifier • humidity • affiliate links</div>
    <p>Misting doesn't work. Here's the science behind why — and the humidifiers that actually help your houseplants thrive.</p>
  </div>



  <div class="card">
    <h2><a href="/blog/easiest-houseplants/">10 Easiest Houseplants to Keep Alive</a></h2>
    <div class="meta">Beginner guide • affiliate links</div>
    <p>The most forgiving houseplants for beginners who kill everything. From "literally unkillable" to "pretty hard to mess up."</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-low-light-plants/">Best Low Light Plants That Actually Survive</a></h2>
    <div class="meta">Beginner guide • low light • affiliate links</div>
    <p>Plants that don't need a south-facing window. The real low-light champions for dark apartments and sad corners.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/plants-by-room/">Best Plants for Every Room</a></h2>
    <div class="meta">Selection guide • room-specific</div>
    <p>Bedroom plants, bathroom plants, office plants, and dark corner solutions.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/office-desk-plants/">Office Desk Plants: Best Picks for Productivity & Clean Air</a></h2>
    <div class="meta">Guide • desk plants • workspace</div>
    <p>Find the perfect office desk plants for your workspace. Low-maintenance, low-light, and pet-friendly options.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pet-safe-plants/">Pet-Safe Houseplants — The Complete Guide</a></h2>
    <div class="meta">Safety guide • pet-friendly</div>
    <p>Beautiful plants that won't hurt your furry friends. Includes photos and care tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/plant-shopping/">Plant Shopping Guide — What to Buy and What to Avoid</a></h2>
    <div class="meta">Shopping guide</div>
    <p>Don't make these mistakes at the plant store. Here's how to choose healthy plants.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/10-moody-dark-houseplants/">10 Moody Dark Houseplants for a Dramatic Indoor Look</a></h2>
    <div class="meta">Plant picks • dark foliage</div>
    <p>Dark foliage is having a moment. Here are 10 plants that won't make your space look like a cheerful nursery.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/top-10-best-houseplants-for-mental-health/">10 Best Houseplants for Mental Health & Stress Relief</a></h2>
    <div class="meta">Guide • mental health • stress relief</div>
    <p>The top houseplants for anxiety, stress relief, and depression. Care routines as mindfulness practices.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/houseplants-clean-air/">Houseplants for Clean Air — Myth vs Reality</a></h2>
    <div class="meta">Science • air quality</div>
    <p>The famous NASA study was for space stations, not your apartment. Here's what the science actually says.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/plant-myths/">Common Houseplant Myths That Need to Die</a></h2>
    <div class="meta">Myths • misconceptions</div>
    <p>Your plants aren't trying to kill you. Here are the lies the internet told you.</p>
  </div>

  <h2 class="section-title">🪴 Plant Care Essentials</h2>

  <div class="card">
    <h2><a href="/blog/humidity-solutions-for-apartments-houseplants-dry-climate/">Humidity Solutions for Apartments: Small-Space Plant Care in Dry Climates</a></h2>
    <div class="meta">Plant Care Essentials • humidity • dry climate • apartment • renter-friendly • humidifier</div>
    <p>From free hacks to the right humidifier — practical humidity solutions for apartment plant parents in dry climates. A ranked solutions ladder for every budget.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/plant-shelf-ideas-styling-indoor-plants/">How to Style a Plant Shelf — Shelfie Ideas That Actually Look Good</a></h2>
    <div class="meta">Plant Care Essentials • shelf styling • arrangement • IKEA Kallax • pot colors</div>
    <p>Your plant shelf doesn't have to look chaotic or sterile. Learn how to style a plant shelf with plant health in mind — the rules, fixes, and shelfie ideas that work.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-clean-houseplant-leaves-dust-indoor-plants/">How to Clean Houseplant Leaves — Why It Matters More Than You Think</a></h2>
    <div class="meta">Plant Care Essentials • leaf cleaning • maintenance • pest inspection</div>
    <p>Dusty houseplant leaves block light and invite pests. Learn 5 methods for cleaning indoor plant leaves, which to use for each plant type, and what NOT to put on them.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-make-houseplants-grow-faster-indoor-plant-growth-tips/">How to Make Your Houseplants Grow Faster — Proven Tips That Actually Work</a></h2>
    <div class="meta">Plant Care Essentials • growth tips • light • fertilizer • pruning</div>
    <p>Accelerate your indoor plant growth with science-backed tips. Learn what actually speeds up growth — light, fertilizer, watering precision, and more.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-move-plants-safely-relocation-guide/">Moving with Plants: Complete Relocation Guide for Plant Parents</a></h2>
    <div class="meta">Plant Care Essentials • moving • transport • relocation</div>
    <p>The stress of leaving your green family behind doesn't have to kill them. Learn how to pack, transport, and settle your plants in your new home—without the panic.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/too-many-houseplants-how-to-manage-large-plant-collection/">Houseplant Hoarding Intervention — When to Stop Buying & Start Caring</a></h2>
    <div class="meta">Plant Care Essentials • collection management • buying freeze</div>
    <p>Overwhelmed by your plant collection? Use this step-by-step intervention to stop impulse buying, triage your plants, and build a care routine that actually works.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/dark-foliage-houseplants-care-guide-black-burgundy-indoor-plants/">Dark Foliage Houseplants Care Guide — Black Velvet, Burgundy & Chocolate Plants</a></h2>
    <div class="meta">Plant Care Essentials • dark foliage • humidity • soil mix</div>
    <p>The plants that make your plant shelf look like it belongs in a witch's study. Here's how to keep them that way.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/houseplant-light-levels-by-window-direction/">Houseplant Light by Window Direction — Find Your Perfect Spot</a></h2>
    <div class="meta">Guide • light • window direction</div>
    <p>Stop guessing where to put your plants. Here's the honest breakdown of what each window direction actually delivers — north, south, east, west.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-nutrients-for-hydroponic-houseplants/">Best Nutrients for Hydroponic Houseplants</a></h2>
    <div class="meta">Guide • hydroponics • nutrients • affiliate links</div>
    <p>Find the best hydroponic nutrients for indoor plants. Beginner-friendly picks, feeding schedules, and tips for houseplant parents growing without soil.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/light-guide/">Light Guide: Stop Killing Plants in Dark Corners</a></h2>
    <div class="meta">Guide • grow lights • affiliate links</div>
    <p>Everything about houseplant lighting: window placement, measuring light, signs of stress, and grow light recommendations.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/humidity/">Humidity Guide: Why Your Tropicals Hate Your Apartment</a></h2>
    <div class="meta">Guide • affiliate links</div>
    <p>Which plants need humidity, signs they're struggling, and how to actually fix it (spoiler: get a humidifier).</p>
  </div>

  <div class="card">
    <h2><a href="/blog/fertilizer-guide/">Fertilizer Guide — When, What, and How Much</a></h2>
    <div class="meta">Guide • nutrients • affiliate links</div>
    <p>The no-nonsense guide to NPK ratios, feeding schedules, and not killing your plants with kindness.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-prune/">How to Prune Houseplants</a></h2>
    <div class="meta">Care guide • pruning</div>
    <p>Pruning isn't just cutting — it's shaping, encouraging, and multiplying your plants the right way.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-repot/">How to Repot a Plant — Step by Step</a></h2>
    <div class="meta">Care guide • affiliate links</div>
    <p>The complete guide to repotting houseplants without causing transplant shock or root damage.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/succulent-care/">Succulent Care — The No-Nonsense Guide to Not Killing Them</a></h2>
    <div class="meta">Guide • succulents • care basics</div>
    <p>Succulents are marketed as unkillable, but they die in homes every day. Here's how to actually keep them alive.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/seasonal-care-calendar/">Seasonal Care Calendar</a></h2>
    <div class="meta">Guide • seasonal • maintenance</div>
    <p>A month-by-month checklist of what your houseplants actually need from you right now.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/winter-houseplant-care-checklist/">Winter Houseplant Care Checklist — Keep Plants Alive Through Cold Months</a></h2>
    <div class="meta">Guide • seasonal • winter care</div>
    <p>November through March care tips for watering, humidity, light & pest prevention.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/spring-repotting-guide/">Spring Repotting Guide — When & How to Repot Houseplants</a></h2>
    <div class="meta">Guide • seasonal • repotting</div>
    <p>Why spring is the best time to repot. Signs your plant needs it, plus a complete spring checklist.</p>
  </div>

  <h2 class="section-title">💧 Watering & Soil</h2>

  <div class="card">
    <h2><a href="/blog/white-mold-on-houseplant-soil-how-to-fix/">White Mold on Houseplant Soil — What It Is and How to Fix It</a></h2>
    <div class="meta">💧 Watering & Soil • mold • soil issues • overwatering • prevention</div>
    <p>White mold on houseplant soil is usually harmless — but it signals overwatering. Learn to identify it vs. mineral deposits, treat it, and stop it coming back.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/perlite-vs-vermiculite-vs-pumice-houseplant-soil-amendment/">Perlite vs Vermiculite vs Pumice — Which Soil Amendment Does Your Plant Need?</a></h2>
    <div class="meta">💧 Watering & Soil • perlite • vermiculite • pumice • soil amendment • drainage</div>
    <p>Not sure which soil amendment to use? Compare perlite, vermiculite, and pumice for drainage, moisture retention, and aeration. Find the perfect match for your houseplants.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/coco-coir-houseplant-soil-amendment-how-to-use/">Coco Coir for Houseplants — The Modern Soil Amendment Replacing Peat Moss</a></h2>
    <div class="meta">Watering & Soil • coco coir • soil amendment • cal-mag • peat moss alternative</div>
    <p>Learn how to use coco coir for houseplants. Covers rehydration, cal-mag buffering, mix recipes by plant type, and coco coir vs peat moss.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-water-for-houseplants/">Best Water for Houseplants — Tap vs Filtered vs Distilled (What Actually Matters)</a></h2>
    <div class="meta">Watering & Soil • water quality • TDS • filtering</div>
    <p>Confused about what water to use for your houseplants? Here's what actually matters about tap, filtered, and distilled water — and how to choose the right one for your plants.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/diy-potting-mix-recipe-homemade-soil-indoor-plants/">DIY Potting Mix Recipes — Custom Soil for Every Plant Type</a></h2>
    <div class="meta">Watering & Soil • DIY • soil mix • repotting</div>
    <p>Learn to make the best potting mix for every plant. 5 proven recipes for tropical, succulent, and all-purpose soil. Save money and give plants the drainage they need.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/watering-guide/">Watering Guide: Stop Drowning Your Plants</a></h2>
    <div class="meta">Guide • affiliate links</div>
    <p>When and how to water based on soil moisture, not a schedule. Plus signs of over/underwatering and tools that help.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/bottom-watering-plants-the-complete-guide/">Bottom Watering Plants: When It Helps & When It Doesn't</a></h2>
    <div class="meta">Guide • watering techniques</div>
    <p>Learn how to bottom water plants the right way. When it actually helps vs when it's useless.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/best-self-watering-systems-for-vacation-plant-care/">Best Self-Watering Systems for Vacation Plant Care (2026)</a></h2>
    <div class="meta">Guide • vacation care • affiliate links</div>
    <p>Keep your plants alive while you're away. Self-watering systems, globes, and DIY solutions tested and ranked.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/hydrophobic-soil/">Hydrophobic Soil: Fix It Fast</a></h2>
    <div class="meta">Troubleshooting • soil issues</div>
    <p>Water rolls off instead of soaking in? Your soil is hydrophobic. Here's the fix.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/repotting/">Repotting Roulette: Pot Size + Soil Mix Calculator</a></h2>
    <div class="meta">Calculator • guide • affiliate links</div>
    <p>Figure out what pot size you need and what soil mix to use. Interactive calculator plus recipes for different plant types.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/root-bound-plant-signs-what-to-do/">Is Your Plant Root Bound? Signs to Check & What to Actually Do About It</a></h2>
    <div class="meta">💧 Watering & Soil • diagnosis • repotting • troubleshooting • beginner</div>
    <p>The symptoms look like under-watering or overwatering — but the fix is completely different. Here's how to diagnose root bound and what to do about it.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/leca-semi-hydro-houseplants-beginner-guide/">LECA & Semi-Hydro for Houseplants: The Complete Beginner's Guide</a></h2>
    <div class="meta">💧 Watering & Soil • LECA • semi-hydro • watering methods • hydroponics • beginner</div>
    <p>Ditch the soil, simplify watering, and grow happier roots — without the overwhelm. This guide walks beginners through LECA step-by-step.</p>
  </div>

  <h2 class="section-title">🔬 Propagation</h2>

  <div class="card">
    <h2><a href="/blog/pothos-propagation-guide/">Pothos Propagation Guide</a></h2>
    <div class="meta">Propagation • pothos • affiliate links</div>
    <p>Turn one pothos into infinite plants. Complete guide to propagating pothos in water, soil, and by division.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/propagation/">Propagation Guide: Turn One Plant Into Many</a></h2>
    <div class="meta">Guide • affiliate links</div>
    <p>Water vs soil propagation, finding nodes, which plants are easiest, and common problems solved.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/water-vs-soil-propagation/">Water Propagation vs Soil Propagation</a></h2>
    <div class="meta">Propagation • comparison</div>
    <p>Step-by-step comparison of propagating houseplants in water versus soil.</p>
  </div>

  <h2 class="section-title">🐛 Pest Control</h2>

  <div class="card">
    <h2><a href="/blog/whiteflies-on-houseplants-how-to-get-rid-of-treatment/">Whiteflies on Houseplants — Identification, Treatment & Prevention Guide</a></h2>
    <div class="meta">Pest Control • whitefly • identification • treatment guide • prevention</div>
    <p>Identify, treat, and prevent whiteflies on your houseplants with this complete guide. Includes DIY spray recipes, treatment ladder, and quarantine tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/aphids-on-houseplants-identification-treatment-prevention/">Aphids on Houseplants — How to Spot, Kill & Prevent Them</a></h2>
    <div class="meta">Pest Control • identification • treatment guide • aphid • prevention</div>
    <p>Complete guide to identifying and eliminating aphids on houseplants. Step-by-step treatment ladder, natural remedies, and prevention tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/scale-insects-on-houseplants-identification-treatment/">Scale Insects on Houseplants — Identification & Treatment Guide</a></h2>
    <div class="meta">Pest Control • identification • treatment guide • scale • crawlers</div>
    <p>Learn to identify scale insects on houseplants and eliminate them for good. Covers soft vs armored scale, crawler timing, treatment schedules, and stop criteria.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/thrips-on-houseplants/">Thrips on Houseplants — How to Identify, Treat & Prevent Them for Good</a></h2>
    <div class="meta">Pest control • treatment guide • thrips • identification</div>
    <p>Stop thrips in their tracks: the 4-week lifecycle-based protocol for identifying, treating, and preventing thrips on houseplants — what actually works.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/houseplant-pest-prevention-routine-monthly-checklist/">Houseplant Pest Prevention Routine — A Monthly Checklist to Stay Bug-Free</a></h2>
    <div class="meta">Pest control • prevention • routine</div>
    <p>A simple monthly pest prevention routine for houseplants. Check inspections, quarantine new plants, and spot early signs before infestations start.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pest-id/">Pest ID Guide: What's Eating Your Plant</a></h2>
    <div class="meta">Pest control • affiliate links</div>
    <p>Identify fungus gnats, spider mites, mealybugs, aphids, scale, and thrips. Treatment ladders from free to nuclear options.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-get-rid-of-fungus-gnats-in-houseplants/">How to Get Rid of Fungus Gnats in Houseplants (Finally)</a></h2>
    <div class="meta">Pest control • treatment guide</div>
    <p>Those tiny flying jerks ruining your plants? Ranked methods, timeline expectations, and the stuff the internet gets wrong.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/spider-mites-guide/">Spider Mites: Complete Guide to ID, Treatment & Prevention</a></h2>
    <div class="meta">Pest control • treatment guide</div>
    <p>How to identify, treat, and prevent spider mites on houseplants. Emergency protocol, natural remedies, and pro tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/mealybugs-houseplants/">Mealybugs on Houseplants — Complete Treatment Guide</a></h2>
    <div class="meta">Pest control • treatment guide</div>
    <p>Mealybugs keep coming back? Here's why and how to actually get rid of them for good.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/quarantine-new-plant/">How to Quarantine a New Plant (14-Day Protocol)</a></h2>
    <div class="meta">Prevention • pest control</div>
    <p>Don't let one infected plant take down your entire collection. Quarantine saves lives.</p>
  </div>

  <h2 class="section-title">🩺 Troubleshooting</h2>

  <div class="card">
    <h2><a href="/blog/how-to-save-a-dying-houseplant-fast-emergency/">Plant Emergency First Aid — Save a Dying Plant in 48 Hours</a></h2>
    <div class="meta">Troubleshooting • emergency care • root rot • diagnosis • recovery</div>
    <p>Your plant is crying for help. This 48-hour emergency protocol tells you exactly what to check first, what to do next, and when to give up.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-care-for-mail-order-plants-after-shipping/">Mail-Order Plant Unboxing: How to Save Sad Shipping Survivors</a></h2>
    <div class="meta">Troubleshooting • shipping stress • recovery • diagnosis • beginner</div>
    <p>Your plant arrived looking rough. Here's exactly what to do. Step-by-step recovery guide for stressed mail-order plants — wilted, drooping, or yellowing leaves.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/common-houseplant-mistakes-beginner-errors-kill-plants/">Common Houseplant Mistakes That Kill Plants — Beginner Errors to Avoid</a></h2>
    <div class="meta">Troubleshooting • beginner mistakes • overwatering • drainage • watering schedule • pot size</div>
    <p>Killing houseplants is normal — but preventable. Learn the 7 beginner mistakes that kill plants, why they actually die, and how to rescue yours.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/fiddle-leaf-fig-dropping-leaves/">Fiddle Leaf Fig Dropping Leaves Troubleshooting</a></h2>
    <div class="meta">Troubleshooting • fiddle leaf fig • diagnosis</div>
    <p>Your fiddle leaf fig is dropping leaves? Learn the 6 causes, how to identify them, and step-by-step fixes to save your plant.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/plant-er/">Plant ER: Troubleshooting Guide</a></h2>
    <div class="meta">Diagnosis • troubleshooting • affiliate links</div>
    <p>Yellow leaves? Brown tips? Drooping? Diagnose the problem before it's too late with this symptom checker.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/overwatering-underwatering/">Signs of Overwatering vs Underwatering: Decision Tree</a></h2>
    <div class="meta">Troubleshooting • diagnosis</div>
    <p>They look eerily similar. Here's how to tell which one is killing your plant.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/brown-tips/">Brown Tips on Houseplants: The Real Causes</a></h2>
    <div class="meta">Troubleshooting • diagnosis</div>
    <p>Brown tips aren't always underwatering. Here's what's really going on.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/drooping-plant/">Why Is My Plant Drooping?</a></h2>
    <div class="meta">Troubleshooting • diagnosis</div>
    <p>Drooping isn't always death. Here's how to tell what's wrong and fix it.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/leaves-falling-off/">Leaves Falling Off Houseplants: When It's Normal vs a Problem</a></h2>
    <div class="meta">Troubleshooting • diagnosis</div>
    <p>Not all leaf drop is a crisis. Here's how to tell the difference.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/treat-root-rot/">How to Treat Root Rot</a></h2>
    <div class="meta">Troubleshooting • emergency care</div>
    <p>Act fast. Root rot spreads quickly, but it's not always a death sentence.</p>
  </div>

  <h2 class="section-title">🌿 Monstera Hub</h2>

  <div class="card">
    <h2><a href="/blog/monstera-adansonii-vs-obliqua-difference-care/">Monstera Adansonii vs Obliqua — How to Tell the Difference (& Which to Buy)</a></h2>
    <div class="meta">Monstera Hub • identification • buying guide • care comparison</div>
    <p>Confused about Monstera Adansonii vs Obliqua? This guide covers 7 unmistakable differences, honest buying tips, and a clear 'which to buy' decision framework.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/thai-constellation-monstera-care-guide/">Thai Constellation Monstera Care: The Stable Variegated Variety Worth the Price</a></h2>
    <div class="meta">Monstera Hub • Thai Constellation • variegated plants • care guide</div>
    <p>Master Thai Constellation Monstera care with this complete guide. Learn why its stable variegation makes it worth the price compared to Albo — watering, humidity, light & more.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-save-a-dying-monstera-from-root-rot/">How to Save a Dying Monstera from Root Rot (Emergency Guide)</a></h2>
    <div class="meta">Monstera • troubleshooting • emergency care</div>
    <p>Act fast to save your Monstera! This step-by-step guide shows exactly how to diagnose, treat, and recover root rot in Monsteras.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-propagation/">Propagating Monstera: Water vs Soil Success Rates</a></h2>
    <div class="meta">Monstera • propagation</div>
    <p>Step-by-step guide to propagating Monsteras. Success rates, pros, cons, and troubleshooting.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-yellow-leaves/">Why Is My Monstera Turning Yellow?</a></h2>
    <div class="meta">Monstera • troubleshooting</div>
    <p>Decode every shade of yellow on your Monstera. Monstera-specific diagnostic guide.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-aerial-roots/">Monstera Aerial Roots: What to Do</a></h2>
    <div class="meta">Monstera • care</div>
    <p>Should you cut them, leave them, or train them? The complete guide to Monstera aerial roots.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-fenestrations/">When Will My Monstera Fenestrate?</a></h2>
    <div class="meta">Monstera • growth</div>
    <p>Why your Monstera still has baby leaves and what you can do to encourage fenestrations.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-support/">Monstera Support: Moss Pole vs Trellis vs Stake</a></h2>
    <div class="meta">Monstera • support structures</div>
    <p>Which support structure is right for your Monstera? Moss pole, trellis, or stake compared.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/monstera-variegation/">Monstera Variegation Types: Albo vs Thai Constellation vs Aurea</a></h2>
    <div class="meta">Monstera • varieties</div>
    <p>The crown jewels of indoor gardening. Compare variegated Monstera types and care needs.</p>
  </div>

  <h2 class="section-title">🪴 Pothos Hub</h2>

  <div class="card">
    <h2><a href="/blog/best-pothos-for-low-light/">Best Pothos for Low Light</a></h2>
    <div class="meta">Pothos • low light • houseplants</div>
    <p>Discover the best pothos varieties for low light. Our ranking shows which thrive in dim spaces—from Jade to Marble Queen—with room-by-room recommendations.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pothos-leaves-troubleshooting/">Pothos Brown/Yellow Leaves Troubleshooting</a></h2>
    <div class="meta">Troubleshooting • pothos • diagnosis</div>
    <p>Discover why your Pothos leaves are turning yellow or brown. Quick diagnosis guide with proven fixes to save your plant.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pothos-complete-care-guide/">Pothos Complete Care Guide</a></h2>
    <div class="meta">Pothos • care guide</div>
    <p>The only Pothos care guide you need—light, water, soil, pruning, propagation, and troubleshooting all in one place.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pothos-varieties/">Pothos Varieties Compared: Golden vs Marble vs Neon vs Jade</a></h2>
    <div class="meta">Pothos • varieties</div>
    <p>Which Pothos is right for you? Compare Golden, Marble, Neon, and Jade side-by-side.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/pothos-not-trailing/">Why Is My Pothos Not Trailing?</a></h2>
    <div class="meta">Pothos • troubleshooting</div>
    <p>Pothos looking more like a bush than a vine? Here's how to get those cascading trails.</p>
  </div>

  <h2 class="section-title">🌸 Plant Spotlights</h2>

  <div class="card">
    <h2><a href="/blog/string-of-pearls-care-guide/">String of Pearls Care: Complete Senecio Rowleyanus Guide</a></h2>
    <div class="meta">🌸 Plant Spotlights • string of pearls • succulent • watering • propagation • troubleshooting • pet toxic</div>
    <p>Master String of Pearls care with pearl-reading diagnostics, soak-and-dry watering, propagation steps, and rescue tips. Keep your SOP alive.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/zz-plant-care-guide/">ZZ Plant Care Guide: The Indestructible Favorite</a></h2>
    <div class="meta">🌸 Plant Spotlights • ZZ plant • care guide • watering • propagation • troubleshooting • varieties</div>
    <p>The only ZZ plant guide that explains the 'why' behind every care rule. Covers watering, light, soil, propagation, toxicity, varieties, and troubleshooting.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/rare-philodendron-varieties-pink-princess-spiritus-sancti-comparison/">Rare Philodendron Varieties Compared: Pink Princess vs Spiritus Sancti</a></h2>
    <div class="meta">🌸 Plant Spotlights • philodendron • Pink Princess • Spiritus Sancti • comparison • care difficulty • pricing</div>
    <p>Once $10,000 plants, now under $50. Compare Pink Princess vs Spiritus Sancti care, cost, difficulty, and looks — the only guide you need in 2026.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/stromanthe-triostar-care-guide/">Stromanthe Triostar Care Guide — The Most Dramatic Prayer Plant You'll Ever Own</a></h2>
    <div class="meta">🌸 Plant Spotlights • prayer plant • humidity • filtered water • troubleshooting • propagation</div>
    <p>Filtered water, 60%+ humidity, and bright indirect light — the three things that make or break a Stromanthe Triostar. This guide covers care, troubleshooting, propagation, and how to keep those pink leaves.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/philodendron-moonlight-care-guide-indoor-chartreuse-plant/">Philodendron Moonlight Care Guide — The Bright Chartreuse Foliage Plant</a></h2>
    <div class="meta">🌸 Plant Spotlights • philodendron • chartreuse • care guide • pruning • propagation</div>
    <p>Complete guide to Philodendron Moonlight — the self-heading clumper with chartreuse new growth. Covers watering, aroid soil mix, light, pruning for bushier growth, and troubleshooting yellow leaves.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/caladium-plant-care-indoor-shade/">Caladium Care Guide — Heart-Shaped Leaves for Shade Gardens</a></h2>
    <div class="meta">🌸 Plant Spotlights • caladium • dormancy • shade plants • care guide</div>
    <p>Complete caladium care guide for indoor growers. Learn watering, light, soil mix, dormancy, and troubleshooting heart-shaped caladium leaves.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/schefflera-umbrella-plant-care-indoor/">Schefflera Care Guide — Umbrella Plants That Don't Die</a></h2>
    <div class="meta">Plant Spotlights • schefflera • umbrella plant • care guide • watering • pruning</div>
    <p>The umbrella plant earns its name from glossy, hand-shaped leaf clusters — and it's forgiving enough for beginners. With one caveat: stop moving it around. This guide covers watering, light, pruning, pest ID, and pet toxicity.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/tradescantia-wandering-jew-plant-care-indoor/">Tradescantia Care Guide — Wandering Jew Plants for Cascading Color</a></h2>
    <div class="meta">🌸 Plant Spotlights • tradescantia • pruning • propagation • care guide</div>
    <p>The fast-growing trailing plant that'll fill your home with color in weeks — plus how to keep it full, bushy, and vibrantly striped.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/ficus-benjamina-weeping-fig-care-indoor/">Weeping Fig Care Guide — Why Your Ficus benjamina Keeps Dropping Leaves</a></h2>
    <div class="meta">🌸 Plant Spotlights • ficus benjamina • leaf drop • troubleshooting • care guide</div>
    <p>Ficus benjamina drops leaves at the slightest change. This guide covers every cause of leaf drop, fixes for each, and a care routine that keeps your Weeping Fig stable year-round.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/syngonium-arrowhead-plant-care-indoor/">Syngonium Care Guide — Arrowhead Vines for Every Style</a></h2>
    <div class="meta">🌸 Plant Spotlights • syngonium • beginner • care guide • propagation</div>
    <p>Arrowhead vines are the low-fuss aroid you'll want in every room. Here's how to keep them alive — and looking good. Covers light, water, soil, pruning, and propagation.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/orchid-care-beginner-guide-phalaenopsis-indoor/">Orchid Care for Beginners — Phalaenopsis Made Easy</a></h2>
    <div class="meta">🌸 Plant Spotlights • orchid • phalaenopsis • beginner • watering • reblooming</div>
    <p>The moth orchid sitting on your counter isn't fragile. You're just loving it to death. Learn the Phalaenopsis myth-busting guide that actually works — no guilt, just results.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/peperomia-care-guide-indoor-plant-varieties/">Peperomia Care Guide — Perfect Small Plants for Any Space</a></h2>
    <div class="meta">🌸 Plant Spotlights • peperomia • care guide • watering • propagation • beginner • pet-safe</div>
    <p>Learn to grow peperomia indoors — variety selector by space & light, semi-succulent watering, troubleshooting & propagation. Pet-safe & beginner-friendly.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/anthurium-care-indoor-plant-flamingo-flower/">Anthurium Care Guide — How to Keep Flamingo Flowers Thriving</a></h2>
    <div class="meta">🌸 Plant Spotlights • anthurium • flamingo flower • watering • humidity • soil mix • troubleshooting • pet toxic</div>
    <p>Complete anthurium care guide: watering (epiphyte logic), bright indirect light, 60-80% humidity, chunky soil mix, and troubleshooting yellow leaves, brown tips, and root rot.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/dracaena-care-guide-dragon-tree-indoor-plant/">Dracaena Care Guide — Complete Guide to Growing Dragon Trees Indoors</a></h2>
    <div class="meta">🌸 Plant Spotlights • dracaena • watering • propagation • troubleshooting • pet toxic</div>
    <p>The dragon tree is low-maintenance, striking, and almost impossible to kill — if you nail watering. Here's the full guide.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/spider-plant-care-guide-indoor-chlorophytum/">Spider Plant Complete Care — The Ultimate Guide to Chlorophytum</a></h2>
    <div class="meta">🌸 Plant Spotlights • spider plant • care guide • propagation • pet-safe • beginner</div>
    <p>The starter plant that never stops giving — and how to keep it alive without trying too hard. Covers watering, light, soil, and propagation.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/spider-plant-care-guide-chlorophytum-comosum-varieties-vittatum-bonnie/">Spider Plant Care Guide — The Easy, Air-Purifying Classic That Produces Babies</a></h2>
    <div class="meta">Plant Spotlights • spider plant • air-purifying • propagation • beginner • pet-safe</div>
    <p>Learn spider plant care — NASA's top air purifier that's pet-safe and produces babies. Covers watering, light, propagation, varieties Vittatum vs Bonnie, and troubleshooting brown tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/string-of-hearts-care-guide-variegated/">String of Hearts Care: Variegated Ceropegia Woodii Guide</a></h2>
    <div class="meta">Plant Spotlights • variegated plants • string of hearts • care guide</div>
    <p>The trailing vine that'll make you feel like you have your life together, even when you just forgot to water it for three weeks. Learn how to keep the pink variegation vibrant.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-care-for-chinese-evergreen-aglaonema-indoors-complete-guide/">Chinese Evergreen Care Guide — How to Grow Aglaonema Indoors</a></h2>
    <div class="meta">Plant Spotlights • aglaonema • low light • watering • care guide</div>
    <p>Complete Aglaonema care guide: watering schedule, light needs, soil mix, and troubleshooting yellow leaves and drooping. Low-maintenance and dark-room tolerant.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-care-for-prayer-plant-maranta-crispy-leaves-fix/">Prayer Plant Care Guide: Fix Crispy Leaves on Maranta</a></h2>
    <div class="meta">Plant Spotlights • prayer plant • maranta • troubleshooting • humidity</div>
    <p>Discover why your prayer plant has crispy leaves and how to fix it. Complete Maranta care guide with humidity tips, watering schedule, and prevention strategies.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/rubber-plant-ficus-elastica-varieties-burgundy-tineke-ruby-care-differences/">Rubber Plant Varieties Compared — Burgundy vs Tineke vs Ruby (Care & Differences)</a></h2>
    <div class="meta">Plant Spotlights • rubber plant • ficus elastica • varieties • comparison</div>
    <p>Compare Burgundy, Tineke & Ruby rubber plant varieties — light needs, care difficulty, price & looks. Find which one's right for your space.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-care-for-zz-plant-zamioculcas-indoors/">ZZ Plant Complete Care Guide — Light, Water, Propagation & Troubleshooting</a></h2>
    <div class="meta">Plant Spotlights • ZZ plant • care guide • watering • propagation • troubleshooting</div>
    <p>Complete ZZ plant care guide — light needs, watering schedule, propagation (3 methods), and troubleshooting. Decision tree for yellow leaves and root rot.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/rubber-plant-care-ficus-elastica/">Rubber Plant Care & Varieties — Burgundy, Tineke, Ruby and More</a></h2>
    <div class="meta">Plant Spotlights • rubber plant • ficus elastica • varieties • care guide</div>
    <p>Learn rubber plant care for Burgundy, Tineke, Ruby and more. Includes variety ID guide, watering tips, pruning advice, and problem diagnosis.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/air-plants-tillandsia-care-guide-indoor/">Air Plants (Tillandsia) Complete Care Guide — No Soil Required</a></h2>
    <div class="meta">Plant Spotlights • air plants • tillandsia • watering • display</div>
    <p>Everything you need to know about air plant care — watering, light, fertilizer, display ideas, and troubleshooting. Tillandsia thrive without soil.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/fittonia-nerve-plant-care/">Fittonia Care Guide — The Drama Queen Nerve Plant That Faints When Thirsty</a></h2>
    <div class="meta">Plant Spotlights • fittonia • nerve plant • humidity • terrarium</div>
    <p>Complete fittonia care guide for the dramatic nerve plant that faints when thirsty. Learn watering frequency, humidity needs, terrarium setups & revival tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/english-ivy-care-guide-indoor-hanging-plant/">English Ivy Care Guide — The Classic Hanging Indoor Plant</a></h2>
    <div class="meta">Plant Spotlights • english ivy • pruning • spider mites</div>
    <p>Your complete guide to growing English Ivy indoors. Spider mite prevention, watering schedule, pruning tips, pet safety, and the best varieties to try.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/bird-of-paradise-plant-care-indoor-flowering/">Bird of Paradise Care Guide — How to Get Those Epic Orange Flowers</a></h2>
    <div class="meta">Plant Spotlights • bird of paradise • blooming • care guide</div>
    <p>Learn the exact bloom trigger protocol for indoor bird of paradise plants. Get those iconic orange flowers with specific light, water, and pot-bound strategies.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/hoya-plant-care-guide-wax-plant-indoor/">Hoya Care Guide — Wax Plants, Blooms & Why Collectors Can't Stop Buying Them</a></h2>
    <div class="meta">Plant Spotlights • hoya • wax plant • care guide</div>
    <p>Complete hoya plant care guide for beginners & collectors. Learn light, water, soil needs, how to get your wax plant blooming, and top varieties.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/aloe-vera-plant-care-indoor-growing/">Aloe Vera Care Guide — Growing Healing Succulents Indoors</a></h2>
    <div class="meta">Plant Spotlights • aloe vera • succulents • care guide</div>
    <p>Learn how to care for aloe vera plants indoors with our easy guide. Discover watering schedules, light needs, soil tips, and how to harvest healing gel.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/peace-lily-brown-tips-drooping/">Peace Lily Brown Tips & Drooping Fixes</a></h2>
    <div class="meta">Plant Spotlights • peace lily • troubleshooting • diagnosis</div>
    <p>Is your peace lily drooping or getting brown tips? Discover the 6 main causes, quick fixes, and recovery timelines in this practical troubleshooting guide.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/peace-lily-complete-care-guide/">Peace Lily Complete Care Guide</a></h2>
    <div class="meta">Plant Spotlights • peace lily • care guide</div>
    <p>Master peace lily care: watering, light, humidity, and troubleshooting brown tips, yellow leaves, and no blooms. Visual diagnosis guide included.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/alocasia-dormancy-winter-care/">Alocasia Dormancy & Winter Care</a></h2>
    <div class="meta">Alocasia • dormancy • seasonal care</div>
    <p>Learn exactly how to care for your Alocasia in winter. Covering dormancy signs, dead vs dormant identification, and common mistakes to avoid.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/calathea-best-varieties-for-beginners/">Calathea Best Varieties for Beginners</a></h2>
    <div class="meta">Plant Spotlights • calathea • beginner guide</div>
    <p>Not sure which calathea to start with? Our beginner-friendly guide ranks the easiest calathea varieties with difficulty ratings, care tips, and exactly which ones to avoid.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/calathea-curling-leaves-causes-fixes/">Calathea Curling Leaves Causes & Fixes</a></h2>
    <div class="meta">Plant Spotlights • calathea • troubleshooting</div>
    <p>Why are your Calathea leaves curling? Discover the exact causes—in underwatering, humidity, root rot—and how to fix them with our visual diagnosis guide.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/calathea-care-guide/">Calathea Complete Care Guide</a></h2>
    <div class="meta">Plant Spotlights • calathea • care guide</div>
    <p>Learn how to care for Calathea plants with our complete guide. Fix brown leaves, curling, humidity needs, and watering secrets.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/snake-plant-varieties/">Snake Plant Varieties Compared (Moonshine, Whale Fin, Cylindrica)</a></h2>
    <div class="meta">Plant Spotlights • snake plant • varieties</div>
    <p>Compare Moonshine, Whale Fin, and Cylindrica snake plants side-by-side. Learn care needs, best uses, and which variety is right for your space.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/snake-plant-propagation/">Snake Plant Propagation (leaf cuttings, division)</a></h2>
    <div class="meta">Plant Spotlights • propagation • snake plant</div>
    <p>Learn the best snake plant propagation methods! Step-by-step guide covering leaf cuttings, division, and water propagation with week-by-week timeline.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/fiddle-leaf-fig-complete-care/">Fiddle Leaf Fig: Complete Care Guide</a></h2>
    <div class="meta">Plant Spotlights • fiddle leaf fig • care guide</div>
    <p>Master fiddle leaf fig care with our practical guide. Learn watering, light, soil mix, troubleshooting yellow leaves, brown spots, and more.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/snake-plant-care-guide/">Snake Plant: Complete Care Guide</a></h2>
    <div class="meta">Plant Spotlights • snake plant • care guide</div>
    <p>Learn how to care for snake plants with our complete guide. Watering, light, soil, and troubleshooting tips for healthy plants.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/how-to-care-for-your-philodendron/">How to Care for Your Philodendron</a></h2>
    <div class="meta">Plant Spotlights • philodendron • care guide</div>
    <p>Everything you need to keep your philodendron thriving — from watering disasters to humidity hacks. Vining vs self-heading varieties explained.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/2026-the-year-of-the-ficus-fiddle-leaf-fig-alternatives/">2026 The 'Year of the Ficus' (Fiddle Leaf Fig Alternatives)</a></h2>
    <div class="meta">Plant Spotlights • fiddle leaf fig • alternatives • rubber plant</div>
    <p>Discover the best fiddle leaf fig alternatives for 2026. Compare rubber plants, Ficus Audrey, and more—plus care tips to keep them alive.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/alocasia-black-pink-variegated-care/">Alocasia Black Velvet Pink Variegated Care Guide</a></h2>
    <div class="meta">Alocasia • variegated plants • care guide</div>
    <p>Complete care guide for Alocasia Black Velvet Pink Variegated. Learn light, watering, humidity needs, soil mix, and how to maintain stunning pink variegation.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/Peace-lily-blooms/">Peace Lily Not Blooming? Here's How to Get Flowers</a></h2>
    <div class="meta">Peace lily • blooming</div>
    <p>Why store-bought peace lilies bloom but yours doesn't, plus simple steps to encourage flowers at home.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/snake-plant-yellow/">Why Is My Snake Plant Turning Yellow? (Causes & Fixes)</a></h2>
    <div class="meta">Snake plant • troubleshooting</div>
    <p>Your snake plant's yellow leaves are screaming for help. Here's exactly what's wrong and how to fix it.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/calathea-crispy-edges/">Calathea Crispy Edges: Causes & Fixes to Save Your Plant</a></h2>
    <div class="meta">Calathea • humidity</div>
    <p>The 6 causes of brown edges and proven fixes. Expert humidity, water quality, and care tips.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/alocasia-varieties-guide/">Alocasia Polly vs Zebrina vs Dragon Scale: Complete Care Guide</a></h2>
    <div class="meta">Alocasia • care guide • comparison</div>
    <p>Compare Alocasia Polly, Zebrina & Dragon Scale side-by-side. Learn which variety fits your space, skill level, and care routine.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/alocasia-dying/">Alocasia Dying? 10 Causes & How to Save Your Plant (Expert Guide)</a></h2>
    <div class="meta">Alocasia • emergency care</div>
    <p>Your stunning Alocasia looking worse for wear? Here's exactly why — and how to bring it back.</p>
  </div>

  <div class="card">
    <h2><a href="/blog/brown-spots-fiddle-leaf-fig/">Brown Spots on Fiddle Leaf Fig: Causes & Solutions</a></h2>
    <div class="meta">Fiddle leaf fig • diagnosis</div>
    <p>Every cause — from root rot to pests — and a step-by-step fix for your FLF's brown spots.</p>
  </div>

<div class="footer">
  <p>🌿 Feral Foliage — unapologetically practical plant care</p>
  <p><a href="/disclosure/">Affiliate Disclosure</a></p>
</div>

</div>

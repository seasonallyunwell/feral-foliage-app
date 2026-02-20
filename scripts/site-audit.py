#!/usr/bin/env python3
"""FF Site Audit — comprehensive bi-weekly health check."""

import re, subprocess, sys
from pathlib import Path
from collections import Counter

os_path = Path(__file__).resolve().parent.parent
src = os_path / "src"
blog = src / "blog"
images = src / "images"

passes, warns, fails = 0, 0, 0
report_lines = []

def section(title):
    report_lines.append(f"\n**{title}**")

def add(status, msg):
    global passes, warns, fails
    icon = {"pass": "✅", "warn": "⚠️", "fail": "❌"}[status]
    report_lines.append(f"{icon} {msg}")
    if status == "pass": passes += 1
    elif status == "warn": warns += 1
    elif status == "fail": fails += 1

def detail(msg):
    report_lines.append(f"  {msg}")

# ── Load all articles ──
articles = {}
for p in sorted(blog.glob("*.md")):
    if p.name == "index.md":
        continue
    text = p.read_text()
    slug_m = re.search(r'^slug:\s*["\']?(.+?)["\']?\s*$', text, re.MULTILINE)
    title_m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', text, re.MULTILINE)
    desc_m = re.search(r'^description:\s*["\']?(.+?)["\']?\s*$', text, re.MULTILINE)
    articles[p.stem] = {
        "slug": slug_m.group(1).strip("\"'") if slug_m else p.stem,
        "title": title_m.group(1).strip("\"'") if title_m else "",
        "desc": desc_m.group(1).strip("\"'") if desc_m else "",
        "text": text,
        "path": p,
    }

index_text = (blog / "index.md").read_text()
indexed_slugs = set(re.findall(r'href="/blog/([^/]+)/"', index_text))
excluded_dupes = {"bottom-watering-plants", "best-self-watering-systems-vacation-plant-care", "fungus-gnats"}

# ═══ CONTENT STRUCTURE ═══
section("📂 Content Structure")
add("pass", f"{len(articles)} articles total")

missing = set(articles.keys()) - indexed_slugs - excluded_dupes
if not missing:
    add("pass", "All articles in blog index")
else:
    add("fail", f"{len(missing)} articles missing from blog index")
    for m in sorted(missing):
        detail(f"- {m}")

# Title mismatches
mismatches = []
for m in re.finditer(r'<a href="/blog/([^/]+)/">(.*?)</a>', index_text):
    slug = m.group(1)
    idx_title = re.sub(r'<[^>]+>', '', m.group(2)).strip()
    for a in articles.values():
        if a["slug"] == slug and idx_title != a["title"]:
            mismatches.append(slug)
            break
if not mismatches:
    add("pass", "Blog index titles match article titles")
else:
    add("warn", f"{len(mismatches)} title mismatches")
    for s in mismatches:
        detail(f"- {s}")

# Section sizes
sections = re.findall(r'class="section-title">(.*?)</h2>', index_text)
section_cards = []
for i, s in enumerate(sections):
    start = index_text.find(s)
    chunk = index_text[start:]
    next_sec = chunk.find("section-title", len(s))
    if next_sec > 0:
        chunk = chunk[:next_sec]
    count = chunk.count('<div class="card">')
    section_cards.append((s, count))
    detail(f"{s}: {count} articles")

# ═══ LINK HEALTH ═══
section("🔗 Link Health")

untagged_short = 0
untagged_amazon = 0
broken_internal = []
for a in articles.values():
    text = a["text"]
    if "amzn.to" in text:
        untagged_short += text.count("amzn.to")
    for u in re.findall(r'https?://(?:www\.)?amazon\.com[^\s\)"]+', text):
        if "feralfoliage-20" not in u:
            untagged_amazon += 1
    for slug in re.findall(r'href="/blog/([^/]+)/"', text):
        if slug not in {a2["slug"] for a2 in articles.values()} and slug not in set(articles.keys()):
            broken_internal.append((a["path"].name, slug))

if untagged_short == 0:
    add("pass", "No untagged amzn.to short links")
else:
    add("fail", f"{untagged_short} untagged amzn.to links")

if untagged_amazon == 0:
    add("pass", "All Amazon links have feralfoliage-20 tag")
else:
    add("fail", f"{untagged_amazon} Amazon links missing affiliate tag")

if not broken_internal:
    add("pass", "No broken internal links")
else:
    add("warn", f"{len(broken_internal)} broken internal links")
    for src_file, slug in broken_internal[:10]:
        detail(f"- {src_file} → /blog/{slug}/")

# ═══ IMAGE INTEGRITY ═══
section("🖼️ Image Integrity")

img_refs = set()
for a in articles.values():
    img_refs.update(m.lstrip("/") for m in re.findall(r'<img[^>]+src="([^"]+)"', a["text"]) if m.startswith("/"))

img_files = set(
    p.relative_to(images.parent).as_posix()
    for p in images.glob("*")
    if p.is_file() and not p.name.startswith(".")
)

unused = img_files - img_refs
missing_img = img_refs - img_files

if not unused:
    add("pass", "No orphaned image files")
else:
    add("warn", f"{len(unused)} image files not referenced by any article")

if not missing_img:
    add("pass", "All image references resolve to files")
else:
    add("fail", f"{len(missing_img)} image references point to missing files")
    for m in sorted(missing_img)[:10]:
        detail(f"- {m}")

# Figures in frontmatter
fm_issues = []
for a in articles.values():
    text = a["text"]
    if not text.startswith("---"):
        continue
    end = text.find("---", 3)
    if end == -1:
        continue
    fm = text[3:end]
    if "<figure" in fm or "<img" in fm:
        fm_issues.append(a["path"].name)

if not fm_issues:
    add("pass", "No HTML in YAML frontmatter")
else:
    add("fail", f"{len(fm_issues)} articles have HTML inside frontmatter")
    for f in fm_issues:
        detail(f"- {f}")

# ═══ SEO & METADATA ═══
section("📊 SEO & Metadata")

no_desc = []
long_desc = []
no_internal_links = []
for a in articles.values():
    if not a["desc"]:
        no_desc.append(a["path"].name)
    elif len(a["desc"]) > 160:
        long_desc.append(a["path"].name)
    body = a["text"]
    if body.startswith("---"):
        body = body[body.find("---", 3) + 3:]
    internal = re.findall(r'href="/blog/[^"]+/"', body)
    if len(internal) == 0:
        no_internal_links.append(a["path"].name)

if not no_desc:
    add("pass", "All articles have meta descriptions")
else:
    add("warn", f"{len(no_desc)} articles missing meta description")

if not long_desc:
    add("pass", "All meta descriptions within 160 chars")
else:
    add("warn", f"{len(long_desc)} meta descriptions over 160 chars")

if not no_internal_links:
    add("pass", "All articles have internal links")
else:
    add("warn", f"{len(no_internal_links)} articles have zero internal links")
    for f in no_internal_links[:10]:
        detail(f"- {f}")

# ═══ AFFILIATE COVERAGE ═══
section("💰 Affiliate Coverage")

inline_cta = 0
no_affiliate = 0
has_disclosure = 0
disc_position_ok = 0
for a in articles.values():
    text = a["text"]
    if 'class="product-link"' in text:
        inline_cta += 1
    elif "amazon.com" not in text:
        no_affiliate += 1
    disc = re.search(r'<strong>(?:Affiliate )?Disclosure:', text)
    tldr = re.search(r'TL;DR', text)
    if disc:
        has_disclosure += 1
    if disc and tldr and disc.start() < tldr.start():
        disc_position_ok += 1

add("pass", f"{inline_cta} articles with inline product-link CTAs")
detail(f"ℹ️ {no_affiliate} articles with no affiliate links")
add("pass", f"{has_disclosure} articles have disclosure callout")
if has_disclosure > 0 and disc_position_ok < has_disclosure:
    add("warn", f"{has_disclosure - disc_position_ok} disclosures positioned after TL;DR (should be before)")

# ═══ DUPLICATES ═══
section("🔄 Duplicates")

titles = [a["title"].lower() for a in articles.values()]
dupes = {t: c for t, c in Counter(titles).items() if c > 1}
if not dupes:
    add("pass", "No duplicate article titles")
else:
    add("warn", f"{len(dupes)} duplicate article titles")
    for t, c in dupes.items():
        detail(f'- "{t}" ({c}x)')

# ═══ HUB GRADUATION CHECK ═══
section("🎓 Hub Graduation Check")

# Count articles per plant in Plant Spotlights
plant_keywords = {
    "Snake Plant": ["snake-plant", "sansevieria"],
    "Calathea": ["calathea", "prayer-plant"],
    "Alocasia": ["alocasia"],
    "Fiddle Leaf Fig": ["fiddle-leaf", "ficus-lyrata"],
    "Peace Lily": ["peace-lily"],
    "Pothos": ["pothos"],
}
for plant, keywords in plant_keywords.items():
    count = sum(1 for stem in articles if any(kw in stem for kw in keywords))
    if count >= 4:
        add("warn", f"🎓 {plant} has {count} articles — ready for its own hub section?")
    elif count >= 2:
        detail(f"📈 {plant}: {count} articles (hub at 4+)")
    else:
        detail(f"🌱 {plant}: {count} article")

# ═══ BUILD ═══
section("🔨 Build")

try:
    result = subprocess.run(
        ["npm", "run", "build"],
        capture_output=True, text=True, timeout=30,
        cwd=os_path
    )
    if result.returncode == 0:
        add("pass", "Eleventy builds clean")
    else:
        add("fail", "Eleventy build failed")
        detail(result.stderr[:200])
except Exception as e:
    add("fail", f"Build check error: {e}")

# ═══ OUTPUT ═══
print()
print("## 🔍 FF Site Audit Report")
print()
print(f"**Score: {passes} passed · {warns} warnings · {fails} failures**")
print()
for line in report_lines:
    print(line)
print()
print("---")

import datetime
print(f"*Audit ran at {datetime.datetime.now().strftime('%Y-%m-%d %H:%M %Z')}*")

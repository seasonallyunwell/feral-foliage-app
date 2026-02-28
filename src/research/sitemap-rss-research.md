# Sitemap & RSS Research

## Dependencies

Current package.json dependencies:

| Package | Version | Purpose |
|---------|---------|---------|
| @11ty/eleventy | ^3.1.2 | Static site generator (devDependency) |

### NPM Scripts

- `build` - Runs `npx @11ty/eleventy`
- `serve` - Runs `npx @11ty/eleventy --serve`
- `test` - Test placeholder script

---

## Configuration

The `.eleventy.js` file contains the following configuration:

### Passthrough Copies
- `src/images` - Copies images folder to output
- `src/favicon.ico` - Copies favicon to output

### Server Options
- Port: 8080
- Default template engine: Nunjucks (njk)
- `showAllInput: true` - Shows all input files in directory listing
- `setServerPassthroughCopyBehavior: "copy"` - Configures passthrough behavior

### Directory Structure
- Input: `src`
- Output: `_site`
- Includes: `_includes`
- Data: `_data`

### Template Engines
- Markdown: Nunjucks (njk)
- HTML: Nunjucks (njk)

---

## Recommendations

To add sitemap and RSS feed functionality, install the following plugins:

### Required Plugins

1. **@11ty/eleventy-plugin-rss** - Provides filters and templates for generating RSS feeds
   - npm install @11ty/eleventy-plugin-rss

2. **@sardine/eleventy-plugin-sitemap** - Generates XML sitemaps for SEO
   - npm install @sardine/eleventy-plugin-sitemap

### Installation

```bash
npm install @11ty/eleventy-plugin-rss @sardine/eleventy-plugin-sitemap --save-dev
```

### Configuration

Add to `.eleventy.js`:

```javascript
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSitemap = require("@sardine/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  // Existing configuration...
  
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    hostname: "https://yourdomain.com",
    outputDirectory: "."
  });
  
  return {
    // ...existing config
  };
};
```

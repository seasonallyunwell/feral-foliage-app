module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy any other static assets
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  // Configure 404 page for local development server
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllInput: true,
    // This tells Eleventy's dev server to use our 404 page
    defaultTemplateEngine: "njk"
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Configure the 404 page for the dev server
    // This ensures 404.html is served for undefined routes
    setServerPassthroughCopyBehavior: "copy"
  };
};

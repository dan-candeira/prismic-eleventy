const {
	pluginPrismic,
	definePrismicPluginOptions,
} = require("eleventy-plugin-prismic");


const prismicPluginOptions = definePrismicPluginOptions({
  endpoint: "prismic-eleventy",
  singletons: ["home"],
  shortcodesNamespace: "prismic",
});


module.exports =  (eleventyConfig) => {
  // Conects the prismic-plugin to eleventy
  eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);

  return {
    // defining templating languages
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}
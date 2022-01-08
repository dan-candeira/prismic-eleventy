const {
  pluginPrismic,
  definePrismicPluginOptions,
} = require('eleventy-plugin-prismic');

module.exports = function (eleventyConfig) {

  const prismicPluginOptions = definePrismicPluginOptions({
    endpoint: "prismic-eleventy",
  });

  eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);
  
  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}
const sass = require('sass');

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
  
  // Compile Sass
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: function (contents, inputPath) {
      let includesPaths = [this.config.dir.includes];
      return (data) => {
        let ret = sass.compileAsync(inputPath, {
          includesPaths,
          data: contents
        });
        return ret.css.toString("utf8");
      }
    }
  })

  eleventyConfig.addTemplateFormats('scss');
  
  // Conects the prismic-plugin to eleventy
  eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);

  return {
    // defining templating language
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}
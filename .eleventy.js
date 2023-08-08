module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("bundle.js");
    eleventyConfig.addPassthroughCopy("https://fonts.googleapis.com/css2?family=Borel&display=swap");

  };

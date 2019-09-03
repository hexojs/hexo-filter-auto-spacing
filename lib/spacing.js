'use strict';

const pangu = require('pangu');

module.exports = function(str, data) {
  const options = this.config.spacing;
  const tags = options.tags;

  if (!tags) return str;

  const tagsPattern = tags.map(tag => {
    return `<${tag}.*>(?!<\/${tag}>).+?<\/${tag}>`;
  });

  const tagsRegex = new RegExp(tagsPattern.join('|'), 'gi');
  const words = Array.from(new Set(str.match(tagsRegex)));
  let result = str;

  if (words.length > 0) {
    words.forEach((word, index) => {
      word.replace(/>(.*?)</gi, (html, text) => {
        result = result.replace(text, pangu.spacing(text));
      });
    });
  }

  return result;
};

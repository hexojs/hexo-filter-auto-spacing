'use strict';

const pangu = require('pangu');
const cheerio = require('cheerio');

module.exports = function(str, data) {
  const options = this.config.spacing;
  const tags = options.tags;
  let $ = cheerio.load(str, { decodeEntities: false });
  let result = $.html();
  let words = [];

  tags.forEach(tag => {
    $(tag).each((index, element) => {
      words.push($(element).text().trim());
    });
  });

  words = Array.from(new Set(words));

  words.forEach(word => {
    if (word) {
      result = result.replace(word, pangu.spacing(word));
    }
  });

  return result;
};

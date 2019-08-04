'use strict';

/* global hexo */

const pangu = require('pangu');
const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', str => {
  let $ = cheerio.load(str, { decodeEntities: false });

  let result = $.html();
  let words = [];

  $('p').each((index, element) => {
    words.push($(element).text());
  });

  $('h1').each((index, element) => {
    words.push($(element).text());
  });

  $('h2').each((index, element) => {
    words.push($(element).text());
  });

  $('h3').each((index, element) => {
    words.push($(element).text());
  });

  $('span').each((index, element) => {
    words.push($(element).text());
  });

  words = Array.from(new Set(words));

  for (let index in words) {
    let word = words[index];

    result = result.replace(word, pangu.spacing(word));
  }

  return result;
});

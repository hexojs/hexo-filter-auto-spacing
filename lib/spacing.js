'use strict';

const pangu = require('pangu');
const parser = require('html-dom-parser');

module.exports = function(str, data) {
  const options = this.config.spacing;
  const tags = options.tags;
  let result = str;
  const dom = parser(str);
  const flatDom = Object.assign({}, dom);

  if (!tags) return str;

  const flatten = (tag) => {
    if (!tag.children) return tag;
    for (let child of tag.children) {
      if (child.children) {
        flatten(child);
      }
      flatDom[Object.keys(flatDom).length] = child;
    }
  };

  for (let tag of dom) {
    flatten(tag);
  }

  for (let i = 1; i < Object.keys(flatDom).length; i++) {
    if (flatDom[i].type === 'text' && 'name' in flatDom[i-1]) {
      if (tags.includes(flatDom[i-1].name)) {
        result = result.replace(flatDom[i].data, pangu.spacing(flatDom[i].data));
      }
    }
  }

  return result;
};

'use strict';

/* global hexo */

hexo.config.spacing = Object.assign({
  tags: ['p', 'h1', 'h2', 'h3']
}, hexo.config.spacing);

hexo.extend.filter.register('after_render:html', require('./lib/spacing'));

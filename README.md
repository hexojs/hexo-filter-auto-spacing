# DEPRECATED!

hexo-filter-auto-spacing has been deprecated.

# hexo-filter-auto-spacing

[![NPM version](https://badge.fury.io/js/hexo-filter-auto-spacing.svg)](https://www.npmjs.com/package/hexo-filter-auto-spacing)

Add a space between Chinese and Western characters.

## Install

``` bash
$ npm install hexo-filter-auto-spacing --save
```

- Hexo 3: >= 0.2
- Hexo 2: 0.1.x

## Options
``` yaml
spacing:
  tags: ['p', 'h1', 'h2', 'h3', 'title', 'a']
```

- **tags**: Specify [HTML tags/elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to be processed.
  + To process the text in `<p>This is a中文text</p>`, specify `'p'`.

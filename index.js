const pangunode = require('pangunode');

hexo.extend.filter.register('after_post_render', data => {
  data.title = pangunode(data.title);
  data.content = pangunode(data.content);
});

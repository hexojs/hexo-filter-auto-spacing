var pangunode = require('pangunode');

hexo.extend.filter.register('after_post_render', function(data) {
  data.content = pangunode(data.content);
});


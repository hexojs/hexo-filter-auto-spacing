var pangunode = require('pangunode');

hexo.extend.filter.register('after_post_render', function(data, callback){
  if (!hexo.config.auto_spacing) return callback();

  data.content = pangunode(data.content);

  callback(null, data);
});
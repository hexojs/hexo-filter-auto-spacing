var pangunode = require('pangunode');

hexo.extend.filter.register('after_post_render', function(data, callback){
  data.content = pangunode(data.content);
  if (callback) {
    callback(null, data);
  }
});

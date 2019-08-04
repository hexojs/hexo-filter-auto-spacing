const remark = require('remark');
const pangu = require('remark-pangu');

hexo.extend.filter.register('after_post_render', data => {
  remark().use(pangu).process(data.title, (err, file) => {
    data.title = String(file);
  });

  remark().use(pangu).process(data.content, (err, file) => {
    data.content = String(file);
  });
});

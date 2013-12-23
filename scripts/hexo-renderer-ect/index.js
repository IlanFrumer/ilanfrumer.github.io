var ECT = require('ect');

hexo.extend.renderer.register('ect', 'html', function(data, locals){
  return ECT().render(data.text, locals);
}, true);
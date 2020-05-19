const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  // 定义一个异步处理，告诉webpack，这个loader里有异步事件，在里面调用
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('学良',options.name);
    callback(null, result);
  }, 300);
}
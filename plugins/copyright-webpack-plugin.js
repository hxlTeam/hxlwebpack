class CopyrightWebpackPlugin {
  // constructor(options){
  //   console.log('我是Copyright-Webpack-Plugin',options);
  // }

  // compiler:是webpack实例
  apply(compiler) {

    // hooks.emit 定义在某个时刻
    
    compiler.hooks.emit.tapAsync( // tapAsync异步执行
      'CopyrightWebpackPlugin',
      (compilation, cb) => { // compilation:是本次打包的信息
        console.log(compilation.assets,'==');
        compilation.assets['copyright.txt'] = {
          source: function () {
            return 'hello copy';
          },
          size: function () {
            return 1024 * 2;
          }
        };
        cb();
      }
    )
    // ==================

    compiler.hooks.emit.tap( // tap同步执行
      'CopyrightWebpackPlugin',
      (compilation) => {
        console.log('==compilation==');
      }
    )

  }
}

module.exports = CopyrightWebpackPlugin;
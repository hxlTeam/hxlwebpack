// module.exports = function (source) {
//   // console.log(this.query);
//   // return source.replace('world', '黄学良:' + this.query.name);

//   // const code = source.replace('world', '黄学良:' + this.query.name);
//   // this.callback(null, code);

//   const callback = this.async();
//   setTimeout(() => {
//     const code = source.replace('world', '黄学良:' + this.query.name);
//     callback(null,code);
//   }, 2000);
// }


module.exports = function (source) {
  return source.replace('xl', 'hxl');
}
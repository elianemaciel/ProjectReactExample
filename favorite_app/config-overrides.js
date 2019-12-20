const { override, fixBabelImports } = require('customize-cra');
const path = require('path');
 
// const options = {
//   stylesDir: path.join(__dirname, './src/styles'),
//   antDir: path.join(__dirname, './node_modules/antd'),
//   varFile: path.join(__dirname, './src/styles/variables.less'),
//   mainLessFile: path.join(__dirname, './src/styles/index.less'),
//   themeVariables: ['@primary-color'],
//   indexFileName: 'index.html',
//   generateOnce: false,
//   publicPath: '' // e.g. in case you are hosting at gh-pages `https://username.github.io/project` then you can add `/project` here
// }
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css',
  }),
);
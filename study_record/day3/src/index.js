// 引入sass
const path = require('path')
const sass = require('sass');

// 构造文件路径
const filePath = sass.compile(path.resolve(__dirname, './index.scss'));

// 编译
const result = sass.compile(filePath)

// 打印结果
console.log(result.css)
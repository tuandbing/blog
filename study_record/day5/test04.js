const config = {
        name: '馒头',
        age: 19,
        sex: '男'
    }
    // 拷贝方法：
    //1. 普通拷贝，地址相同，会导致一方改变，另一方也改变
    // const myConfig = config;
    // console.log(myConfig);

// 深拷贝方法一，直接引用
// const myConfig = {
//     name: config.name,
//     age: config.age,
//     sex: config.sex
// }
// myConfig.name = '花生';
// console.log(myConfig);

// 深拷贝方法二，使用JSON字符串
const jsonString = JSON.stringify(config);
const deepConfig = JSON.parse(jsonString);
deepConfig.age = 17;
console.log(config);
console.log(deepConfig);

// 学习地址： https://underscorejs.org/ underscore
// 其二： https://lodash.com/ loadash

// 解构语法
const study = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
const { a: ttt, b, c, d } = study;
console.log(ttt, b, c, d);

// 如果对象的key和value的变量名相同，可以简写
const job = 'student';
const person = {
    // 可以将job : job 直接简写成
    job,
    money: 0
}
console.log(person);
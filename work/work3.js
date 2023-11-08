
let num = 1;
let string = '彭垚旺';
let flag = true;
let test = null;
let undefine;
let obj = {
    myName : '彭垚旺',
    className : '软件2203',
    number : '3220608087'
}
let array = [1,2,3,4,5];
const test2 = function () {
    console.log('this is a function');
}
// console.log(typeof num);
// console.log(typeof string);
// console.log(typeof flag);
// console.log(typeof test);
// console.log(typeof undefine);
// console.log(typeof obj);
// console.log(typeof array);
// console.log(typeof test2);
let testNum = function(num){
    num = 3;
}

let testObj = function(obj){
    obj.myName = '馒头';
}
testNum(num);
testObj(obj);
console.log(num);
console.log(obj.myName);
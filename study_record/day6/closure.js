// 闭包(一个作用域中引用了另一个作用域的值或者变量)
// scope
// JS中的作用域包括：全局作用域、函数作用域、块作用域

// 用法示例
const sentence = 'hello'

function test(msg) {
    console.log(msg);
}

test(sentence);

function closure() {
    console.log(sentence);
}

closure();

// 闭包带来的影响示例
const fn = [];
var i;
for (i = 0; i < 5; i++) {
    const j = function() {
        console.log(i);
    }
    fn.push(j);
}
// 此时调用fn[0]得到的结果是5而不是0
fn[0]();

// JS立即调用函数表达式https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE
(function test(msg) { console.log(msg) })('life');

// 故可将上面的代码修改为：
const fn2 = [];
var i;
for (i = 0; i < 5; i++) {
    const j = (function(num) {
        function main() {
            console.log(num);
        }
        return main;
    })(i);
    fn2.push(j);
}
fn2[0]();
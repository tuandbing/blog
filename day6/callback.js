//回调函数
const callback = (msg) => console.log(msg);
// const callback2 = () => console.log('花生666');

// callback();

// 接收一个参数，这个参数是函数
// handle(callback);
// handle(callback2);

// function handle(fun) {

//     fun();
// }

const param = {
    callback
}

// 接收一个对象，对象里面有一个key叫做callback，可以被handle执行
function handle(param) {
    param.callback('馒头666')
}
handle(param)
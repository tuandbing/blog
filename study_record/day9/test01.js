// 原型和原型链
const myself = {
    name: '馒头',
    age: 18
}

function People() {
    this.drink = function() {
        console.log(this.name + '喝了' + this.age + '瓶酒');
    }
    console.log(this);
}
People.prototype.dna = 'dnalist';
const t1 = new People();
People.bind(myself)();
console.log(t1);
console.log(t1.__proto__);

function handleMove() {

}
handleMove.prototype = t1;
t1.constructor = handleMove;

const newWorld = new handleMove();
console.log(newWorld.dna);
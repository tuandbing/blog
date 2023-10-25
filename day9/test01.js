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
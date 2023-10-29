class People {
    // 设置权限，外部无法直接访问和修改
    #name;
    age;
    world;
    constructor(name, age, world) {
        this.#name = name;
        this.age = age;
        this.world = world;
    }
    getName() {
        return this.#name;
    }
}
const mantou = new People('mantou', 18, "you are best");
// mantou.#name = '馒头';
console.log(mantou.getName());
console.log(mantou.world);
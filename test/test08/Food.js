class Food{
    constructor(select){

        // 获取地图
        this.map = document.querySelector(select);

        // 定义坐标
        this.x = 0;
        this.y = 0;

        // 定义食物
        this.food = document.createElement('div');
        this.food.className = 'food';

        // 对食物坐标进行初始化/更新
        this.Pos();

        // 赋值，并添加到地图中
        this.food.style.left = this.x + 'px';
        this.food.style.top = this.y + 'px';
        this.map.appendChild(this.food);

    }
    Pos(){

        const map_w = this.map.clientWidth / 20;
        const map_h = this.map.clientHeight / 20;
        
        this.x = Math.floor(Math.random()*map_w)* 20;
        this.y = Math.floor(Math.random()*map_h)* 20;

    }
}
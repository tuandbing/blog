class Snake {
    constructor(select) {
        // 获取地图
        this.map = document.querySelector(select);

        // 移动方向
        this.direction = 'right';

        // 存储蛇体
        this.snakeList = [];

        this.createSnake();
    }

    // 创建蛇头
    createHead() {
        let head = this.snakeList[0];
        let pos = {x:0,y:0}
        if (head) {
            switch (this.direction) {
                case 'right':
                    pos.x = head.offsetLeft + 20;
                    pos.y = head.offsetTop;
                    break;
                case 'left':
                    pos.x = head.offsetLeft - 20;
                    pos.y = head.offsetTop;
                    break;
                case 'top':
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop - 20;
                    break;
                case 'bottom':
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop + 20;
                    break;
            }
            head.className = 'body';
        }
        const div = document.createElement('div');
        div.className = 'head';
        this.snakeList.unshift(div);
        div.style.left = pos.x + 'px';
        div.style.top = pos.y + 'px';
        this.map.appendChild(div);
    }

    createSnake(){
        for(let i = 0;i<4;i++){
            this.createHead();
        }
    }
    move(){
        let body = this.snakeList.pop();
        body.remove();
        this.createHead();
    }

    isEat(foodX,foodY){
        let head = this.snakeList[0];
        let headX = head.offsetLeft;
        let headY = head.offsetTop;
        if(headX == foodX && headY == foodY){
            return true;
        }
        return false;
    }

    isDie(){
        let head = this.snakeList[0];
        let headX = head.offsetLeft;
        let headY = head.offsetTop;
        if(headX<0 || headY <0 || headX >this.map.clientWidth || headY > this.map.clientHeight){
            return true;
        }
        return false;
    }
    
}
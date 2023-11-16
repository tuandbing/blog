class Game{
    constructor(select){
        this.map = document.querySelector(select);
        this.food = new Food(select)
        this.snake = new Snake(select);
        this.count = 0;
        this.timer = 0;
        this.speed = 200;
        
        
    }
    start(){
        this.timer = setInterval(()=>{
            this.snake.move();
            if(this.snake.isDie()){
                clearInterval(this.timer);
                alert('GAME OVER!Your score is ' + this.count)
            }
            if(this.snake.isEat(this.food.x,this.food.y)){
                this.snake.createHead();
                this.food.Pos();
                this.count += 5;
                if(this.speed>100){
                    this.speed -= 20;
                    
                    clearInterval(this.timer);
                    this.start();
                }
            }
            
        },this.speed);
    }
    pause(){
        clearInterval(this.timer);
    }
    restart(){
        window.location.reload();
    }
    change(type){
        this.snake.direction = type;
    }
    up(){
        this.speed-=40;
        clearInterval(this.timer);
        this.start();
    }
    down(){
        this.speed+=40;
        clearInterval(this.timer);
        this.start();
    }
    MAX(){
        this.speed=40;
        clearInterval(this.timer);
        this.start();
    }
    MID(){
        this.speed=100;
        clearInterval(this.timer);
        this.start();
    }
    MIN(){
        this.speed==200;
        clearInterval(this.timer);
        this.start();
    }
}
class Game {
    constructor(map) {

        this.map = map;

        this.player1 = new Player('Black', 1,map);
        this.player2 = new Player('White', 2,map);
        this.checkerboard = new Checkerboard();

        let c = document.querySelector('#myCanvas');
        this.ctx = c.getContext('2d');
        this.flag = 1;

        this.player = this.flag % 2 ? this.player1 : this.player2;


    }

    Start() {

    }
    End() {

    }
}
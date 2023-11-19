class Checkerboard {
    constructor() {
        // 绘制棋盘

        let c = document.querySelector('#myCanvas');
        this.ctx = c.getContext('2d');

        
        
        this.Draw_CheckerBoard();
        
    }
    Draw_Piece(i, j,color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(i, j, 10, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.stroke();
        this.count++;
    }

    Draw_CheckerBoard() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "2";
        var a = 25;
        while (a <= 475) {
            this.ctx.moveTo(25, a);
            this.ctx.lineTo(475, a);
            a = a + 30;
        }
        a = 25;
        while (a <= 475) {
            this.ctx.moveTo(a, 25);
            this.ctx.lineTo(a, 475);
            a = a + 30;
        }
        this.ctx.stroke();
    }
}
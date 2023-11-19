class Player {
    constructor(type, num,map) {

        this.map = map;
        // 获取画布
        this.checkerboard = new Checkerboard();
        // 用于计时
        this.clock = 0;
        // 确定选手的颜色
        this.color = type;
        // 记录已经下了多少子
        this.count = 0;
        this.Time_String_ID = this.color + '_AllTime';
        this.Step_String_ID = this.color + '_StepTime';
        this.num = num;
        // 记录每次行动
        this.pass = 0;
        this.xpass = new Array(257);
        this.ypass = new Array(257);
        for (let i = 0; i < 257; i++) {
            this.xpass[i] = 0;
            this.ypass[i] = 0;
        }
        let c = document.querySelector('#myCanvas');

        c.addEventListener('click', function (e) {
            let x_screen = e.clientX;
            let y_screen = e.clientY;
            let x_board = x_screen - 500;
            let y_board = 450 + 150 - y_screen;
            let d1 = Math.round(x_board / 30.0);
            let d2 = Math.round(y_board / 30.0);

            if (d1 >= 0 && d2 >= 0 && d1 <= 15 && d2 <= 15 && !(this.map[d1][d2])) {
                let x = d1 * 30 + 25;
                let y = 450 - d2 * 30 + 25;
                this.pass++;
                this.xpass[this.pass] = d1;
                this.ypass[this.pass] = d2;
                this.checkerboard.Draw_Piece(x, y, this.color.toLowerCase());
                this.map[d1][d2] = this.num;
            } else if (!this.map[d1][d2]) {
                alert('本处已经有了棋子喔~');
            } else {
                alert('请在规定区域下棋')
            }
        })

        // 每局时长以及每步时长
        this.Step_Minute = 2;
        this.Step_Second = 0;
        this.minute = 20;
        this.second = 0;
    }



    // Place_Piece(ev) {
    //     let x_screen = ev.clientX;
    //     let y_screen = ev.clientY;
    //     let x_board = x_screen - 500;
    //     let y_board = 450 + 150 - y_screen;
    //     let d1 = Math.round(x_board / 30.0);
    //     let d2 = Math.round(y_board / 30.0);

    //     if (d1 >= 0 && d2 >= 0 && d1 <= 15 && d2 <= 15 && !this.checkerboard.map[d1][d2]){
    //         let x=d1*30+25;
    //         let y=450-d2*30+25;
    //         this.pass++;
    //         this.xpass[this.pass]=d1;
    //         this.ypass[this.pass]=d2;
    //         this.checkerboard.Draw_Piece(x,y,this.color.toLowerCase());
    //         this.checkerboard.map[d1][d2]=this.num;
    //     }else if(!this.map[d1][d2]){
    //         alert('本处已经有了棋子喔~');
    //     }else {
    //         alert('请在规定区域下棋')
    //     }
    // }
    // RePlay() {
    //     for (let i = 0; i < 16; i++) {
    //         for (let j = 0; j < 16; j++) {
    //             this.map[i][j] = 0;
    //         }
    //     }
    // }
    Count_Timer() {
        this.clock = setInterval(this.Timer, 1000);
    }

    // 正式游戏以后，开始计时
    Timer() {
        this.Step_Second--;
        this.second--;
        if (this.second < 0) {
            this.second += 60;
            this.minute--;
        }
        if (this.Step_Second < 0) {
            this.Step_Second += 60;
            this.Step_Minute--;
        }

        if (this.minute < 0) {
            clearInterval(this.Timer);
        }
        // 修改计时器上面显示的时间
        Time_String = document.querySelector("#" + this.Time_String_ID);
        Step_String = document.querySelector("#" + this.Step_String_ID);
        Time_String.innerHTML = "局时:" + this.minute + "分" + this.second + "秒";
        Step_String.innerHTML = "步时:" + this.Step_Minute + "分" + this.Step_Second + "秒"
    }

    // 获取胜利的判断
    IsWin(x, y,) {

    }
}

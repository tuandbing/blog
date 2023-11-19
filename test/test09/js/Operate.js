let start = document.querySelector('#Start');
let automatic = document.querySelector('#Automatic');
let players = document.querySelector('#Players');

// 点击开始游戏以后可以选择人机对局还是双人对局
start.addEventListener('click',function(){
    start.textContent = '模式选择';
    automatic.style.display = 'block';
    players.style.display = 'block';
})

// 在点击具体操作后，隐藏并将“开始游戏改成重新开始”
players.addEventListener('click',Start);
automatic.addEventListener('click',Start);

function Start(){
    automatic.style.display = 'none';
    players.style.display = 'none';
    start.textContent = '重新开始';
}

function Restart(){

}
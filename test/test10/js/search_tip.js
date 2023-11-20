let list_tips = document.querySelector('#List_Tips');
let tips = list_tips.querySelectorAll('.Tip');
for(let i = 0;i<tips.length;i++){
    tips[i].style.left = 400 + i * 100 + 'px';
}
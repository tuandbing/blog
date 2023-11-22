let pic_boxs = document.querySelectorAll('.pic_boxs');

for(let i = 0;i<pic_boxs.length;i++){
    if(i/3 >= 1){
        pic_boxs[i].style.left = (200 + 300) * (i%3) + 'px';
        pic_boxs[i].style.top = 950 + 'px';
    }else{
        pic_boxs[i].style.left = (200 + 300) * i + 'px';
    }
}
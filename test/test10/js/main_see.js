// let pictures = ['../test10/picture/food.jpg','../test10/picture/doll.jpg','../test10/picture/drink.jpg','../test10/picture/background.jpg'];
let pictures = ['file:///D:/headend/test/test10/picture/main_see/food.jpg','file:///D:/headend/test/test10/picture/main_see/doll.jpg','file:///D:/headend/test/test10/picture/main_see/drink.jpg','file:///D:/headend/test/test10/picture/main_see/background.jpg','file:///D:/headend/test/test10/picture/main_see/shoe.jpg','file:///D:/headend/test/test10/picture/main_see/Main_Show6.png','file:///D:/headend/test/test10/picture/main_see/Main_Show7.jpg','file:///D:/headend/test/test10/picture/main_see/Main_Show8.png'];
let show_picture = document.querySelector('#main_box_firimg');

let prev_btn = document.querySelector('#Previous_Img');
let next_btn = document.querySelector('#Next_Img');

let len = pictures.length - 1

let Timer = setInterval(Change_Cur_Img,1500);

let radius = document.querySelector('#Middle_Box_Mainimg_List').querySelectorAll('li');
radius[0].style.backgroundColor = 'red';
prev_btn.addEventListener('click',function(){
    clearInterval(Timer);
    let cur = pictures.indexOf(show_picture.src);
    let prev = (cur == 0) ? len : (cur - 1);
    show_picture.src = pictures[prev];
    Timer = setInterval(Change_Cur_Img,1500);
    Change_Cur_Rad(prev);
})

next_btn.addEventListener('click',function(){
    clearInterval(Timer);
    Change_Cur_Img();
    Timer = setInterval(Change_Cur_Img,1500);
    
});

function Change_Cur_Img(){
    let cur = pictures.indexOf(show_picture.src);
    let next = (cur == len) ? 0 : (cur + 1);
    show_picture.src = pictures[next];
    Change_Cur_Rad(next);
}

function Change_Cur_Rad(index){
    for(let i = 0;i<radius.length;i++){
        radius[i].style.backgroundColor = '';
    }
    radius[index].style.backgroundColor = 'red';
}

for(let i = 0;i<radius.length;i++){
    radius[i].addEventListener('click',function(){
        clearInterval(Timer);
        Change_Img_Index(i);
        Timer = setInterval(Change_Cur_Img,1500);
    })
}

function Change_Img_Index(index){
    show_picture.src = pictures[index];
    Change_Cur_Rad(index);
}
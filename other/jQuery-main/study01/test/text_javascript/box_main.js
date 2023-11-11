var box_left = document.querySelector('.left_box_ul');
for (var i = 0; i < box_left.childNodes.length; i++) {
    (function (index) {
        box_left.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
    })(i);
}
var main_box_firimg = document.querySelector('.main_box_firimg');
main_box_firimg.addEventListener('click',function(){
    window.open('https://www.baidu.com');
})
var middle_box_ul = document.querySelector('.middle_box_ul');
for (var i = 0; i < middle_box_ul.childNodes.length; i++) {
    (function (index) {
        middle_box_ul.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
    })(i);
}
var right_box = document.querySelector('.right_box');
for (var i = 0; i < right_box.childNodes.length; i++) {
    (function (index) {
        right_box.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
    })(i);
}
var middle_box_mainimg_ul = document.querySelector('.middle_box_mainimg_ul');
var middle_box_mainimg_fir = document.querySelector('.middle_box_mainimg_fir');
middle_box_mainimg_fir.style.backgroundColor = 'red';
for (var i = 0; i < middle_box_mainimg_ul.children.length; i++) {
    (function (index) {
        middle_box_mainimg_ul.children[index].addEventListener('click', function () {
            for(var j = 0; j < middle_box_mainimg_ul.children.length; j++){
                middle_box_mainimg_ul.children[j].style.backgroundColor = '';
            }
            middle_box_mainimg_ul.children[index].style.backgroundColor = 'red';
        });
    })(i);
}
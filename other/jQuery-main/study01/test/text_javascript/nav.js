var nav = document.querySelector('.nav');
for (var i = 0; i < nav.childNodes.length; i++) {
    (function (index) {
        nav.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
    })(i);
}
var triangle = document.querySelectorAll('.triangle');
for (var i = 0; i < triangle.length; i++) {
    (function (index) {
        triangle[index].addEventListener('mouseover',function(){
            var deg =225 + 'deg';
            triangle[index].style.transform = 'rotateZ(' + deg + ')';
        
        })
        triangle[index].addEventListener('mouseout',function(){
            var deg =45 + 'deg';
            triangle[index].style.transform = 'rotateZ(' + deg + ')';
        })
    })(i);
}



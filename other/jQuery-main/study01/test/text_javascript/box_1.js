var box = document.querySelector('.watch_ul');
var nax = document.querySelector('.search_ul');
for (var i = 0; i < box.childNodes.length; i++) {
    (function (index) {
        box.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
        nax.childNodes[index].addEventListener('click', function () {
            window.open('https://www.baidu.com');
        });
    })(i);
}
let shopping = document.querySelector('#Shopping');
let pauchased = document.querySelector('#purchased');
let footprint = document.querySelector('#footprint');

let favorites = document.querySelector('#Favorites');
let collect_commodity = document.querySelector('#collect_commodity');
let collect_market = document.querySelector('#collect_market');

let sort = document.querySelector('#Sort');
let menswear = document.querySelector('#Menswear');
let food = document.querySelector('#Food');
let phone = document.querySelector('#Phone');
let department = document.querySelector('#Department');
let makeup = document.querySelector('#Makeup');
let medicine = document.querySelector('#Medicine');

let call = document.querySelector('#Call');
let feedback = document.querySelector('#Feedback');
let service = document.querySelector('#Service');

let triangles = document.querySelectorAll('.triangle');

let sign = document.querySelector('#Sign');

let already;
let exit;

let me = document.querySelector('#Me');
let show_self = document.querySelector('#Show_Self');

favorites.addEventListener('mouseover', function () {
    collect_commodity.style.display = 'block';
    collect_market.style.display = 'block';
    triangles[1].style.transform = 'rotateZ(225deg)';
    triangles[1].style.transformOrigin = '50% 80%';
})
favorites.addEventListener('mouseout', function () {
    collect_commodity.style.display = 'none';
    collect_market.style.display = 'none';
    triangles[1].style.transform = 'rotateZ(45deg)';
})

shopping.addEventListener('mouseover', function () {
    pauchased.style.display = 'block';
    footprint.style.display = 'block';
    triangles[0].style.transform = 'rotateZ(225deg)';
    triangles[0].style.transformOrigin = '50% 80%';
})
shopping.addEventListener('mouseout', function () {
    pauchased.style.display = 'none';
    footprint.style.display = 'none';
    triangles[0].style.transform = 'rotateZ(45deg)';
})

sort.addEventListener('mouseover', function () {
    menswear.style.display = 'block';
    food.style.display = 'block';
    phone.style.display = 'block';
    department.style.display = 'block';
    medicine.style.display = 'block';
    makeup.style.display = 'block';
    triangles[2].style.transform = 'rotateZ(225deg)';
    triangles[2].style.transformOrigin = '50% 80%';
})
sort.addEventListener('mouseout', function () {
    menswear.style.display = 'none';
    food.style.display = 'none';
    phone.style.display = 'none';
    department.style.display = 'none';
    medicine.style.display = 'none';
    makeup.style.display = 'none';
    triangles[2].style.transform = 'rotateZ(45deg)';
})

call.addEventListener('mouseover', function () {
    feedback.style.display = 'block';
    service.style.display = 'block';
    triangles[3].style.transform = 'rotateZ(225deg)';
    triangles[3].style.transformOrigin = '50% 80%';
})
call.addEventListener('mouseout', function () {
    feedback.style.display = 'none';
    service.style.display = 'none';
    triangles[3].style.transform = 'rotateZ(45deg)';
})

let as = sort.querySelectorAll('a');
for (let i = 1; i < as.length; i++) {
    as[i].style.top = i * 20 + 'px';
}

let flag = window.location.href.includes('?');
if (flag) {
    sign.innerHTML = '<li id="Already_Sign_In">你好!' + decodeURIComponent(window.location.href.split('?')[1].split('=')[0]) + '<a id="Exit">退出登录</a></li>';
    already = document.querySelector('#Already_Sign_In');
    already.addEventListener('mouseover', function () {
        exit = document.querySelector('#Exit');
        exit.style.display = 'block';
        exit.addEventListener('click', function () {
            window.location.href = './index.html';
        })

    })

    already.addEventListener('mouseout', function () {
        exit = document.querySelector('#Exit');
        exit.style.display = 'none';
    })
    show_self.addEventListener('mouseover', function () {
        me.style.display = 'block';
    })

    show_self.addEventListener('mouseout', function () {
        me.style.display = 'none';
    })
} else {

}


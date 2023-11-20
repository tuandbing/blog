let shopping = document.querySelector('#Shopping');
let pauchased = document.querySelector('#purchased');
let footprint = document.querySelector('#footprint');

let favorites = document.querySelector('#Favorites');
let collect_commodity = document.querySelector('#collect_commodity');
let collect_market = document.querySelector('#collect_market');

let sort = document.querySelector('#Sort');
let menswear = document.querySelector('#Menswear');
let womenswear = document.querySelector('#Womenswear');
let electronics = document.querySelector('#Electronics');
let supplies = document.querySelector('#Supplies');
let jewelry = document.querySelector('#Jewelry');
let shoe = document.querySelector('#Shoe');

let call = document.querySelector('#Call');
let feedback = document.querySelector('#Feedback');
let service = document.querySelector('#Service');

let triangles = document.querySelectorAll('.triangle');



favorites.addEventListener('mouseover',function(){
    collect_commodity.style.display = 'block';
    collect_market.style.display = 'block';
    triangles[1].style.transform = 'rotateZ(225deg)';
    triangles[1].style.transformOrigin = '50% 80%';
})
favorites.addEventListener('mouseout',function(){
    collect_commodity.style.display = 'none';
    collect_market.style.display = 'none';
    triangles[1].style.transform = 'rotateZ(45deg)';
})

shopping.addEventListener('mouseover',function(){
    pauchased.style.display = 'block';
    footprint.style.display = 'block';
    triangles[0].style.transform = 'rotateZ(225deg)';
    triangles[0].style.transformOrigin = '50% 80%';
})
shopping.addEventListener('mouseout',function(){
    pauchased.style.display = 'none';
    footprint.style.display = 'none';
    triangles[0].style.transform = 'rotateZ(45deg)';
})

sort.addEventListener('mouseover',function(){
    menswear.style.display = 'block';
    womenswear.style.display = 'block';
    electronics.style.display = 'block';
    supplies.style.display = 'block';
    shoe.style.display = 'block';
    jewelry.style.display = 'block';
    triangles[2].style.transform = 'rotateZ(225deg)';
    triangles[2].style.transformOrigin = '50% 80%';
})
sort.addEventListener('mouseout',function(){
    menswear.style.display = 'none';
    womenswear.style.display = 'none';
    electronics.style.display = 'none';
    supplies.style.display = 'none';
    shoe.style.display = 'none';
    jewelry.style.display = 'none';
    triangles[2].style.transform = 'rotateZ(45deg)';
})

call.addEventListener('mouseover',function(){
    feedback.style.display = 'block';
    service.style.display = 'block';
    triangles[3].style.transform = 'rotateZ(225deg)';
    triangles[3].style.transformOrigin = '50% 80%';
})
call.addEventListener('mouseout',function(){
    feedback.style.display = 'none';
    service.style.display = 'none';
    triangles[3].style.transform = 'rotateZ(45deg)';
})

let as = sort.querySelectorAll('a');
for(let i = 1;i<as.length;i++){
    as[i].style.top = i*20 + 'px';
}
let pic_boxs = document.querySelectorAll('.pic_boxs');

let buys = document.querySelectorAll('.BuyIt');

for(let i = 0;i<pic_boxs.length;i++){
    if(i/3 >= 1){
        pic_boxs[i].style.left = (200 + 300) * (i%3) + 'px';
        pic_boxs[i].style.top = 950 + 'px';
    }else{
        pic_boxs[i].style.left = (200 + 300) * i + 'px';
    }
}


    for(let i = 0;i<buys.length;i++){
        buys[i].addEventListener('click',function(e){
            if(flag){
            // 当点击购买后，总金额增加
            // 获取当前点击对象的金额
            // alert('已为您添加到购物车中');
            let price = parseFloat(e.target.parentNode.querySelector('.price').innerHTML.toString().split('￥')[1]);
            let name = e.target.parentNode.querySelector('img').id;
            let str = name + '_describe'
            let name_describe = e.target.parentNode.querySelector('.describe').innerHTML;
            if(!localStorage.getItem(name)){
                localStorage.setItem(name,price);
                localStorage.setItem(str,name_describe);
                alert('添加成功，记得去购物车中购买喔');
            }else{
                alert('您已选中该商品');
            }
        }else{
            alert('请登录后再购买')
        }
        })
    }


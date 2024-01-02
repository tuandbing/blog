let list_tips = document.querySelector('#List_Tips');
let tips = list_tips.querySelectorAll('.Tip');
for(let i = 0;i<tips.length;i++){
    tips[i].style.left = 400 + i * 100 + 'px';
}

let input = document.querySelector('#Search_inp');
let search = document.querySelector('#Search');

search.addEventListener('click',function(){
    let message = input.value;
    if(message.includes('食') || message.includes('吃')){
        window.location.href = './Sorted_Htmls/Food.html';
    }else if(message.includes('男') || message.includes('装') || message.includes('服')){
        window.location.href = './Sorted_Htmls/Menswear.html';
    }else if(message.includes('生') || message.includes('活') || message.includes('货')){
        window.location.href = './Sorted_Htmls/Department.html';
    }else if(message.includes('药') || message.includes('保健') || message.includes('医')){
        window.location.href = './Sorted_Htmls/Medicine.html';
    }else if(message.includes('化妆') || message.includes('女') || message.includes('美')){
        window.location.href = './Sorted_Htmls/Makeup.html';
    }else if(message.includes('数码') || message.includes('手') || message.includes('机')){
        window.location.href = './Sorted_Htmls/Phone.html';
    }else{
        alert('很抱歉，小店暂时没有这类商品');
    }
})
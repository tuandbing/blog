var search_inp = document.querySelector('.search_inp');
var search_btn = document.querySelector('.search');
search_inp.addEventListener('click',function(){
    if(this.value == '请输入搜索内容'){
        this.value = '';
        this.style.fontSize = 'medium';
        this.style.fontWeight = 400;
    }
})
search_inp.addEventListener('mouseout',function(){
    if(this.value == ''){
        this.value = '请输入搜索内容';
        this.style.fontSize = 'small';
        this.style.fontWeight = 100;
    }
})
search_btn.addEventListener('click',function(){
    if(search_inp.value !== '' && search_inp.value !== '请输入搜索内容'){
        search_inp.value = '';
        window.open('https://www.baidu.com');
    }
})
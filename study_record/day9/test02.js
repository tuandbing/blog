const drink = function(){
    console.log("it's good");
}

function eat(){
    console.log('eat');
}

setTimeout(() => {
    drink()
}, 3000);
eat();
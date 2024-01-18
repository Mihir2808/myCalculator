(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.button-green');
    let equal = document.querySelector('.button-eq');

    buttons.forEach( function (button){
        button.addEventListener('click' , function(e) {
            let val = e.target.dataset.num;
            screen.value += val;
        })
    });

    equal.addEventListener('click' , function(e) {
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    }) 

    clear.addEventListener('click' , function(e) {
        screen.value = "";
    })
})();
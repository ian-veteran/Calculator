(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });


    equal.addEventListener('click', function(e){
        let answer = eval(screen.value);
        if (screen.value = answer){
            screen.value = answer;
        }else{
            screen.value = "";
        }
        
        
        
        
    });
    
    
    clear.addEventListener('click', function(e){
        screen.value = "";
    });



})();
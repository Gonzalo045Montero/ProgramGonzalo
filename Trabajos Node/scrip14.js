var screen= document.querySelector('#screen');
var btn = document.querySelectorAll( '.btn');

for(item of btn){

    item.addEventlistener('click',(e) => {
        var btntext = e.target.innertext;
    
        if (btntexto == 'x'){
            btntext = '*';
        }

        if (btntext == '÷'){
            btntex= '/';
        }

        screen.value+=btntext;
    });
}
    
    function sin(){
       screen.value=Math.sin(eval(screen.value));
}

    function cos(){
        screen.value=Math.cos(screen.value);
    }
   
    function tan(){
        screen.value=Math.tan(screen.value);
    }
   
    function pow(){
        screen.value=Math.pow(screen.value);
    }
   
    function sqrt(){
        screen.value=Math.sqrt(screen.value);
    }
    
    function log(){
        screen.value=Math.log(screen.value);
    }
    
    function pi(){
        screen.value= 3.14159265359;
    }
    function e(){
        screen.value= 2.171828182846;
    }
    
    function fact(){

    var i, num, f;
    f=1
    num=screen,value;
    for (i = 1; i <= num; i++){
        f=f*i;
    }
    i=i-1;
    screen.value=f
}

function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1)
}
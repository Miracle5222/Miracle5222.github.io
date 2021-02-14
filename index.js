function myfunc(){
    var x = document.getElementById("box").style;
    x.width = '50rem';
    x.transition = " width 2s";
    y.innerHTML = x ;


  
    
}

function myfunc1(){
    var value = document.getElementById("box");
    var txt = "height: " + value.offsetHeight + "px <br>";
    txt += "width" + value.offsetWidth + "px";
    document.getElementById("p").innerHTML = txt;
    



}



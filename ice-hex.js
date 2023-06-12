// alert("ok");

var scaled=1;
var z=0;
var lx=960;
var ly=540;
var b=document.getElementsByClassName("circles");
var p=10;
var time=setInterval(trail, 75);


function interacts(event){
    var h1 = document.getElementById("h1");
    var m = document.getElementById("m");
    var cX = event.clientX;
    var cY = event.clientY;
    var hX = m.offsetLeft + m.offsetWidth/2;
    var hY = m.offsetTop + m.offsetHeight/2;
    
    var degree = Math.floor((Math.random()*50)-15)*5;
    var degree2 = Math.floor((Math.random()*351)-100);
    var degree3 = Math.floor((Math.random()*301)-100);
    
     if(cX>hX && cY<hY){
        h1.style.transform = "translateX("+-degree2+"px) translateY("+degree3+"px) rotateZ("+degree+"deg) scale("+scaled+")";
    }else if(cX>hX && cY>hY){
        h1.style.transform = "translateX("+-degree2+"px) translateY("+-degree3+"px) rotateZ("+degree+"deg) scale("+scaled+")";
    }else if(cX<hX && cY>hY){
        h1.style.transform = "translateX("+degree2+"px) translateY("+-degree3+"px) rotateZ("+degree+"deg) scale("+scaled+")";
    }else if(cX<hX && cY<hY){
        h1.style.transform = "translateX("+degree2+"px) translateY("+degree3+"px) rotateZ("+degree+"deg) scale("+scaled+")";
    }

    melts();
    trail();
}

function melts(){
    if(scaled>=0){
        var h1 = document.getElementById("h1");
        scaled=scaled-0.05;
    }else{
        clearInterval(time);
    }
}

function trail(){
    var h1 = document.getElementById("h1");
    var f1 = document.getElementById("p0").getPointAtLength(0);
    var f2 = f1.matrixTransform(h1.getScreenCTM());
    
    var load = document.getElementById("mask");
    var loader = document.getElementById("loader");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line'+z);
    newLine.setAttribute('class','circles');
    newLine.setAttribute('x2',f2.matrixTransform(loader.getScreenCTM().inverse()).x);
    newLine.setAttribute('y2',f2.matrixTransform(loader.getScreenCTM().inverse()).y);
    newLine.setAttribute('x1',lx);
    newLine.setAttribute('y1',ly);
    newLine.setAttribute("stroke", 'lightcyan')
    newLine.setAttribute("stroke-width", '75')
    newLine.setAttribute("stroke-linecap", 'round')
    load.append(newLine);
    
    z++;
    lx=f2.x;
    ly=f2.y;

    for(var x=0; x<b.length;x++){
        b[x].style.strokeWidth=50+p;
    }
    
    p=p+1;
}

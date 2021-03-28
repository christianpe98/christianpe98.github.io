// -------------CANVAS SETUP STARTS
const canvas = document.getElementById("canvas1");

/*
    2 maneras de dibujar en un canvas:
        - A través de la API de canvas (dibujos 2d)
        - A través de la API de WebGL (dibujos 3d)
*/
const ctx = canvas.getContext('2d');

/* 
 -Para que el canvas ocupe toda la pantalla.
 -Si queremos que se redimensione al cambiar el tamaño del navegador hay que añadir este código
 en el event listener resize
*/
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// -------------CANVAS SETUP ENDS

let number=0;
let scale=10;

function drawFlower(){
    let angle=number*1;
    let radius=scale*Math.sqrt(number);
    let positionX=radius*Math.sin(angle)+(canvas.width/2);
    let positionY=radius*Math.cos(angle)+(canvas.height/2);

    ctx.fillStyle='red';//Color del relleno del cibujo
    ctx.strokeStyle='blue';//Color del borde
    ctx.lineWidth=5;//Grosor del borde
    ctx.beginPath();
    ctx.arc(positionX ,positionY,20,0,Math.PI*2); //para dibujar circulos
    //ctx.rect(positionX ,positionY,20,20)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();//añade borde
    number++;
}


function animate(){
    //ctx.clearRect(0,0,canvas.width,canvas.height);//Borra el canvas entero (evita que los dibujos dejen rastro)
    drawFlower();
    if(number>1000)return;
    requestAnimationFrame(animate);//
}


animate();
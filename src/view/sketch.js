

let circulo;

function preload(){

}

function setup(){
createCanvas(800,600);
circulo=new Figura(600,500,100);
}
function draw(){
    background(0);
    circulo.draw();
}
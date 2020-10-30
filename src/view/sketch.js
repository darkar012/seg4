

let circulo;

function preload(){

}

function setup(){
createCanvas(800,600);
screen1=new Screen1(0,0,800,600);
//circulo=new Figura(600,500,100);
}
function draw(){
    background(0);
    screen1.draw();
}
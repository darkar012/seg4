let control;

function setup(){
createCanvas(800,800);
control=new Control(this);
}

function draw(){
    background(155);
    control.draw();
}

function mouseClicked(){
    control.mouse();
}
function keyPressed(){
    control.key(); 
}


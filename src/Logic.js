class Logic {
    constructor(app){
    this.app = app;
    createCanvas(800,550);
    this.contador = 0;
    this.pantalla = 0;
    this.error = false;
    this.square = [];
    this.position[0] = 50;
    this.position[1] = 120;
    this.position[2] = 190;
    this.position[3] = 260;
    this.position[4] = 330;
    this.position[5] = 400;
    this.position[6] = 470;
    this.position[7] = 540;
    this.position[8] = 610;
    this.position[9] = 610;
    }
    draw(){
        //switch (this.pantalla) {
            //case 0:
                background(155);
                textSize(20);
                rect(200,450,50,20);
                rect(165,450,20,20);
                rect(265,450,20,20);
                rect(178,475,90,20);
                text("Continuar",180,493);
                text(this.contador,220,468);
                text("+",270,467);
        }
    }

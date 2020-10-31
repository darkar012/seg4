class Cuadrado extends Figure{
    constructor(x,y,number){
        super(x,y,number);
        this.velocidad=random(1,3);
        this.valor=int(random(1,10));
    }

    dibujarFigura(posX){
        rect (posX,this.y,50,50);
        text (this.valor,posX+20,this.y+30);
    }
    move(){
        this.y+= this.velocidad;
        if(this.y>184-50 || this.y<0) {
            this.velocidad=-this.velocidad;
        }
    }
    getValor(){
        return this.valor;
    }
}
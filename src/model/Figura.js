class Figura{

    constructor(posx,posy,size){
        this.posy=posy;
        this.posx=posx;
        this.size=size;
    }



    draw(){
        fill(255,0,0);
        ellipse(this.posx,this.posy,this.size,this.size);
    }

    getPosy(){
        return this.posy;
    }

    setPosy(posy){
        this.posy=posy;
    }

}
class Screen{
   
    constructor (x,y,sizex,sizey){
    this.x=x;
    this.Y=y;
    this.sizex=sizex;
    this.sizey=sizey;
    }
    draw(){
        fill(0);
        rect(this.x,this.y,this.sizex,this.sizey);
    };
}
class Square extends Figure {
    constructor(x, y, number, size) {
        super(x, y, number, size);
        this.velocidad = random(1, 3);
        this.valor = int(random(1, 10));
    }

    drawFigure(posX, size) {
        rect(posX, this.y, size, size);
        text(this.valor, posX + 20, this.y + 30);
    }
    move() {
        this.y += this.velocidad;
        if (this.y > 184 - 50 || this.y < 0) {
            this.velocidad = -this.velocidad;
        }
    }
    getValor() {
        return this.valor;
    }
    setSize(size) {
        this.size = size;
    }
}
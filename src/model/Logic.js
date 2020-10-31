class Logic {
    constructor(app) {
        this.app = app;
        this.counter = 0;
        this.screen = 0;
        this.error = false;
        this.size = 1;
        this.circleArray = [];
        this.square = [];

        this.position = [];
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
        this.paintEllipse = false;
    }
    draw() {
        switch (this.screen) {
            case 0:
                background(155);
                textSize(20);
                rect(200, 450, 50, 20);
                rect(165, 450, 20, 20);
                rect(265, 450, 20, 20);
                rect(178, 475, 90, 20);
                text("Continuar", 180, 493);
                text(this.counter, 220, 468);
                text("+", 270, 467);
                text("-", 172, 465);
                textSize(20);
                if (this.error) {
                    text("ERROR. O no valid number", 50, 50);
                }
                break;
            case 1:
                background(255);

                rect(120, 449, 125, 50);
                rect(290, 449, 125, 50);
                rect(460, 449, 125, 50);
                rect(630, 449, 125, 50);
                text("Agregar", 140, 480);
                text("Quitar", 300, 480);
                text("Agrandar", 470, 480);
                text("Circulos", 640, 480);

                for (let i = 0; i < this.square.length; i++) {
                    this.square[i].drawFigure((70 * i) + 70, 50 * this.size);
                    this.square[i].move();
                }
                if (this.paintEllipse) {
                    for (let i = 0; i < this.circleArray.length; i++) {
                        this.circleArray[i].drawFigure((70 * i) + 70, 50 * this.size);
                        this.circleArray[i].move();
                    }
                }
                break;
        }
    }
    mouse() {
        switch (this.screen) {
            case 0:
                if (mouseX >= 265 && mouseX <= 265 + 20 && mouseY >= 450 && mouseY <= 450 + 20 && this.counter < 10) {
                    this.counter += 1;
                }
                if (mouseX >= 165 && mouseX <= 165 + 20 && mouseY >= 450 && mouseY <= 450 + 20 && this.counter > 0) {
                    this.counter -= 1;
                }
                if (mouseX >= 178 && mouseX <= 178 + 90 && mouseY >= 475 && mouseY <= 475 + 20 && this.counter > 0 && this.counter <= 10) {
                    this.screen = 1;
                    for (let i = 0; i < this.counter; i++) {
                        this.square.push(new Square(this.position[this.pos], 100, this.counter, this.size))
                        console.log(this.counter);
                    }
                }
                if (mouseX >= 178 && mouseX <= 178 + 90 && mouseY >= 475 && mouseY <= 475 + 20 && this.counter == 0) {
                    this.error = true;
                }
                break;
            case 1:
                if (mouseX >= 120 && mouseX <= 120 + 125 && mouseY >= 449 && mouseY <= 449 + 50) {
                    console.log("agregar");
                    if (this.square.length >= 0 && this.square.length < 10) {
                        this.square.push(new Square(this.position[this.pos], 100, this.counter, this.size));
                    }
                }
                if (mouseX >= 290 && mouseX <= 290 + 125 && mouseY >= 449 && mouseY <= 449 + 50) {
                    console.log("Quitar");
                    if (this.square.length > 1) {
                        this.square.splice(0, 1);
                    }
                }
                if (mouseX >= 460 && mouseX <= 460 + 125 && mouseY >= 449 && mouseY <= 449 + 50) {
                    this.square.forEach(element => {
                        this.size = 2;
                    });
                }
                if (mouseX >= 630 && mouseX <= 630 + 125 && mouseY >= 449 && mouseY <= 449 + 50) {

                    this.circleArray = this.square.map(function (x) {
                        return x = new Circle(70 * x.pos, 300, x.getValor, x.size);
                    })
                    this.paintEllipse = true;
                }
                break;
        }
    }
    key() {
        if (keyCode === 78) {
            this.square.sort(function (a, b) {

                return a.getValor() - b.getValor();
            });
            this.circleArray.sort(function (a, b) {

                return a.getValor() - b.getValor();
            });
        }
    }
}
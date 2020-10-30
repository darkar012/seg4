new p5 (function (app) {
    var logic;

    function setup(){
        logic = new Logic(app);
        createCanvas (800,550)
    }

    function draw(){
        Logic.draw();
    }
});
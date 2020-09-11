let x = 500;
let y = 500;
let extraCanvas;

function setup(){
    createCanvas(windowWidth, windowHeight);
    extraCanvas = createGraphics(windowWidth, windowHeight);
    extraCanvas.background(255, 0, 0);
    background(0);
}

function draw(){
    image(extraCanvas, 0, 0);
    //background(0);
    x += random(-5, 5);
    y += random(-5, 5);
    fill(255, 200);
    stroke(255);
    rectMode(CENTER);
    rect(x, y, 20, 20);
}
let x = 500;
let y = 500;
let extraCanvas;

function setup(){
    createCanvas(windowWidth, windowHeight);
    extraCanvas = createGraphics(windowWidth, windowHeight);
    extraCanvas.clear();
    background(0);
}

function draw(){
    
    background(0);
    x += random(-5, 5);
    y += random(-5, 5);
    fill(255, 0, 0);
    noStroke();
    rectMode(CENTER);
    rect(x, y, 20, 20);


if(mouseIsPressed){
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 40, 40);
}


image(extraCanvas, 0, 0);

}
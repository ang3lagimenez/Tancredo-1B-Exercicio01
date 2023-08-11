function setup() {
  createCanvas(600, 600);
   background("cyan");
}

function draw() {
 
 fill("black") 
  stroke("blue")
  
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,40,30);
  }
}
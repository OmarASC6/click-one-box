// * Click One Box project
function setup(){
    createCanvas(600,600);
    background(0,10,200);
}
    // let value = 0
    // fill(0, 0, 255);
    // square(0,0, 600);
    

let bluecolor = 255;
let redcolor = 0
let width1 = 50
let width2 = 50
function draw() {
  fill(redcolor,0,bluecolor);
  rect(0, 0, width1, width2);
}

function mouseClicked() {

    // if (bluecolor === 255){
    //     reverse(colorsarray)
    // }
  if (bluecolor === 255) {
        bluecolor = 0;
        redcolor = 255}

    else if (redcolor=== 255) {
        redcolor= 0
        bluecolor= 255
    }
















    if (width1 === 50){
      width1 = 600;
  }

  if (width2 === 50){
      width2 = 600
  }
  

}







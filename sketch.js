  let img;

function preload() {
  

  
/// aditional images
  img = loadImage ('cat-space.gif');
  imgV1 = loadImage('Vote1.png');
  imgV2 = loadImage('Vote2.png');
  //imgV3 = loadImage("Heart.png")
}


function setup() {
createCanvas(900, 1000, WEBGL);

scaleCanvas(1);
  
  

  
noLoop ();
}




function draw() {
  background(100,150,250);
  texture(img);
  
  
  
  /// Find End Points Location
let TopLCorner = [-500,-500];
let TopRCorner = [500,-500];

let BottomLCorner = [-500,500];
let BottomRCorner = [500,500];



  
//Find Moving Points use mouseX and Mouse Y
let RX = (random (-225,225));
let RY = (random (-225,225));
  
let CTLCorner = [RX-250,RY-250];
let CTRCorner = [RX+250,RY-250];
  
let CBLCorner = [RX-250,RY + 250];
let CBRCorner = [RX+250,RY + 250];  
  
  

  /// Sets image Surfaces
  noStroke ();

  // Center Square 

quad (-350, -430, 350, -430,350,200, -350, 200)

 texture(imgV1);
quad (-350, 270, 30, 270, 30, 400, -350, 400)
  
}


function scaleCanvas(displayScale) {
  //displayScale is a value between 0 and 1.
  //The following generates CSS to display your canvas at a smaller scale.
  canvas.style.setProperty('transform', 'scale('+displayScale+')');
  canvas.style.setProperty('transform-origin', 'left top');
}


function mouseClicked(event) {
 texture(imgV2);
quad (-350, 270, 30, 270, 30, 400, -350, 400)
}
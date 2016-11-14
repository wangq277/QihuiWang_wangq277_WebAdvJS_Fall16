var i0;
var i1;
var i1a;
//var i1b;
var i1c;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7;
var i8;
var i9;
var i10;
var i11;
var op1 = 255; 
var op2 = 255;
var op3 = 255;
var op4 = 255;
var op5 = 255;
var images; 

var killAll = false;

function setup() {
  createCanvas(841, 595);

  //for (var i=0; i<images.createCanvas(); i++) {
  //  images.add(new var());
  //  images.get(i) = loadImage(i+".png");
  //}

  i0 = loadImage("data/0.png");
  i1 = loadImage("data/1.png");
  i1a = loadImage("data/1a.png");
  //i1b = loadImage("1b.png");
  i1c = loadImage("data/1c.png");
  i2 = loadImage("data/2.png");
  i3 = loadImage("data/3.png");
  i4 = loadImage("data/4.png");
  i5 = loadImage("data/5.png");
  i6 = loadImage("data/6.png");
  i7 = loadImage("data/7.png");
  i8 = loadImage("data/8.png");
  i9 = loadImage("data/9.png");
  i10 = loadImage("data/10.png");
  i11 = loadImage("data/11.png");
  cursor(i10);
}

function draw() {
  background(240,243,241);


  

  tint (255, op2); 
  image(i4, 698, height/5*1, 143, 306);
  
 tint (255, op1); 
  image(i6, width/3*2, height/10*1, 83, 159);
  image(i5, width/7*5, height/20*3, 154, 204);
  
  tint (255, 255);  
  tint (255, op3);
  image(i7, width/7*4, height/12*1, 58, 112);
 
  tint (255, op4);
  image(i9, width/6*1, height/6*1, 100, 185);
  image(i8, width/10*3, height/6*1, 211, 130);
  
  tint (255, op5);
  image(i2, 0, height/3*1, 97, 281);
  image(i3, width/8*1, height/20*11, 156, 99);
  
  tint (255,255);
  image(i1, width/20*7, height/20*11, 200, 200);
  
  tint (255, 255);
  image(i0, 0, 0, 841, 590);

  if (mouseX >= width/3*2 && mouseX <=width/3*2+83 && mouseY >= height/10*1 && mouseY<=(height/10*1)+159 && mouseIsPressed) {
    op1 = 0; 
    print("worked");
    image(i1a, width/20*7, height/20*11, 200, 200);
  }

  if (mouseX >= 698 && mouseX <=698+143 && mouseY >= height/5*1 && mouseY<=(height/5*1)+306 && mouseIsPressed) {
    op2 = 0; 
    print("worked");
    image(i1a, width/20*7, height/20*11, 200, 200);
  }

  if (mouseX >= width/7*4 && mouseX <=width/7*4+58 && mouseY >= height/12*1 && mouseY<=(height/12*1)+112 && mouseIsPressed) {
    op3 = 0; 
    print("worked");
    image(i1a, width/20*7, height/20*11, 200, 200);
  }

  if (mouseX >= width/6*1 && mouseX <=width/6*1+100 && mouseY >= height/6*1 && mouseY<=(height/6*1)+185 && mouseIsPressed) {
    op4 = 0; 
    print("worked");
    image(i1a, width/20*7, height/20*11, 200, 200);
  }

  if (mouseX >= 0 && mouseX <=0+97 && mouseY >= height/3*1 && mouseY<=(height/3*1)+281 && mouseIsPressed) {
    op5 = 0; 
    print("worked");
    image(i1a, width/20*7, height/20*11, 200, 200);
  }
  if ( op1 == 0 && op2 == 0 && op3 == 0 && op4 == 0 && op5 == 0) {
    image(i1c, width/20*7, height/20*11, 200, 200);
  }  

  if (killAll) {
    image(i11, 0, 0, width, height);
  }
  //if( width/20*7, height/20*11,200,200){
  //   images.remove(1);
  // }
}

function keyPressed() {
  if (key == ' ') {

    if ( op1 == 0 && op2 == 0 && op3 == 0 && op4 == 0 && op5 == 0) {

      killAll = true;
    }
  }
}
/**
Diane Phan 
Workshop 1 October 3, 2017

color picker
http://www.rapidtables.com/web/color/color-picker.htm

1. [x] increasing radius of circles at bottom 
2. [ ] flashing text 
3. [x] background red to black? 
4. [x] used random for sparkles 

**/



var allColors = 255;
var radius = 25;  
var backR = 199; 
var backG = 32;
var backB = 32; 
var fadeYellow= 255; 
//var randCircles = rand(); 
var rainbow = 255; 

function setup() {
    createCanvas(1250, 600);
    frameRate(20);    
}


function draw() {
    
    backR--; 
    backG--;
    backB--;
    background(backR, backG, backB, 100);
    
    noStroke();
    //random generated color 
    //fill(random(allColors), random(allColors), random(allColors)); 
    fill(238, 255, 0, 100);
    textSize(35);
    text("m o o n   f e s t i v a l", 480, 270);
    textSize(18);
    text("october 4, 2017", 580, 300);
    textStyle(ITALIC);

    //circle
    fill(249, 229, 54, fadeYellow);
    fadeYellow--;
    strokeWeight(3);
    stroke(207, 208, 209)
    ellipse(640, 290, 350, 350);
    
 
    
//    noStroke();
//    //arc(420, 145, 80, 85, 0, TWO_PI); 
//    //make circles grow bigger and smaller 
    //arc(50, 500, 25, 25, 0, TWO_PI); 
    
    //make a bunch of circles at the bottom
    noFill();
    for (var x = 170; x < 999; x++){
        x= x+50; 
        arc(x, 550, radius, radius, 0, TWO_PI); 
        radius++;        
    }
    
    
    //make random pale yellow circles appear     
    noStroke();
    fill(255, 251, 92, 175);
    ellipse(random(400, 500), random(300, 130), 15, 15);
    ellipse(random(640, 500), random(640, 290), 15, 15);

    //colorful random circles 
    noStroke(); 
    fill(random(rainbow), random(rainbow), random(rainbow));
    ellipse(random(100, 400), random (100, 400), 10, 10);
    
    //lanterns 
    strokeWeight(3);
    stroke(207, 208, 209)
    fill(0, 255, 26, 255);
    ellipse(620, 10, 10, 15);
   
    
}

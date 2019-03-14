let r = 250;
let total = 0;
let circle = 0;
let pi = 0;

var rightCanvas = function(right){
  right.setup = function(){
    var canvas = right.createCanvas(r * 2, r * 2);
    canvas.style('display', 'block');

    right.translate(r, r);
    right.stroke(255);
    right.strokeWeight(2);
    right.noFill();
    right.ellipse(0, 0, r * 2, r * 2);
    right.rectMode(right.CENTER);
    right.rect(0, 0, r * 2, r * 2);
  };

  right.draw = function(){
    right.translate(r, r);

    for(let i = 0; i < 1000; i++){
      var x = right.random(-r, r);
      var y = right.random(-r, r);
      var d = right.sqrt(x * x + y * y);
      total++;

      if(d < r){
        right.stroke(0, 255, 100);
        circle ++;
      }else{
        right.stroke(255, 0, 0);
      }

      pi = 4 * (circle / total);
      right.point(x, y);
    }
  };
};
var rightCanvas = new p5(rightCanvas, 'rightCanvas');

/* ############################################################################### */

var leftCanvas = function (left){
  left.setup = function(){
    //left.frameRate(10);
    var canvas = left.createCanvas(r * 2, r * 2);
    canvas.style('display', 'block');
  };

  left.draw = function(){
    left.translate(-r * (2 / 3), 0);
    let piLimited = pi.toFixed(9);
      console.log(pi);
      left.clear();
      left.noStroke();
      left.textSize(30);
      left.fill(255,0, 0);
      left.text('Number of Total Points : ' + total, r, r, (r * 2) - 75, r * 2); // Beautify
      left.text('Number of Points inside the Circle : ' + circle, r, r * (3 / 2), r * (3 / 2), r * 2) // Beautify
      left.textSize(55); // Beautify
      left.text('PI : ' + piLimited, r, r * (2 / 3)); // Beautify
  };
};
var leftCanvas = new p5(leftCanvas, 'leftCanvas');

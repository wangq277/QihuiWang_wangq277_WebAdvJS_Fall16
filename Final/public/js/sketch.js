var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var socket;

	//----------------ink here-------------------------
	var x=0;
    var y=0;
    var prevX=0;
    var prevY=0;
    var easing = 0.03;
    var x2=0;
    var y2=0;
    var prevX2=0;
    var prevY2=0;
    //-----------------------------------------
      

	var sketch = function(p) {
		// your global var for your p5 sketch here
      var painting;

        p.preload = function(){
        	painting = p.loadImage("../img/background.png");
        }

		// p5 setup
		p.setup = function() {
			p.createCanvas(5200, 2900);
			//p.background(254);

			p.image(painting,0,0);
			// Start a socket connection to the server
			socket = io.connect();
			// We make a named event called 'mouse' and write an anonymous callback function
			socket.on('mouse',
			// When we receive data
				function(data) {
				  console.log("Got: " + data.x + " " + data.y);
				 //  // Draw a blue circle
				  
				 //  p.noStroke();
				 //  p.ellipse(data.x,data.y,30,30);
				 x2+= (data.x-x2)*easing;
                 y2+= (data.y-y2)*easing;
                 p.strokeWeight(p.dist(x2, y2, data.x, data.y)/2.0);
                 p.line(data.x, data.y, prevX2, prevY2);
                 p.fill(0,0,123);
                 prevX2=x2;
                 prevY2=y2;
		});
				  // p.ellipse(data.x,data.y,30,30);

	//---------------ink here--------------------------------
	              p.smooth();
                  p.stroke(0, 10);
                  p.fill(0,100);
                  p.strokeWeight(30); 
                  p.textSize(13);
                  //p.textAlign(RIGHT);
                  p.frameRate(90);
                  p.text("press the left mouse button to refresh", p.width-10, p.height-9);
                 // p.ellipse(data.x,data.y,30,30);
				
			
		};

		p.draw = function() {
		    // Nothing
		// x+= (p.mouseX-x)*easing;
  //       y+= (p.mouseY-y)*easing;
  //       p.strokeWeight(p.dist(x, y, p.mouseX, p.mouseY)/2.0);
  //       p.line(p.mouseX, p.mouseY, prevX, prevY);
  //       prevX=x;
  //       prevY=y;
  //       var data = {
		// 		x: p.mouseX,
		// 		y: p.mouseY
		// 	};
  //       socket.emit('mouse',data);
  //       if (p.mouseIsPressed) { 
  //         p.background(234);
  //         p.text("press the left mouse button to refresh", p.width-10, p.height-9);
  //}
		};

 		p.mouseDragged = function() {
// 			// Draw some white circles
// //----------------ink here----------------------
        x+= (p.mouseX-x)*easing;
        y+= (p.mouseY-y)*easing;
        p.strokeWeight(p.dist(x, y, p.mouseX, p.mouseY)/2.0);
        p.line(p.mouseX, p.mouseY, prevX, prevY);
        prevX=x;
        prevY=y;
        
        


//----------------------------

		// 	p.fill(0);
		// 	// p.ellipse(p.mouseX,p.mouseY,30,30);

		// 	console.log("sendmouse: " + p.mouseX + " " + p.mouseY);

		// 	// Store the mouse coordinates
			var data = {
				x: p.mouseX,
				y: p.mouseY
			};

			// And send that object to the socket
			socket.emit('mouse',data);
		};

	};

	var init = function(){
		console.log('Initializing app.');

		// If you are writing long programs that mix multiple JS libraries,
		// you might want to start your P5 sketch in an "instance mode".
		// One of the benefits is that it enables you to run multiple P5 sketch in one program.
		// Learn more: https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
		var myp5 = new p5(sketch);

		// Optionally, you can specify a default container for the canvas and any other elements to append to with a second argument. Like this:
		// var myp5 = new p5(sketch, 'canvas-container');
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);
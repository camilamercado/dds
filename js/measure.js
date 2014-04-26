function position() {

		var max = 600;
		var min = 0;
		var pos = (Math.random() * (300 - min) + min);
		var pos2 = (Math.random() * (300 - min) + min);
		var pos3 = (Math.random() * (max - min) + min);
		var pos4 = (Math.random() * (max - min) + min);
		// console.log(pos);

		document.getElementById('z').style.top= pos+"px";
		document.getElementById('z').style.left= pos2+"px";

		document.getElementById('y').style.top= pos3+"px";
		document.getElementById('y').style.left= pos4+"px";

		var getA = pos - pos3;
		var getB = pos2 -pos4;

		console.log(getA);
		console.log(getB);
	}

	var counter = setInterval(distance, 1000);

	function distance(){		

		var getCenter = function (element) {
		        var data = element.getBoundingClientRect();
		        return {
		            x: data.left + data.width / 2,
		            y: data.top + data.height / 2
		        };
		    };

	    var getDistance = function (a, b) {
	        var aPosition = getCenter(a);
	        var bPosition = getCenter(b);
	        return Math.sqrt(
	        Math.pow(aPosition.x - bPosition.x, 2) + Math.pow(aPosition.y - bPosition.y, 2));
	   
	        console.log(aPosition.x);
	        console.log(aPosition.y);
	        // console.log(bPosition);
	    };

	    var distX = getDistance(document.getElementById("x"),
	    document.getElementById("z"));
	    var distY = getDistance(document.getElementById("x"),
	    document.getElementById("y"));

	    document.getElementById("result").textContent = distX;
	    document.getElementById("result2").textContent = distY;

	    if (distZ < distY){

	    	console.log("Z is closer");
	    	document.getElementById("result").style.color = "cyan";
	    	document.getElementById("result2").style.color = "black";
	    }

	    else {

	    	console.log("Y is closer");
	    	document.getElementById("result2").style.color = "tomato";
	    	document.getElementById("result").style.color = "black";

	    }
	}


	var count = 300;

	var counter = setInterval(orbit, 1000);
		
	function orbit(){
		console.log(count);

		count = count+10;
		count2 = (count - 300) *1.2;

		var Xpos = count;
		
		var Rad = 250;
		
		if (count > 1200 ){
			   
		   	clearInterval(counter);
		    //counter ended, do something here
		    return;
		}

			if (Xpos < (Rad * 2) )

			{	//QUADRANT 3
				if ( Xpos < Rad ) {

					var Xaxis = Rad - Xpos;
					
					//distance from count to center point is the remainder 
					
				}
				//QUADRANT 3
				else if ( Xpos > Rad ) {

					Xaxis = Xpos - Rad; 
					
					
				}
			
				var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis,2)));
				var Ypos = cart + Rad;
				
				document.getElementById('x').style.left= Xpos+"px";
				document.getElementById('x').style.top= Ypos+"px";


			} else if (Xpos > (Rad * 2) )

				{	
					//QUADRANT 1
					if ( Xpos > (Rad * 2) ) {

						Xpos = (Rad * 2) - (Xpos - (Rad * 2));
						
						// X point on axis eqaulized to 4th quadrant despite count val
						Xvar = Xpos - Rad;
						
						// X variable calculated as distance from 00
						var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xvar,2)));		
						
					}
					//QUADRANT 2
					else if ( Xpos > (Rad * 3) ) {

						Xaxis = Xpos - (Rad * 3)
						
						Xpos = Rad - Xaxis;
						
						// X variable calculated as distance from 00
						var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis,2)));

					}

						var Ypos = Rad - cart;	
														
						document.getElementById('x').style.left= Xpos+"px";
						document.getElementById('x').style.top= Ypos+"px";

						}	

				
	}



	// var counter = setInterval(beamer, 1000);

	// function beamer(){

	// 	var offsetx = getOffset(document.getElementById('x'));
	// 	var offsety = getOffset(document.getElementById('y'));
	// 	var offsetz = getOffset(document.getElementById('z'));

	// 	console.log("WHATTHEFUCK");


	// }


var telstar =

	 		{ 
	 			'obj'    : "telstar",
	 			'offset'   : 0,
	 			'Radius' : 350
	 			     
	 			
	 		}; 
	

			{ 
				'obj'    : "antenna1",
	 			'offset'   : 90,
	 			'Radius' : 300       
				
			},     

			{ 
				'obj'    : "antenna2",
	 			'offset'   : 180,
	 			'Radius' : 300       
				
			}


	var count = 0;

	var counter = setInterval(orbit, 1000);
		
	function orbit(telstar){

		for(var i = 0; i < satellites.length; i++) {
			
			count = count+10;
			
			var Xpos = offset + count;

			var Rad = Radius;
		
	}

		
		if (count > 1200){
			   
		   	clearInterval(counter);
		    //counter ended, do something here
		    return;
		}

			if (Xpos < (Rad * 2))

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


			} else if (Xpos > (Rad * 2))

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
						console.log(Xaxis);
						Xpos = Rad - Xaxis;
						// X variable calculated as distance from 00
						var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis,2)));

					}

						var Ypos = Rad - cart;									
						document.getElementById('x').style.left= Xpos+"px";
						document.getElementById('x').style.top= Ypos+"px";

				}	


	}


	var counter = setInterval(beamer, 1000);

	// function beamer(){

	// 	var offsetx = getOffset(document.getElementById('x'));
	// 	var offsety = getOffset(document.getElementById('y'));
	// 	var offsetz = getOffset(document.getElementById('z'));

	// 	console.log("WHATTHEFUCK");


	// }

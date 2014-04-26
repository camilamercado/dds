var satellites = [

	 		{   
	 			'identity'  : 'telstar',
	 			'offset'    : 0,
	 			'radius'    : 300	 			     
	 		},

			{ 	
				'identity'  : 'apollo',
	 			'offset'   : 900,
	 			'radius' : 300       				
			},  

			{ 
				'identity'  : 'daphne',
	 			'offset'   : 180,
	 			'radius' : 300       			
			}

];		


	var today = new Date();
	var count = 300;

	for (var i = 0; i < satellites.length; i++) {
		
		( function (i){

				count = count * 2;
				
				var Xpos = this.offset + count;

				var Rad = this.radius;

			
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
					


				if (satellites[i].identity === "telstar" ) {

					document.getElementById('x').style.left= Xpos+"px";
					document.getElementById('x').style.top= Ypos+"px";

				}

				if (satellites[i].identity === "apollo" ) {

					document.getElementById('z').style.left= Xpos+"px";
					document.getElementById('z').style.top= Ypos+"px";

				}

				if (satellites[i].identity === "daphne" ) {

					document.getElementById('y').style.left= Xpos+"px";
					document.getElementById('y').style.top= Ypos+"px";

				}


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
							
						if (satellites[i].identity === "telstar" ) {

							document.getElementById('x').style.left= Xpos+"px";
							document.getElementById('x').style.top= Ypos+"px";

						}

						if (satellites[i].identity === "apollo" ) {

							document.getElementById('z').style.left= Xpos+"px";
							document.getElementById('z').style.top= Ypos+"px";

						}

						if (satellites[i].identity === "daphne" ) {

							document.getElementById('y').style.left= Xpos+"px";
							document.getElementById('y').style.top= Ypos+"px";

						}



					}	



		}).call(satellites[i], i )


	}

	
// setTimeout("location.reload(true);",1000);

	// var counter = setInterval(beamer, 1000);

	// function beamer(){

	// 	var offsetx = getOffset(document.getElementById('x'));
	// 	var offsety = getOffset(document.getElementById('y'));
	// 	var offsetz = getOffset(document.getElementById('z'));

	// 	console.log("WHATTHEFUCK");


	// }

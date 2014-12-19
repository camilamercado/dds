//var count2 = 0;

	var counter2 = setInterval(orbit2, 1000);
		
	function orbit2(){

		var offset=document.querySelector('.space').style.left;
		// console.log(offset);

		count2 = count2*1.4;

		var Xpos2 = count2+offset;
		var Rad2 = 300;
		
		if (count2 > 1680 ){
			   
		   	clearInterval(counter2);
		    //counter ended, do something here
		    return;
		}

			if (Xpos2 < (Rad2 * 2) )

			{	//QUADRANT 3
				if ( Xpos2 < Rad2 ) {z

					var Xaxis2 = Rad2 - Xpos2;
					
					//distance from count to center point is the remainder 
					
				}
				//QUADRANT 3
				else if ( Xpos2 > Rad2 ) {

					Xaxis2 = Xpos2 - Rad2; 
					
					
				}
			
				var cart2 = Math.sqrt((Math.pow(Rad2,2)) - (Math.pow(Xaxis2,2)));
		
				var Ypos2 = cart2 + Rad2;
				

				document.getElementById('z').style.left= Xpos2+"px";
				document.getElementById('z').style.top= Ypos2+"px";

				document.getElementById('y').style.left= Xpos2+"px";
				document.getElementById('y').style.top= (Ypos2+100)+"px";



			} else if (Xpos2 > (Rad2 * 2) )

				{	
					//QUADRANT 1
					if ( Xpos2 > (Rad2 * 2) ) {

						Xpos2 = (Rad2 * 2) - (Xpos2 - (Rad2 * 2));
						
						// X point on axis eqaulized to 4th quadrant despite count val
						Xvar2 = Xpos2 - Rad2;
						
						// X variable calculated as distance from 00
						var cart2 = Math.sqrt((Math.pow(Rad2,2)) - (Math.pow(Xvar2,2)));		
						
					}
					//QUADRANT 2
					else if ( Xpos2 > (Rad2 * 3) ) {

						Xaxis2 = Xpos2 - (Rad2 * 3)
						
						Xpos2 = Rad2 - Xaxis2;
						
						// X variable calculated as distance from 00
						var cart2 = Math.sqrt((Math.pow(Rad2,2)) - (Math.pow(Xaxis2,2)));

					}

						var Ypos2 = Rad2 - cart2;	
														
						document.getElementById('z').style.left= Xpos2+"px";
						document.getElementById('z').style.top= Ypos2+"px";

						document.getElementById('y').style.left= (Xpos2+100)+"px";
						document.getElementById('y').style.top= Ypos2+"px";

						document.getElementById('x').style.left= Xpos+"px";
						document.getElementById('x').style.top= Ypos+"px";

						

						
				}	

				
	}


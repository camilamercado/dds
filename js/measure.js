var objx = document.getElementById('x');
var objy = document.getElementById('y');
var objz = document.getElementById('z');


	var count =550;

	var counter = setInterval(orbit, 1000);
		
	function orbit(){
		//console.log(count);

		count = count+10;
		count2 = (count - 300) *1.2;
		var offset=document.querySelector('.space').style.left;
		var Xpos2 = count2+offset;

		var Xpos = count;

		//console.log(Xpos, Xpos2);
		
		var Rad = 300;
		

		// if (count > 870){
		// 	document.querySelector('.one').style.display= "none";
		// 	document.querySelector('.two').style.display= "block";
		// }

			if (Xpos < (Rad * 2) || Xpos2 < (Rad * 2) )

			{	//QUADRANT 4
				if ( Xpos < Rad || Xpos2 < Rad ) {

					var Xaxis = Rad - Xpos;
					var Xaxis2 = Rad - Xpos2;
					console.log("Q4");
					
					//distance from count to center point is the remainder 
					
				}
				//QUADRANT 3
				else if ( Xpos > Rad || Xpos2 > Rad ) {

					Xaxis = Xpos - Rad; 
					Xaxis2 = Xpos2 - Rad; 
					console.log("Q3");
					
					
				}
			
				var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis,2)));
				var cart2 = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis2,2)));
				var Ypos = cart + Rad;
				var Ypos2 = cart2 + Rad;
				
				objx.style.left= Xpos+"px";
				objx.style.top= Ypos+"px";
				
				objy.style.left= (Xpos+80)+"px";
				objy.style.top= (Ypos+80)+"px";
				
				objz.style.left= Xpos2+"px";
				objz.style.top= Ypos2+"px";
				
				//console.log("Q1");
						console.log(Xpos);
						console.log(Xpos2);

			} else if (Xpos > (Rad * 2) || Xpos2 > (Rad * 2) )

				{	
					//QUADRANT 1
					if ( Xpos >= (Rad * 2) || Xpos2 > (Rad * 2) ) {

						Xpos = (Rad * 2) - (Xpos - (Rad * 2));
						Xpos2 = (Rad * 2) - (Xpos2 - (Rad * 2));
						
						// X point on axis equalized to 4th quadrant despite count val
						Xvar = Xpos - Rad;
						Xvar2 = Xpos2 - Rad;
						
						// X variable calculated as distance from 00
						var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xvar,2)));
						var cart2 = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xvar2,2)));	
						
						
					}
					//QUADRANT 2
					else if ( Xpos > (Rad * 3) || Xpos > (Rad * 3) ) {

						Xaxis = Xpos - (Rad * 3)
						Xaxis2 = Xpos2 - (Rad * 3)
						
						Xpos = Rad - Xaxis;
						Xpos2 = Rad - Xaxis2;
						
						// X variable calculated as distance from 00
						var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis,2)));
						var cart2 = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(Xaxis2,2)));
						


					}

						var Ypos = Rad - cart;	
						var Ypos2 = Rad - cart2;	
														
						// objx.style.left= Xpos+"px";
						// objx.style.top= Ypos+"px";
						
						objy.style.left= (Xpos2+80)+"px";
						objy.style.top= (Ypos2+80)+"px";
						
						objx.style.left= Xpos2+"px";
						objx.style.top= Ypos2+"px";


				}	

	if (count > 880 ){
			   
		   	clearInterval(counter);
		    //counter ended, do something here
		    return;
		}

		if (count > 740 ){
			   
		   	document.getElementById('x').style.display= "none";
		   	document.getElementById('y').style.display= "none";
		   	
		   
		    document.getElementById('z').style.backgroundImage="url(./img/telstarB2.png)";
		    document.getElementById('z').style.width="20px";
		    document.getElementById('z').style.height="20px";

		    document.querySelector('.beam').style.width="320px";
		   

		    setInterval(function () {
				
				 document.querySelector('.beam2').style.height="310px";

			}, 100);

		    setInterval(function () {
				
				document.querySelector('.laurel').style.display= "block";

			}, 200);

			setInterval(function () {
				
				document.querySelector('.beam').style.display= "none";
				document.querySelector('.beam2').style.display= "none";


			}, 300);


		}
				
	}


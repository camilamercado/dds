	var count = 11; 
		var timer = 0; 

		setInterval(function(){

			count = count - 1;
	    	document.querySelector('.countDown').innerHTML= count;

	    	if (count < 0 ) {
	    		document.querySelector('.countDown').style.display= "none";
	    		count = null;
	    		timer = timer + 1;
	    		console.log(timer);
	    	}

	    	if (timer >= 2 ) {
	    		document.querySelector('.blockOut').style.display= "block";

	    		for(var i = 0; i < bodies.length; i++) {
		
					if(bodies[i].timer === timer ) {
			
						document.querySelector(".number").style.backgroundImage=bodies[i].img;
						document.querySelector(".textA").innerHTML=bodies[i].btext;
						document.querySelector(".blockOut").style.backgroundImage=bodies[i].img;
						
					}
				}
	    		
	    	} if (timer >= 50 ) {
	    		document.querySelector('.bodies').style.display= "none";
	    		document.querySelector('.events').style.display= "block";

	    		 for(var i = 0; i < events.length; i++) {
        
			        if(events[i].timer === timer ) {
			          document.querySelector(".chapter").innerHTML=events[i].number;
			          document.querySelector(".text4").innerHTML=events[i].text;
			          document.querySelector(".Laurel4").style.opacity=events[i].opacity;
			        }
	    		
	    		}

		    }	


	 	},1000);

	 };

function narrate() {

	var today = new Date();
	var ss = today.getSeconds();
	var sequence = ss;
	var degr = ss - 30;

	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].timer <= sequence ) {
			
			document.querySelector(".chapter").innerHTML=chapter[i].number;
			document.querySelector(".text").innerHTML=chapter[i].text;

		}
	}

	if (ss < 30) {
      
      document.querySelector(".telstar").style.setProperty("-webkit-transform","rotate("+ (degr) +"deg)", null);

      document.querySelector('.sculpture').style.display="none";
    
    }
    
    else {

      var daphne = "url(img/daphne/" + degr + ".png)";

      document.querySelector('.sculpture').style.backgroundImage=daphne;
      
      document.querySelector('.telstar').style.display="none";

    }

}
	
onload = function() { narrate(); }

var chapter = [

			{ 
	 			'number' : 1, 
	 			'timer' : 1,
	 			'text' : "Amidst the metallic scent of impending space dollars, 1000 bespectacled operators buzzed in the distinct air of a Cape Canaveral control room. The perspiration of that historical moment became sterilized upon hitting the immaculate surface of NASA grade plastic. There would be no room for error in the specifically grotesque form of human sweat."
	 			 
	 		}, 

			// { 
			// 	'number' : 2,
			// 	'timer' : 15,  
	 	// 		'text' : "Across the flattened fold of space-time, one anxious nymph sped with light-footed fear after having been hit by an electrostatic arrow of all encompassing disdain."
			// }, 


			// { 
			// 	'number' : 3,  
			// 	'timer' : 16,
	 	// 		'text' : "Meanwhile, in 1985 Richard Feynman drew the connecting lines, feverishly across the muddy green of a chalkboard that had at any given time bore the bits and pieces of an encyclopedia of electro surveillance."
			// }, 


			// { 
			// 	'number' : 4, 
			// 	'timer' : 24, 
	 	// 		'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention.3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
	 	// 	}, 

	 	// 	{ 
			// 	'number' : 5,  
			// 	'timer' : 32,
	 	// 		'text' : "Somewhere, Daphne wrestled with a consciousness split between the thick sappy scent of tree bark and the prickling tingling static of 3 nations worth of Television."
	 	// 	}, 


	 	// 	{ 
			// 	'number' : 6,  
			// 	'timer' : 40,
	 	// 		'text' : "As Apollo awoke to find a laurel wreath strewn lazily across his pounding brow, he leapt up against the rigid flesh of wood that was once his beloved Daphne. Immediately forgetting his amnesia in the caress of a Laurel tree, Apollo's only true contribution to the Daphne/Telstar affair would be the intertwining of consumer space probing and the term 'tree hugger'."
	 	// 	}, 


	 		{ 
				'number' : 7,  
				'timer' : 30,
	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention.3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
	 		}, 


	 		// { 
				// 'number' : 8,  
				// 'timer' : 56,
	 		// 	'text' : "This underappreciated fact of nature, is entirely obvious despite Apollo's (and an entire academy of hopeless romantics) ignorance, and is apparent to anyone with common sense and a slightly more fulfilled vantage point along the track of time. After all, both Apollo and Telstar share the same track record of partaking in the casual objectification of the female form."
	 		// },

	 		// { 
				// 'number' : 9,
				// 'timer' : 60,  
	 		// 	'text' : "For every flattened woman depicted through the effervescent glow of static electricity, is a freshly choreographed wreath of Laurels, placed in absent care- on the male head of a god."
	 		// },



]

















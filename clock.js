
function narrate() {

	var today = new Date();
	var ss = today.getSeconds();
<<<<<<< HEAD
	var sequence = ss % 5;
	var degr = ss * 6;

	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].number <= sequence) {
=======
	var sequence = ss;
	var degr = ss - 30;

	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].timer <= sequence ) {
>>>>>>> 55f96d186acd8be99b95b85fd3f0679c13648661
			
			document.querySelector(".chapter").innerHTML=chapter[i].number;
			document.querySelector(".text").innerHTML=chapter[i].text;

		}
	}

<<<<<<< HEAD
	if (ss > 24) {
=======
	if (ss < 30) {
>>>>>>> 55f96d186acd8be99b95b85fd3f0679c13648661
      
      document.querySelector(".telstar").style.setProperty("-webkit-transform","rotate("+ (degr) +"deg)", null);

      document.querySelector('.sculpture').style.display="none";
    
    }
    
    else {

<<<<<<< HEAD
      var daphne = "url(img/daphne/" + ss + ".png)";
=======
      var daphne = "url(img/daphne/" + degr + ".png)";
>>>>>>> 55f96d186acd8be99b95b85fd3f0679c13648661

      document.querySelector('.sculpture').style.backgroundImage=daphne;
      
      document.querySelector('.telstar').style.display="none";

    }

}
	
onload = function() { narrate(); }

var chapter = [

			{ 
<<<<<<< HEAD
	 			'number' : 1,  
	 			'text' : "Amidst the metallic scent of impending space dollars, 1000 bespectacled operators buzzed in the distinct air of a Cape Canaveral control room."
	 			     
	 		}, 
	

			{ 
				'number' : 2,  
	 			'text' : "The persperation of that historical moment became sterilized upon hitting the immaculate surface of NASA grade plastic. There would be no room for error in the singularly grotesque form of human sweat."
	 			
			},   


			{ 
				'number' : 3,  
	 			'text' : "Across the flattened fold of space time, one anxious nymph, sped with lightfooted fear after having been hit by harbernger tipped arrow of all encompasing disdain."
			}, 


			{ 
				'number' : 4,  
	 			'text' : "Meanwhile, in 1985 Richard Feynman drew the connecting lines, fevershely across the muddy green of a chalkboard that had bore the marks of an encycolpedia of the bits and peices of electro surveillance."
			}, 


			{ 
				'number' : 5,  
	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that richoched straight through the soft pink substance of human attention."
	 		}, 


	 		{ 
				'number' : 6,  
	 			'text' : "3 nations of housewives, bachelors, freckled boyscouts, and even scrape-kneed tomboys sat down before the great flickering tube of telstar, and thus one satellite sponsored the imagination of a globe."
=======
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
				'number' : 2,  
				'timer' : 25,
	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention."
>>>>>>> 55f96d186acd8be99b95b85fd3f0679c13648661
	 		}, 


	 		{ 
<<<<<<< HEAD
				'number' : 7,  
	 			'text' : "Somewhere, Daphne wrestled with a conciousness split between the thick sappy scent of tree bark and the prickling tingling static of 3 nations TV sets."
	 		}, 


	 		{ 
				'number' : 8,  
	 			'text' : "As Apollo awoke to find a laurel weath strewn lazily across his pounding brow, he lept us against the rigid flesh of wood that was once his beloved Daphne. Immediately forgetting his amnesia in the caress of a Laurel tree, Apollo's contribution to the Daphnes tragedy would now forever be attributed as the simple intertwining of consumer space probing and the term -tree hugger."
	 		}, 


	 		{ 
				'number' : 9,  
	 			'text' : "The launch of Telstar, for those who prefer its tale to Ovids, can be mapped out against the diagrams of Retrocausality left by the soft white residue of Feynmans moving hand."
	 		}, 


	 		{ 
				'number' : 10,  
	 			'text' : "Apollo never did look into that momentary blackout by the laurel tree, afterall he had become quite accostumed to loosing contact with physicality in moments of fickle play, a phenomena to which humans can only ever guess at through extreme adrenaline or orgasm. It was one of those perks of having a return adress that read Mt. Olympus."
	 		}, 


	 		{ 
				'number' : 11,  
	 			'text' : "The fact that Apollo had become reborn in the form of a commercially broadcasting satellite would seem as perpostuous to him as telling a positron it is in fact just an electron moving backwards through time. Though both statements are true, we must the forgive the example of the positron, as clearly they don't talk."
	 		},


	 		{ 
				'number' : 12,  
	 			'text' : "This underappreciated fact of nature, is entirely obvious despite Apollo's (and many more apple eaters) ignorance, and is apparent to anyone with common sense and a slightly more fufilled vantage point along the track of time."
	 		},


	 		{ 
				'number' : 13,  
	 			'text' : "Afterall, both Apollo and Telstar share the same track record of partaking in the casual objectification of the female form."
	 		},


	 		{ 
				'number' : 14,  
	 			'text' : "For every flattened woman depicted through the efervescant glow of static electricity, is a newely coreogrpahed wrath of laurels, placed in absent care- on the male head of a god."
	 		},



]
=======
				'number' : 3,  
				'timer' : 45,
	 			'text' : "3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
	 		},

	 		// { 
				// 'number' : 9,
				// 'timer' : 60,  
	 		// 	'text' : "For every flattened woman depicted through the effervescent glow of static electricity, is a freshly choreographed wreath of Laurels, placed in absent care- on the male head of a god."
	 		// },



]


// 			{ 
// 	 			'number' : 1, 
// 	 			'timer' : 1,
// 	 			'text' : "Amidst the metallic scent of impending space dollars, 1000 bespectacled operators buzzed in the distinct air of a Cape Canaveral control room. The perspiration of that historical moment became sterilized upon hitting the immaculate surface of NASA grade plastic. There would be no room for error in the specifically grotesque form of human sweat."
	 			 
// 	 		}, 

// 			{ 
// 				'number' : 2,
// 				'timer' : 8,  
// 	 			'text' : "Across the flattened fold of space-time, one anxious nymph sped with light-footed fear after having been hit by an electrostatic arrow of all encompassing disdain."
// 			}, 


// 			{ 
// 				'number' : 3,  
// 				'timer' : 16,
// 	 			'text' : "Meanwhile, in 1985 Richard Feynman drew the connecting lines, feverishly across the muddy green of a chalkboard that had at any given time bore the bits and pieces of an encyclopedia of electro surveillance."
// 			}, 


// 			{ 
// 				'number' : 4, 
// 				'timer' : 24, 
// 	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention.3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
// 	 		}, 

// 	 		{ 
// 				'number' : 5,  
// 				'timer' : 32,
// 	 			'text' : "Somewhere, Daphne wrestled with a consciousness split between the thick sappy scent of tree bark and the prickling tingling static of 3 nations worth of Television."
// 	 		}, 


// 	 		{ 
// 				'number' : 6,  
// 				'timer' : 40,
// 	 			'text' : "As Apollo awoke to find a laurel wreath strewn lazily across his pounding brow, he leapt up against the rigid flesh of wood that was once his beloved Daphne. Immediately forgetting his amnesia in the caress of a Laurel tree, Apollo's only true contribution to the Daphne/Telstar affair would be the intertwining of consumer space probing and the term 'tree hugger'."
// 	 		}, 


// 	 		{ 
// 				'number' : 7,  
// 				'timer' : 48,
// 	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention."
// 	 		}, 


// 	 		{ 
// 				'number' : 8,  
// 				'timer' : 56,
// 	 			'text' : "3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
// 	 		},

// 	 		{ 
// 				'number' : 9,
// 				'timer' : 60,  
// 	 			'text' : "For every flattened woman depicted through the effervescent glow of static electricity, is a freshly choreographed wreath of Laurels, placed in absent care- on the male head of a god."
// 	 		},



// ]
>>>>>>> 55f96d186acd8be99b95b85fd3f0679c13648661

















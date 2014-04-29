
var time =0;

setInterval(function narrate() {

	time = time +1;

	var today = new Date();
	var ss = today.getSeconds();

	var sequence = ss;
	var degr = ss - 30;


	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].timer <= time ) {

			
			document.querySelector(".chapter").innerHTML=chapter[i].number;
			document.querySelector(".text").innerHTML=chapter[i].text;

		}
	    
	    if (chapter[i].figure === 1){

	      var daphne = "url(./img/daphne/" + time + ".png)";


	      document.querySelector('.sculpture').style.display="block";
	      document.querySelector('.sculpture').style.backgroundImage=daphne;
	      
	      document.querySelector('.telstar').style.display="none";

	    } if (chapter[i].figure === 2){

	    	 document.querySelector('.telstar').style.display="none";
	    	 document.querySelector('.sculpture').style.display="none";
	    	 document.querySelector('.dwaves').style.display="block";

	    }

	    if (chapter[i].figure === 3) {
	      
	      document.querySelector(".telstar").style.setProperty("-webkit-transform","rotate("+ (degr) +"deg)", null);
	      document.querySelector('.telstar').style.display="block";
	      document.querySelector('.sculpture').style.display="none";
	      document.querySelector('.dwaves').style.display="none";
	    
	    }
	}


},1000);

var chapter = [


			{
	 			'number' : "0A", 
	 			'timer' : 1,
	 			'figure' : 1,
	 			'text' : "Daphne roams the woods, and encounters little of civilization. She is a Nymph, and confronts no subjectivity made up of anything other than the weight of her feet, or the resistance of a branch hitting a body in motion."
	 			 
	 		}, 

			{ 
				'number' : "0B",
				'timer' : 11,  
				'figure' : 2,
	 			'text' : "A single electron is emitted. It moves through space in a linear trajectory, and must pass through a wall with two equidistant slits. It will go through both- simultaneously, as no one is there to object."
			}, 


			{ 
				'number' : "0C",  
				'timer' : 21,
				'figure' : 3,
	 			'text' : "Orbiting the earth are Vanguard 1, Ariel 1, and Alouette 1. The satellites sit in quiet observation of geodetic measurements and the ionosphere, through orbit analysis. They send back data, not yet organized by men. It is 1961."
			}, 


			{ 
				'number' : "1A", 
				'timer' : 31, 
				'figure' : 1,
	 			'text' : "Apollo and Daphne circle the earth three times. The god (Apollo) chases the non-reciprocating object of his affections (Daphne). His desire is unflinching, non-flexible."
	 		}, 

	 		{ 
				'number' : "1B",  
				'timer' : 41,
				'figure' : 2,
	 			'text' : "A monitor is set up to observe the next electron. When the electron reaches the double-slitted wall, the monitor is programmed to establish which pathway is chosen."
	 		}, 


	 		{ 
				'number' : "1C",  
				'timer' : 51,
				'figure' : 3,
	 			'text' : "Telstar is launched into orbit. It is 1962, and three countries watch TV sets activated via telephone lines. They await Telstar’s promise of the first satellite broadcast of a television program."
	 		}, 


	 		{ 

				'number' : "2A", 
				'timer' : 61, 
				'figure' : 1,
	 			'text' : "At the end of three rotations around the earth, Daphne grows tired enough for Apollo to catch up. She calls to father the river god Peneus for aid in escaping Apollo’s embrace."
	 		}, 


	 		{ 
				'number' : "2B", 
				'timer' : 40, 
				'figure' : 2, 
	 			'text' : "The Electron’s movement is evaluated by the monitor that was built to establish a logical history of action, in the binary terms is was wired with. Left of right, on or off, true or false."
	 		}, 


	 		{ 
				'number' : "2C",  
				'timer' : 40, 
				'figure' : 3,
	 			'text' : "Telstar is successfully orbiting the planet earth, and the task of locating it with antennas begins. The antennas probe space, ready to beam the first man made narrative beyond the confines of oxygen in the form of commercial broadcasting."
	 		}, 


	 		{ 
				'number' : "3A",  
				'timer' : 40, 
				'figure' : 1,
	 			'text' : "The moment in which Apollo’s arm extends to grasp Daphne is the same in which her father observes her plight. Daphne is in a forced state of evasion or objectivity."
	 		}, 


	 		{ 
				'number' : "3B", 
				'timer' : 40, 
				'figure' : 2, 
	 			'text' : "The moment in which the electron must pass through the wall is the same in which the monitor holds its gaze on the two points of passage, not equipped to process the possibility simultaneity. The electron is in a forced state of evasion or reflexivity."
	 		},


	 		{ 
				'number' : "3C",  
				'timer' : 40, 
				'figure' : 3, 
	 			'text' : "The moment is which the antennas catch hold of Telstar’s trajectory is the same in which a signal of man made narrative is programmed to pierce outer space in a non physical form. The narrative of space-time is in a forced state of evasion or subjectivity."
	 		},


	 		{ 
				'number' : "4",  
				'timer' : 40, 
				'figure' : 1, 
	 			'text' : "Afterall, both Apollo and Telstar share the same track record of partaking in the casual objectification of the female form."
	 		},


	 		{ 
				'number' : 14,  
	 			'text' : "For every flattened woman depicted through the efervescant glow of static electricity, is a newely coreogrpahed wrath of laurels, placed in absent care- on the male head of a god."
	 		},



]


// var chapter = [


// 			{
// 	 			'number' : 1, 
// 	 			'timer' : 1,
// 	 			'text' : "Amidst the metallic scent of impending space dollars, 1000 bespectacled operators buzzed in the distinct air of a Cape Canaveral control room. The perspiration of that historical moment became sterilized upon hitting the immaculate surface of NASA grade plastic. There would be no room for error in the specifically grotesque form of human sweat."
	 			 
// 	 		}, 

// 			{ 
// 				'number' : 2,
// 				'timer' : 15,  
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
// 	 			'text' : "Somewhere, Daphne wrestled with a conciousness split between the thick sappy scent of tree bark and the prickling tingling static of 3 nations TV sets."
// 	 		}, 


// 	 		{ 
// 				'number' : 8,  
// 	 			'text' : "As Apollo awoke to find a laurel weath strewn lazily across his pounding brow, he lept us against the rigid flesh of wood that was once his beloved Daphne. Immediately forgetting his amnesia in the caress of a Laurel tree, Apollo's contribution to the Daphnes tragedy would now forever be attributed as the simple intertwining of consumer space probing and the term -tree hugger."
// 	 		}, 


// 	 		{ 
// 				'number' : 9,  
// 	 			'text' : "The launch of Telstar, for those who prefer its tale to Ovids, can be mapped out against the diagrams of Retrocausality left by the soft white residue of Feynmans moving hand."
// 	 		}, 


// 	 		{ 
// 				'number' : 10,  
// 	 			'text' : "Apollo never did look into that momentary blackout by the laurel tree, afterall he had become quite accostumed to loosing contact with physicality in moments of fickle play, a phenomena to which humans can only ever guess at through extreme adrenaline or orgasm. It was one of those perks of having a return adress that read Mt. Olympus."
// 	 		}, 


// 	 		{ 
// 				'number' : 11,  
// 	 			'text' : "The fact that Apollo had become reborn in the form of a commercially broadcasting satellite would seem as perpostuous to him as telling a positron it is in fact just an electron moving backwards through time. Though both statements are true, we must the forgive the example of the positron, as clearly they don't talk."
// 	 		},


// 	 		{ 
// 				'number' : 12,  
// 	 			'text' : "This underappreciated fact of nature, is entirely obvious despite Apollo's (and many more apple eaters) ignorance, and is apparent to anyone with common sense and a slightly more fufilled vantage point along the track of time."
// 	 		},


// 	 		{ 
// 				'number' : 13,  
// 	 			'text' : "Afterall, both Apollo and Telstar share the same track record of partaking in the casual objectification of the female form."
// 	 		},


// 	 		{ 
// 				'number' : 14,  
// 	 			'text' : "For every flattened woman depicted through the efervescant glow of static electricity, is a newely coreogrpahed wrath of laurels, placed in absent care- on the male head of a god."
// 	 		},



// ]













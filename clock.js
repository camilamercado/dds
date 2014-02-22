
function narrate() {

	var today = new Date();
	var ss = today.getSeconds();
	var sequence = ss % 5;
	var degr = ss * 6;

	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].number <= sequence) {
			
			document.querySelector(".chapter").innerHTML=chapter[i].number;
			document.querySelector(".text").innerHTML=chapter[i].text;

		}
	}

	if (ss > 24) {
      
      document.querySelector(".telstar").style.setProperty("-webkit-transform","rotate("+ (degr) +"deg)", null);

      document.querySelector('.sculpture').style.display="none";
    
    }
    
    else {

      var daphne = "url(img/daphne/" + ss + ".png)";

      document.querySelector('.sculpture').style.backgroundImage=daphne;
      
      document.querySelector('.telstar').style.display="none";

    }

}
	
onload = function() { narrate(); }

var chapter = [

			{ 
	 			'number' : 1,  
	 			'text' : "Amidst the metallic scent of impending space dollars, 1000 bespectacled operators buzzed in the distinct air of a Cape Canaveral control room."
	 			     
	 		}, 
	

			{ 
				'number' : 2,  
	 			'text' : "The perspiration of that historical moment became sterilized upon hitting the immaculate surface of NASA grade plastic. There would be no room for error in the specifically grotesque form of human sweat."
	 			
			},   


			{ 
				'number' : 3,  
	 			'text' : "Across the flattened fold of space-time, one anxious nymph sped with light-footed fear after having been hit by an electrostatic arrow of all encompassing disdain."
			}, 


			{ 
				'number' : 4,  
	 			'text' : "Meanwhile, in 1985 Richard Feynman drew the connecting lines, feverishly across the muddy green of a chalkboard that had at any given time bore the bits and pieces of an encyclopedia of electro surveillance."
			}, 


			{ 
				'number' : 5,  
	 			'text' : "The agency of the launch was matched only by the vigor of its utilization. Like a rocket into space, each switch of a living room television sent waves of causality that ricocheted straight through the soft pink undulating substance of human attention."
	 		}, 


	 		{ 
				'number' : 6,  
	 			'text' : "3 nations of housewives, bachelors, freckled boy scouts, and even scrape-kneed tomboys sat down before the great flickering tube of Telstar, and thus one satellite sponsored the imagination of a globe."
	 		}, 


	 		{ 
				'number' : 7,  
	 			'text' : "Somewhere, Daphne wrestled with a consciousness split between the thick sappy scent of tree bark and the prickling tingling static of 3 nations worth of Television."
	 		}, 


	 		{ 
				'number' : 8,  
	 			'text' : "As Apollo awoke to find a laurel wreath strewn lazily across his pounding brow, he leapt up against the rigid flesh of wood that was once his beloved Daphne. Immediately forgetting his amnesia in the caress of a Laurel tree, Apollo's only true contribution to the Daphne/Telstar affair would be the intertwining of consumer space probing and the term 'tree hugger'."
	 		}, 


	 		{ 
				'number' : 9,  
	 			'text' : "The launch of Telstar, for those who prefer its tale to the hopeless romantic OvidÕs, can be traced along the soft white residue of FeynmanÕs moving hand. Retro-Causality, played out on the macro-mythic/market-astrophic scale."
	 		}, 


	 		{ 
				'number' : 10,  
	 			'text' : "Apollo never did look into that momentary blackout by the Laurel tree, after all he had become quite accustomed to loosing contact with physicality in moments of fickle play, a phenomena to which humans can only ever guess at through extreme adrenaline or orgasm. It was one of those perks of having a return address that read Mt. Olympus."
	 		}, 


	 		{ 
				'number' : 11,  
	 			'text' : "The fact that Apollo had become reborn in the form of a commercially broadcasting satellite would seem as preposterous to him as telling a positron it is in fact just an electron moving backwards through time."
	 		},


	 		{ 
				'number' : 12,  
	 			'text' : "This underappreciated fact of nature, is entirely obvious despite Apollo's (and an entire academy of hopeless romantics) ignorance, and is apparent to anyone with common sense and a slightly more fulfilled vantage point along the track of time."
	 		},


	 		{ 
				'number' : 13,  
	 			'text' : "After all, both Apollo and Telstar share the same track record of partaking in the casual objectification of the female form."
	 		},


	 		{ 
				'number' : 14,  
	 			'text' : "For every flattened woman depicted through the effervescent glow of static electricity, is a freshly choreographed wreath of Laurels, placed in absent care- on the male head of a god."
	 		},



]

















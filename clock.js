
function narrate() {

	var today = new Date();
	var ss = today.getSeconds();
	var sequence = ss % 5;
	var degr = ss * 6;

	for(var i = 0; i < chapter.length; i++) {
		
		if(chapter[i].number <= sequence) {
			
			document.querySelector(".count").innerHTML=chapter[i].text;

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
	 		}, 


	 		{ 
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

















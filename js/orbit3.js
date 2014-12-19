
setInterval(function (turn) {
    
    var today = new Date();
	  var dd = today.getDate();
    var ss = today.getSeconds();    
    var degr = ss * 6;

    if (ss > 39) {      
      daph = ss - 30;
      var daphne = "url(img/daphne/" + daph + ".png)";
      document.querySelector('.sculpture').style.backgroundImage=daphne;
    }
    
    else {
      var daphne = "url(img/daphne/" + ss + ".png)";
      document.querySelector('.sculpture').style.backgroundImage=daphne;
    }

}, 1000);


$(".four").mouseenter(function(){
  var time = 0;
  console.log("hello");
  function order(){};

});

setInterval(function order() {

    time = (time + 1);
    console.log(time);

    for(var i = 0; i < chapter.length; i++) {
        
        if(chapter[i].timer === time ) {
          document.querySelector(".chapter").innerHTML=chapter[i].number;
          document.querySelector(".text4").innerHTML=chapter[i].text;
        }

        if( time >= 1) {
          document.querySelector(".Laurel4").style.display="block";
          
          setInterval(function () {
            
            document.querySelector('.Laurel4').style.opacity="0.3";
            document.querySelector('.sculpture').style.opacity="0.9";
          
          }, 10000);

          setInterval(function () {
            
            document.querySelector('.Laurel4').style.opacity="0.6";
            document.querySelector('.sculpture').style.opacity="0.6";
          
          }, 20000);

          setInterval(function () {
            
            document.querySelector('.Laurel4').style.opacity="0.9";
            document.querySelector('.sculpture').style.opacity="0.3";
          
          }, 30000);

           setInterval(function () {
            
            document.querySelector('.Laurel4').style.opacity="1";
            document.querySelector('.sculpture').style.opacity="0.1";
          
          }, 40000);
        }
      }
  }, 1000);

var chapter = [


      {
        'number' : "1)", 
        'timer' : 2,
        'text' : "Two figures are hit by Cupids arrow. The god (Apollo), and the nymph (Daphne)."
         
      }, 

      { 
        'number' : "2)",
        'timer' : 12,  
        'text' : "Apollo is struck by an unflinching resolve to possess Daphne. Daphne is struck by an unflinching resolve to evade Apollo."

      }, 

      { 
        'number' : "3)",
        'timer' : 20,  
        'text' : "The two figures circle the planet earth in pursuit and evasion. At the end of a third orbit around the globe, Daphne begins to decelerate (feeling an entropy that gods are not acquainted with)."

      }, 

      { 
        'number' : "4)",
        'timer' : 30,  
        'text' : "The decrease in Daphne's speed is a directly proportional inverse relationship to her increase in fear, and Apollo's increase in joy."
      }, 

      { 
        'number' : "5)",
        'timer' : 40,  
        'text' : "As Daphne's speed/fear ratio continues to tip in favor of terror, she introduces a third figure into the equation, (her father the river god Peneus) by calling for help."     
      }, 

      { 
        'number' : "6)",
        'timer' : 50,  
        'text' : "The gaze of Peneus pierces through levels of sediment, rock, water and flesh to fix upon the form of the terror stricken nymph."     
      }, 

      { 
        'number' : "7)",
        'timer' : 60,  
        'text' : "The sprouting of ten fingertips is quickly followed by a hardening of the flesh, a rigidness of the hair, and the thick sappy gag of tree sap. "     
      }, 

      { 
        'number' : "8)",
        'timer' : 70,  
        'text' : "Apollo looks over the transformation in devastating glee. While Daphne is no longer a nymph, she is now incapable of flight, and defenseless against the realization of Apollo's ever-present will to possess her as his own."     
      }, 

      { 
        'number' : "9)",
        'timer' : 80,  
        'text' : "Time continues for Daphne, yet now in the form of tree rungs, and a god curled around her limbs. Daphne's figure is fixed in space, yet still desiring to flee."     
      }, 

      { 
        'number' : "10)",
        'timer' : 90,  
        'text' : "Being so overjoyed at Daphne's newly pacified form, Apollo decides to commemorate his triumph by adopting the Laurel wreath as his personal symbol. He wears the token of Daphne's loss of mobility as an accessory to his power, invites a planets worth of new figures to do the same."     
      }, 

];




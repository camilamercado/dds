setInterval( function order5(){

    for(var i = 0; i < chapter5.length; i++) {
        
        if(chapter5[i].timer === time ) {

          
          document.querySelector(".chapter5").innerHTML=chapter5[i].number;
          document.querySelector(".text5").innerHTML=chapter5[i].text;
          document.querySelector(".subtext5").innerHTML=chapter5[i].subtext;
          document.querySelector(".subtext52").innerHTML=chapter5[i].subtext2;

        }

      
    }

},1000);


var chapter5 = [


      {
        'number' : "1)", 
        'timer' : 182,
        'text' : "An experiment is performed in which a beam of photons or electrons (P/E) is pointed at a series of two boards. The closer board has two rectangular vertical forms removed from the center of the surface like so - [ || ].",
        'subtext' : "",
        'subtext2' : ""
      }, 

      { 
        'number' : "2)",
        'timer' : 202,  
        'text' : "The beam is fired directly at the center point between the holes of the double-slitted board1. A pattern appears on the surface of board2, showing a series of vertical lines, heaviest in thickness at the center of the board, and diminishing sequentially as they approach the edges - [ ||||| ].",
        'subtext' : "*This image is recognized as a diffraction pattern (the result of interference between waves). The pattern implies the beam of P/E exhibit properties of wave/particle duality when being sent through the board. In order for this to occur each individual P/E would need to pass through each slit simultaneously, essentially interfering with itself in waveform after passing though board1 to create the diffraction image.",
        'subtext2' : ""

      }, 

      { 
        'number' : "3)",
        'timer' : 232,  
        'text' : "The experiment is preformed again in order to make sense of the illogical results. Considering that P/E often exhibit properties of particles, the result is unexpected- if the experiment was performed with particles, the images on each board would be identical in shape (the particles would be fixed on board2 as if board1 were a stencil - [ || ]).",
        'subtext' : "",
        'subtext2' : ""
       
      }, 

      { 
        'number' : "4)",
        'timer' : 252,  
        'text' : "A monitor is applied to observe the moment in which the P/E must travel through board1. It is meant to establish what occurs when P/E display simultaneity in passing through the slits.",
        'subtext' : "",
        'subtext2' : ""

      }, 

      { 
        'number' : "5)",
        'timer' : 272,  
        'text' : "The results of the experiment are found on the board2.",
        'subtext' : "The diffraction pattern on board2 has been replaced with a replica of the two slits [ || ]. With a monitor present, the illogical simultaneous behavior of P/E is replaced with the originally expected behavior of particles. ",
        'subtext' : "",
        'subtext2' : ""

      }, 

      { 
        'number' : "6)",
        'timer' : 292,  
        'text' : "The experiment is repeated numerous times, and in every instance:",
        'subtext' : "Without a monitor P/E produces the pattern of wave / particle duality. The identities of P/E are non-fixed, adopting illogical traits of either state depending on their orientation in space/time. ",
        'subtext2' : "With a monitor P/E produces the fixed particle image. "

      }, 


];















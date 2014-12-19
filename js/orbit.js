var time = 0;

setInterval(function () {

	time = time +1;

	var today = new Date();
	var ss = today.getSeconds();
	var sequence = ss - 30;

	if (time === 5){

		document.querySelector('.line').style.width="400px";
		document.querySelector('.line2').style.width="380px";

		setInterval(function () {
		
		document.querySelector('.sculp').style.display="none";
		document.querySelector('.laurel').style.display="block";

	}, 4000);

	}

	// if (time === 15){
	// 	// window.location.replace("file:///Users/theronmercado/Desktop/dds/measure.html");
	// 	window.location.replace("http://camilamercado.github.io/dds/measure.html");
	// }
  	
  	if (ss < 30) {

	    var daphne = "url(img/daphne/" + ss + ".png)";

	    document.querySelector('.sculp').style.backgroundImage=daphne;

	    document.querySelector('.bernini').style.backgroundImage=daphne;
	    
    }

    else {
    	
    	var daphne = "url(img/daphne/" + sequence + ".png)";

	    document.querySelector('.sculp').style.backgroundImage=daphne;

	    document.querySelector('.bernini').style.backgroundImage=daphne;
    }
	
}, 1000);



// function trap(){

// 	document.querySelector('.line').style.width="600px";
// 	document.querySelector('.line2').style.width="600px";

// 	setInterval(function () {
		
// 		document.querySelector('.sculp').style.display="none";
// 		document.querySelector('.laurel').style.display="block";

// 	}, 4000);
// }

function dart(){
	
	document.querySelector('.line3').style.width="33%";
	document.querySelector('.line4').style.width="60%";
	
	setInterval(function () {
		
		document.querySelector('.box2').style.display="block";
	
	}, 4000);

	setInterval(function () {
		
		document.querySelector('.bernini').style.display="none";
		document.querySelector('.laurel2').style.display="block";
	
	}, 7000);
}

$().ready(function() {
    $('').tubular({videoId: 'uKH-GijnAGk'}); // where idOfYourVideo is the YouTube ID.
});


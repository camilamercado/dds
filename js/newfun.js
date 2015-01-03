var divx = document.getElementById('x');
var divy = document.getElementById('y');
var divz = document.getElementById('z');

var width = document.querySelector('.orb').style.width;
console.log(width);

var count =650;
var Rad = 275;

var counter = setInterval( function () {chase(10, divz, 0);}, 1000);	
var counter = setInterval( function () {chase(20, divx, 0);}, 1000);
var counter = setInterval( function () {chase(10, divy, 40);}, 1000);
	
function chase (xOff, objX, obOff) {

	// console.log(count);
	count = count + xOff;
	var xVal = Rad - count;
	var cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(xVal,2)));
	var yPos = cart + Rad;

	if (( count < Rad ) || ( count >= Rad )) {

		objX.style.left= (count + obOff) + "px";
		objX.style.top = (yPos + obOff) + "px";

	} if (( count >= (Rad * 2) ) || ( count >= (Rad * 3) )) {
	
		var xPos = (Rad * 2) - (count - (Rad * 2));
		var xVar = xPos - Rad;
		cart = Math.sqrt((Math.pow(Rad,2)) - (Math.pow(xVar,2)));
		yPos = Rad - cart;	

		objX.style.left= (xPos - obOff) + "px";
		objX.style.top = (yPos - obOff) + "px";

	} if ( count >= ((Rad * 3 - xOff))) {
		
		document.querySelector('.laurel3').style.display= "block";
		document.getElementById('x').style.display= "none";
		document.getElementById('z').style.display= "none";
		
	} if ( count >= ((Rad * 4 + xOff))) {
		
		document.querySelector('.laurel3').style.display= "none";
		document.getElementById('x').style.display= "block";
		document.getElementById('z').style.display= "block";
		count = 0;
	}	

};


//GLOBAL VARIABLES
var distancePerFrame, movetimer, timerCounter = 0;

function makeCircle(e){
	//make an HTML element, not on the page yet
	var circle = document.createElement("div");
	circle.style.width="200px";
	circle.style.height="200px";
	circle.style.border="solid 2px #fff";
	circle.style.borderRadius="100px";
	circle.style.opacity="1";
	circle.style.position= "absolute";
	//its x and y coordinate on the page are its css 
	//left and top properties
	circle.style.left = "50px";
	circle.style.top ="50px";
	//add the element to the page.
	document.body.appendChild(circle);
}

/**
 *add a bit to the X property(left in CSS)
 *which causes the DIV to seem to move to the right.
 */
function moveABit(){
	var circle = document.getElementsByTagName("div")[0];
	//add to the timer counter
	timerCounter++;
	//we have to user parseInt() convert the left property from "50px" to a number
	//so we can add more to it.
	var new_left = parseInt(circle.style.left) + distancePerFrame;
	circle.style.left = new_left+'px';
	//once this function has occured 30 times, stop the trip
	if(timerCounter>=30){
		clearInterval(movetimer);
		timerCounter=0;	
	}
};


function causeTrip(e){
	e = (e || event); //so all browsers understand the event
	var circle = document.getElementsByTagName("div")[0];
	//get the coordinates of where cursor is	
	var destinationX = e.clientX;
	//calculate the distance the div has to travel.
	//take the mouse X and subtract the DIV's x
	var x_distance =  destinationX - parseInt(circle.style.left);
	//divide that to get the little amount it should move each frame.
	distancePerFrame = x_distance/30;
	//in case the move timer's already running, stop it:
	clearInterval(movetimer);
	timerCounter=0;
	//start a timer so the DIV moves that amount 30 times a second.
	movetimer = setInterval(moveABit,1000/30);
}


onload=init;
	function init(){
			makeCircle();
			//event handler, that passes along event info when theres a click.
			document.onclick= function(e){ causeTrip(e);}
	};


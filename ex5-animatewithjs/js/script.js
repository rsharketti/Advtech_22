var div_open = false;

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
	//setInterval(whatToDoAfterTime, time); causes an action/function to happen repeatedly
	//if 30fps is frame rate:
	setInterval(function(){moveABit() }, 1000/30);
}

/**
 *add a bit to the X property(left in CSS)
 *which causes the DIV to seem to move to the right.
 */
function moveABit(){
	var circle = document.getElementsByTagName("div")[0];
	//we have to user parseInt() convert the left property from "50px" to a number
	//so we can add more to it.
	var new_left = parseInt(circle.style.left) + 10;
	circle.style.left = new_left+'px';
};


onload=init;


	function init(){
			makeCircle();
	};


var div_open = false;

function makeCircle(e){
	e = (e || event);//for older browsers.
	console.log(e);
	//make an HTML element, not on the page yet
	var circle = document.createElement("div");
	circle.style.width="20px";
	circle.style.height="20px";
	circle.style.border="solid 2px #339";
	circle.style.borderRadius="100px";
	circle.style.opacity="1";
	circle.style.position= "absolute";
	circle.style.transition="height .4s ease-out,  width .4s ease-out, opacity .4s ease-out";
	circle.style.webkitTransition="height .4s ease-out, width .4s ease-out, opacity .4s ease-ott";
	//its x and y coordinate on the page are its css 
	//left and top properties
	circle.style.left = e.clientX + "px";
	circle.style.top = e.clientY+ "px";
	//add the element to the page.
	document.body.appendChild(circle);
	//now that the circle hase been created, a split second later change some CSS, 
	//and the transition will cause an animation. 
		//setTimeout(whatToDoAfterATime, time)
	setTimeout( function(){
		circle.style.width="150px";
		circle.style.height="150px";
		circle.style.opacity=".2";
	}, 100);
}

document.onmousemove= 
	function(e){
			makeCircle(e);
	};


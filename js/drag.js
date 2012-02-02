$(function(){

	init();
	var tile = new Object;
	tile.x = 0;
	tile.y = 0;
	tile.drag = $('.dragme').draggable({ stop: 
		function(event, ui) {
			var Stoppos = $(this).position();
			$(this).x = Stoppos.left;
			console.log("Left: "+Stoppos.left+" Top: "+Stoppos.top);

		}
	});

	tile.cursorPos = $( ".dragme" ).draggable( "option", "cursorAt" );


	function touchHandler(event) {
		var touches = event.changedTouches,
    	first = touches[0],
    	type = "",
    	posX = "",
    	posY = "";

     	switch(event.type) {
		    case "touchstart": type = "mousedown"; break;
		    case "touchmove":  type = "mousemove"; break;        
		    case "touchend":   type = "mouseup"; break;
		    default: return;
		}
		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                          first.screenX, first.screenY,
                          first.clientX, first.clientY, false,
                          false, false, false, 0/*left*/, null);

		first.target.dispatchEvent(simulatedEvent);
		event.preventDefault();
		if(type == "touchend") {
			posX = "test";
		}
	}

	function init() {
   		document.addEventListener("touchstart", touchHandler, true);
   		document.addEventListener("touchmove", touchHandler, true);
   		document.addEventListener("touchend", touchHandler, true);
   		document.addEventListener("touchcancel", touchHandler, true);    
	}

	$("#startdiv").tile.drag;
});
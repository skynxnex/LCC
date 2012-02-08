$(function(){

	init();
	var topint = "";

	for ( var i=0; i<4; i++ ) {
		$('<div>' + i + '</div>').data("onTile", "").attr( 'id', 'dragTile'+i ).appendTo( '#dragdiv' ).draggable( {
			containment: '#startdiv',
			stack: '#dragdiv div',
			cursor: 'move',
			revert: true
		} ).addClass("dragTile tileSize").click(function() {
			console.log("ID: "+$(this).attr("id")+" Top: "+$(this).position().top+" Left: "+$(this).position().left+" Parent: "+$(this).parent().attr("id"));
		});
	}

	for ( var i=0; i<32; i++ ) {
		$('<div>' + i + '</div>').data( 'number', i ).attr('id', 'dropTile'+i).appendTo( '#dropdiv' ).droppable( {
			accept: ".dragTile",
			drop: handleTileDrop,
			hoverClass: 'hovered'
		} ).addClass("dropArea tileSize").click(function() {
			console.log("ID: "+$(this).attr("id")+" Top: "+$(this).position().top+" Left: "+$(this).position().left+" Parent: "+$(this).parent().attr("id"));
		});;
	}


	$(".dragTile").mouseover(function () {
		// console.log($(this).position().top+" : "+$(this).position().left);
	 });


	$(".dragTile").mousedown(function() {
		$(this).draggable('option', 'revert', true);
		$("#"+$(this).data('onTile')).droppable('enable');
		$(this).data('originalParent', $(this).parent());
	});

	function acceptMethod(d) {
		if(d.hasClass("dragTile")) { 
            return true;
        }
	}

	$('#reset').click(resetRevert);

	function resetRevert() {

		$(".dragged").each(function() {
			// console.log("setting orig parent to: "+$(this).data('originalParent'));
			// console.log("moving to top: "+$(this).data('position').origtop+" left: "+$(this).data('position').origleft );
			// $(this).appendTo($(this).data('originalParent'));
			$(this).animate({ 
					top: 0, left: 0 
				},{
					complete: function() { 
						$(this).removeClass("dragged");
					} 
				}
			);
			$(".recentlyDropped").droppable("enable").removeClass("recentlyDropped");
		});
	}

	function handleTileDrop(event, ui) {
		// console.log(ui.draggable.data('position'));
		ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
		ui.draggable.draggable( 'option', 'revert', false );
		ui.draggable.addClass('dragged');
		$(this).droppable( 'disable' ).addClass('recentlyDropped');
		ui.draggable.data('onTile', $(this).attr('id'));
	}


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
});
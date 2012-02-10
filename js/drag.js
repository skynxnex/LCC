$(function(){


	for ( var i=0; i<8; i++ ) {
		$('<div>' + i + '</div>').data("onTile", "").attr( 'id', 'dragTile'+i ).appendTo( '#dragdiv' ).draggable( {
			start: function(event, ui) {
				$("#"+$(this).data('onTile')).removeClass("recentlyDroppedOn");
				$("#"+$(this).data('onTile')).droppable('enable');
				$(this).draggable('option', 'revert', true);
			},
			containment: '#startdiv',
			// stack: '#dragdiv div',
			cursor: 'move',
			revert: true
		} ).addClass("dragTile tileSize");
	}

	for ( var i=0; i<32; i++ ) {
		$('<div>' + i + '</div>').data( 'number', i ).attr('id', 'dropTile'+i).appendTo( '#dropdiv' ).droppable( {
			accept: ".dragTile",
			drop: handleTileDrop,
			hoverClass: 'hovered'
		} ).addClass("dropArea tileSize");
	}

	$("#dragdiv").sortable({ connectWith: "#dragdiv"});

	function acceptMethod(d) {
		if(d.hasClass("dragTile")) { 
            return true;
        }
	}

	$('#reset').tap(resetRevert);

	function resetRevert() {

		$(".dragged").each(function() {
			$(this).animate({ 
					top: 0, left: 0 
				},{
					complete: function() { 
						$(this).removeClass("dragged");
					} 
				}
			);
			$(".recentlyDroppedOn").droppable("enable").removeClass("recentlyDroppedOn");
		});
	}

	function handleTileDrop(event, ui) {
		// console.log(ui.draggable.data('position'));
		ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
		ui.draggable.draggable( 'option', 'revert', false );
		ui.draggable.addClass('dragged');
		$(this).droppable( 'disable' ).addClass('recentlyDroppedOn');
		ui.draggable.data('onTile', $(this).attr('id'));
	}
});
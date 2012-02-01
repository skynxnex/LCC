/**
 * @author Marcus
 */

$(document).ready(function() {
	
	var game = {

		start : 'gamestarts',
		gameStatus : false,
		tilesLeft : {
			tiles : 48
		},
		// player1 : Player,
		// player2 : Player

	};
	
	game.init = function() {
		game.gameStatus = true;
		return this.start;
	}
	
	game.end = function() {
		game.gameStatus = false;
		if(game.gameActive == false) {
			return 'Game ended';
		}
	}
	
	game.status = function() {
		return game.gameStatus;
		
	}
	
	
	game.setPlayer = function(playerName) {
		player1 = playerName;
	}
	
	var gstatus = game.status();
	
	var setinit = prompt('start?');
	if(setinit == 'yes') {
		if(gstatus == false){
		//$('#new').click(function(){
			
		var game = game.init();
		console.log(init);
		console.log(gstatus);
		console.log(game.end);
		console.log(gstatus);
		
		//})
	}else{
		$('#continue').hide();
	}
	}

});

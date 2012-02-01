/**
 * @author Marcus
 */

$(document).ready(function() {

	var game = {
		gameStatus : 0,
		tilesLeft : {
			tiles : 48
		}
		// player1 : Player,
		// player2 : Player
	}

	game.init = function() {
		game.gameStatus = 1;
	}

	game.end = function() {
		game.gameStatus = 0;

	}

	game.strStatus = function() {
		if(game.gameStatus == 1) {
			return 'Game is active';
		} else {
			return 'Game ended';

		}

	}
	game.status = function(){
		return game.gameStatus;
	}

	game.setPlayerName = function(playerName, player) {
		if(player == 1) {
			player1 = playerName;
		} else {
			player2 = playerName;
		}
	}
	
	playfield = {
		playfield : {}
		
	}
	
	playfield.setPlayfield = function(playfield){
		
	}
	//Game

	$('#new').click(function() {
	 
		if(game.status() == 0) {
			$('#continue').hide();

			game.init();
			console.log(game.strStatus());
			//set playfield
			var selPlayfield = $('#playfield').val();
			playfield.setPlayfield(selPlayfield);
			
			//set player
			var player1 = $('#player1').val();
			var player2 = $('#player2').val();
			player.setPlayerName(player1, 1);
			player.setPlayerName(player2, 2);
			
			
			
			//end game
			game.end();
			console.log(game.strStatus());
	
		} else {
			console.log('continue old game?');
		}
	});
});

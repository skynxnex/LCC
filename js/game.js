/**
 * @author Marcus
 */

$(document).ready(function() {

	var game = {
		gameStatus : 0,
		tilesLeft : {
			tiles : 48
		}

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
	game.status = function() {
		return game.gameStatus;
	}
	var player = {
		name : '',
		score : '',
		decktiles : {}
	}

	player1.setPlayerName = function(name, player) {
		if(player == 1) {
			player1.name = name;
		} else {
			player2.name = name;
		}
	}
	playfield = {
		playfield : {
			'pf1' : '',
			'pf2' : '',
			'pf3' : '',
			'pf4' : '',
		}

	}

	playfield.setPlayfield = function(playfield) {

	}
	//Game

	$('#newGame').click(function() {

		if(game.status() == 0) {
			$('#resumeGame').hide();

			game.init();
			console.log(game.strStatus());

			//end game
			game.end();
			console.log(game.strStatus());

		} else {
			$('#resumeGame').show();
			console.log('continue old game?');
		}
	});
	//set playfield
	$("#newPlayfield").click(function() {
		var selPlayfield = '';
		var testp = $('#newPlayfield a').val();
		console.log(testp);

		switch (selPlayfield) {
			case '#pf1' :
				selPlayfield = 'pf1';
				break;
			case '#pf2' :
				selPlayfield = 'pf2';
				break;
			case '#pf3' :
				selPlayfield = 'pf3';
				break;
			case '#pf4' :
				selPlayfield = 'pf4';
				break;
		}

		playfield.setPlayfield(selPlayfield);
	})
	//set player
	$("#playerContinue").click(function() {

		if(!empty(playfield.playfield)) {
			var player1 = player;
			var player2 = player;

			player.setPlayerName($('#player1').val(), 1);
			player.setPlayerName($('#player2').val(), 2);
			console.log(player1.name);
			console.log(player2.name);
		} else {
			console.log('no playfield selected');
		}
	});
});

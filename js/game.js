/**
 * @author Marcus
 */

$(document).ready(function() {

	var game = {
		gamestatus : 0,
		tilesLeft : {
			tiles : 48
		}

	}

	game.init = function() {
		game.gamestatus = 1;
		console.log('game is active');
	}

	game.end = function() {
		game.gamestatus = 0;
		console.log('game has ended');

	}


	var player = {
		name : '',
		score : '',
		decktiles : {}
	}
	var player1 = player;
	var player2 = player;
	
	var playfield = {
		// playfield : {
		// 'pf1' : '',
		// 'pf2' : '',
		// 'pf3' : '',
		// 'pf4' : '',
		// },
		activePlayfield : null
	}


	//Game
	console.log(game.gamestatus);
	
	$('a #new').click(function() {
		if(game.gamestatus == 0) {
			$('#resume').hide();
			game.init();
		} else if(game.gamestatus == 1) {
			$('#resume').show();
			console.log('continue old game?');
	}
		
	});
	
	
	//end game
	$('a #end').click(function() {
		console.log(game.strStatus());
		game.end();
	});
	
	
	//set playfield
	$(".individual a").click(function() {
		var selPlayfield = $(this).attr('id');
		playfield.activePlayfield = selPlayfield;
		console.log('activeplay field is ' +playfield.activePlayfield);
	})
	//set player
	$("#playerContinue").click(function() {
		
			player1.name= $('#playerOneName').val();
			player2.name = $('#playerTwoName').val();
		
	
			console.log(player1.name);
			console.log(player2.name);
	
	});
});

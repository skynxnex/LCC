/**
 * @author Marcus
 */

$(document).ready(function() {

	var jQT = $.jQTouch( {});


	var game = {
		gamestatus : 0,
		tilesLeft : {
			tiles : 48
		},
		gamesettings : {
			nonuse : 0,
			angletile : 0,
			stoptile : 0
		}

	}

	game.init = function() {
		game.gamestatus = 1;
		console.log('game is active');
		return true;
	}

	game.end = function() {
		game.gamestatus = 0;
		console.log('game has ended');
		return true;
	}


	var player1 = {
		name : '',
		score : '',
		decktiles : {}
	}
	var player2 = {
		name : '',
		score : '',
		decktiles : {}
	}
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
	
	$('#newGame').click(function() {
			game.init();
	});
	
	
	//end game
	$('#endGame').click(function() {
		console.log(game.strStatus());
		game.end();
	});
	
	
	//set playfield
	$(".individual a").click(function() {
		var selPlayfield = $(this).attr('id');
		playfield.activePlayfield = selPlayfield;
		console.log('activeplay field is ' +playfield.activePlayfield);
		
		//$('a#namesContinue').removeAttr("href");
		
	})
	//set player
	$("a#namesContinue").click(function() {
			player1.name= $('#playerOneName').val();
			player2.name = $('#playerTwoName').val();
			
			console.log(player1.name);
			console.log(player2.name);
			
	});
	
	$('#startButton').click(function(){
		
		game.gamesettings.nonuse = $('#nonuse:checked').val();
		game.gamesettings.angletile  = $('#angletile:checked').val();
		game.gamesettings.stoptile  = $('#stoptile:checked').val();
		
		console.log(game.gamesettings);
	});
});

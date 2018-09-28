	let p_score = 0;
	let c_score = 0;
	let d_score = 0;

	function computerPlay() {
		var array = ['rock', 'paper','scissors'];
		var rand = Math.floor(Math.random()*array.length)
		return array[rand];
	}
	function playRound(playerSelection, computerSelection) {
		let result = '';
			if (computerSelection == 'rock') {
				if (playerSelection == 'rock') {result='draw'};
				if (playerSelection == 'paper') {result='win'};
				if (playerSelection == 'scissors') {result='lose'};
			}
			if (computerSelection == 'paper') {
				if (playerSelection == 'rock') {result='lose'};
				if (playerSelection == 'paper') {result='draw'};
				if (playerSelection == 'scissors') {result='win'};
			}
			if (computerSelection == 'scissors') {
				if (playerSelection == 'rock') {result='win'};
				if (playerSelection == 'paper') {result='lose'};
				if (playerSelection == 'scissors') {result='draw'};
			}
		return result;
	}

	function game() {
		for (let i = 0; i < 5; i++) {
			let playerSelection = prompt('Enter ROCK, PAPER or SCISSORS').toLowerCase();
			let computerSelection = computerPlay().toLowerCase();
			let gameRound = playRound(playerSelection, computerSelection);
			console.log(gameRound);

			if (gameRound.includes('win')) {
				p_score += 1
			} else if (gameRound.includes('lose')) {
				c_score += 1
			} else {
				c_score += 0; p_score += 0 ; d_score += 1;
			};

		}
		console.log(result());
	}
	function result() {
		$('.user span').html(p_score);
		$('.computer span').html(c_score);
		$('.draw span').html(d_score);
		
		if (c_score == p_score) {
			$('.result').html("It's a tie!");
		} else if (c_score > p_score) {
			$('.result').html("You lost.");
		} else {
			$('.result').html("You WON!!!!");
		}
			$('.results-container').fadeIn();
			$('.results-overlay').fadeIn();

	}


	const computerSelection = computerPlay();
	var playerSelection = 'rock';

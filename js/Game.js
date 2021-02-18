/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 	constructor () {
	 	this.missed = 0;
	 	this.phrases = this.createPhrases();
	 	this.activePhrase = null;
 	}

	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
 	createPhrases() {
 		const phraseArray = [new Phrase("Its just a flesh wound"), new Phrase("Im just one flu away from my goal weight"), new Phrase("I believe you have my stapler"), new Phrase("Its not a man purse Its called a satchel"), new Phrase("Sell crazy someplace else")];
 		return phraseArray;
 	}

	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
 	getRandomPhrase(phrases) {
 		let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
 		return randomPhrase;
 	}
 	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
 	startGame(){
 		const overlay = document.getElementById("overlay").style.visibility = 'hidden';
 		this.activePhrase = this.getRandomPhrase();
 		this.activePhrase.addPhraseToDisplay();
 	}
 	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin() {
		let hideLi = document.getElementsByClassName('hide');
		if( hideLi.length == 0 ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	* Increases the value of the missed property
	* Removes a life from the scoreboard
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife() {

	}
	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
	gameOver(gameWon) {

	}
}

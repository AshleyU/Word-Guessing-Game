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
 		const phraseArray = [new Phrase("Shenanigans"), new Phrase("Cattywampus"), new Phrase("Bamboozle"), new Phrase("Skedaddle"), new Phrase("Gnarly")];
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
}

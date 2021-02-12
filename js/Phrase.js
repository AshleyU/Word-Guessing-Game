/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase();
 	}
	/**
	* Display phrase on game board
	*/
 	addPhraseToDisplay() {
 		const ul = document.querySelector('#phrase ul');

		for (let i = 0; i < this.phrase.length; i++) {
			let li = document.createElement('li');
			li.innerHTML = `${this.phrase[i]}`;
			if ( this.phrase[i] === ' ' ) {
				li.className = "space";
			} else {
				li.className += `hide letter ${this.phrase[i]}`;
			}

			ul.appendChild(li);
		}	
	}
 	// Checks to see if the letter selected by the player matches a letter in the phrase.
 	checkLetter() {

 	}
 	// Reveals the letter(s) on the board that matches the player's selection
 	showMatchedLetter() {

 	}
 }
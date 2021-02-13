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
 	/**
	* Checks if passed letter is in phrase
	* @param (string) letter - Letter to check
	*/
 	checkLetter(letter) {
 		if (this.phrase.includes(letter)) {
 			showMatchedLetter();
 		} else {
 			game.removeLife();
 		}
 	}
 	/**
	* Displays passed letter on screen after a match is found
	* @param (string) letter - Letter to display
	*/
 	showMatchedLetter() {

 	}
 }
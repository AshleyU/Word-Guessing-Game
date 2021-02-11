/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 	constructor () {
 	this.missed = 0;
 	this.phrases = [new Phrase("Shenanigans"), new Phrase("Cattywampus"), new Phrase("Bamboozle"), new Phrase("Skedaddle"), new Phrase("Gnarly")];
 	this.activePhrase = null;
 	}
}
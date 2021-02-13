/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
 * Listens for a click on the start button and starts the game
 */
var game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener('click', (e) => {
game = new Game();
game.startGame();
});
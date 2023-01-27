//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "papel";
let player2 = "tesoura";

if (player1 === "tesoura" && player2 === "pedra") { 
  console.log ("jogador2 ganhou");
} else if (player1 === "pedra" && player2 === "papel") {
  console.log ("jogador2 ganhou");
} else if (player1 === "papel" && player2 === "tesoura") {
  console.log ("jogador2 ganhou");
} else if (player1 === player2) {
  console.log ("empate!!!");
} else {
  console.log ("jogador 1 ganhou");
}

// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0

for (i=1 ; i<=50; i+=1){
  soma = soma + i
}
console.log (soma)

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisao = 0

for (i=2; i<=150; i+=1){
  if (i % 3 === 0)
  divisao = divisao + 1
  
}
console.log (divisao)
if (divisao === 50){
  console.log ("mensagem secreta")}
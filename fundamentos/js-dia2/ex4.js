5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 30
let Flavio = 35
let Noel = 40

let pessoa = [Carolzita, Flavio, Noel]
let menorValor = pessoa[0]

for (i=0 ; i<pessoa.length; i+=1 ){
  if( pessoa[i] <= menorValor ) {
menorValor = pessoa [i]
  }

}

console.log (menorValor)

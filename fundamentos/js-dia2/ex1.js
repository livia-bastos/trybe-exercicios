let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let  numbers = [8,4,2]
let nImpar = 0

for (let index = 0 ; index < numbers.length ; index +=1){
  if (numbers[index]%2 ==1){
    nImpar +=1

  } 
}
if (nImpar == 0) {
  console.log ("Não existe nenhum valor")
}
console.log (nImpar)
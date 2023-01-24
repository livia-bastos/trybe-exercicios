

const salarioBruto = 4000

let salarioDescontado
let salarioLiquido

if (salarioBruto <= 1556.94) {
  salarioDescontado = (salarioBruto-salarioBruto*0.08)
}
if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioDescontado = (salarioBruto-salarioBruto*0.09)
}

if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioDescontado = (salarioBruto-salarioBruto*0.11)
}

if (salarioBruto >5189.82) {
  salarioDescontado = (salarioBruto-570.88)
}

// ----

if (salarioDescontado <= 1903.98) {
  salarioLiquido = salarioDescontado
}
if (salarioDescontado > 1903.98 && salarioDescontado <= 2826.65) {
  salarioLiquido = (salarioDescontado-salarioDescontado*0.075)
}

if (salarioDescontado > 2826.65) {
  salarioLiquido = (salarioDescontado-salarioDescontado*0.20)
}
console.log (salarioLiquido)
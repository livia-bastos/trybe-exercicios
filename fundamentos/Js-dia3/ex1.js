let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log("Bem Vinda,",info.personagem,"!")

info['recorrente'] = "sim"
// console.log(info)

for (let chave in info) {
console.log (info[chave])
}



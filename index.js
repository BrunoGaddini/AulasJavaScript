var gasolina, alcool
var repetir

repetir = ('Sim')
while (repetir == 'Sim'){

gasolina = parseFloat(prompt('Digite o valor da gasolina'))
alcool = parseFloat(prompt('Digite o valor do Álcool'))

  if (alcool <0.7* gasolina){
  alert ('Abasteça com Álcool')
} else {
  alert ('Abasteça com Gasolina')
}
repetir=prompt('Deseja continuar?')
}
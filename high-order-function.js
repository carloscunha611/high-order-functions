function exibirElemento(lista) {
  console.log(
    `Marca registrada: 
     ${lista}`,
    lista
  )
}
const lista = [
  ['Bugatti', 'Veyron', 7993, 1001, 2.5, 407],
  ['Maserati', 'Spyder', 4244, 390, 5.0, 283],
  ['Dodge', 'Viper', 8360, 612, 4.0, 306]
]

lista.forEach(exibirElemento)

/* for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i])
} */

/* lista.forEach(function (lista) {
  console.log(
    `Marca registrada: 
     ${lista}`,
    lista
  )
}) */

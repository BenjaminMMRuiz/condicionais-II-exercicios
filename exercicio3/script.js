// # Exercício 3

// Reescreva os códigos do arquivo `script.js` utilizando o **if ternário**.

// **Relembrando o if ternário**
// //```jsx
// condição ? expr1 : expr2
// //```

// Em que:

// `condição` é uma expressão que é avaliada como `true` ou `false`

// `expr1` e `expr2` são expressões com valores de qualquer tipo

//códigos a serem reescritos

let nome = prompt("Digite seu nome")
nome === "José" ? console.log("Oi, Zé") : console.log ("Olá"+nome)

// a)
//if(nome === "José"){
//	console.log("Oi, Zé!")
//} else {
//	console.log("Olá, " + nome)
//}

let idade = Number (prompt("Digite sua idade: "))
idade === 18 ? console.log("Pode tirar carteira de motorista!") : console.log ("Ainda não pode tirar carteira de motorista!"+idade)

// b)
// //if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }
// # Exercício 2

// Vamos **recriar** o exercício *Nacionalidade* da aula de Condicionais I, dessa vez utilizando o **switch case**.
// No arquivo `script.js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática! 😉

// -> Relembrando o enunciado:

// Crie uma função que receba do usuário sua nacionalidade, utilizando um prompt que diga: "Escreva aqui sua nacionalidade". Guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura com o **switch case** que verifique se a nacionalidade recebida é igual a alguma das nacionalidades acima. Caso seja, imprima a nacionalidade no console.
// O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum das opções acima.


let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

let frase

switch (nacionalidade) {
    case "brasileira":
        console.log("a pessoa é Brasileira!") 
        
        break;
    case "argentina":
        console.log("a pessoa é Argentina!") 
        
        break;
    case "uruguaia":
        console.log("a pessoa é Uruguaia!") 
        
        break;
    case "chilena":
        console.log("a pessoa é Chilena!") 
        
        break;
    case "colombiana":
        console.log("a pessoa é Colombiana!") 
        
        break;

    default:
        console.log("Digite outra nacionalida");
        break;
}


//if(nacionalidade === "brasileira"){
//    console.log("a pessoa é do Brasil!")
//} else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }
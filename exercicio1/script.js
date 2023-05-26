//# Exercício 1

//Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.

let numeroDivisivel = Number(prompt("Digite um numero:")) 
//Faça isso:
    
//**a)** Utilizando ifs aninhados

    if (numeroDivisivel %2 === 0) {
        console.log("é divisivel por 2")
      
        if (numeroDivisivel %3 === 0) {
            console.log("é divisivel por 3")

       } else {
        console.log("Não é divisivel por 3")
        
       }
          
   } else {
    console.log("Não é divisivel por 2");
    
        if (numeroDivisivel %3 === 0) {
            console.log("é divisivel por 3");

       }
    }
//```
//**b)** Utilizando um operador lógico para unir duas operações relacionais
////``jsx
   if(numeroDivisivel %2===0 && numeroDivisivel %3===0){
        // utilizamos && para E 
    console.log("é dividivel por 2 e 3")
      }
    
   if(numeroDivisivel %2===0 || numeroDivisivel %3===0){
         console.log("Não é divisivel por 2 e 3")
  }
//```
let prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?");
console.log("Ola " + nome + " Bem-vindo");

let idade = prompt("Qual sua idade?")

if(idade >=18){
    console.log("Você é maior de idade!");

} else{
    console.log("Voce é menor de idade")
}

let notaProva1 = prompt("Nota prova A1?");
let notaProva2 = prompt("Nota prova A2?");

let nota1 = Number(notaProva1);
let nota2 = Number(notaProva2);

let media = (nota1 + nota2) / 2;
console.log("Media: " , media);
if(media >= 6 ){
    console.log("APROVADO!")
}else {
    console.log("REPROVADO")
}

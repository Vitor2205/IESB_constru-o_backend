//comentario de uma linha 

/*
comentario
com mais de uma linha 
*/

//Impressão  de informações no terminal
console.log('Testando a impressão no terminal')
console.error('quando der erro no código')
console. warn('testando console warn')

//criando variaveis com o var
var nome;
nome = "Vitor";
nome = " Hugo"

console.log('Imprimindo a variavel nome');
console.log(nome);

//let e const(cria uma variavel)

// const(constante)
// criar uma variavel que não vai poder ser alterada.
const primeiroNome = 'Vitor';
//primeiroNome = 'Carlos' não posso atribuir um novo valor para uma constante

console.log(primeiroNome);

//let
//Criar variaveis que possam ser alteradas
let idade;
idade = 24;
anos = "Anos"; 

console.log('Imprimindo o valor da variavel')
console.log(idade +" " + anos);

// template String ${}

//tipo Number
let numeroInteiro = 2000;
let numeroNegativo = -60;
let numeroFlutuante = 25.90;

// tipo Array
//let listaCheia = ["gol", "palio", "golf"]
//let listaCheiaMisturada = [1, 2 , "nome", null]
let lista = []

console.log(lista);
lista.push("Primeiro Item")
console.log(lista)

//tipo object (objeto)
let objetoPessoa = {
    nome: 'vitor',
    idade: 20,
    curso: "ads",
    semestre: "3/5",
}
console.log(objetoPessoa);

// TRATAMENTO DE DADOS (String)
let texto = "Vitor Hugo"
//.length // quantidade de caracteres do texto
console.log(texto.length)
// texto em caixa alta
console.log(texto.toUpperCase())
//texto em caixa baixa
console.log(texto.toLocaleLowerCase())
// replace substituido
let valor = "10,50"
console.log(valor)
valor = valor.replace("," , ".")
console.log(valor)

//fixar o numero de casas decimais 
console.log(numero.toFixed(2))

//transformar float para inteiro 
console.log(Number.parseInt(numero))


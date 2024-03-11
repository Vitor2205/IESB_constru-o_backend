var month = 5;
if(month ===1) {
    console.log('January');
} else if (month === 2 ){
    console.log('Fevereiro')
} else if (month === 3 ){
    console.log('March')
} else {
    console.log('Month is not january, february or March');
}
/*-------------------------------------------------------------------*/
var month = 5;
switch (month) {
    case 1: 
    console.log('January');
    break;
   case 2: 
    console.log('February');
    break;
    case 3:
    console.log ('March');
    break;
    default:
        console.log('Month is not january, february or March')       
        break;
}  
/*----------------------------------------------*/
var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

/*--------------------*/
function sayHello(){
    console.log('Hello')
}
sayHello();
/*----------------*/
function output(text){
    console.log(text)
}
/* apenas o primeiro parâmetro sera usado pela função*/
output('Boa noite!', 'Olá, tudo bem?');

/*-------------------------*/
function sum(num1 , num2) {
    console.log(num1 + num2);
}

var result = sum (2 , 3 );
output(result);

const nome = `Edgar Everton`;
const sobrenome = 'Araujo';
const peso = 77;
const idade = 28;
const altura = 1.64;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);;
anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'KG',)
console.log( 'Tem ', altura, 'de altura e seu imc é: ', imc)
console.log(nome, 'nasceu em',anoNascimento);

//Opçção com $
console.log(`\n${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}KG `)
console.log( 'Tem ', altura, 'de altura e seu imc é: ', imc)
console.log(nome, 'nasceu em',anoNascimento);
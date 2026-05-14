//jogo do número secreto
alert("Boas vindas ao jogo do número secreto");

let num = 10;

let chute = prompt("Diga um número entre 1 e 100: ");

if (num == chute) {
    console.log("Você acertou o número");
} else {
    console.log("Você errou o número secreto, tente de novo");
}

//atividade prática 1
//1.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas Vindas ao Nosso Site!");

//2.Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//3.Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//4.Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//5.Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//6.Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");
//7.Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

//8.Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
let nome = prompt("Digite o seu nome: ");

//9.Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt("Qual a sua idade?");
//10.Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (perguntaIdade < 18) {
    alert("Você é menor de idade, pode tirar a habilitação!");
} else {
    alert("Você é maior de idade");
}

//atividade prática 2
//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let fimDeSemana = prompt("Qual é o dia da semana?");
if (fimDeSemana == "Sábado" || fimDeSemana == "Domingo") {
    alert("Bom fim de semana!");
    console.log("O dia da semana é um sábado ou um domingo");
} else {
    alert("Boa semana!");
    console.log("O dia da semana não é um sábado e nem um domingo");
}

//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let num = prompt("Digite um número: ");
if (num > 0) {
    alert("O número digitado é positivo");
    console.log("O número digitado foi positivo");
} else {
    alert("O número digitado é negativo");
    console.log("O número digitado é negativo")
}

//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 150;

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente");
}

//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 5000.00

alert("O saldo da sua conta é: R$" + saldo);

//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite o seu nome: ");

alert("Seja bem vindo " + nome);
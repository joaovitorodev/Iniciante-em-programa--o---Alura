//jogo do número numero secreto
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
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

//atividade prática 3
//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let num = 1;

while (num <= 10) {
    console.log(num++);
}

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let num2 = 10;
while (num2 >= 0) {
    console.log(num2--);
}

//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let num3 = prompt("Digite um número: ");

while (num3 >= 0) {
    console.log(num3--);555556
}

//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let num4 = prompt("Digite um número para a contagem progressiva: ")
let num5 = 0;

while (num5 <= num4) {
    console.log(num5++);
}*/
let tagH1 = document.querySelector('h1');
tagH1.innerHTML = "Hora do Desafio";

function consol() {
    console.log("O botão foi clicado");
}

function alerta() {
    alert("Eu amo JS");
}

function promp() {
    let cidade = prompt("Digite o nome de uma cidade: ");
    alert(`Estive um ${cidade} e lembrei de você`);
}

function soma() {
    let num1 = prompt("Digite um número para soma: ");
    let num2 = prompt("Digite outro número para a soma:");
    alert(`A soma do número ${num1} mais o número ${num2} é igual a ${parseInt(num1) + parseInt(num2)}`);
}
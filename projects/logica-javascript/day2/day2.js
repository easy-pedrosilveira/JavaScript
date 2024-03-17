const name = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?");
const language = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

const choose = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (choose == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso")

}
if (choose == 2) {
    alert("Que pena! ")
}
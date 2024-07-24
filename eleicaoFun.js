const prompt = require('prompt-sync')({sigint: true})
let romeu = []
let julia = []
let henri = []
let carol = []
let votacao = function votacao(){
    console.log('Digite seu nome: ');
    let nome = prompt('');
    if(!isNaN){
    console.log(`
        Digite o numero do seu candidato
        1 - Romeu 
        2 - Julia 
        3 - Henri 
        4 - Carol
    `);
    let candidato = +prompt('')
    switch(candidato){
        case 1:
            cand1(nome)
            break;
        case 2:
            cand2(nome)
            break;
        case 3:
            cand3(nome)
            break;
        case 4:
            cand4(nome)
            break;
        default:
            console.log('Opção invalida.');
            votacao()
            break;
    }
} else {console.log('Um numero não é valido \nDigite seu nome corretamente.');
    votacao()
}}
module.exports.votacao = votacao

function cand1(nome){
    romeu.push(nome)
}
function cand2(nome){
    julia.push(nome)
}
function cand3(nome){
    henri.push(nome)
}
function cand4(nome){
    carol.push(nome)
}

let imprimir = function imprimir(){
    console.log(`O candidato Romeu teve ${romeu.length} votos`);
    console.log(`A candidata Julia teve ${julia.length} votos`);
    console.log(`O candidato Henri teve ${henri.length} votos`);
    console.log(`A candidata Carol teve ${carol.length} votos`);
}
module.exports.imprimir = imprimir

let vencedor = () => {
    if(romeu.length > julia.length && romeu.length > henri.length && romeu.length > carol.length){console.log('Romeu foi eleito');}
    if(julia.length > romeu.length && julia.length > henri.length && julia.length > carol.length){console.log('Julia foi eleita');}
    if(henri.length > julia.length && henri.length > romeu.length && henri.length > carol.length){console.log('Henri foi eleito');}
    if(carol.length > julia.length && carol.length > henri.length && carol.length > romeu.length){console.log('Carol foi eleita');}
}
module.exports.vencedor = vencedor
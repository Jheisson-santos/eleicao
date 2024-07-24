const prompt = require('prompt-sync')({sigint: true})
let eleit = require('./eleicaoFun.js')
while(true){
console.log(`

    |--- MENU DE VOTAÇÃO PARA ELEIÇÃO ----|
    |                                     |
    |   1 - ADICIONAR VOTOS               |
    |   2 - IMPRIMIR VOTOS DE CANDIDATOS  |
    |   3 - CANDIDATO VENCEDOR            |
    |_____________________________________|
`)
let opc = +prompt('')
switch(opc){
    case 1:
    eleit.votacao()
    break;
    case 2:
    eleit.imprimir()
    break;
    case 3:
    eleit.vencedor()
    process.exit()
    break;
    default:
        console.log('Opção invalida');
        break;
}
}
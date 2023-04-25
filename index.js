const entrada = require('prompt-sync')();

console.log("Hello");

let nome = entrada('Digite seu Nome: ');

console.log('Ola ' + nome);

let idadeTxt = entrada(nome + ' quantos anos voce tem? ');
let idade = parseInt(idadeTxt);

if(idade < 15){
    resposta = entrada('Acredito que voce esteja no ensino fundamental. \nEstou certo?(reponda s/n)');
}
else if(idade > 15 && idade < 18){
    resposta = entrada('Acredito que voce esteja no ensino medio. \nEstou certo?(reponda s/n)');
}
else{
    resposta = entrada('Acredito que voce ja tenha terminado o ensino medio. \nEstou certo?(reponda s/n)');
}

entrada('Fim do programa, precione ENTER para encerrar!');
let numero = Math.ceil (Math.random()*(50-1)+1);
let continuar = false;

while(!continuar){
    let jogar = Number(prompt("Insira um número de 1 a 50"));
    if(jogar === numero){
        alert(`Acertou! O número era ${jogar}`)
        continuar = true;}
    else if(jogar < numero){
        alert(`Errou! O número era maior! Tente novamente.`);}
    else if(jogar > numero){
        alert(`Errou! O número era menor! Tente novamente`);}
       }

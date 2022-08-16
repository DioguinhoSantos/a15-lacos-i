let pergunta = String(prompt(`Deseja mais coxinhas?`)).toLowerCase();
let conta = 0;

while(pergunta === `sim`){
    console.log(`Então toma coxinha!`);
    conta += 2.50;
    pergunta = String(prompt(`Deseja mais?`));
}
console.log(`Buxin chei! A conta é R$ ${conta}.`);


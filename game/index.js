//Importando classes
let Personagem = require("./personagem");
let Skills = require("./Skills");
//criando objetos
let Mago = new Personagem();//objeto mago
let Guerreiro = new Personagem();

let bolaFogo = new Skills(); //objeto bolaFogo
let soproGelo = new Skills(); //objeto soproGelo
let flechaRelampago = new Skills();
//Criando objetos Skill do mago
bolaFogo.setName("bola de fogo");
bolaFogo.setConsumo(50);

soproGelo.setName("Sopro de gelo");
soproGelo.setConsumo(30);

flechaRelampago.setName("Flecha Relampago");
flechaRelampago.setConsumo(45);

//criando objeto skills para guerreiro
let espadaFlamejante = new Skills("Espada Flamejante", 20);
let corteDivino = new Skills("Corte divino", 49);
let perfuracao = new Skills("Perfuração da armadura", 30);

//setando atributos do mago
Mago.setName(" Natan mago supremo");
Mago.setClass("Mago");
Mago.setLevel(21);
Mago.setSkills([bolaFogo, soproGelo, flechaRelampago]);
Mago.setMana(100);
Mago.setHp(100);
console.log(Mago.status());

//setando atributos do guerreiro;
Guerreiro.setName("Tyrion o guerreiro");
Guerreiro.setClass("Guerreiro");
Guerreiro.setLevel(40);
Guerreiro.setSkills([espadaFlamejante, corteDivino, perfuracao]);
Guerreiro.setMana(100);
Guerreiro.setHp(100);
console.log(Guerreiro.status());
//combate
// console.log(Mago.atacar(Mago, 0));
// Mago.atacar(Mago, 0); // atacando com a bola de fogo
// Mago.atacar(Mago, 1); // atacando com o sopro de gelo
// Mago.atacar(Mago, 2); // atacando com a flecha relampago


function combate(personagem1, personagem2) {
    let dano = personagem1.atacar(personagem1, 0);
    console.log(`
        ----------------------------------------------------
            O personagem ${personagem1.getName()} atacou !
            com a skill  ${personagem1.getSkills()[0].getName()}
            gastou ${personagem1.getSkills()[0].getConsumo()}% de mana
          
        ----------------------------------------------------        
        `)
    personagem2.sofrerDano(personagem2, dano);
    console.log(`
        ----------------------------------------------------  
            O personagem ${personagem2.getName()} 
            sofreu ${dano} de dano do inimigo !!
            sua vida atual é de ${personagem2.getHp()}
        ----------------------------------------------------  
        `)
}
combate(Mago, Guerreiro);
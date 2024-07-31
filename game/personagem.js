class Personagem {
    constructor() {
        this.name;
        this.level;
        this.class;
        this.skills = [];
        this.hp;
        this.mp;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getClass() {
        return this.class;
    }
    setClass(clas) {
        this.class = clas;
    }
    getSkills() {
        return this.skills;
    }
    setSkills(skills) {
        this.skills = skills;
    }
    getMana() {
        return this.mp;
    }
    setMana(mp) {
        this.mp = mp;
    }
    getHp() {
        return this.hp;
    }
    setHp(hp) {
        this.hp = hp;
    }
    atacar(obj, num) {
        let dano = Math.round(Math.random() * (100 - 10) + 10); //gerando um numero de dano aleatório

        this.perderMana(obj.getSkills()[num].getConsumo());
        return dano;
    }
    sofrerDano(obj, dano) {
        this.perderVida(dano);

    }
    perderMana(manaUsada) {
        this.mp = (this.mp - manaUsada);
    }
    perderVida(dano) {
        this.hp = this.hp - dano;
    }
    status() {
        return `
        ---------------------
            Nome:   ${this.getName()},
            Classe: ${this.getClass()},
            Level:  ${this.getLevel()},
            Vida:   ${this.getHp()},
            Mana:   ${this.getMana()}   
        ---------------------
        `
    }
}
module.exports = Personagem;
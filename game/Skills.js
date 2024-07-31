class Skills {
    constructor() {
        this.name;
        this.consumoMP;
        // this.power;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getConsumo() {
        return this.consumoMP;
    }
    setConsumo(consumoMP) {
        this.consumoMP = consumoMP;
    }
    // getPower() {
    //     return this.power;
    // }
    // setPower(power) {
    //     this.power = power;
    // }
}
module.exports = Skills;
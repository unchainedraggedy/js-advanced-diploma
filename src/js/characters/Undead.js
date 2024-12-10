import Character from "../Character";

export default class Undead extends Character {
    constructor(level) {
        super(level, 'undead');
        this.attack = 40;
        thid.defence = 10;
    }
}
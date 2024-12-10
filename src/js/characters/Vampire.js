import Character from "../Character";

export default class Vampire {
    constructor(level) {
        super(level, 'vampire');
        this.attack = 25;
        this.defence = 25;
    }
}
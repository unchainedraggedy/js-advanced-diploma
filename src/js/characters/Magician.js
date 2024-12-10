import Character from "../Character";

export default class Magician {
    constructor(level){
        super(level, 'magician');
        this.attack = 10;
        this.defence = 40;
    }
}
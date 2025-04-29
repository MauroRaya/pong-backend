import { Player } from "../player/player";

export class Room {
    code: Number;
    player1: Player;
    player2: Player;

    constructor(player1: Player) {
        this.code = this.createRoomCode();
        this.player1 = player1;
    }

    private createRoomCode(): Number {
        return Math.floor((Math.random() * 100) + 1);
    }
}
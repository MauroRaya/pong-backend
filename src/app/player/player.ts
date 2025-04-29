import { PlayerDTO } from "./dtos/player.dto";

export class Player {
    constructor(player: PlayerDTO) {
        this.name = player.name;
        this.score = 0;
    }

    name: String;
    score: Number;
}
import { Dice } from "./dice";
import type { AllDiceResults } from "../types";

export class DiceManager {
    diceCount: number;
    #dices: Dice[];


    constructor(diceCount: number) {
        this.diceCount = diceCount;
        this.#dices = [];
        for (let i=0; i<diceCount; i++) {
            this.#dices.push(new Dice());
        }

    }

    rollAllDice() {
        let allDiceResults: AllDiceResults = [];
        for (let i=0; i<this.diceCount; i++) {
            this.#dices[i].roll();
            allDiceResults.push(this.#dices[i].result);
        }

        return allDiceResults;

    }
    lockDice(diceIndex: number) {
        this.#dices[diceIndex].lock();
    }
    unlockAllDices() {
        for (let i=0; i<this.diceCount; i++) {
            this.#dices[i].unlock();
        }
    }
}
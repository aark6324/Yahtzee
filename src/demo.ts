import { Dice } from './dices/dice';
import type { AllDiceResults, DiceResult } from './types';

var allDices: Dice[] = [];

for (var i = 0; i < 5; i++) {
    let dice: Dice = new Dice();
    allDices.push(dice);
}

function rollAllDices() {
    for (let _dice of allDices) {
        _dice.roll();
    }
}

rollAllDices();

function collectAllResults(): AllDiceResults {
    var allResults: AllDiceResults = new Array<DiceResult>();
    for (let _dice of allDices) {
        allResults.push(_dice.result);
    }

    return allResults;
}

console.log(collectAllResults()[0]);

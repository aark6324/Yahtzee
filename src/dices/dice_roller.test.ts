import type { AllDiceResults } from '../types';
import { DiceRoller } from './dice_roller';

let diceRoller: DiceRoller;
describe('DiceRolle', () => {
    beforeEach(() => {
        diceRoller= new DiceRoller(5);
    });
    it('rolls the dice', () => {
        let allDiceResults = diceRoller.rollAllDice();
        expect(allDiceResults).toHaveLength(5);
        expect(allDiceResults).toBeInstanceOf(Array);
    });

    it('locks and unlocks the dice', () => {
        let allDiceResults: AllDiceResults;
        for (let i = 0; i < 10; i++) {
            allDiceResults = diceRoller.rollAllDice();
            diceRoller.lockDice(0);
            expect(allDiceResults[0]).toEqual(diceRoller.rollAllDice()[0]);
            diceRoller.unlockAllDices();
        }
    });
});

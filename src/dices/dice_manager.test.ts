import type { AllDiceResults } from '../types';
import { DiceManager } from './dice_manager';

let diceManager: DiceManager;
describe('DiceManager', () => {
    beforeEach(() => {
        diceManager = new DiceManager(5);
    })
    it('rolls the dice', () => {
        
        let allDiceResults = diceManager.rollAllDice();
        expect(allDiceResults).toHaveLength(5);
        expect(allDiceResults).toBeInstanceOf(Array);
    })

    it('locks and unlocks the dice', () => {
        let allDiceResults: AllDiceResults;
        for (let i=0; i<10; i++) {
            allDiceResults = diceManager.rollAllDice();
            diceManager.lockDice(0);
            expect(allDiceResults[0]).toEqual(diceManager.rollAllDice()[0]);
            diceManager.unlockAllDices();
        }
    })
})
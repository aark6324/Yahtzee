import { Dice } from "./Dice"

describe("Dice", ()=> {
    let dice: Dice;
    beforeEach(()=> {
        dice = new Dice();
    })

    describe("roll", ()=> {
        it("rolls numbers between 1 and 6", ()=> {
            for (let i=0; i<10; i++) {
                dice.roll();
                expect(dice.result).toBeLessThanOrEqual(6);
                expect(dice.result).toBeGreaterThanOrEqual(1);
            }
        })
        it("doesn't roll a locked dice", ()=> {
            dice.roll();
            const { result } = dice;
            dice.lock();
            for (let i=0; i<10; i++) {
                dice.roll();
                expect(dice.result).toEqual(result);
            }

        })
    })
    describe("lock", ()=> {
        it("looks the dice", ()=> {
            dice.lock();
            expect(dice.locked).toBeTruthy();
        })
    })
    describe("unlock", ()=> {
        it("unlocks the dice", ()=> {
            dice.lock();
            dice.unlock();
            expect(dice.locked).toBeFalsy();
        })
    })

})
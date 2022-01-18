import { fives } from "./fives";
import type { AllDiceResults } from "../types"


describe("fives", ()=> {
    it("counts 5 fives", ()=> {
        const allDiceResults: AllDiceResults = [5,5,5,5,5];
        const score = fives(allDiceResults);
        expect(score).toEqual(25);
    })
    it("counts 2 fives", ()=> {
        const allDiceResults: AllDiceResults = [3,4,4,5,5];
        const score = fives(allDiceResults);
        expect(score).toEqual(10);
    })
    it("counts 0 fives", ()=> {
        const allDiceResults: AllDiceResults = [3,1,6,2,1];
        const score = fives(allDiceResults);
        expect(score).toEqual(0);
    })
})
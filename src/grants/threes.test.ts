import { threes } from "./threes";
import type { AllDiceResults } from "../types"


describe("threes", ()=> {
    it("counts 3 threes", ()=> {
        const allDiceResults: AllDiceResults = [3,5,3,3,1];
        const score = threes(allDiceResults);
        expect(score).toEqual(9);
    })
    it("counts 4 threes", ()=> {
        const allDiceResults: AllDiceResults = [3,3,3,2,3];
        const score = threes(allDiceResults);
        expect(score).toEqual(12);
    })
    it("counts 0 threes", ()=> {
        const allDiceResults: AllDiceResults = [4,1,6,2,1];
        const score = threes(allDiceResults);
        expect(score).toEqual(0);
    })
})
import { fours } from "./fours";
import type { AllDiceResults } from "../types"


describe("fours", ()=> {
    it("counts 2 fours", ()=> {
        const allDiceResults: AllDiceResults = [3,4,3,4,1];
        const score = fours(allDiceResults);
        expect(score).toEqual(8);
    })
    it("counts 3 fours", ()=> {
        const allDiceResults: AllDiceResults = [3,4,4,2,4];
        const score = fours(allDiceResults);
        expect(score).toEqual(12);
    })
    it("counts 0 fours", ()=> {
        const allDiceResults: AllDiceResults = [3,1,6,2,1];
        const score = fours(allDiceResults);
        expect(score).toEqual(0);
    })
})
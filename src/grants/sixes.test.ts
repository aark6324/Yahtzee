import { sixes } from "./sixes";
import type { AllDiceResults } from "../types"


describe("sixes", ()=> {
    it("counts 4 sixes", ()=> {
        const allDiceResults: AllDiceResults = [6,4,6,6,6];
        const score = sixes(allDiceResults);
        expect(score).toEqual(24);
    })
    it("counts 1 six", ()=> {
        const allDiceResults: AllDiceResults = [6,4,4,2,4];
        const score = sixes(allDiceResults);
        expect(score).toEqual(6);
    })
    it("counts 0 sixes", ()=> {
        const allDiceResults: AllDiceResults = [3,1,5,2,1];
        const score = sixes(allDiceResults);
        expect(score).toEqual(0);
    })
})
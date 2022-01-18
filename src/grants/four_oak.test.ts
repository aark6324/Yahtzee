import { four_oak } from "./four_oak";
import type { AllDiceResults } from "../types"

// 4 oak = 4 of a kind

describe("three_oak", ()=> {
    it("counts 13 because 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,3,3,3,1];
        const score = four_oak(allDiceResults);
        expect(score).toEqual(13);
    })
    it("counts 0 because not 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,1,1,2,3];
        const score = four_oak(allDiceResults);
        expect(score).toEqual(0);
    })
    it("counts 18 because 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [4,4,2,4,4];
        const score = four_oak(allDiceResults);
        expect(score).toEqual(18);
    })
})
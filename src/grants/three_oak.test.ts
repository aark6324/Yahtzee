import { three_oak } from "./three_oak";
import type { AllDiceResults } from "../types"

// 3 oak = 3 of a kind

describe("three_oak", ()=> {
    it("counts 15 because 3 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,5,3,3,1];
        const score = three_oak(allDiceResults);
        expect(score).toEqual(15);
    })
    it("counts 0 because not 3 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,1,1,2,3];
        const score = three_oak(allDiceResults);
        expect(score).toEqual(0);
    })
    it("counts 20 because 3 oak", ()=> {
        const allDiceResults: AllDiceResults = [5,5,5,3,2];
        const score = three_oak(allDiceResults);
        expect(score).toEqual(20);
    })
})
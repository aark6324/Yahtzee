import { of_a_kind } from "./of_a_kind";
import type { AllDiceResults } from "../../../types"

// oak = of a kind

describe("of_a_kind", ()=> {
    it("counts 13 because 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,3,3,3,1];
        const score = of_a_kind(allDiceResults, 4);
        expect(score).toEqual(13);
    })
    it("counts 10 because 0 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,1,1,2,3];
        const score = of_a_kind(allDiceResults, 0);
        expect(score).toEqual(10);
    })
    it("counts 0 because not 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [4,1,2,4,4];
        const score = of_a_kind(allDiceResults, 4);
        expect(score).toEqual(0);
    })
    it("returns assigned amount of 22", ()=> {
        const allDiceResults: AllDiceResults = [6,6,6,6,6];
        const score = of_a_kind(allDiceResults, 5, 22);
        expect(score).toEqual(22);
    })
})
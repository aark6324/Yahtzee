import { sum_of_occurences } from "./sum_of_occurrences";
import type { AllDiceResults } from "../../../types"


describe("sum_of_occurrences", ()=> {
    it("counts 5 fives", ()=> {
        const allDiceResults: AllDiceResults = [5,5,5,5,5];
        const score = sum_of_occurences(allDiceResults, 5);
        expect(score).toEqual(25);
    })
    it("counts 2 threes", ()=> {
        const allDiceResults: AllDiceResults = [3,4,3,5,5];
        const score = sum_of_occurences(allDiceResults, 3);
        expect(score).toEqual(6);
    })
    it("counts 0 fives", ()=> {
        const allDiceResults: AllDiceResults = [3,1,6,2,1];
        const score = sum_of_occurences(allDiceResults, 5);
        expect(score).toEqual(0);
    })
})
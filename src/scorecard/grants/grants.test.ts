import type { AllDiceResults } from "../../types";
import { of_a_kind } from "./functions/of_a_kind";
import { sum_of_occurences } from "./functions/sum_of_occurrences"

// this might be *too* much testing, might delete this later

describe("grants", ()=> {
    it("counts 3 aces", ()=> {
        const allDiceResults: AllDiceResults = [1,5,1,1,5];
        const score = sum_of_occurences(allDiceResults, 1);
        expect(score).toEqual(3);
    })
    it("counts 4 twos", ()=> {
        const allDiceResults: AllDiceResults = [5,2,2,2,2];
        const score = sum_of_occurences(allDiceResults, 2);
        expect(score).toEqual(8);
    })
    it("counts 0 threes", ()=> {
        const allDiceResults: AllDiceResults = [4,1,6,4,5];
        const score = sum_of_occurences(allDiceResults, 3);
        expect(score).toEqual(0);
    })
    it("counts 2 fours", ()=> {
        const allDiceResults: AllDiceResults = [5,4,4,2,1];
        const score = sum_of_occurences(allDiceResults, 4);
        expect(score).toEqual(8);
    })
    it("counts 3 fives", ()=> {
        const allDiceResults: AllDiceResults = [6,4,5,5,5];
        const score = sum_of_occurences(allDiceResults, 5);
        expect(score).toEqual(15);
    })
    it("counts 1 six", ()=> {
        const allDiceResults: AllDiceResults = [4,2,5,3,6];
        const score = sum_of_occurences(allDiceResults, 6);
        expect(score).toEqual(6);
    })
    it("counts 0 because not 3 oak", ()=> {
        const allDiceResults: AllDiceResults = [4,2,5,3,1];
        const score = of_a_kind(allDiceResults, 3);
        expect(score).toEqual(0);
    })
    it("counts 13 because 4 oak", ()=> {
        const allDiceResults: AllDiceResults = [3,3,3,3,1];
        const score = of_a_kind(allDiceResults, 4);
        expect(score).toEqual(13);
    })
    it("counts 20 because yahtzee (5 oak)", ()=> {
        const  allDiceResults: AllDiceResults = [4,4,4,4,4];
        const score = of_a_kind(allDiceResults, 5);
        expect(score).toEqual(20);
    })
})
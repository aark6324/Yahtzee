import { aces } from "./aces";
import type { AllDiceResults } from "../types"


describe("aces", ()=> {
    it("counts 2 aces", ()=> {
        const allDiceResults: AllDiceResults = [1,5,2,6,1];
        const score = aces(allDiceResults);
        expect(score).toEqual(2);
    })
    it("counts 3 aces", ()=> {
        const allDiceResults: AllDiceResults = [1,5,1,2,1];
        const score = aces(allDiceResults);
        expect(score).toEqual(3);
    })
})
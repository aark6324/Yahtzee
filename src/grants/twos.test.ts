import { twos } from "./twos";
import type { AllDiceResults } from "../types"


describe("twos", ()=> {
    it("counts 2 twos", ()=> {
        const allDiceResults: AllDiceResults = [2,5,2,6,1];
        const score = twos(allDiceResults);
        expect(score).toEqual(4);
    })
    it("counts 4 twos", ()=> {
        const allDiceResults: AllDiceResults = [2,5,2,2,2];
        const score = twos(allDiceResults);
        expect(score).toEqual(8);
    })
})
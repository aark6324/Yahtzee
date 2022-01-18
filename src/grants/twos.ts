import type { AllDiceResults, Points } from "../types";

export const twos = (allResults:AllDiceResults): Points => {
    let twosCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 2) {
            twosCount += 2;
        }
    }
    return twosCount;
}
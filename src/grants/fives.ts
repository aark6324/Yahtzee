import type { AllDiceResults, Points } from "../types";

export const fives = (allResults:AllDiceResults): Points => {
    let fivesCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 5) {
            fivesCount += 5;
        }
    }
    return fivesCount;
}
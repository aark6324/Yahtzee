import type { AllDiceResults, Points } from "../types";

export const threes = (allResults:AllDiceResults): Points => {
    let threesCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 3) {
            threesCount += 3;
        }
    }
    return threesCount;
}
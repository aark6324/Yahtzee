import type { AllDiceResults, Points } from "../types";

export const aces = (allResults:AllDiceResults): Points => {
    let aceCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 1) {
            aceCount++;
        }
    }
    return aceCount;
}
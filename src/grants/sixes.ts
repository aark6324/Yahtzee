import type { AllDiceResults, Points } from "../types";

export const sixes = (allResults:AllDiceResults): Points => {
    let sixesCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 6) {
            sixesCount += 6;
        }
    }
    return sixesCount;
}
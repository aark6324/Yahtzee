import type { AllDiceResults, Points } from "../types";

export const fours = (allResults:AllDiceResults): Points => {
    let foursCount = 0;
    for (let i in allResults) {
        if (allResults[i] == 4) {
            foursCount += 4;
        }
    }
    return foursCount;
}
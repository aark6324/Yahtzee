import type { AllDiceResults, Points } from "../../../types";

export const sum_of_occurences = (allResults: AllDiceResults, valueToCount: number): Points => {
    let sum = 0;
    for (let i in allResults) {
        if (allResults[i] == valueToCount) {
            sum += valueToCount;
        }
    }
    return sum;
}
import type { AllDiceResults, Points } from "../../../types";


export const of_a_kind = (allResults: AllDiceResults, minCount: number): Points => {
    var counts = [];
    var sum: Points = 0;
    for (let number of allResults) {
        sum += number;
        counts[number] = counts[number] ? counts[number] + 1 : 1;
    }

    for (let i=0; i<counts.length; i++) {
        if (!counts[i]) continue;

        if (counts[i] >= minCount) {
            return sum;

        }
    }
    return 0;
}
import type { AllDiceResults, Points } from "../types";

// 4 oak = 4 of a kind

export const four_oak = (allResults:AllDiceResults): Points => {
    var counts = [];
    var sum: Points = 0;
    for (let number of allResults) {
        sum += number;
        counts[number] = counts[number] ? counts[number] + 1 : 1;
    }

    for (let i=0; i<counts.length; i++) {
        if (!counts[i]) continue;

        if (counts[i] >= 4) {
            return sum;

        }
    }
    return 0;
}
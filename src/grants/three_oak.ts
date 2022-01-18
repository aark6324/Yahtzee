import type { AllDiceResults, Points } from "../types";

// 3 oak = 3 of a kind

export const three_oak = (allResults:AllDiceResults): Points => {
    var counts = [];
    var sum: Points = 0;
    for (let number of allResults) {
        sum += number;
        counts[number] = counts[number] ? counts[number] + 1 : 1;
    }

    for (let i=0; i<counts.length; i++) {
        if (!counts[i]) continue;

        if (counts[i] >= 3) {
            return sum;

        }
    }
    return 0;
}
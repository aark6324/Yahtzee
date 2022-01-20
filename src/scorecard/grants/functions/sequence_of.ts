import type { AllDiceResults, Points } from "../../../types";

export const sequence_of = (allResults: AllDiceResults, sequenceLength: number, assignedPoints: Points): Points => {
    allResults.sort();
    let currentSeq = 0;
    let highestSeq = 0;
    for (let i=0; i<allResults.length - 1; i++) {
        if (allResults[i] === allResults[i+1]) continue;
        if (allResults[i] === allResults[i+1] - 1) {
            currentSeq++;
        } else {
            currentSeq = 0;
        }
        if (highestSeq < currentSeq) highestSeq = currentSeq;
    }

    //return (highestSeq + 1 >= sequenceLength) ? (sequenceLength - 1) * 10 : 0;
    return (highestSeq + 1 >= sequenceLength) ? assignedPoints : 0;

}
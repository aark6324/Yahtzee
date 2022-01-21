import type { AllDiceResults, Points } from '../../../types';

// three of one number and two of another
export const full_house = (allResults: AllDiceResults, assignedPoints: Points): Points => {
    var counts = [];

    for (let number of allResults) {
        counts[number] = counts[number] ? counts[number] + 1 : 1;
    }

    return counts.includes(3) && counts.includes(2) ? assignedPoints : 0;
};

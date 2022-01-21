import type { AllDiceResults, Points } from '../../../types';

export const sum_of_occurences = (allResults: AllDiceResults, valueToCount: number): Points =>
    allResults.reduce((accumulated, current) => (current === valueToCount ? accumulated + current : accumulated), 0);

import type { AllDiceResults } from '../../types';
import { bonuses } from '../bonuses';
import { Scorecard } from '../scorecard';

import { full_house } from './functions/full_house';
import { of_a_kind } from './functions/of_a_kind';
import { sequence_of } from './functions/sequence_of';
import { sum_of_all } from './functions/sum_of_all';
import { sum_of_occurences } from './functions/sum_of_occurrences';

export const grants = {
    aces: (allResults: AllDiceResults) => sum_of_occurences(allResults, 1),
    twos: (allResults: AllDiceResults) => sum_of_occurences(allResults, 2),
    threes: (allResults: AllDiceResults) => sum_of_occurences(allResults, 3),
    fours: (allResults: AllDiceResults) => sum_of_occurences(allResults, 4),
    fives: (allResults: AllDiceResults) => sum_of_occurences(allResults, 5),
    sixes: (allResults: AllDiceResults) => sum_of_occurences(allResults, 6),

    upper_section_bonus: (scorecard: Scorecard) => bonuses.getUpperSectionBonus(scorecard, 35, 63),

    // oak = of a kind
    three_oak: (allResults: AllDiceResults) => of_a_kind(allResults, 3),
    four_oak: (allResults: AllDiceResults) => of_a_kind(allResults, 4),

    full_house: (allResults: AllDiceResults) => full_house(allResults, 25),

    small_straight: (allResults: AllDiceResults) => sequence_of(allResults, 4, 30),
    long_straight: (allResults: AllDiceResults) => sequence_of(allResults, 5, 40),

    // yahtzee = five of a kind
    yahtzee: (allResults: AllDiceResults) => of_a_kind(allResults, 5, 50),

    chance: (allResults: AllDiceResults) => sum_of_all(allResults),

    yahtzee_bonus: (scorecard: Scorecard) => bonuses.getYahtzeeBonus(scorecard, 50, 50),
};

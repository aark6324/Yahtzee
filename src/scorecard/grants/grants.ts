import type { AllDiceResults } from "../../types";
import { of_a_kind } from "./functions/of_a_kind";
import { sum_of_occurences } from "./functions/sum_of_occurrences";

const grants = {
    aces:   (allResults: AllDiceResults) => sum_of_occurences(allResults, 1),
    twos:   (allResults: AllDiceResults) => sum_of_occurences(allResults, 2),
    threes: (allResults: AllDiceResults) => sum_of_occurences(allResults, 3),
    fours:  (allResults: AllDiceResults) => sum_of_occurences(allResults, 4),
    fives:  (allResults: AllDiceResults) => sum_of_occurences(allResults, 5),
    sixes:  (allResults: AllDiceResults) => sum_of_occurences(allResults, 6),

    // oak = of a kind
    three_oak:  (allResults: AllDiceResults) => of_a_kind(allResults, 3),
    four_oak:   (allResults: AllDiceResults) => of_a_kind(allResults, 4),

    // yahtzee = five of a kind
    yahtzee:    (allResults: AllDiceResults) => of_a_kind(allResults, 5),



}

export { grants };
import { findSourceMap } from "module";
import { Points } from "../types";
import { CategoryKey } from "./categories"
import type { Scorecard } from "./scorecard"

const upperSectionKeys: CategoryKey[] = ["aces", "twos", "threes", "fours", "fives", "sixes"];

export const bonuses = {
    getUpperSectionBonus: (scorecard: Scorecard, bonusPoints: Points, minPointsInSection: Points): Points => {
        let sum: Points = 0;
        for (let key of upperSectionKeys) {
            sum += scorecard.getCategorySum(key);
        }

        return (sum >= minPointsInSection) ? bonusPoints : 0;
    },

    getYahtzeeBonus: (scorecard: Scorecard, bonusPerYahtzee: Points, normalPointsPerYahtzee: Points): Points => {
        if (!scorecard.scores.yahtzee) return 0;
        let score = scorecard.scores["yahtzee"];
        let firstYahtzee: Boolean = false;
        let sum: Points = 0;

        for (let points of score.Points_Entries) {
            if (points === 0) continue;
            if (firstYahtzee && points >= normalPointsPerYahtzee) {
                sum += bonusPerYahtzee;
            } else if (points >= normalPointsPerYahtzee) {
                firstYahtzee = true;
            }
            
        }

        return sum;
    }
}
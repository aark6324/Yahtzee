import { bonuses } from "./bonuses";
import { Scorecard } from "./scorecard";

describe("bonuses", () => {
    let scorecard = new Scorecard();
    scorecard.scores.yahtzee = {
        Points_Sum: 150,
        Points_Entries: [0, 0, 50, 50, 0, 50],
    }

    scorecard.scores.fours = {
        Points_Sum: 34,
        Points_Entries: [30, 4],
    }

    scorecard.scores.aces = {
        Points_Sum: 43,
        Points_Entries: [20, 23],
    }

    it("returns yahtzee bonus of 100", () => {
        const bonus = bonuses.getYahtzeeBonus(scorecard, 50, 50);
        expect(bonus).toEqual(100);
    })

    it("returns upper_section_bonus because over 63", () => {
        const bonus = bonuses.getUpperSectionBonus(scorecard, 70, 63);
        expect(bonus).toEqual(70);
    })
})
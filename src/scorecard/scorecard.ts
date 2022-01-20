import { allCategories } from "./categories"
import type { CategoryCollection, CategoryKey } from "./categories"
import type { AllDiceResults, Points } from "../types";


type Scores = Partial<Record<CategoryKey, {
    Points: Points
}>>


class Scorecard {
    categories: CategoryCollection;
    scores: Scores;

    constructor() {
        this.scores = {};
    }

    getGrantedPoints(categoryKey: CategoryKey, allDiceResults: AllDiceResults): Points {
        return allCategories[categoryKey].grantedPoints(allDiceResults);
    }

    claimGrantedPoints(categoryKey: CategoryKey, allDiceResults: AllDiceResults): Points {
        if (this.scores[categoryKey]) {
            throw new Error("Cannot claim an already claimed category");
        } else {
            const points = allCategories[categoryKey].grantedPoints(allDiceResults);
            this.scores[categoryKey] = { Points: points };
            return points;
        }
    }

    getClaimedPoints(categoryKey: CategoryKey): Points {
        return this.scores.hasOwnProperty(categoryKey) ? this.scores[categoryKey].Points : null;
    }

    isCategoryClaimed(categoryKey: CategoryKey): boolean {
        return this.scores.hasOwnProperty(categoryKey);
    }
}

export { Scorecard }
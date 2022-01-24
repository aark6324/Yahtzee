import { allCategories } from './categories';
import type { CategoryCollection, CategoryKey } from './categories';
import type { AllDiceResults, Points } from '../types';
import { SocketAddress } from 'net';

type Scores = Partial<
    Record<
        CategoryKey,
        {
            Points_Sum: Points;
            Points_Entries: Points[];
        }
    >
>;

export type { Scores };

class Scorecard {
    categories: CategoryCollection;
    scores: Scores;

    constructor() {
        this.scores = {};
    }

    getGrantedPoints(categoryKey: CategoryKey, allDiceResults: AllDiceResults): Points {
        return allCategories[categoryKey].grantedPoints(allDiceResults);
    }

    claimCategory(categoryKey: CategoryKey, allDiceResults: AllDiceResults): Points {

        let entry = this.scores[categoryKey];
        const points = allCategories[categoryKey].grantedPoints(allDiceResults);

        if (entry) {
            if (!allCategories[categoryKey].multipleClaimsAllowed) {
                throw new Error('Cannot claim this category multiple times');
            }


            this.scores[categoryKey].Points_Sum = entry.Points_Sum + points;
            this.scores[categoryKey].Points_Entries = entry.Points_Entries.concat(points);

            return points;
        } else {

            this.scores[categoryKey] = {
                Points_Sum: points,
                Points_Entries: [points],
            }


        }

        return this.scores[categoryKey].Points_Sum;
    }

    getCategorySum(categoryKey: CategoryKey): Points {
        return this.scores.hasOwnProperty(categoryKey) ? this.scores[categoryKey].Points_Sum : null;
    }

    isCategoryClaimed(categoryKey: CategoryKey): boolean {
        return this.scores.hasOwnProperty(categoryKey);
    }
}

export { Scorecard };

import { aces } from "./grants/aces";
import type { Category, AllDiceResults, Points } from "./types"

var upperCategories:Category[] = new Array<Category>();

upperCategories = [
    {   
        displayName: "Aces",
        grantedPoints: aces
    },
    {
        displayName: "Twos",
        grantedPoints: (allResults:AllDiceResults): Points => {
            let twoCount = 0;
            for (let i in allResults) {
                if (allResults[i] == 2) {
                    twoCount++;
                }
            }
            return twoCount;
        }
    },
    {
        displayName: "Threes",
        grantedPoints: (allResults:AllDiceResults): Points => {
            let threeCount = 0;
            for (let i in allResults) {
                if (allResults[i] == 3) {
                    threeCount++;
                }
            }
            return threeCount;
        }
        
    }

]

var lowerCategories:Category[] = new Array<Category>();

lowerCategories = [
    // {
    //             displayName: "3 of a kind",
    //             grantedPoints: (allResults:AllDiceResults): Points => {
                    
    //             }
    // }
]

export { upperCategories, lowerCategories };
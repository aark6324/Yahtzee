type DiceResult = number;
type Points = number;

type AllDiceResults = DiceResult[];
type CalcGrantedPoints = (allDiceResults: AllDiceResults) => number;

interface Category {
    displayName: string;
    grantedPoints: CalcGrantedPoints;
    multipleClaimsAllowed: boolean;
}

export type { DiceResult, AllDiceResults, CalcGrantedPoints, Category, Points };

type DiceResult = Number;
type Points = Number;   

type AllDiceResults = DiceResult[];
type CalcGrantedPoints = (allDiceResults: AllDiceResults) => Number;

interface Category {
    displayName: String;
    grantedPoints: CalcGrantedPoints;
}



export type { DiceResult, AllDiceResults, CalcGrantedPoints, Category, Points }
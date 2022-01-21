import type { AllDiceResults, Points } from '../../../types'

export const sum_of_all = (allDiceResults: AllDiceResults): Points =>
    allDiceResults.reduce((accumulated, current) => accumulated + current);
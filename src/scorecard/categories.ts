import type { Category } from './../types';
import { grants } from './grants/grants';

interface CategoryCollection {
    [name: string]: Category;
}

export type { CategoryCollection };

export type CategoryKey =
    | 'aces'
    | 'twos'
    | 'threes'
    | 'fours'
    | 'fives'
    | 'sixes'
    | 'three_of_a_kind'
    | 'four_of_a_kind'
    | 'yahtzee';

export const allCategories: CategoryCollection = {
    aces: {
        displayName: 'Aces',
        grantedPoints: grants.aces,
        multipleClaimsAllowed: false,
    },

    twos: {
        displayName: 'Twos',
        grantedPoints: grants.twos,
        multipleClaimsAllowed: false,
    },

    threes: {
        displayName: 'Threes',
        grantedPoints: grants.threes,
        multipleClaimsAllowed: false,
    },

    fours: {
        displayName: 'Fours',
        grantedPoints: grants.fours,
        multipleClaimsAllowed: false,
    },

    fives: {
        displayName: 'Fives',
        grantedPoints: grants.fives,
        multipleClaimsAllowed: false,
    },

    sixes: {
        displayName: 'Sixes',
        grantedPoints: grants.sixes,
        multipleClaimsAllowed: false,
    },

    three_of_a_kind: {
        displayName: '3 of a kind',
        grantedPoints: grants.three_oak,
        multipleClaimsAllowed: false,
    },

    four_of_a_kind: {
        displayName: '4 of a kind',
        grantedPoints: grants.four_oak,
        multipleClaimsAllowed: false,
    },

    yahtzee: {
        displayName: 'Yahtzee',
        grantedPoints: grants.yahtzee,
        multipleClaimsAllowed: true,
    },
};

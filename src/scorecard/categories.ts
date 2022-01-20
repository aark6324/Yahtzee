import type { Category } from "./../types";
import { grants } from "./grants/grants";

interface CategoryCollection {
    [name:string]: Category;
}

export type { CategoryCollection }

export type CategoryKey = 
    | "aces"
    | "twos"
    | "threes"
    | "fours"
    | "fives"
    | "sixes"
    | "three_of_a_kind"
    | "four_of_a_kind"
    | "yahtzee"

export const allCategories: CategoryCollection = {
    aces: {
        displayName: "Aces",
        grantedPoints: grants.aces,
    },

    twos: {
        displayName: "Twos",
        grantedPoints: grants.twos,
    },

    threes: {
        displayName: "Threes",
        grantedPoints: grants.threes,
    },

    fours: {
        displayName: "Fours",
        grantedPoints: grants.fours,
    },

    fives: {
        displayName: "Fives",
        grantedPoints: grants.fives,
    },

    sixes: {
        displayName: "Sixes",
        grantedPoints: grants.sixes,
    },

    three_of_a_kind: {
        displayName: "3 of a kind",
        grantedPoints: grants.three_oak,
    },

    four_of_a_kind: {
        displayName: "4 of a kind",
        grantedPoints: grants.four_oak,
    },

    yahtzee: {
        displayName: "Yahtzee",
        grantedPoints: grants.yahtzee,
    }
}
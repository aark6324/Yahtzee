import { allCategories } from "./categories"
import type { CategoryCollection } from "./categories"

class Scorecard {
    categories: CategoryCollection;

    constructor() {
        this.categories = allCategories;
    }
}

let sc = new Scorecard();


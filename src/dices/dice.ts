import type { DiceResult } from '../types';

class Dice {
    locked: boolean;
    result: DiceResult;

    constructor(initialResult?: DiceResult) {
        this.locked = false;
        this.result = initialResult ?? 0;
    }

    roll(): void {
        if (!this.locked) this.result = Math.floor(Math.random() * 6) + 1;
    }

    lock(): void {
        this.locked = true;
    }

    unlock(): void {
        this.locked = false;
    }
}

export { Dice };

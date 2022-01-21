import { sum_of_all } from './sum_of_all';

describe('sum_of_all', () => {
    it('returns sum of 22', () => {
        const score = sum_of_all([6, 6, 5, 4, 1]);
        expect(score).toEqual(22);
    });
    it('returns sum of 15', () => {
        const score = sum_of_all([3, 3, 2, 2, 5]);
        expect(score).toEqual(15);
    });
});

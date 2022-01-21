import { full_house } from './full_house';

describe('full_house', () => {
    it('returns assigned Points (21) because full house', () => {
        const points = full_house([3, 3, 2, 2, 2], 21);
        expect(points).toEqual(21);
    });
    it('returns no points because no full house', () => {
        const points = full_house([3, 4, 5, 6, 1, 2], 55);
        expect(points).toEqual(0);
    });
});

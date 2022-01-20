import { sequence_of } from "./sequence_of";


describe("sequence_of", () => {
    it("returns 30 points because small straight", () => {
        const points = sequence_of([4,3,2,3,5,2], 4, 30);
        expect(points).toEqual(30);
    })
    it("returns 40 points because long straight", () => {
        const points = sequence_of([2,3,4,5,2,1], 5, 40);
        expect(points).toEqual(40);
    })
    it("returns 0 points because no long straight", () => {
        const points = sequence_of([4,3,1,6,6], 5, 40);
        expect(points).toEqual(0);
    })
})
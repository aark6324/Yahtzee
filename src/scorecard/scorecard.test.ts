import { Scorecard } from "./scorecard";

describe("Scorecard", () => {
    let scorecard: Scorecard;
    beforeEach(() => {
        scorecard = new Scorecard();
    })
    it("returns 9 granted points", () => {
        const points = scorecard.getGrantedPoints("threes", [3,5,4,3,2,3]);
        expect(points).toEqual(9);
    })
    it("returns null on unclaimed category", () => {
        const points = scorecard.getClaimedPoints("threes");
        expect(points).toEqual(null);
    })
    it("returns 7 points on claimed category", () => {
        scorecard.claimGrantedPoints("three_of_a_kind", [1,1,1,2,2]);
        const points = scorecard.getClaimedPoints("three_of_a_kind");
        expect(points).toEqual(7)
    })
    it("returns 0 points on claimed category", () => {
        scorecard.claimGrantedPoints("three_of_a_kind", [2,5,6,3,2,1]);
        const points = scorecard.getClaimedPoints("three_of_a_kind");
        expect(points).toEqual(0);
    })
    it("throws an error trying to claim a claimed category", () => {
        scorecard.claimGrantedPoints("three_of_a_kind", [4,4,4,3,2]);
        expect(() => {
            scorecard.claimGrantedPoints("three_of_a_kind", [3,5,2,3,3])
        }).toThrowError();
    })
    it("returns true when category is claimed", () => {
        scorecard.claimGrantedPoints("three_of_a_kind", [3,3,3,2,1]);
        const isClaimed = scorecard.isCategoryClaimed("three_of_a_kind");
        expect(isClaimed).toBeTruthy();
    })
    it("returns true when category is claimed with 0 points", () => {
        scorecard.claimGrantedPoints("three_of_a_kind", [6,4,4,1,1]);
        const isClaimed = scorecard.isCategoryClaimed("three_of_a_kind");
        expect(isClaimed).toBeTruthy();
    })
    it("returns false when category is not claimed", () => {
        const isClaimed = scorecard.isCategoryClaimed("twos");
        expect(isClaimed).toBeFalsy();
    })


})
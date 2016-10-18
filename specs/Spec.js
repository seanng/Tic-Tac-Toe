const expect = chai.expect;

describe("Player", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var player = new Player('Sean');
      expect(player.name).to.equal('Sean');
    });

  });

  describe("#move", function() {
    it("should should return a string", function() {
      var move = (new Player('Andrew')).move();
      expect(move).to.equal('Andrew is moving');
    });
  });
});
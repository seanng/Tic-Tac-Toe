const expect = chai.expect;

describe("Player", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      let player = new Player('Sean');
      expect(player.name).to.equal('Sean');
    });
  });
});

describe("Game", function() {
  describe("constructor", function() {
    let player1 = new Player('Sean');
    let player2 = new Player('Kunal');

    let game = new Game(3, player1, player2);

    it("should have a number of rounds", function() {
      expect(game.rounds).to.equal(3);
    });

    it("should start with a board", function() {
      expect(game.board.length).to.equal(3);
      expect(game.board[0].length).to.equal(3);
    });
  });
});


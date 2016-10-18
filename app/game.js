class Player {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' is moving';
  }
}


class Game {
  constructor(rounds, player1, player2) {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    this.rounds = rounds;
    this.player1 = player1;
    this.player2 = player2;
    this.currentRound = 1;
  }

  turn(player) {
  }
}

let init = () => {
  console.log('game is still a work in progress... dont expect anything to run :P');
};

init();
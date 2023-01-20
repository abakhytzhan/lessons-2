import Player from "./Player";
import Round from "./Round";

class Game {
  readonly #player1: Player;
  readonly #player2: Player;
  readonly #numRounds: number;
  readonly #score: [number, number];
  readonly #rounds: Round[];

  constructor(player1: Player, player2: Player, numRounds: number) {
    this.#player1 = player1;
    this.#player2 = player2;
    this.#numRounds = numRounds;
    this.#score = [0, 0];
    this.#rounds = [];
  }

  async start() {
    this.#init();
    await this.#run();
  }

  #init() {
    for (let i = 0; i < this.#numRounds; i++) {
      [this.#player1.piece, this.#player2.piece] =
        Math.floor(i / 2) % 2 === 0 ? [1, -1] : [-1, 1];

      const round = new Round(this.#player1, this.#player2, i % 2 === 0);

      this.#rounds.push(round);
    }
  }

  async #run() {
    for (const round of this.#rounds) {
      await round.start();

      switch (round.winner) {
        case this.#player1:
          this.#score[0]++;
          break;
        case this.#player2:
          this.#score[1]++;
          break;
      }
    }
  }
}

export default Game;
# JavaScript Example

- example 1

  ```js
  let cash = 0; // a private variable

  const CashRegister = {
    credit(amount) {
      cash += amount;
      return cash;
    },
    debit(amount) {
      if (amount <= cash) {
        cash -= amount;
        return true;
      }
      return false;
    },
    total() {
      return cash;
    },
  };

  module.exports = CashRegister;
  ```

  ```js
  const cashRegister1 = require("./Singleton");
  const cashRegister2 = require("./Singleton");

  cashRegister1.credit(25);
  cashRegister2.credit(5);

  console.log(`Total amount in cashRegister2 is ${cashRegister2.total()}`); // 30
  ```

- example 2

  ```js
  class Scoreboard {
    constructor() {
      this.board = [];
    }

    join(name) {
      this.board.push({
        name,
        points: 0,
      });
    }

    leave(name) {
      this.board = this.board.filter((player) => player.name !== name);
    }

    update(name, points) {
      const player = this.board.findIndex((player) => player.name === name);
      if (player > -1) {
        this.board[player].points += points;
      }
    }

    getBoard() {
      return this.board;
    }

    sort() {
      return this.board.sort((x, y) => y.points - x.points);
    }
  }

  /*
  scoreboard will show two players, but their points are 0
  the reason is because although module is cached,
  scoreboard is being instantiated to 2 separate instances into Game class and Player class
  therefore it does not behave like a singleton
  
  To make this into a singleton, both the Player and Game class must access a single and common instance of the scoreboard class
  */
  // module.exports = Scoreboard;  // wrong singleton implementation

  module.exports = new Scoreboard(); // correct singleton implementation
  ```

  ```js
  const Scores = require("./Scoreboard"); // correct singleton import implementation

  class Game {
    join(player) {
      Scores.join(player.getName());
    }

    scores() {
      return Scores.getBoard();
    }

    getWinner() {
      return Scores.sort()[0];
    }
  }

  module.exports = Game;
  ```

  ```js
  const Scores = require("./Scoreboard"); // correct singleton import implementation

  class Player {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }

    wins(points) {
      Scores.update(this.name, points);
    }

    loses(points) {
      Scores.update(this.name, -points);
    }
  }

  module.exports = Player;
  ```

  ```js
  const Game = require("./Game");
  const Player = require("./Player");

  const Pete = new Player("Pete");
  const Mike = new Player("Mike");
  const Poker = new Game();

  Poker.join(Pete);
  Poker.join(Mike);

  Pete.wins(20);

  Mike.wins(30);
  Mike.wins(40);

  Pete.wins(1000);
  Pete.loses(500);

  console.log("Scoreboard: ", Poker.scores());
  console.log(
    `Winner: ${Poker.getWinner().name} with ${Poker.getWinner().points} points`
  );
  ```

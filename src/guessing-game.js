class GuessingGame {

    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.currentGuess = Math.ceil(min + (min + max) / 2);
    }

    guess() {
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess + 1;
        this.updateGuess();
    }

    greater() {
        this.min = this.currentGuess;
        this.updateGuess();
    }

    updateGuess() {
        if (this.min <= this.max) {
          this.currentGuess = Math.floor((this.min + this.max) / 2);
        }
      }
}

module.exports = GuessingGame;

const Questions = require('./Questions');
const PokerFunction = require('./PokerFunction');
const questions = new Questions();
const pokerFunction = new PokerFunction();

class Start {
    game(myArgs) {
        let players = [];

        questions.askForPlayerNames(players, 'Player 1',
            questions.askForPlayerNames.bind(this, players, 'Player 2',
            pokerFunction.letsBegin.bind(this, players, myArgs)));
    }
}

module.exports = Start;

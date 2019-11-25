const Questions = require('./Questions');
const questions = new Questions();
const readline = require('readline');
const fs = require('fs');

class PokerFunction {
    letsBegin(playersArr, myArgs) {
        let wins = {
            playerOneWins: 0,
            playerTwoWins: 0,
        }

        questions.howDoYouWantToPlay(
            pokerFunction.readFile.bind(this, myArgs[1], pokerFunction.readFileHandler, playersArr, pokerFunction.lookupTable, wins),
            questions.enterTenCards.bind(this, pokerFunction.readFileHandler, playersArr)
        );
    }

    readFile(file, handler, playersArr, callback, wins) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(file)
        });

        readInterface.on('line', function(line) {
            handler(line, playersArr, callback, wins);
        });
    }

    readFileHandler(line, playersArr, callback, wins) {
        const handArray = line.split(' ');
        const playerOneHand = handArray[0] + handArray[1] + handArray[2] + handArray[3] + handArray[4];
        const playerTwoHand = handArray[5] + handArray[6] + handArray[7] + handArray[8] + handArray[9];
        console.log(pokerFunction.compareHands(playersArr[0], playersArr[1], playerOneHand, playerTwoHand, callback, wins));
    }

    compareHands(playerOne, playerTwo, handOne, handTwo, functionChoice, wins) {
        const handOneObject = functionChoice(handOne);
        const handTwoObject = functionChoice(handTwo);

        if (handOneObject.value > handTwoObject.value) {
            console.log(`\n${playerOne} wins`);
            wins.playerOneWins++
            return `${playerOne}: ${wins.playerOneWins} wins || ${playerTwo}: ${wins.playerTwoWins} wins`;
        }
        
        if (handOneObject.value < handTwoObject.value) {
            console.log(`\n${playerTwo} wins`);
            wins.playerTwoWins++
            return `${playerOne}: ${wins.playerOneWins} wins || ${playerTwo}: ${wins.playerTwoWins} wins`;
        }

        console.log(`\n${playerOne} and ${playerTwo} tie`);
        return `${playerOne}: ${wins.playerOneWins} wins || ${playerTwo}: ${wins.playerTwoWins} wins`;
    }

    lookupTable(hand){
        const handArray = hand.split('');
        const lastTwoCards = handArray[6] + handArray[7] + handArray[8] + handArray[9];

        let json = JSON.parse(fs.readFileSync(`./HandCombinations/${lastTwoCards}.json`).toString());
        return json.combinations[hand];
    }

    loopThroughFindHandValues() {

    }
}

const pokerFunction = new PokerFunction();

module.exports = PokerFunction;
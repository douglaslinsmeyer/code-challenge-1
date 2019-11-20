const Questions = require('./Questions');
const questions = new Questions();
const readline = require('readline');
const fs = require('fs');

class PokerFunction {
    letsBegin(playersArr, myArgs) {
        questions.howDoYouWantToPlay(
            pokerFunction.readFile.bind(this, myArgs[1], pokerFunction.readFileHandler, playersArr, pokerFunction.lookupTable),
            questions.enterTenCards.bind(this, pokerFunction.readFileHandler, playersArr)
        );
    }

    readFile(file, handler, playersArr, callback) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(file)
        });

        readInterface.on('line', function(line) {
            handler(line, playersArr, callback);
        });
    }

    readFileHandler(line, playersArr, callback) {
        const handArray = line.split(' ');
        const playerOneHand = handArray[0] + handArray[1] + handArray[2] + handArray[3] + handArray[4];
        const playerTwoHand = handArray[5] + handArray[6] + handArray[7] + handArray[8] + handArray[9];
        console.log(callback(playerOneHand));
        console.log(callback(playerTwoHand));
    }

    compareHands(playerOne, playerTwo, handOne, handTwo, functionChoice) {
        const handOneObject = pokerFunction.functionChoice(handOne);
        const handTwoObject = pokerFunction.functionChoice(handTwo);

        if (handOneObject.value > handTwoObject.value) {
            console.log(`${playerOne} wins with ${handOneObject.name}.`);
        } else if (handOneObject.value < handTwoObject.value) {
            console.log(`${playerTwo} wins with ${handTwoObject.name}.`);
        } else {
            console.log(`${playerOne} and ${playerTwo} tie with ${handTwoObject.name}.`);
        }
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
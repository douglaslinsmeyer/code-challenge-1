const readline = require('readline');
const fs = require('fs');

class PokerFunction {
    letsBegin(playersArr, myArgs) {
        console.log(playersArr);
        console.log(myArgs[1]);

        pokerFunction.readFile(myArgs[1], pokerFunction.readFileHandler)
    }

    readFile(file, handler) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(file),
            output: process.stdout,
            console: false
        });

        readInterface.on('line', function(line) {
            handler(line);
        });
    }

    readFileHandler(line) {
        const cardsArrary = line.split(' ');
        console.log(cardsArrary);
    }


}

const pokerFunction = new PokerFunction();

module.exports = PokerFunction;
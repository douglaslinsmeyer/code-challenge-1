class PokerFunction {
    letsBegin(playersArr, myArgs) {
        console.log(playersArr);
        console.log(myArgs);

        if (myArgs[0] !== '-f') {
            return console.log(`${myArgs[0]} is a known function. Please use -f`);
        }

        if (myArgs[1] !== 'hands.txt') {
            return console.log(`${myArgs[1]} is an unkown function. Please use hands.txt`);
        }

        

    }
}

module.exports = PokerFunction;
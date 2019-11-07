const myArgs = process.argv.slice(2);

console.log(myArgs);

if (myArgs[0] === undefined) {
    throw 'To start the game, please use "-f hands.txt" or "-h with 10 cards"';
}

if (myArgs[0] !== '-f' && myArgs[0] !== '-h') {
    throw `${myArgs[0]} is an unknown function. Please use "-f hands.txt" or "-h" with 10 cards`;
}

if (myArgs[0] !== '-f' && myArgs[1] !== 'hands.txt') {
    throw `${myArgs[1]} is an unkown file. Please use "-f hands.txt" or "-h with 10 cards"`;
}

const Start = require('./src/Start');
const Questions = require('./src/Questions');
const start = new Start();
const questions = new Questions();

questions.confirmUserWantsToPlay(start.game.bind(this, myArgs));

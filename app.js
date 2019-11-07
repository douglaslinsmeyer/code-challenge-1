const Start = require('./src/Start');
const Questions = require('./src/Questions');
const start = new Start();
const questions = new Questions();
const myArgs = process.argv.slice(2);

console.log(myArgs);

if (myArgs[0] === undefined) {
    throw 'To start the game, please use -f hands.txt';
}

if (myArgs[0] !== '-f') {
    throw `${myArgs[0]} is an unknown function. Please use -f hands.txt`;
}

if (myArgs[1] !== 'hands.txt') {
    throw `${myArgs[1]} is an unkown function. Please use -f hands.txt`;
}

questions.confirmUserWantsToPlay(start.game.bind(this, myArgs));

const Start = require('./src/Start');
const Questions = require('./src/Questions');
const start = new Start();
const questions = new Questions();
const myArgs = process.argv.slice(2);

console.log(myArgs);

questions.confirmUserWantsToPlay(start.game.bind(this, myArgs));

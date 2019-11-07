const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Questions {
    confirmUserWantsToPlay(startGameFunction) {
        rl.question('Want to play a game? (y/n): ', (answer) => {
            if (answer !== 'y' && answer !== 'n' ) {
                console.log(`${answer} is not an acceptable answer. Please try with a y (for yes) or n for (no).`);
                return rl.close();
            }
    
            if (answer === 'y') {
                return startGameFunction();
            }
    
            console.log('Well... I mean the project was to play a game. And now you dont want to play?');
            rl.close();
        });
    }

    askForPlayerNames(playersArr, playerNumber, nextFunction) {
        rl.question(`What is player ${playerNumber}'s name: `, (answer) => {
            if (answer.trim() === '') {
                console.log('Oops, did you mean to leave the players name blank? \n');
                return questions.askForPlayerNames(playersArr, playerNumber, nextFunction);
            }
            
            playersArr.push(answer);
            nextFunction();
        });
    }
}

const questions = new Questions();

module.exports = Questions;

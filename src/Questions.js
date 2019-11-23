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

    howDoYouWantToPlay(yesFunction, noFunction) {
        rl.question('Last question, Do you want to play with the file? (y/n): ', (answer) => {
            if (answer !== 'y' && answer !== 'n' ) {
                console.log(`${answer} is not an acceptable answer. Please try with a y (for yes) or n for (no).`);
                return questions.howDoYouWantToPlay(yesFunction, noFunction);
            }

            if (answer === 'y') {
                return yesFunction();
            }
            
            return noFunction();
        });
    }

    enterTenCards(nextFunction, playersArr) {
        rl.question('Enter 10 cards with space seperating them. (ie: AH 5D 7S 9C...): ', (answer) => {
            if (answer.split(' ').length !== 10) {
                console.log("Oops, it doesn't look like you entered ten cards \n");
                return questions.enterTenCards(nextFunction, playersArr);
            }
            
            nextFunction(answer, playersArr);
        });
    }
}

const questions = new Questions();

module.exports = Questions;

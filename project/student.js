import readline from 'readline-sync';
import { correctNum, ignoreCase } from './correctInput.js';
import _ from 'lodash';

export function startTest(currentUser, test) {
    let score = 0;

    if (Object.hasOwn(test, '1')) {
        currentUser.setTest(test);

        for (const task in test) {
            if (!test[task].textInput) {
                console.log(`\nQuestion: ${test[task].question}\n1: ${test[task][1]}\n2: ${test[task][2]}\n3: ${test[task][3]}\n4: ${test[task][4]}`);
            } else {
                console.log(`\nQuestion: ${test[task].question}`);
            }
        
            if (test[task].answers) {
                const correctAnswers = test[task].answers;
                if (correctAnswers.length === 1) {
                    const answer = test[task][correctNum(readline.question('Type number of answer: '))];

                    score += checkAnswers(correctAnswers, answer);
                }
            }

            if (test[task].answers) {
                const correctAnswers = test[task].answers;
                if (correctAnswers.length > 1) {
                    const firstAns = test[task][correctNum(readline.question('Type number of answer: '))];
                    const secondAns = test[task][correctNum(readline.question('Type number of answer: '))];
                    console.log(secondAns + ' - ' + firstAns)
                
                    score += checkAnswers(correctAnswers, firstAns, secondAns);
                }
            }

            if (test[task].textInput) {
                const answer = readline.question('Type your answer: ');
                const correctAnswer = test[task].answer;

                score += checkAnswers(correctAnswer, answer);
            }

        }
        currentUser.setScore(score);
        console.log('\nTest finished!\n');
        console.log(`\nYour score: ${score}`);
        return test;
    }
    console.log('\nTest is empty\n');
    return test;
}


function checkAnswers(correctAnswers, ...userAnswers) {
    let score = 0;
    for (const ans of userAnswers) {
        for (const correctAns of correctAnswers) {
            if (ignoreCase(ans, correctAns)) {
                score += 5;
            }
        }
    }
    return score;
}


export function getScore(currentUser) {
    if (currentUser.getTest() !== null) {
        console.log(`\nYour score: ${currentUser.getScore()}\n`)
        return currentUser.getScore();
    }
    console.log('You didnt pass any tests yet')
    return currentUser;
}


export function rating(users) {
    if (users.length > 0) {
        const sorted = _.sortBy(users, acc => acc.score).reverse();
        let place = 0;
        for (const user of sorted) {
            console.log(`\n${place}: ${user.getName()} ${user.getSurname()}\nScore: ${user.getScore()}`);
        }
    }
    console.log('No results yet.');
    return users;
}
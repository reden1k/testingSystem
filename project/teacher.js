import readline from 'readline-sync';
import { singleAnswerQuestions, multipleAnswersQuestions, textAnswersQuestions } from '../data/questionsAndAnswers.js'; 
import { correctNum } from './correctInput.js';
import { isGuest } from './account.js';

export function createTest(currentUser) {
    if (!isGuest(currentUser)) {
        if (currentUser.getIsTeacher()) {
            const test = {};
            const allTests = [...singleAnswerQuestions, ...multipleAnswersQuestions, ...textAnswersQuestions];
            const countOfQA = correctNum(readline.question(`${'\nHow many questions should we generate? '} (min: 1 max: ${allTests.length}): `));
            const addedIndex = [];

            for (let i = 1; i <= Number(countOfQA); i += 1) {
                const randomNum = Math.floor(Math.random() * ((allTests.length - 1) - 1) + 1);
                if (!addedIndex.includes(randomNum)) {
                    test[i] = allTests[randomNum];
                    addedIndex.push(randomNum);
                }
            }
            console.log('\nTest created!');
            console.log(test);
            return test;
        }
        console.log('\nYou dont have permission for this');
        return null;
    }
    console.log('\nYou dont have permission for this');
    return null;
    
}

export function getPassedStudents(users) {
        
}
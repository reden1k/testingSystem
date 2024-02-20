#!usr/env node

import readlineSync from 'readline-sync'; 
import { testTaker, curator, logout, login, isEmptyUser } from './testTaker.js';
import { createTest, niceOutPut } from './testsGenerator.js';
import { singleAnswerQuestions, multipleAnswersQuestions, textAnswersQuestions } from './data/testsData.js'

const testingSystemProgram = () => {
    let currentUser = {};
    let testingUsers = [];
    let test = {};
    let input;
    input = readlineSync.question('You are curator or student? (type \'curator\' or \'student\'): ');
    while(input !== '/exit') {
        switch (input) {
            
            case 'curator':
                isEmptyUser(currentUser) ? currentUser = curator(currentUser, testingUsers) : currentUser;
                !isEmptyUser(currentUser) ? testingUsers.push(currentUser) : currentUser;
                break;

            case 'student':
                isEmptyUser(currentUser) ? currentUser = testTaker(currentUser, testingUsers) : currentUser;
                !isEmptyUser(currentUser) ? testingUsers.push(currentUser) : currentUser;
                break;

            case '/startTest':
                //student start test
                break;
            
            case '/makeTest':
                test = createTest(currentUser, singleAnswerQuestions, multipleAnswersQuestions, textAnswersQuestions)
                break;
            
            case '/niceOutput':
                niceOutPut(test);
                break;

            case '/login': 
                currentUser = login(currentUser, testingUsers);
                break;

            case '/logout':
                currentUser = logout(currentUser);
                break;

            default: 'Unknown command!';

        }
        input = readlineSync.question('Type command (/help for get commands): ');
        console.log(testingUsers);
        console.log(currentUser)
    }
}

testingSystemProgram();
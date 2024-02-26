import readline from 'readline-sync';
import * as acc from '../project/account.js';
import { createTest } from './teacher.js';
import { startTest, getScore, rating } from './student.js';
//SECRET CODE FOR TEACHER: 9999

let input;
let currentUser = {};
let users = [];
let currentTest = {};

while (input !== '/q') {
    input = readline.question('Command (/help for commands): ');
    switch (input) {

        case '/myAcc':
            console.log(currentUser);
            break;

        case '/reg': 
            currentUser = acc.registration(currentUser, users);
            users.push(currentUser);
            break;
        
        case '/login':
            currentUser = acc.login(currentUser, users);
            break;

        case '/logout':
            currentUser = acc.logout(currentUser);
            break;
        
        case '/createTest':
            currentTest = createTest(currentUser);
            break;
        
        case '/start':
            startTest(currentUser, currentTest);
            break;
        
        case '/myScore':
            getScore(currentUser);
            break;
        
        case '/rating':
            rating(users);
            break;
    }
}
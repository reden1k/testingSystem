import readlineSync from 'readline-sync'; 
import { testTaker, curator } from './testTaker.js';

const testingSystemProgram = () => {
    const testingUser = [];
    let input;
    input = readlineSync.question('You are curator or student? (type \'curator\' or \'student\'): ');
    while(input !== '/exit') {
        input = readlineSync.question('Type command (/help for get commands): ');
        switch (input) {
            case 'curator':
                curator();
                break;
            case '/startTest':
                break;

            case '/anotherTestTaker':
                break;


        }
    }
}

testingSystemProgram();
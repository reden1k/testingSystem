import readline from 'readline-sync';
import { correctNum, ignoreCase } from '../project/correctInput.js';

class Account {
    constructor(name, surname, group, pass, isTeacher, test, score) {
        this.name = name;
        this.surname = surname;
        this.group = group;
        this.pass = pass;
        this.isTeacher = isTeacher;
        this.test = test;
        this.score = score;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getPass() {
        return this.pass;
    }

    getGroup() {
        return this.group;
    }

    getIsTeacher() {
        return this.isTeacher;
    }

    getTest() {
        return this.test;
    }

    getScore() {
        return this.score;
    }

    setTest(test) {
        this.test = test;
    }

    setScore(score) {
        this.score = score;
    }
     
}


export function registration(currentUser, users) {
    if (isGuest(currentUser)) {
        const type = readline.question('\nYou are teacher or student? (type \'teacher\' or \'student\'): ')
        const name = readline.question('\nWhats your name? ');
        const surname = readline.question('Your surname? ');
        const group = readline.question('Whats your group? ');
        const pass = readline.question('Type password: ');

        let account = new Account(name, surname, group, pass, studentOrTeacher(type, currentUser, users), null, 0);
        if (!containsAccount(account, users)) {
            console.log('\nYou registered sucessfuly!');
            return account
        }
        console.log('\nAccount already registered')
    }
    console.log('You already registered!');
    return currentUser;
}


export function login(currentUser, users) {
    if (isGuest(currentUser)) {
        const name = readline.question('\nName: ');
        const surname = readline.question('Surname: ');
        const pass = readline.question('Type your password: ');

        for (const acc of users) {
            console.log(acc.getName() + name)
            if (ignoreCase(acc.getName(), name) && ignoreCase(acc.getSurname(), surname) && acc.getPass() === pass) {
                console.log('\nLogged in!');
                return acc;
            }
        }
        console.log('\nWe didnt find your account');
        return currentUser;
    }
    console.log('\nYou already signed in');
    return currentUser;
}


export function logout(currentUser) {
    if (!isGuest(currentUser)) {
        console.log('\nYou logged out');
        return {}
    }
    console.log('You are signed in account!')
    return currentUser;
}


export function isGuest(currentUser) {
    for (const prop in currentUser) {
        if (Object.hasOwn(currentUser, prop)) {
          return false;
        }
      }
      return true;
}


function studentOrTeacher(input, currentUser, users) { 
    const code = 9999;
    let newInput;
    if (code === Number(input)) {
        return true;
    }

    if (input === '/back') {
        registration(currentUser, users);
    }

    if (ignoreCase(input, 'student')) {
        return false;
    }

    if (ignoreCase(input, 'teacher')) {
        const secretPass = readline.question('Type secret pass for teachers: ');
        if (correctNum(secretPass) && Number(secretPass) === code) {
            return true;
        }
        newInput = readline.question('\nWrong teachers code! Type code again or go back to registration (/back): ');
        return studentOrTeacher(newInput, currentUser, users);
    }
}


function containsAccount(currentUser, users) {
    for (const acc of users) {
        if (acc.getName() === currentUser.getName && acc.getSurname() === currentUser.getSurname) {
            console.log('\nAccount already registered!\n');
            return true;
        }
    }
    return false;
}

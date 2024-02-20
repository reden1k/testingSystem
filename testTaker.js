//file of test user
import readlineSync from 'readline-sync';



export const testTaker = () => {
    console.log('Welcome to Testing System!');
    const name = correctNameAndSurname(readlineSync.question('May I have your name? ')); //correct input?

    const surname = correctNameAndSurname(readlineSync.question('Whats your surname? ')); //correct input?
    const group = readlineSync.question('Whats your group? '); //correct input?
    console.log('Thank you!');
        return ({
            name: name,
            surname: surname,
            group: group,
            score: 0,
            test: null,
     })
}

export const anotherTestTaker = () => {
    return testTaker();
}

export const curator = () => {
    console.log('Welcome to Testing System!');
    const name = correctNameAndSurname(readlineSync.question('May I have your name? '));
    const surname = correctNameAndSurname(readlineSync.question('Whats your surname? ')); 
    console.log('Thank you! Curator account has been created!');

    return ({
        name: name,
        surname: surname,
        group: 'curator',
    })
}

export const containsUser = (user, testingUsers) => {
    for (const u of testingUsers) {
        if (u.name === user.name && u.surname === user.surname) {
            return true;
        }
    }
    return false;
}

const correctNameAndSurname = (name) => {
    const regepx = /^[a-zA-Zа-яА-Я ]+$/;
    let correctName = name;
    while (!regepx.test(correctName)) {
        correctName = readlineSync.question('Your name is Incorrect! Type it correctly: ');
    }
    return correctName;
}

export const isEmptyUser = (user) => {
    for (const prop in user) {
        if (Object.hasOwn(user, prop)) {
            return false;
        }
    }
    return true;
}
//file of test user
import readlineSync from 'readline-sync';

export const testTaker = (currentUser, testingUsers) => {
    if (isEmptyUser(currentUser)) {
        console.log('\nWelcome to Testing System!');
        const name = correctNameAndSurname(readlineSync.question('May I have your name? ')); //correct input?
        const surname = correctNameAndSurname(readlineSync.question('Whats your surname? ')); //correct input?
        const pass = readlineSync.question('Type password: ');
        const group = readlineSync.question('Whats your group? ');
        const student = {
            name: name,
            surname: surname,
            pass: pass,
            group: group,
            score: 0,
            isPassed: false,
            curator: false
        }
        if (!containsUser(student, testingUsers)) {
            console.log('Thank you!\n');
            return student;
        } 
        console.log('This account already was registered\n')
        return currentUser;
    }
    console.log('You are already registered!\n');
    return currentUser;
}

export const logout = (currentUser) => {
    if (!isEmptyUser(currentUser)) {
        console.log('You are logged out!\n');
        return {}
    }
    console.log('You are not in account!\n');
    return currentUser;
}

export const login = (currentUser, testingUsers) => {
    if (isEmptyUser(currentUser)) {
        const name = correctNameAndSurname(readlineSync.question('May I have your name? '));
        const surname = correctNameAndSurname(readlineSync.question('Whats your surname? '));
        const pass = readlineSync.question('Type your password: ');
        if (testingUsers.length !== 0) {
            for (const user of testingUsers) {
                if (user.name.toLowerCase() === name.toLowerCase() && user.surname.toLowerCase() === surname.toLowerCase() && user.pass.toLowerCase() === pass.toLowerCase()) {
                    console.log('You are logged in!\n')
                    return user;
                }
            }
            console.log('We didnt find account with this data!\n');
            return {};
        }
    }
    console.log('You are in account, you should type /logout\n')
    return currentUser;
}

export const curator = (currentUser, testingUsers) => {
    if (isEmptyUser(currentUser)) {
        console.log('\nWelcome to Testing System!');
        const name = correctNameAndSurname(readlineSync.question('May I have your name? '));
        const surname = correctNameAndSurname(readlineSync.question('Whats your surname? '));
        const group = readlineSync.question('Whats your group? ');
        const pass = readlineSync.question('Type password: ');
        const curator = {
            name: name,
            surname: surname,
            group: group,
            pass: pass,
            curator: true,
        }
        if (!containsUser(curator, testingUsers)) {
            console.log('Thank you! Curator account has been created!\n');
            return curator;
        }
        console.log('We didnt find your acoount in our data base! \n')
        return currentUser;
    }
    console.log('You are already registered!\n');
    return currentUser;
}

export const containsUser = (user, testingUsers) => {
    console.log(user)
    for (const u of testingUsers) {
        if (u.name.toLowerCase() === user.name.toLowerCase() && u.surname.toLowerCase() === user.surname.toLowerCase()) {
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

const isCurator = (user) => {
    if (user.curator) {
        return true;
    }
    return false;
}
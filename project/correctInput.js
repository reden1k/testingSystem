import readline from 'readline-sync';

export function ignoreCase(text, anotherText) {
    if (text.toLowerCase() === anotherText.toLowerCase()) {
        return true;
    }
    return false;
}

export function correctNum(input) {
    if (isNaN(Number(input))) {
        const newInput = Number(readline.question('Incorrect number, type again: '));
        correctNum(newInput);
    }
    return Number(input);
}
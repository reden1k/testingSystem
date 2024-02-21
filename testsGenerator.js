import readlineSync from 'readline-sync'; 

export function createTest(currentUser, textAnswersQuestions,singleAnswerQuestions,multipleAnswersQuestions)  {
    if (currentUser.curator === true) {

      const allTestInArray = [textAnswersQuestions, singleAnswerQuestions, multipleAnswersQuestions].flat();
      const allTestInArrayOne = [];
      const countTests = correctInput(Number(readlineSync.question('How much tests you want? ')));
      const test = {};

      let count = 0;
      for (;;) {
        if(count === countTests) {
          break
        }
        const randomIndex = Math.floor(Math.random() * 45)
        allTestInArrayOne.push(allTestInArray[randomIndex])
        count += 1;
      }
      let key = 1;
      for (const qa of allTestInArrayOne) {
        test[Number(key)] = qa;
        key += 1;
      }
      console.log(test)
      return test;
    }
    console.log('You dont have permissions for this!');
    return {};
}

export const startTest = (test, currentUser) => {

    for (const qa in test) {
        const answers = {
          arrayOfAnswers: [],
          isTextInput: false,
        };
        console.log('\n');
        let numberOfAns = 1;
        for (const e in test[qa]) {
          console.log(test[qa])
            if (e === 'question') {
                console.log(`Question: ${test[qa][e]}`)
            }
            if (e !== 'question' && !e.textInput) {
                console.log(`${numberOfAns}: ${test[qa][e]}`);
                answers[numberOfAns] = test[qa][e]
                numberOfAns += 1;
            }
            if (e === 'answer' || e === 'answer1' || e === 'answer2' || e === 'answer3' && e !== 'textInput') {
                answers.arrayOfAnswers.push(test[qa][e]);
            }
            if (e === 'textInput') {
              answers.isTextInput = true;
            }
        }
        // getAnswer(answers, currentUser, test[qa]);
        console.log(answers);
    }
    console.log(formatTest(test))
    return [];
}


const getAnswer = (answers, currentUser, test) => {
  const userAnswers = [];
  let input;
  let secondInput;
  let score = 0;
  if (answers.isTextInput) {
     input = readlineSync.question('Type answer (word, command or function)');
    correctInputAnswer += 4;
  }

  if (answers.arrayOfAnswers.length > 1) {
      input = correctInputAnswer(Number(readlineSync.question('Type number of answer: ')));
      secondInput = correctInput(Number(readlineSync.question('One more answer: ')));
  }
  userAnswers.push(input, secondInput);

  if (answers.arrayOfAnswers > 1) {
    for (const e of userAnswers) {
      for (const ans of answers.arrayOfAnswers) {
        if (typeof e === 'string' && typeof ans === 'string') {
          equalIgnoreCase(e, ans) ? score += 1 : score;
        }
      }
    }
    if (score === answers.arrayOfAnswers) {
      addScore(currentUser, score);
    }
    console.log(currentUser)
  }
  answers.arrayOfAnswers[0] === input ? addScore(currentUser, score) : addScore(currentUser, 0);
}

export const formatTest = (test) => {
  const formatedTest = {};
  for (const task in test) {
    const formatedTask = {};
    const answers = [];
    let numberOfAns = 1;
    for (const e in test[task]) {
      console.log(e)
      if (e === 'question') {
        formatedTask[e] = test[task][e];
        console.log(test[task][e] + '------')
      }
      if (e !== 'question' && !Object.hasOwn(test[task], 'textInput')) {
        formatedTask[numberOfAns] = test[task][e];
        numberOfAns += 1;
      }
      if (e === 'answer' || e === 'answer1' || e === 'answer2' || e === 'answer3' && e !== 'textInput') {
        answers.push(test[task][e]);
      }
      if (e === 'textInput') {
        formatedTask['isTextInput'] = true;
      }
    }
    formatedTask.arrayOfAnswers = answers;
    formatedTest[task] = formatedTask;
  }
  console.log(formatedTest)
}

const correctInput = (num) => {
    if (isNaN(num)) {
        const newNum = readlineSync.question('Incorrect input! Type number correctly: ');
        correctInput(newNum);
    }
    return num;
}

const correctInputAnswer = (num) => {
  while (num > 4) {
    const newNum = readlineSync.question('Incorrect input! Answer doesnt exist');
    correctInputAnswer(newNum);
  }
  return num;
}


const addScore = (user, count) => {
    user.score += count;
    return user;
}

const equalIgnoreCase = (text, text1) => {
  if (text.toLowerCase() === text1.toLowerCase()) {
    return true;
  }
  return false;
}

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

export const niceOutPut = (test) => {
    const arr = [];
    for (const qa in test) {
        console.log('\n')
        for (const e in test[qa]) {
            if (e === 'question') {
                console.log(`Question: ${test[qa][e]}`)
            }
            if (e !== 'question') {
                arr.push(test[qa][e]);
                console.log(`Answers: ${test[qa][e]}`);
            }
        }
    }
    return arr;
}

const correctInput = (num) => {
    if (isNaN(num)) {
        const newNum = readlineSync.question('Incorrect input! Type number correctly: ');
        correctInput(newNum);
    }
    return num;
  }


const addScore = (user, count) => {
    user.score += count;
    return user;
}


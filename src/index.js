// логика игр
import readlineSync from 'readline-sync';

export default (firstQuestion, questionAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log(firstQuestion);

  const numberOfRounds = 3;
  let i = 0;
  while (i < numberOfRounds) {
    const [expression, correctAnswer] = questionAnswer();

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  return [firstQuestion, questionAnswer];
};

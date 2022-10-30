import run from '../index.js';
import { getRandom, getRandomIndex } from '../randomNum.js';

const firstQuestion = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minNum = 1;
const maxNum = 10;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      return Error;
  }
};

const questionAnswer = () => {
  const number1 = getRandom(minNum, maxNum);
  const number2 = getRandom(minNum, maxNum);
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, questionAnswer);
};

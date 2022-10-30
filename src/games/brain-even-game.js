import run from '../index.js';
import { getRandom } from '../randomNum.js';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const questionAnswer = () => {
  const randomNumber = getRandom(minNum, maxNum);
  const expression = String(randomNumber);
  const isEven = () => expression % 2 === 0;
  const correctAnswer = isEven() ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  run(firstQuestion, questionAnswer);
};

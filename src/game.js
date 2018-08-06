import { Question } from './question.js';

export class Game {
  constructor() {
    this.questionList = new Question();
    this.index = this.randomNumber();
  }

  randomNumber() {
    return Math.floor((Math.random() * this.questionList.length) + 1);
  }

  showTerm(index) {
    return Object.values(this.questionList)[index];
  }

  showDefinition(index) {
    return Object.keys(this.questionList)[index];
  }

  findSetTimeOut(index) {
    return ((Object.keys(this.questionList)[key].split(" ").length/2)*1000) +7000;
  }

  removeQuestion(index) {
    this.questionList.splice(index, 1);
  }
}

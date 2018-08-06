import { Question } from './question.js';

export class Game {
  constructor() {
    this.questionList = new Question();
    this.index = this.randomNumber();
  }

  randomNumber() {
    let num = Object.keys(this.questionList.questions).length;
    return Math.floor((Math.random() * num) + 1);
  }

  showTerm() {
    return Object.values(this.questionList.questions)[this.index];
  }

  showDefinition() {
    return Object.keys(this.questionList.questions)[this.index];
  }

  findSetTimeOut() {
    return ((Object.keys(this.questionList.questions)[this.index].split(" ").length/3)*1000) +5000;
  }

  removeQuestion() {
    let booted = Object.keys(this.questionList.questions)[this.index];
    delete this.questionList.questions[booted];
  }
}

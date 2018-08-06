import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game.js';
import { Question } from './question.js';

$(document).ready(function() {
  var newGame = new Game();

  function nextQuestion() {
    $("#card").text(newGame.showDefinition());
    setTimeout(function() {
      $("#card").text(newGame.showTerm());
    }, newGame.findSetTimeOut());
    console.log(newGame.questionList.questions);
  }

  $("#start-button").click(function() {
    $("#start-screen").hide();
    $("#card-area").show();
    nextQuestion();
  });

  $("#flag-button").click(function() {
    newGame.index = newGame.randomNumber();
    nextQuestion();
  });

  $("#remove-button").click(function() {
    debugger;
    newGame.removeQuestion();
    newGame.index = newGame.randomNumber();
    nextQuestion();
  });
});

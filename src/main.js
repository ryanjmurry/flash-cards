import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game.js';
import { Question } from './question.js';

$(document).ready(function() {
  function hideButtons() {
    $("#flag-button").hide();
    $("#remove-button").hide();
  }

  var newGame = new Game();

  function nextQuestion() {
    $("#card").text(newGame.showDefinition());
    setTimeout(function() {
      $("#card").text(newGame.showTerm());
      showButtons();
    }, newGame.findSetTimeOut());
    console.log(newGame.questionList.questions);
  }
  
  function showButtons() {
    $("#flag-button").show();
    $("#remove-button").show();
  }

  $("#start-button").click(function() {
    $("#start-screen").hide();
    $("#card-area").show();
    nextQuestion();
  });

  $("#flag-button").click(function() {
    hideButtons();
    newGame.index = newGame.randomNumber();
    nextQuestion();
  });

  $("#remove-button").click(function() {
    hideButtons();
    newGame.removeQuestion();
    newGame.index = newGame.randomNumber();
    nextQuestion();
  });
});

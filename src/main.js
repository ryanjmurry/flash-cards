import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const newGame = new Game();

  $("#start-button").click(function() {
    $("#start-screen").hide();
    nextQuestion(newGame.index);
  });

  $("#flag-button").click(function() {
    newGame.index = newGame.randomNumber();
    newGame.nextQuestion(newGame.index);
  });

  $("#remove-button").click(function() {
    newGame.removeQuestion(newGame.index);
    newGame.index = newGame.randomNumber();
    newGame.nextQuestion(newGame.index);
  });

function nextQuestion(index) {
  setTimeout(function() {
    $("#card").text(showTerm(index));
  }, findSetTimeOut(index));
  $("#card").text(newGame.showDefinition(index));
}

});

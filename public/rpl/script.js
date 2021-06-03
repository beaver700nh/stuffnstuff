$(document).ready(
  () => {
    $("#shoot").click(
      function () {
        let res = ["rock", "paper", "scissors", "rock", "paper", "scissors"][Math.floor(Math.random() * 6)];

        $("#result").prop("src", "images/" + res + ".jpg");
        $("#result").prop("alt", res);
      }
    );
  }
);

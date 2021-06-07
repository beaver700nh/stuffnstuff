KONAMI = 0;
IN_GAME = false;
GAME = new_game();

class EASTER {
  static easteregg(event) {
    let key = event.which;

    // Order: ^rrow, UPPER, lower

    if (
      (KONAMI === 0  && key === 38)  || // \
      (KONAMI === 0  && key === 87)  || //  |-- UP
      (KONAMI === 0  && key === 119) || // /

      (KONAMI === 1  && key === 38)  || // \
      (KONAMI === 1  && key === 87)  || //  |-- UP
      (KONAMI === 1  && key === 119) || // /

      (KONAMI === 2  && key === 40)  || // \
      (KONAMI === 2  && key === 83)  || //  |-- DOWN
      (KONAMI === 2  && key === 115) || // /

      (KONAMI === 3  && key === 40)  || // \
      (KONAMI === 3  && key === 83)  || //  |-- DOWN
      (KONAMI === 3  && key === 115) || // /

      (KONAMI === 4  && key === 37)  || // \
      (KONAMI === 4  && key === 65)  || //  |-- LEFT
      (KONAMI === 4  && key === 97)  || // /

      (KONAMI === 5  && key === 39)  || // \
      (KONAMI === 5  && key === 68)  || //  |-- RIGHT
      (KONAMI === 5  && key === 100) || // /

      (KONAMI === 6  && key === 37)  || // \
      (KONAMI === 6  && key === 65)  || //  |-- LEFT
      (KONAMI === 6  && key === 97)  || // /

      (KONAMI === 7  && key === 39)  || // \
      (KONAMI === 7  && key === 68)  || //  |-- RIGHT
      (KONAMI === 7  && key === 100) || // /

      (KONAMI === 8  && key === 66)  || // \
      (KONAMI === 8  && key === 98)  || // /--- B

      (KONAMI === 9  && key === 65)  || // \
      (KONAMI === 9  && key === 97)  || // /--- A

      (KONAMI === 10 && key === 13)     // ---- ENTER
    ) {
      ++KONAMI;
    }
    else {
      KONAMI = 0;
    }

    if (KONAMI === 11) {
      KONAMI = 0;

      $("#easter-egg").html(
        '<img src="images/easteregg.jpg" alt="YOU FOUND THE EASTER EGG!!!" onclick="EASTER.start_game();" />'
      );
    }

    return false;
  }

  static start_game() {
    $("title").html("Press Space");

    setTimeout(
      () => {
        $("title").html("$: Good, #: Bad");
      },
      2000
    );

    $(document).keydown(
      function (event) {
        let key = event.which;

        if (key === 32) {
          IN_GAME = !IN_GAME;

          if (IN_GAME) {
            $("title").html("MoneyFilter (Press W)");
            setTimeout(EASTER.tick, 2000);
          }
          else {
            $("title").html("EquaSol - StuffNStuff");
            clearTimeout(GAME.timeout);
            GAME = new_game();
          }
        }
      }
    );
  }

  static play_game(event) {
    if (!IN_GAME) {
      return false;
    }

    let key = event.which;

    if (key === 38 || key === 87 || key === 119) {
      GAME.mode = (GAME.mode === "X" ? "O" : "X");
    }

    return false;
  }

  static tick() {
    if (!IN_GAME) {
      return;
    }

    let just_in = GAME.tiles[0];

    if (GAME.mode === "O") {
      if (just_in === "$") {
        if (++GAME.score === 100) {
          $("title").html("YOU WIN!!!");
          return;
        }
      }
      else if (just_in === "#") {
        $("title").html("You ate trash! :(");
        return;
      }
    }
    else if (GAME.mode === "X" && just_in === "$") {
      if (--GAME.score < -10) {
        $("title").html("You went bankrupt. :(");
        return;
      }
    }

    GAME.tiles = GAME.tiles.slice(1);
    GAME.tiles += ["$", "\xa0", "#"][Math.floor(Math.random() * 3)];
    GAME.board = `[${GAME.score} | ${GAME.mode}${GAME.tiles}]`;

    $("title").html(GAME.board);

    GAME.timeout = setTimeout(EASTER.tick, 1000);
  }
}

function new_game() {
  return {
    score: 0,
    mode: "X",
    tiles: "\xa0".repeat(10) + "$",
    timeout: 1,
  };
};

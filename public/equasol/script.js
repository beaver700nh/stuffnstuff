$(document).ready(
  () => {
    $("#xprod-calc").click(XPROD.calculate);
    $("#xprod-clear").click(XPROD.clear);

    $("#trvrsl-calc").click(TRVRSL.calculate);
    $("#trvrsl-clear").click(TRVRSL.clear);

    $(document).keydown(EASTER.easteregg);
    $(document).keydown(EASTER.play_game);
  }
);

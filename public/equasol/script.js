KONAMI = 0;

$(document).ready(
  () => {
    $("#xprod-calc").click(XPROD.calculate);
    $("#xprod-clear").click(XPROD.clear);

    $("#trvrsl-calc").click(TRVRSL.calculate);
    $("#trvrsl-clear").click(TRVRSL.clear);
  }
);

$(document).keydown(
  function (event) {
    let key = event.which;

    if (
      (KONAMI === 0  && key === 38) ||
      (KONAMI === 1  && key === 38) ||
      (KONAMI === 2  && key === 40) ||
      (KONAMI === 3  && key === 40) ||
      (KONAMI === 4  && key === 37) ||
      (KONAMI === 5  && key === 39) ||
      (KONAMI === 6  && key === 37) ||
      (KONAMI === 7  && key === 39) ||
      (KONAMI === 8  && (key === 66 || key === 98)) ||
      (KONAMI === 9  && (key === 65 || key === 97)) ||
      (KONAMI === 10 && key === 13)
    ) {
      ++KONAMI;
    }
    else {
      KONAMI = 0;
    }

    if (KONAMI === 11) {
      KONAMI = 0;

      $("#easter-egg").html(
        '<img src="images/easteregg.jpg" alt="YOU FOUND THE EASTER EGG!!!" />'
      );
    }

    return false;
  }
);

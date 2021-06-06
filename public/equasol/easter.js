KONAMI = 0;

class EASTER {
  static easteregg(event) {
    let key = event.which;

    // Order: ^rrow, lower, UPPER

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
        '<img src="images/easteregg.jpg" alt="YOU FOUND THE EASTER EGG!!!" onclick="EASTER.eastergame();" />'
      );
    }

    return false;
  }

  static eastergame() {
    alert("Easter egg game coming soon!");
  }
}

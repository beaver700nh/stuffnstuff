$(document).ready(
  () => {
    $("#xprod-calc").click(
      function () {
        let values = [
          parseInt($("#xprod-n1").val()),
          parseInt($("#xprod-d1").val()),
          parseInt($("#xprod-n2").val()),
          parseInt($("#xprod-d2").val()),
        ];

        if (check("0011", values)) {
          if (gcf(values[2], values[3]) === 1) {
            $("#xprod-status").text("Error: fraction is already in simplest form.");
          }
          else {
            let [n, d] = XPROD.simplify(values[2], values[3]);

            $("#xprod-n1").val(n);
            $("#xprod-d1").val(d);

            $("#xprod-status").text("Success: fraction has been simplified.");
          }
        }
        else if (check("0111", values)) {
          alert("FILL 1!");
        }
        else if (check("1011", values)) {
          alert("FILL 2!");
        }
        else if (check("1100", values)) {
          if (gcf(values[0], values[1]) === 1) {
            $("#xprod-status").text("Error: fraction is already in simplest form.");
          }
          else {
            let [n, d] = XPROD.simplify(values[0], values[1]);

            $("#xprod-n2").val(n);
            $("#xprod-d2").val(d);

            $("#xprod-status").text("Success: fraction has been simplified.");
          }
        }
        else if (check("1101", values)) {
          alert("FILL 3!");
        }
        else if (check("1110", values)) {
          alert("FILL 4!");
        }
        else if (check("1111", values)) {
          $("#xprod-status").text("Error: proportion is already solved.");
        }
        else {
          $("#xprod-status").text("Error: not enough information.");
        }

        function check(pat, vec) {
          for (let i in (pat.length < vec.length ? pat : vec)) {
            if (
              (Object.is(vec[i], NaN) && pat[i] === "1") ||
              (!Object.is(vec[i], NaN) && pat[i] === "0")
            ) {
              return false;
            }
          }

          return true;
        }
      }
    );
  }
);

// n  n   y  y -- SIMPLIFY
// n  y   y  y -- FILL
// y  n   y  y -- FILL
// y  y   n  n -- SIMPLIFY
// y  y   n  y -- FILL
// y  y   y  n -- FILL
// y  y   y  y -- SOLVED

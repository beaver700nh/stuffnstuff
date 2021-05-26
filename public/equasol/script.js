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

        if (check("10110", [1, NaN, 2, 3, NaN])) {
          alert("SIMPLIFY!");
        }
        else {
          $("#xprod-status").text("Error: not enough information.");
        }

        function check(pat, vec) {
          for (let i in (pat.length < vec.length ? pat : vec)) {
            alert(i);
            if (
              (vec[i] === NaN && pat[i] === "1") ||
              (vec[i] !== NaN && pat[i] === "0")
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

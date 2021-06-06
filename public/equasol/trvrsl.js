class TRVRSL {
  static calculate() {
    let angles = [];

    for (let i = 1; i <= 8; ++i) {
      angles.push(
        parseInt(
          $(`#trvrsl-input${i}`).val()
        )
      );
    }

    TRVRSL.solve(angles.slice(0, 4), TRVRSL.get_input_ids(1, 5), "#trvrsl-status");
    TRVRSL.solve(angles.slice(4, 8), TRVRSL.get_input_ids(5, 9), "#trvrsl-status");

    if ($("#trvrsl-parallel").prop("checked")) {
      // Catch conflict
      //   Report error
    }
  }

  static clear() {
    $("#trvrsl-status").text("");

    for (let i = 1; i <= 8; ++i) {
      $(`#trvrsl-input${i}`).val("");
    }
  }

  static solve(angles, outs, status) {
    let pres_ang_bin = vec_to_bin(angles);

    if (pres_ang_bin === 0x0) { // All 0000's
      $(status).text("Error: not enough information.");
    }
    else if (is_pow_2(pres_ang_bin)) { // Just one 1
      TRVRSL.solve_from_1(angles, outs, status);
    }
    else {
      alert(pres_ang_bin);

      if ((pres_ang_bin & 0x9) === 0x9) { // Has form 1001
        // Check if 0 and 3 equal
        alert("1001");
      }

      if ((pres_ang_bin & 0x6) === 0x6) { // Has form 0110
        // Check if 1 and 2 equal
        alert("0110");
      }

      if ((pres_ang_bin & 0xA) === 0xA) { // Has form 1010
        // Check if 1 and 3 supplement
        alert("1010");
      }

      if ((pres_ang_bin & 0x5) === 0x5) { // Has form 0101
        // Check if 2 and 4 supplement
        alert("0101");
      }

      if ((pres_ang_bin & 0xC) === 0xC) { // Has form 1100
        // Check if 1 and 2 supplement
        alert("1100");
      }

      if ((pres_ang_bin & 0x3) === 0x3) { // Has form 0011
        // Check if 3 and 4 supplement
        alert("0011");
      }

      $(status).text("Error: vertex is already solved.");
    }
  }

  static solve_from_1(angles, outs, status) {
    let pres_ang_bin = vec_to_bin(angles);

    if (pres_ang_bin === 0x8) { // Just enough info
      $(outs[1]).val(180 - angles[0]);
      $(outs[2]).val(180 - angles[0]);
      $(outs[3]).val(angles[0]);
    }
    else if (pres_ang_bin === 0x4) {
      $(outs[0]).val(180 - angles[1]);
      $(outs[2]).val(angles[1]);
      $(outs[3]).val(180 - angles[1]);
    }
    else if (pres_ang_bin === 0x2) {
      $(outs[0]).val(180 - angles[2]);
      $(outs[1]).val(angles[2]);
      $(outs[3]).val(180 - angles[2]);
    }
    else if (pres_ang_bin === 0x1) {
      $(outs[0]).val(angles[3]);
      $(outs[1]).val(180 - angles[3]);
      $(outs[2]).val(180 - angles[3]);
    }
  }

  static get_input_ids(start, exend) {
    let res = [];

    for (let i = start; i < exend; ++i) {
      res.push(`#trvrsl-input${i}`);
    }

    return res;
  }
}

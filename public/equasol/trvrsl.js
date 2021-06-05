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

    TRVRSL.solve(angles.slice(0, 4), TRVRSL.get_input_ids(0, 4), "#trvrsl-status");
    TRVRSL.solve(angles.slice(4, 8), TRVRSL.get_input_ids(4, 8), "#trvrsl-status");

    if ($("#trvrsl-parallel").prop("checked")) {
      // Catch conflict
      //   Report error
    }
  }

  static clear() {
    for (let i = 1; i <= 8; ++i) {
      $(`#trvrsl-input${i}`).val("");
    }
  }

  static solve(angles, outs, status) {

  }

  static get_input_ids(start, exend) {
    let res = [];

    for (let i = start; i < exend; ++i) {
      res.push(`#trvrsl-input${i}`);
    }

    return res;
  }
}

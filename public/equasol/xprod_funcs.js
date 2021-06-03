class XPROD {
  static calculate() {
    let values = [
      parseInt($("#xprod-n1").val()),
      parseInt($("#xprod-d1").val()),
      parseInt($("#xprod-n2").val()),
      parseInt($("#xprod-d2").val()),
    ];

    if (check("0011", values)) {
      XPROD.simplify(values[2], values[3], "#xprod-n1", "#xprod-d1", "#xprod-status");
    }
    else if (check("0111", values)) {
      XPROD.solve_lr(values[1], values[2], values[3], "#xprod-n1", "#xprod-status");
    }
    else if (check("1011", values)) {
      XPROD.solve_ur(values[0], values[2], values[3], "#xprod-d1", "#xprod-status");
    }
    else if (check("1100", values)) {
      XPROD.simplify(values[0], values[1], "#xprod-n2", "#xprod-d2", "#xprod-status");
    }
    else if (check("1101", values)) {
      XPROD.solve_ll(values[0], values[1], values[3], "#xprod-n2", "#xprod-status");
    }
    else if (check("1110", values)) {
      XPROD.solve_ul(values[0], values[1], values[2], "#xprod-d2", "#xprod-status");
    }
    else if (check("1111", values)) {
      $("#xprod-status").text("Error: proportion is already solved.");
    }
    else {
      $("#xprod-status").text("Error: not enough information.");
    }
  }

  static clear() {
    $("#xprod-n1").val("");
    $("#xprod-d1").val("");
    $("#xprod-n2").val("");
    $("#xprod-d2").val("");
  }

  static simplify(n_in, d_in, n_out, d_out, status) {
    if (gcf(n_in, d_in) === 1) {
      $(status).text("Error: fraction is already in simplest form.");
    }
    else {
      let [n, d] = this.simplify_frac(n_in, d_in);

      $(n_out).val(n);
      $(d_out).val(d);

      $(status).text("Success: fraction has been simplified.");
    }
  }

  static simplify_frac(n, d) {
    let f = gcf(n, d);
    return [n / f, d / f];
  }

  static solve_ul(a, b, c, out, status) {
    $(out).val(b * c / a);
    $(status).text("Success: proportion has been solved.");
  }

  static solve_ur(a, b, c, out, status) {
    $(out).val(a * c / b);
    $(status).text("Success: proportion has been solved.");
  }

  static solve_ll(a, b, c, out, status) {
    $(out).val(a * c / b);
    $(status).text("Success: proportion has been solved.");
  }

  static solve_lr(a, b, c, out, status) {
    $(out).val(a * b / c);
    $(status).text("Success: proportion has been solved.");
  }
}

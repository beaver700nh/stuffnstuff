class XPROD {
  static simplify_frac(n, d) {
    let f = gcf(n, d);
    return [n / f, d / f];
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

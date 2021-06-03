class XPROD {
  static simplify_frac(n, d) {
    let f = gcf(n, d);
    return [n / f, d / f];
  }
}

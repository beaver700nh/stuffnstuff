class XPROD {
  static simplify(n, d) {
    let f = gcf(n, d);
    return [n / f, d / f];
  }
}

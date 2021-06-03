function gcf(a, b) {
  if (!b) {
    return a;
  }

  return gcf(b, a % b);
}
function gcf(a, b) {
  if (!b) {
    return a;
  }

  return gcf(b, a % b);
}

function check(pat, vec) {
  for (let i in (pat.length < vec.length ? pat : vec)) {
    if (
      ( Object.is(vec[i], NaN) && pat[i] === "1") ||
      (!Object.is(vec[i], NaN) && pat[i] === "0")
    ) {
      return false;
    }
  }

  return true;
}

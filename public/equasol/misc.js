function gcf(a, b) {
  if (!b) {
    return a;
  }

  return gcf(b, a % b);
}

function is_pow_2(n) {
  return (n != 0) && ((n & (n - 1)) == 0);
}

function check(str, vec) {
  for (let i in (str.length < vec.length ? str : vec)) {
    if (
      ( Object.is(vec[i], NaN) && str[i] === "1") ||
      (!Object.is(vec[i], NaN) && str[i] === "0")
    ) {
      return false;
    }
  }

  return true;
}

function vec_to_str(vec) {
  let res = "";

  for (let i of vec) {
    if (Object.is(i, NaN)) {
      res += "0";
    }
    else {
      res += "1";
    }
  }

  return res;
}

function vec_to_bin(vec) {
  return parseInt(vec_to_str(vec), 2);
}

const data = `109067
75007
66030`;

const result = data.split("\n").reduce((total, a) => {
  return Math.floor(a / 3) - 2 + total;
}, 0);

const fs = require("fs");
const input = fs
  .readFileSync(process.cwd() + "/example.txt")
  .toString()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);

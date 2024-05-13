/**
 * @title A+B
 * @description 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * @input 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * @output 첫째 줄에 A+B를 출력한다.
 */
const fs = require("fs");
const input = fs
  .readFileSync(process.cwd() + "/example.txt")
  .toString()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);

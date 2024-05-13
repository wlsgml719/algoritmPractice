/**
 * @title 스택
 * @description 정수를 저장하는 스택을 구현한 후, 입력으로 주어지는 명령을 처리하는 프로그램 작성
 * 명령은 총 다섯가지
 * push X: 정수 X를 스택에 넣는 연산
 * pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력(만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력)
 * size: 스택에 들어있는 정수의 개수를 출력
 * empty: 스택이 비어있으면 1, 아니면 0을 출력
 * top: 스택의 가장 위에 있는 정수를 출력(만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력)
 *
 * @restriction
 * 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.
 *
 * @input
 * 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다.
 * 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다.
 *
 * @output 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력
 */
const start = Date.now();

import * as fs from "node:fs";

const input = fs
  .readFileSync(process.cwd() + "/example.txt")
  .toString()
  .split("\n");

let stack = [];

for (let i = 1; i <= input[0]; i++) {
  switch (input[i]) {
    case "pop":
      console.log(stack.length ? stack[stack.length - 1] : -1);
      stack.pop();
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      console.log(stack.length ? 0 : 1);
      break;
    case "top":
      console.log(stack.length ? stack[stack.length - 1] : -1);
      break;
    default:
      stack.push(input[i].split(" ")[1]);
  }
}

// 수행시간
console.log(Date.now() - start + "ms");

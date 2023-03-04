/**
 * @title 콜라츠 추측
 * @description
 * 주어진 수가 1이 될 때까지
 * 입력된 수가 짝수라면 2로 나눕니다.
 * 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 *
 * 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
 * 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
 * @restriction num은 1 이상 8,000,000 미만인 정수
 *
 * @param {number} num
 * @timecomplexity O(logn)
 */
function solution(num) {
  let count = 0;

  while (num != 1 && count != 500) {
    count++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return num === 1 ? count : -1;
}

solution(6);

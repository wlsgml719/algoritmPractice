/**
 * @title 두 정수 사이의 합
 * @description
 * 두 정수 a, b가 주어졌을 때
 * a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
 * @restriction
 * a와 b는 -10,000,000 이상 10,000,000 이하
 * a와 b가 같은 경우는 둘 중 아무 수나 리턴
 *
 * @param {number} a
 * @param {number} b
 * @complexity O(n)
 */
function solution(a, b) {
  if (a === b) return a;
  let s = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    s += i;
  }
  return s;
}

solution(10, 8);

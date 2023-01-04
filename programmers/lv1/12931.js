/**
 * @title 자릿수 더하기
 * @restriction N의 범위 : 100,000,000 이하의 자연수
 * @description 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 *
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  var answer = 0;

  for (let i of n.toString().split("")) {
    answer += parseInt(i);
  }

  return answer;
}

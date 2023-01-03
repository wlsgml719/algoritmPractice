/**
 * @title 약수의 합
 * @restriction n은 0 이상 3000이하인 정수입니다.
 * @description 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    // 나눈 값의 나머지가 0으로 나누어 떨어질 때 = 약수
    if ((n / i) % 1 === 0) {
      // 결과에 더한다.
      answer += i;
    }
  }

  return answer;
}

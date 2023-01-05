/**
 * @title 자연수 뒤집어 배열로 만들기
 * @restriction n은 10,000,000,000이하인 자연수입니다.
 * @description 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 *
 * @param {number} n
 * @returns
 */
function solution(n) {
  // 응답용 변수 선언
  const answer = [];

  n
    // 자연수를 문자로 변환
    .toString()
    // 변환한 문자를 배열로 변환
    .split("")
    // 인덱스 순서대로 요소를 순환 => 응답 배열에 역순서로 삽입
    .map((v) => answer.unshift(parseInt(v)));

  return answer;
}

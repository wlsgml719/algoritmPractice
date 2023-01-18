/**
 * @title 개미수열 구하기
 * @description 개미수열에 대해 n이 주어질 때, n번재 개미수열을 문자열 형태로 리턴
 * @restriction n은 40이하의 정수
 *
 * @param {number} n
 * @returns {string}
 */
function solution(n) {
  // 초기값
  let answer = ["1"];
  let count = 0;

  // n번 반복해서
  for (let i = 0; i < n; i++) {
    console.group(i, "번째");

    // n-1번(이전 문자열)을 배열화
    const ant = answer[i]?.split("").reduce((acc, curr, ci, src) => {
      // // 다음 값이 없다면
      // if (!src[ci + 1]) return acc;
      // // 현재 값과 다음 값이 같다면
      // if (curr == src[ci + 1]) {
      //   // 카운트 증가
      //   count += 1;
      //   // acc는 그대로
      //   return acc;
      //   // 현재 값과 다음 값이 다르다면
      // } else {
      //   // acc는 현재값 + 카운트
      //   acc = String(curr) + String(count);
      //   // 카운트 초기화
      //   count = 0;
      //   return acc;
      // }
    });

    console.groupEnd(i, "번째");
  }
  return answer;
}

solution(5);

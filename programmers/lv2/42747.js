/**
 * @title H-Index
 * @restriction
 * 1 <= n <= 1000
 * 0 <= h <= 10000
 * @description
 * 어떤 과학자가 발표한 논문 n편 중,
 * h번 이상 인용된 논문이 h편 이상이고
 * 나머지 논문이 h번 이하 인용되었다면
 * h의 최댓값이 이 과학자의 H-Index입니다.
 *
 * 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때,
 * 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 *
 * @param {Array} citations
 * @complexity
 */
function solution(citations) {
  // 정렬된 원소
  let sorted = citations.sort((a, b) => a - b);
  while (sorted.length) {}
}

solution([3, 6, 1, 5, 6, 5]);

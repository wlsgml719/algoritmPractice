/**
 * @title 구명보트
 * @description 무인도에 갇힌 사람들을 구명보트를 최대한 적게 사용하여 이용해 구출하려고 한다.
 * 구명보트는 2인승이며, 무게제한이 있다.
 * @restriction
 * 1 <= 무인도에 갇힌 사람 <= 50,000
 * 40 <= 몸무게 <= 240
 * 40 <= 구명보트 <= 240
 *
 * @param {number[]} people 사람들의 몸무게를 담은 배열
 * @param {number} limit 구명보트의 무게 제한
 * @returns 모든 사람을 구하기위한 구명보트 개수의 최솟값
 *
 * @timeComplexity O(n^2)
 */
function putInLifeboat(people, limit) {
  let sum = 0;
  let count = 0;

  people = people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    if (sum + people[i] > limit) {
      // 큰 경우 count ++ sum 재할당
      count++;
      sum = people[i];
    } else if (sum + people[i] == limit) {
      // 같은 경우 count ++ 및 sum 초기화
      count++;
      sum = 0;
    } else {
      // 작은 경우 sum에 합산
      sum += people[i];
    }

    // 마지막 값일 때 sum이 존재한다면
    if (sum && i == people.length - 1) count++;
  }
  return count;
}

putInLifeboat([70, 50, 80, 50], 100);

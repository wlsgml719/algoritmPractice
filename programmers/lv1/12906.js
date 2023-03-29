/**
 * @title 같은 숫자는 싫어
 *
 * @description
 * 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
 * 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
 * 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
 *
 * 예를 들면, arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
 * 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
 *
 * @restriction
 * 배열 arr의 크기 : 1,000,000 이하의 자연수
 * 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
 *
 * @param {Array} arr
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function removeDuplicate(arr) {
  let result = [];
  let cur = arr[0];

  for (let idx in arr) {
    // 현재 값과 같다면 멈춘다.
    if (idx > 0 && cur == arr[idx]) continue;

    // 현재 값과 다르다면, 결과에 값을 추가한다.
    result.push(arr[idx]);
    cur = arr[idx];
  }

  return result;
}

removeDuplicate([1, 1, 1, 1, 1, 3, 3, 0, 1, 1]);

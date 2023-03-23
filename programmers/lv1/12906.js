/**
 * @title 같은 숫자는 싫어
 * @description
 * 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
 * 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
 * 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
 *
 * 예를 들면, arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
 * 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
 * @restriction
 * 배열 arr의 크기 : 1,000,000 이하의 자연수
 * 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
 * @param {Array} arr
 * @complexity O(n^2)
 */
function removeDuplicate(arr) {
  for (let i in arr) {
    // 현재 Index와 다르고, 값이 일치하지 않는
    const targetIndex = arr.findIndex((v, ti) => i < ti && arr[i] != v);

    // 1. targetIndex가 존재할 때
    if (targetIndex != -1) {
      arr.splice(+i + 1, targetIndex - (+i + 1));
    }
    // 2. targetIndex가 존재하지 않을 때
    else if (arr[i + 1] && arr[i + 1] != arr[i]) {
      // 2-1. 해당 값이 하나인 경우(다음 값이 존재할 때): 현재 값을 제거하지 않는다.
      break;
    } else {
      // 2-2. 해당 값이 마지막인 경우: 이후 값 중 target 변수와 일치한다면 전부 제거
      arr.splice(+i + 1, arr.lastIndexOf(arr[i]) - i);
    }
  }

  return arr;
}

removeDuplicate([1, 1, 1, 1, 1, 3, 3, 0, 1, 1]);

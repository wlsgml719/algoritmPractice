/**
 * @title 기능개발
 * @description 각 기능이 배포되는 날짜 구하기
 *
 * 각 기능의 개발 속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있습니다.
 * 이 때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 * 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *
 * @param {number[]} progresses 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 * @param {number[]} speeds 작업의 개발 속도가 적힌 정수 배열
 * @return {number[]} 동일한 날짜에 배포되는 기능의 수인 정수 배열
 *
 * @timeComplexity O(n)
 */
function funtionDevelopment(progresses, speeds) {
  let complete = [];
  // 소요일
  let day = 0;
  // 일별 완료 수
  let count = 0;
  // 전체 완료 수
  let sum = 0;

  do {
    if (100 <= progresses[sum] + speeds[sum] * day) {
      // 기능 완료

      count++;
      sum++;

      if (sum == progresses.length) {
        complete.push(count);
        break;
      }
    } else {
      // 기능 미완료

      if (count) {
        complete.push(count);

        count = 0;
      }

      day++;
    }
  } while (sum <= progresses.length);

  /**
   * progress의 각 원소에 대해
   *
   * progresses[count]          day   count sum   complete
   * 93                 else    0     0     0     []
   *                                              []
   * ...
   * 93                 if      7     1     1     []
   * 30                 if      7     2     2     []
   * 55                 else    8     0     2     [2]
   * ...
   * 55                 if      9     1     3     [2]
   */

  return complete;
}

funtionDevelopment([93, 30, 55], [1, 30, 5]);

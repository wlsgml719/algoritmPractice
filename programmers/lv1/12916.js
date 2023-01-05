/**
 * @title 문자열 내 p와 y의 개수
 * @restriction
 * 문자열 s의 길이 : 50 이하의 자연수
 * 문자열 s는 알파벳으로만 이루어져 있습니다.
 * @description
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 * 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 *
 * @param {String} s
 * @returns {Boolean}
 */
function solution(s) {
  // 문자열에 포함된 p, y문자의 개수를 구한다.
  const p = s.match(/p|P/g);
  const y = s.match(/y|Y/g);

  // 둘 중 하나도 없는 경우
  if (!p?.length && !y?.length) true;

  // 개수가 같은 경우 : 같지 않은경우
  return p?.length === y?.length ? true : false;
}

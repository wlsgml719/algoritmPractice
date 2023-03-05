/**
 * @title 가운데 글자 가져오기
 * @description
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
 * 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * @restriction s는 길이가 1 이상, 100이하인 스트링입니다.
 *
 * @param {string} s
 * @complexity O(1)
 */
function solution(s) {
  return s.length % 2 === 0
    ? s.substring(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2) + 1)
    : s.substring(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2));
}

solution("가나다라마바사");

/**
 * @title 올바른 괄호
 * @description 올바른 문자는 '(' 문자로 열렸으면 반드시 ')'으로 닫혀야한다.
 * @restriction 자연수 s <= 100,000
 *
 * @param {string} s '(' 또는 ')'으로만 이루어진 문자열 s
 * @returns {boolean} 올바른 괄호면 true / 올바르지 않은 괄호면 false 반환
 *
 * @timeComplexity O(n)
 */
function correctBracket(s) {
  let n = 0;

  for (let i in s) {
    if (s[i] == "(") {
      // "(" 일 때 n은 1 증가
      n++;
    } else {
      // ")" 일 때 n은 1 감소
      n--;
    }

    // 순서가 잘못된 경우
    if (n < 0) return false;
  }

  return n === 0;
}

console.log(correctBracket("))("));

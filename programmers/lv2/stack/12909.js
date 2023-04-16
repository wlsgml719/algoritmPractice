/**
 * @title 올바른 괄호
 * @description 올바른 문자는 '(' 문자로 열렸으면 반드시 ')'으로 닫혀야한다.
 * @restriction 자연수 s <= 100,000
 *
 * @param {string} s '(' 또는 ')'으로만 이루어진 문자열 s
 * @returns {boolean} 올바른 괄호면 true / 올바르지 않은 괄호면 false 반환
 *
 * @timeComplexity O(n)
 *
 * @accuracy 69.5
 * @efficiency 30.5
 */
function correctBracket(s) {
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(correctBracket("))("));

/**
 * @title 김서방 찾기
 * @description
 * String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
 * "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
 * seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 *
 * @restriction
 * seoul은 길이 1 이상, 1000 이하
 * seoul의 원소는 길이 1 이상, 20 이하인 문자열
 * "Kim"은 반드시 seoul 안에 포함
 *
 * @param {Array} seoul
 * @complexity O(n)
 */
function findKim(seoul) {
  return "김서방은 " + seoul.findIndex((v) => v === "Kim") + "에 있다";
}

findKim(["Kang", "Na", "Park", "Sin", "Jang", "Kim", "Ha"]);

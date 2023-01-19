/**
 * @title 주식 시세차익 구하기
 * @description
 * 1일부터 N일까지, 날짜별 주가가 순서대로 들어있는 배열이 있습니다.
 *
 * 이 때, 주식을 구매한 후 차익을 얻기까지
 * 날짜별로 최소 며칠씩 기다려야 하는지 알고 싶습니다.
 *
 * 1일부터 N일까지 날짜별로 주식의 가격이 순서대로 들어있는 배열 price가 매개변수로 주어질 때,
 * 날짜별로 차익을 얻으려면 최소 며칠을 기다려야 하는지 알려주는 배열을 return 하도록 solution 함수를 완성해주세요.
 *
 * @complexity O(n)
 */
function solution(price) {
  return price.reduce((acc, curr, ci) => {
    // 선형검색
    const bigger = price.findIndex((e, i) => {
      return i > ci && e > curr;
    });

    // 조건을 만족하는 인덱스가 없는 경우(-1) : 조건을 만족하는 인덱스가 있는 경우(해당 인덱스)
    bigger == -1 ? acc.push(bigger) : acc.push(bigger - ci);

    return acc;
  }, []);
}

solution([4, 1, 4, 7, 6]);

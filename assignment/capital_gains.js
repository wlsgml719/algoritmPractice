/**
 * @title 주식 시세차익 구하기
 * @description
 * 순차배열 n일까지의 주가(price)
 *
 * 주식을 구매한 후 차익을 얻기까지
 * 최소 며칠씩 기다려야하는가
 * = 구매일(a)로부터 이익이 발생하는 최초 일자(b)
 *
 * 날짜별 차익을 얻으려면 며칠을 기다려야하는가?
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

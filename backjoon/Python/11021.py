'''
    제목: A+B - 7
    설명: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
    입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
    각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
    출력: 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
'''
count = int(input())

for i in range(count):
    a, b = map(int, input().split())
    print("Case #%s: %s"%(format(i+1), a + b))

''' (success)
    메모리: 31120 KB
    시간: 40 ms
    코드길이: 128 B
'''
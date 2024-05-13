/*
    문제: 단어 공부
    설명: 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
    단, 대문자와 소문자를 구분하지 않는다.

    입력: 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
    출력: 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
*/
#include <stdio.h>
#include <string.h>
#include <ctype.h>

char main() {
    // 단어를 입력받아 저장할 변수 선언: null문자를 포함한 길이 1,000,000 제한 적용
    char word[1000001];
    // 반복을 통해 알파벳을 카운트하기위한 변수 초기화
    int count = 0;
    int max_count = 0;
    char max_alphabet;


    // 단어를 입력받아 문자열로 저장
    scanf("%s", word);
    max_alphabet = toupper(word[0]);


    // 문자열 길이만큼 반복
    for(int i=0; i<strlen(word); i++) {
        // i가 max와 같으면(이미 카운트한 경우) 비교를 건너뛴다.
        if(word[i] == max_alphabet) {
            continue;
        } else {
            // i를 기준으로 문자열 길이만큼 반복
            for(int j=i; j<strlen(word); j++) {
                // i와 일치하는 j를 찾아 갯수+1
                if(toupper(word[i]) == toupper(word[j])) {
                    count += 1;
                }
            }
            // j의 갯수가 i의 max와 같다면
            if(count == max_count) {
                return printf("?");
                break;
            // j의 갯수가 i의 갯수보다 크다면
            } else if (count > max_count) {
                max_count = count;
                max_alphabet = toupper(word[i]);
            }

            // 갯수 초기화
            count = 0;
        };
    };

    return printf("%c", max_alphabet);
};

/*  (fail)
    코드길이: 836 B
*/
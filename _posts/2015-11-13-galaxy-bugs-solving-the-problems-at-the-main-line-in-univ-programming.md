---
layout: post
title: "은하수벅스 대학생 프로그래밍 경시대회 본선문제 및 풀이"
description: ""
categories : development
sub_categories : ""
date: 2015-11-13
tags: []
comments: true
share: true
---


## Description

은하수벅스는 이번 여름에 고객들을 대상으로 사은품 프로모션을 진행하고 있습니다. **프로모션은 음료를 구매할 때마다 고객에게 스티커를
적립**해줍니다. 스티커는 음료의 종류에 따라 **여름 음료 스티커와 일반 음료 스티커로 나뉘며, 5개 이상의 여름 음료 스티커를 포함한,
총 12개의 스티커를 모으면 이를 하나의 텀블러로 교환**할 수 있습니다.

연재는 현재 S 개의 여름 음료 스티커와 N 개의 일반음료 스티커를 가지고있는데, 이를 통해 받을 수 있는 최대 텀블러의 수를 알고 싶어
합니다. 워낙 많은 스티커를 가지고 있으므로, 계산이 어렵다고 느낀 연재는 당신에게 이를 계산하는 프로그램을 작성해달라는 요청을 받았습니다.
스티커의 개수가 주어졌을 때 이를 통해 얻을 수 있는 최대 텀블러의 수를 출력하는 프로그램을 작성하세요

  
## Input


입력은 여러 개의 테스트 케이스로 주어지며, 첫 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 10,000)가 입력됩니다.

하나의 테스트 케이스는 0이상 260 − 1이하의 정수 S 와 N 이 입력되며, 두 숫자 사이에는 공백이 주어집니다.

  

## Output


각 테스트 케이스의 순서대로 한 줄에 최대 얻을 수 있는 텀블러의 숫자를 출력하세요.

  

Sample Input

    4
    12 0
    10 14
    4 20
    5 2147483648

  

은하수벅스 Solution 1 > Binary search로 받을 수 있는 텀블러의 갯수를 정합니다. ◦ 텀블러는 최소 0개, 최대 𝑆 5
개 받을 수 있습니다. 정한 텀블러 갯수 만큼 받을 수 있는지 확인합니다. ◦ 정한 텀블러 갯수가 M이라 하면, ◦ 여름 음료 스티커가
텀블러 하나당 다섯 장 있어야 하므로, S ≥ 5M인지 확인합니다. ◦ 여름 음료 또는 일반 음료 스티커가 텀블러 하나당 (여름 음료 5장을
포함하여) 12장 있어야 하므로 S - 5M + N ≥ (12 - 5)M인지 확인합니다. 답이 되는 텀블러 갯수 M 중 최댓값을 출력합니다

    import java.util.Scanner;
    public class Main {
        public static void main(String args[]) {
            Scanner scanner = new Scanner(System.in);
            int testcase = scanner.nextInt();
            long thumbler;
            while (testcase-- > 0) {
                long S = scanner.nextLong();
                long N = scanner.nextLong();
                thumbler = getTumblerCount(S, N);
                System.out.println(thumbler);
            }
        }
        private static long getTumblerCount(long S, long N) {
            long s = S / 5;
            long n = N / 7;     
            long min = s < n ? s : n;
            long sr = S - min * 5;
            long nr = N - min * 7;
            if (nr < 7)
                sr = sr + nr;
            min += sr / 12;
            return min;
        }       
    }

  


---
layout: post
title: "최고의 집합"
description: ""
categories : development
sub_categories : ""
date: 2017-11-10
tags: []
comments: true
share: true
---

# 최고의 집합

프로그래머스에 공유된 [문제](https://www.welcomekakao.com/learn/challenge_codes/38)입니다.

  

## 문제

  

자연수 N개로 이루어진 집합 중에, 각 원소의 합이 S가 되는 수의 집합은 여러 가지가 존재합니다.

  

최고의 집합은, 위의 조건을 만족하는 집합 중 각 원소의 곱이 최대가 되는 집합을 의미합니다.

집합 원소의 개수 n과 원소들의 합 s가 주어지면, 최고의 집합을 찾아 원소를 오름차순으로 반환해주는 bestSet 함수를 만들어 보세요.

만약 조건을 만족하는 집합이 없을 때는 배열 맨 앞에 –1을 담아 반환하면 됩니다.

  

예를 들어 n=3, s=13이면 [4,4,5]가 반환됩니다.

  

## 풀이

  

    def bestSet(n, s):
    
        print(n)
    
        prin(s)
    
        answer = [-1] if n > s else []
    
        answer = [s//n] * (n - (s % n)) + [s//n + 1] * (s % n)
    
        
    
        #print(answer)
    
        return answer
    
    
    
    # 아래는 테스트로 출력해 보기 위한 코드입니다.
    
    print(bestSet(3,13))
    
    
    
    # 아웃풋
    
    # [4, 4, 5]
    
    # [4, 4, 5]
    
    # [5, 5, 5, 6, 6, 6, 6, 6, 6]
    
    # <EXECUTION_TIME>2975</EXECUTION_TIME>
  


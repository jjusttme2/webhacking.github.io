---
layout: post
title: "성능을 높이는 코드 스타일"
description: ""
categories : development
sub_categories : ""
date: 2015-10-03
tags: []
comments: true
share: true
---

NHN의 `자바스크립트 성능 이야기` Chapter 3을 간략히 정리한다.

[jsMatch](http://jindo.dev.naver.com/jsMatch/index.html) 도구를 통한 성능 측정 수치를 제공하여 신뢰를 준다.

  

## 성능우위 문법

  

\- 배열 생성시 : var arr = new Array(); 보다 var arr = []; 를 사용한다

\- 배열 접근시 : arr.push(i) 보다 arr[i] = value 를 사용한다

\- 객체 생성시 : var obj = new Object(); 보다 var obj = {}; 를 사용한다

\- 객체 접근시 : obj["a"] = 1 보다 obj.a = 1; 를 사용한다

\- 문자열 생성시 : var str = new String("aaa"); 보다 var str = "aaa"; 를 사용한다

\- 문자열 연산시 : loop문에서 문자열 조작시에 str += "test"; 보다 arr=[]; loop{ arr[i]="test"; }
arr.join(""); 을 사용한다 (String과 StringBuffer개념과 유사)

\- 정규표현식 : 탐색 대상을 축소한다. loop 문 안에 정규표현식 넣지 말고 밖에 놓아 한번만 컴파일 처리되게 한다. loop문에
있으면 계속 컴파일됨

  

  

## 스코프 체인 탐색 줄이기

  

  

\- 스코프 체인 : 탐색 성능을 높이는 것이 본질 (자바스크립트 실행성능 저하는 변수, 객체, 함수의 메모리상 위치 탐색 작업임)

\- 스코프 체인 구성 = 활성화 객체(Activate Object) + 전역 객체(Global Object)

\- 활성화 객체 : 함수 내부 접근시 생성 (지역변수, this, arguments 객체) -> 함수 빠져 나오면 활성화 객체 제거 됨

\- 실행 문맥(Execution Context) -> 스코프 체인 (1, 2) -> 활성화 객체 (1) -> 전역 객체 (2) 로 프로그램
수행됨

\- 함수가 전역 속성 참조 순서 : 실행문맥 > 스코프 체인 > 활성화 객체 (함수) > 스코프 체인 > 전역 객체의 속성 참조

\- 활성화 객체에서 전역 변수 사용시 : 함수 내부에 var LocalVariable = GlobalVariable; 식을 첨부 (전역속성
탐색을 제거함)

  

  

## 프로토타입 체인 탐색 줄이기

  

\- new 연산자로 생성된 인스턴스 객체는 생성자의 프로토타입을 참조하게 된다

\- var obj = new Object(); obj는 Object의 프로토타입 속성에 접근 할 수 있다

\- 자신의 객체만 접근하고 할 경우는 hasOwnProperty를 이요한다 (추가)

  

  

## 반복문 & 조건문

  

\- for~in 문은 가급적 쓰지 말라

\- for(~) 문안에 Array.length 구하는 함수등을 호출하지 말고, 외부에서 var length = Array.length를
설정한다. 스코프체인의 활성화 객체를 찾아가는 탐색 경로를 거치게 되므로 응답성능이 느려진다.

\- 조건절을 빠른 탐색을 위한 알고리즘을 적절히 적용한다 : quick-sort, merge-sort, breadth first
search, depth first search등


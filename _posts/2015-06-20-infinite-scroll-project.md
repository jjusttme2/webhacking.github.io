---
layout: post
title: "infinite scroll (무한스크롤)"
description: ""
categories : development
sub_categories : ""
date: 2015-06-20
tags: []
comments: true
share: true
---

`Github` 통해서 [공유](https://github.com/webhacking/infinite-scroll-by-codekit)했습니다.

링크 : https://github.com/webhacking/infinite-scroll-by-codekit

  

## 생각

프론트단은 반응형 처리였고, 슬릭딜 RSS에서 상품이미지하고 가격,무료배송을 파싱하여 출력함.
  
- 핫딜 : https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&sear
chin=first&rss=1

- 쿠폰 :
https://slickdeals.net/newsearch.php?searchin=first&forumchoice%5b%5d=10&rss=1


## 상세 내용

Gride형의 경우 딜8개(2줄* 4개딜)

단, 웹페이지 가로 width 길이에 따라 노출되는 딜 숫자 조정 가능

list 형의 경우 딜 8개(1줄 *8개 딜) 

이벤트/프로모션 배너

총 3개로 구성(이미지는 임의 삽입 가능);

roling 기능 (버튼 클릭시, 화살표 클릭시), 배너 클릭시 해당 딜/쿠폰 페이지로 넘어가는 기능 구현

Featured Deal/Coupon

grid / list view 전환 기능

딜/쿠폰 구분 표시 (클릭 시, 해당 딜/쿠폰 페이지로 넘어감)

상품 이미지

상품 판매처(캐논,아마존,월마트 등)

상품 타이틀 : Grid 뷰에서 타이틀이 길 경우 말줌임 표시

가격정보 : 무료배송일 경우 정보 표시

상품정보(description) : List뷰에서만 구현. 길 경우 말줄임 표시

무한 스크롤 형태

  

  

  

  


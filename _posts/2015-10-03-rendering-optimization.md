---
layout: post
title: "렌더링 최적화 방법"
description: ""
categories : development
sub_categories : ""
date: 2015-10-03
tags: []
comments: true
share: true
---

렌더링 과정에 대하여 알아보고, 렌더링시 성능 최적화할 수 있는 방법들을 살펴보자 (책. 4장 렌더링)

기본적으로 이전 블로그에 포스팅한 성능관련이야기 책들에서 주로 언급하는 내용들이다.

  

  

**▶ 전체 브라우저 렌더링 처리 과정**

  

  * \- 전체 브라우저 처리과정 : HTML DOM 트리 + CSS 스타일 구조체 = 렌더 트리 생성 (레이아웃 처리) -> 페인트 (화면에 표현)
  * \- DOM 트리 생성 : HTML을 DOM 요소 노드 트리 형태로 구성.
  * \- 스타일 구조체 생성 : CSS 정보를 스타일 구조체(Style Struct)로 생성한다. 
  * \- 렌더 트리 생성 : DOM 트리와 각 노드에 스타일 정보를 설정하여 화면에 표현할 노드로 구성한다. DOM 트리와 렌더 트리는 1:1 대응하지 않는다.
  * \- 레이아웃 처리 : 렌더 트리의 각 노드 크기가 계산되어 위치계산한다.
  * \- 페인트(Paint) : 렌더 트리를 순회하면서 페인트 함수를 호출해 노드를 화면에 표현한다.

  

  

**▶ 리플로와 페인트**

  

  * \- 리플로(Reflow) : Ajax와 같은 데이터를 가져와서 화면에 뿌릴라 치면 변경이 필요한 렌더 트리에 대한 유효성 확인 작업과 함께 노드의 크기와 위치를 다시 계산한다. 이과정을 리플로 = 레이아웃(Layout) = 레이아웃팅(Layouting) 이라 한다. (부모 노드의 변경은 자식 노드 변경 리플로도 야기한다)
  * \- 리페인트(Repaint) : 변경 영역의 결과를 표현하기 위해 화면이 업데이트 되는 것을 의미한다. 리페인트 = 리드로(Redraw) 
  * \- 리플로 와 리페인트는 비용이 높다. 발생하는 원인을 살펴보자 
  * \+ DOM 노드의 변경 : 추가, 삭제
  * \+ DOM 노드 노출 속성을 통한 변경 : 추가, 삭제, 특성 변경
  * \+ 스크립트 애니메이션 : 애니메이션은 DOM, 스타일 등이 짧은 시간에 수차례 변경되는 것임
  * \+ 스타일 : 추가, 변경
  * \+ 사용자 액션 : 브라우저 크기 변경, 글꼴 크기 변경등 

  

  

**▶ 리플로 & 페인트 최소화 방법**

  

  * \- 작업 그룹핑 : DOM 요소 변경시 같은 형태끼리 그룹으로 묶어서 실행한다. 
  * \- 실행 사이클 : 루핑 구문 즉 setTimeOut같은 구문에서 DOM 요소 핸들링을 배제한다.
  * \- display 속성 : 루핑이 어쩔 수 없다면 

  

1

2

3

element.style.display="none";

//looping구문

element.style.display="block";

[cs](http://colorscripter.com/info#e)

  

  * \- 이렇게 하면 루핑구문에서 "리플로+페인트"가 계속 발생하지 않고, none과 block 할때 딱 두번만 발생한다.
  * \- 노드 복제 : 루핑도는 구문에서 노드 핸들링시 원복 노드를 복제하여 사용함 

  

1

2

3

var clone = element.cloneNode(true);

//looping 구문

parentNode.replaceChild(clone, element);

[cs](http://colorscripter.com/info#e)

  

  * \- createDocumentFragment() 사용 : DOM 객체와 별개의 새로운 DOM 객체를 생성하여 사용하면 렌더링 성능 향상 가능함.

  

1

2

var fragment = document.createDocumentFragment();

//looping 구문안에서 fragment.appendChile(elems[e]); 호출

[cs](http://colorscripter.com/info#e)

  

  * \- 캐싱 : 별도의 변수에 자주 사용하는 속성값 또는 메소드값을 저장하여 사용한다. 
  * \- 하드웨어 가속 렌더링 : GPU를 이용한다. 브라우져 마다 설정값이 틀림. (크롬 : chrome://flags 로 GPU 설정 확인 가능)

  


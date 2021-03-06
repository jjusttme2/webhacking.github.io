---
layout: post
title: "클린 코드:: Clean code (a handbook of agile software craftsmanship)"
description: ""
categories : etc
sub_categories : ""
date: 2016-09-27
tags: ['Clean code: a handbook of agile software craftsmanship.', '클린코드']
comments: true
share: true
---

요즘 `클린 코드`에 관심이 많다.

코드또한 하나의 글이다.

  

잘 쓰여진 코드는 아름다운 문장과 같고, 버그를 심을 확률이 낮아진다.

깔끔한 코드를 원한다면, 바로 코드를 작성하기 앞 서 생각을 하길 바란다.

  

이 후, 자신의 생각 또한 깔끔히 정리가 되었다면 그 때 코드를 작성하면 좋다.

  

> 깔끔하게 글을 쓰고 싶다면, 먼저 생각을 깔끔하게 정리하라.

>

> -요한 폰 괴테

  

코드를 대체해 주석으로 의도를 가리키는 개발자들도 많이봤다.

항상 주석이 중요하다고 배웠다. 그런데 왜 ? 코드가 명확하다면 코드자체로 의도를 가리킬수있는 것 아닌가?

깔끔한 코드는 단순 문법만을 나타내는 것은 절대 아니다. 해당 책에는 정말 좋은 내용들이 많이 담겨있다.

그 내용들만 잘 살려 나 자신에게 반영한다면 더 좋은 개발자로 거듭나는데 한 발자국 내딛는 것 아닌가.. !  

  

>  
장인 정신을 익히는 과정은 두 단계로 나뉜다. 바로 이론과 실전이다. 첫째, 장인에게 필요한 원칙, 패턴, 기법, 경험이라는 지식을 습득해야
한다. 둘째, 열심히 일하고 연습해 지식을 몸과 마음으로 체득해야 한다.

>  

>

> 함수는 추상화 수준을 한 단계만 내려가야 한다. 함수 내 모든 문장은 추상화 수준이 동일해야 한다 그리고 그 추상화 수준은 함수 이름이
의미하는 작업보다 한 단계 만 낮아야 한다.  

  

  

한짤 요약하면 아래와 같다.

전자가 되도록 노력하자 ..!

  

  

![](/assets/images/posts/693/27354E3857E9CBF109B0A8.JPEG)

  

  

  

**1장 깨끗한 코드**  

  

코드가 존재하리라

나쁜 코드  
나쁜 코드로 치르는 대가  
__ 원대한 재설계의 꿈  
__ 태도  
__ 원초적 난제  
__ 깨끗한 코드라는 예술?  
__ 깨끗한 코드란?  
우리들 생각  
우리는 저자다  
보이스카우트 규칙  
프리퀄과 원칙  
결론

참고 문헌  
  
**2장 의미 있는 이름**  
들어가면서  
의도를 분명히 밝혀라  
그릇된 정보를 피하라  
의미 있게 구분하라  
발음하기 쉬운 이름을 사용하라  
검색하기 쉬운 이름을 사용하라  
인코딩을 피하라  
__ 헝가리식 표기법  
__ 멤버 변수 접두어  
__ 인터페이스 클래스와 구현 클래스  
자신의 기억력을 자랑하지 마라  
클래스 이름  
메서드 이름  
기발한 이름은 피하라  
한 개념에 한 단어를 사용하라  
말장난을 하지 마라  
해법 영역에서 가져온 이름을 사용하라  
문제 영역에서 가져온 이름을 사용하라  
의미 있는 맥락을 추가하라  
불필요한 맥락을 없애라  
마치면서

  

**3장 함수**  
작게 만들어라!  
__ 블록과 들여쓰기  
한 가지만 해라!  
__ 함수 내 섹션  
함수 당 추상화 수준은 하나로!  
__ 위에서 아래로 코드 읽기: 내려가기 규칙  
SWITCH 문  
서술적인 이름을 사용하라!  
함수 인수  
__ 많이 쓰는 단항 형식  
__ 플래그 인수  
__ 이항 함수  
__ 삼항 함수  
__ 인수 객체  
__ 인수 목록  
__ 동사와 키워드  
부수 효과를 일으키지 마라!  
__ 출력 인수  
명령과 조회를 분리하라!  
오류 코드보다 예외를 사용하라!  
__ TRY/CATCH 블록 뽑아내기  
__ 오류 처리도 한 가지 작업이다.  
__ ERROR.JAVA 의존성 자석  
반복하지 마라!  
구조적 프로그래밍  
함수를 어떻게 짜죠?  
결론  
참고 문헌

  

**4장 주석  
**주석은 나쁜 코드를 보완하지 못한다  
코드로 의도를 표현하라!  
좋은 주석  
__ 법적인 주석  
__ 정보를 제공하는 주석  
__ 의도를 설명하는 주석  
__ 의미를 명료하게 밝히는 주석  
__ 결과를 경고하는 주석  
__ TODO 주석  
__ 중요성을 강조하는 주석  
__ 공개 API에서 JAVADOCS  
나쁜 주석  
__ 주절거리는 주석  
__ 같은 이야기를 중복하는 주석  
__ 오해할 여지가 있는 주석  
__ 의무적으로 다는 주석  
__ 이력을 기록하는 주석  
__ 있으나 마나 한 주석  
__ 무서운 잡음  
__ 함수나 변수로 표현할 수 있다면 주석을 달지 마라  
__ 위치를 표시하는 주석  
__ 닫는 괄호에 다는 주석  
__ 공로를 돌리거나 저자를 표시하는 주석  
__ 주석으로 처리한 코드  
__ HTML 주석  
__ 전역 정보  
__ 너무 많은 정보  
__ 모호한 관계  
__ 함수 헤더  
__ 비공개 코드에서 JAVADOCS  
__ 예제  
참고 문헌

  

**5장 형식 맞추기**  
형식을 맞추는 목적  
적절한 행 길이를 유지하라  
__ 신문 기사처럼 작성하라  
__ 개념은 빈 행으로 분리하라  
__ 세로 밀집도  
__ 수직 거리  
__ 세로 순서  
가로 형식 맞추기  
__ 가로 공백과 밀집도  
__ 가로 정렬  
__ 들여쓰기  
가짜 범위  
팀 규칙  
밥 아저씨의 형식 규칙

  

**6장 객체와 자료 구조**  
자료 추상화  
자료/객체 비대칭  
디미터 법칙  
__ 기차 충돌  
__ 잡종 구조  
__ 구조체 감추기  
자료 전달 객체  
__ 활성 레코드  
결론  
참고 문헌

  

**7장 오류 처리**  
오류 코드보다 예외를 사용하라  
TRY-CATCH-FINALLY 문부터 작성하라  
미확인UNCHECKED 예외를 사용하라  
예외에 의미를 제공하라  
호출자를 고려해 예외 클래스를 정의하라  
정상 흐름을 정의하라  
NULL을 반환하지 마라  
NULL을 전달하지 마라  
결론  
참고문헌  

  

**8장 경계**  
외부 코드 사용하기  
경계 살피고 익히기  
LOG4J 익히기  
학습 테스트는 공짜 이상이다  
아직 존재하지 않는 코드를 사용하기  
깨끗한 경계  
참고 문헌

**  
**

**9장 단위 테스트**  
TDD 법칙 세 가지  
깨끗한 테스트 코드 유지하기  
__ 테스트는 유연성, 유지보수성, 재사용성을 제공한다  
깨끗한 테스트 코드  
__ 도메인에 특화된 테스트 언어  
__ 이중 표준  
테스트 당 ASSERT 하나  
__ 테스트 당 개념 하나  
F.I.R.S.T.  
결론  
참고 문헌

  

**10장 클래스**  
클래스 체계  
__ 캡슐화  
클래스는 작아야 한다!  
__ 단일 책임 원칙  
__ 응집도COHESION  
__ 응집도를 유지하면 작은 클래스 여럿이 나온다  
변경하기 쉬운 클래스  
__ 변경으로부터 격리  
참고 문헌

  

**11장 시스템**  
도시를 세운다면?  
시스템 제작과 시스템 사용을 분리하라  
__ MAIN 분리  
__ 팩토리  
__ 의존성 주입  
확장  
__ 횡단(CROSS-CUTTING) 관심사  
자바 프록시  
순수 자바 AOP 프레임워크  
ASPECTJ 관점  
테스트 주도 시스템 아키텍처 구축  
의사 결정을 최적화하라  
명백한 가치가 있을 때 표준을 현명하게 사용하라  
시스템은 도메인 특화 언어가 필요하다  
결론  
참고 문헌

  

**12장 창발성(創發性)**  
창발적 설계로 깔끔한 코드를 구현하자  
단순한 설계 규칙 1: 모든 테스트를 실행하라  
단순한 설계 규칙 2~4: 리팩터링  
중복을 없애라  
표현하라  
클래스와 메서드 수를 최소로 줄여라  
결론  
참고 문헌  

  

**13장 동시성**  
동시성이 필요한 이유?  
__ 미신과 오해  
난관  
동시성 방어 원칙  
__ 단일 책임 원칙SINGLE RESPONSIBILITY PRINCIPLE, SRP  
__ 따름 정리COROLLARY: 자료 범위를 제한하라  
__ 따름 정리: 자료 사본을 사용하라  
__ 따름 정리: 스레드는 가능한 독립적으로 구현하라  
라이브러리를 이해하라  
__ 스레드 환경에 안전한 컬렉션  
실행 모델을 이해하라  
__ 생산자-소비자PRODUCER-CONSUMER  
__ 읽기-쓰기READERS-WRITERS  
__ 식사하는 철학자들DINING PHILOSOPHERS  
동기화하는 메서드 사이에 존재하는 의존성을 이해하라  
동기화하는 부분을 작게 만들어라  
올바른 종료 코드는 구현하기 어렵다  
스레드 코드 테스트하기  
__ 말이 안 되는 실패는 잠정적인 스레드 문제로 취급하라  
__ 다중 스레드를 고려하지 않은 순차 코드부터 제대로 돌게 만들자  
__ 다중 스레드를 쓰는 코드 부분을 다양한 환경에 쉽게 끼워 넣을 수 있게 스레드 코드를  
구현하라  
__ 다중 스레드를 쓰는 코드 부분을 상황에 맞게 조율할 수 있게 작성하라  
__ 프로세서 수보다 많은 스레드를 돌려보라  
__ 다른 플랫폼에서 돌려보라  
__ 코드에 보조 코드INSTRUMENT를 넣어 돌려라. 강제로 실패를 일으키게 해보라  
__ 직접 구현하기  
__ 자동화  
결론  
참고 문헌

  

**14장 점진적인 개선**  
ARGS 구현  
__ 어떻게 짰느냐고?  
ARGS: 1차 초안  
__ 그래서 멈췄다  
__ 점진적으로 개선하다  
STRING 인수  
결론

  

**15장 JUNIT 들여다보기**  
JUNIT 프레임워크  
결론  

  

**16장 SERIALDATE 리팩터링  
**첫째, 돌려보자  
둘째, 고쳐보자  
결론  
참고 문헌  

  

**17장 냄새와 휴리스틱  
**주석  
__ C1: 부적절한 정보  
__ C2: 쓸모 없는 주석  
__ C3: 중복된 주석  
__ C4: 성의 없는 주석  
__ C5: 주석 처리된 코드  
환경  
__ E1: 여러 단계로 빌드해야 한다  
__ E2: 여러 단계로 테스트해야 한다  
함수  
__ F1: 너무 많은 인수  
__ F2: 출력 인수  
__ F3: 플래그 인수  
__ F4: 죽은 함수  
일반  
__ G1: 한 소스 파일에 여러 언어를 사용한다  
__ G2: 당연한 동작을 구현하지 않는다  
__ G3: 경계를 올바로 처리하지 않는다  
__ G4: 안전 절차 무시  
__ G5: 중복  
__ G6: 추상화 수준이 올바르지 못하다  
__ G7: 기초 클래스가 파생 클래스에 의존한다  
__ G8: 과도한 정보  
__ G9: 죽은 코드  
__ G10: 수직 분리  
__ G11: 일관성 부족  
__ G12: 잡동사니  
__ G13: 인위적 결합  
__ G14: 기능 욕심  
__ G15: 선택자 인수  
__ G16: 모호한 의도  
__ G17: 잘못 지운 책임  
__ G18: 부적절한 STATIC 함수  
__ G19: 서술적 변수  
__ G20: 이름과 기능이 일치하는 함수  
__ G21: 알고리즘을 이해하라  
__ G22: 논리적 의존성은 물리적으로 드러내라  
__ G23: IF/ELSE 혹은 SWITCH/CASE 문보다 다형성을 사용하라  
__ G24: 표준 표기법을 따르라  
__ G25: 매직 숫자는 명명된 상수로 교체하라  
__ G26: 정확하라  
__ G27: 관례보다 구조를 사용하라  
__ G28: 조건을 캡슐화하라  
__ G29: 부정 조건은 피하라  
__ G30: 함수는 한 가지만 해야 한다  
__ G31: 숨겨진 시간적인 결합  
__ G32: 일관성을 유지하라  
__ G33: 경계 조건을 캡슐화하라  
__ G34: 함수는 추상화 수준을 한 단계만 내려가야 한다  
__ G35: 설정 정보는 최상위 단계에 둬라  
__ G36: 추이적 탐색을 피하라  
자바  
__ J1: 긴 IMPORT 목록을 피하고 와일드카드를 사용하라  
__ J2: 상수는 상속하지 않는다  
__ J3: 상수 대 ENUM  
이름  
__ N1: 서술적인 이름을 사용하라  
__ N2: 적절한 추상화 수준에서 이름을 선택하라  
__ N3: 가능하다면 표준 명명법을 사용하  
__ N4: 명확한 이름  
__ N5: 긴 범위는 긴 이름을 사용하라  
__ N6: 인코딩을 피하라  
__ N7: 이름으로 부수 효과를 설명하라  
테스트  
__ T1: 불충분한 테스트  
__ T2: 커버리지 도구를 사용하라!  
__ T3: 사소한 테스트를 건너뛰지 마라  
__ T4: 무시한 테스트는 모호함을 뜻한다  
__ T5: 경계 조건을 테스트하라  
__ T6: 버그 주변은 철저히 테스트하라  
__ T7: 실패 패턴을 살펴라  
__ T8: 테스트 커버리지 패턴을 살펴라  
__ T9: 테스트는 빨라야 한다  
결론  
참고 문헌  
부록A 동시성 II  
클라이언트/서버 예제  
__ 서버  
__ 스레드 추가하기  
__ 서버 살펴보기  
__ 결론  
가능한 실행 경로  
__ 경로 수  
__ 가능한 순열 수 계산하기  
__ 심층 분석  
__ 결론  
라이브러리를 이해하라  
__ EXECUTOR 프레임워크  
__ 스레드를 차단하지 않는NON BLOCKING 방법  
__ 다중 스레드 환경에서 안전하지 않은 클래스  
메서드 사이에 존재하는 의존성을 조심하라  
__ 실패를 용인한다  
__ 클라이언트-기반 잠금  
__ 서버-기반 잠금  
작업 처리량 높이기  
__ 작업 처리량 계산 - 단일스레드 환경  
__ 작업 처리량 계산 - 다중 스레드 환경  
데드락  
__ 상호 배제MUTUAL EXCLUSION  
__ 잠금 & 대기LOCK & WAIT  
__ 선점 불가NO PREEMPTION  
__ 순환 대기CIRCULAR WAIT  
__ 상호 배제 조건 깨기  
__ 잠금 & 대기 조건 깨기  
__ 선점 불가 조건 깨기  
__ 순환 대기 조건 깨기  
__ 다중 스레드 코드 테스트  
__ 스레드 코드 테스트를 도와주는 도구

  


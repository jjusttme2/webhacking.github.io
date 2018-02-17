---
layout: post
title: "빠른 피드백과 속도, 크롬 브라우저 카나리아(Canary)"
description: ""
categories : etc
sub_categories : ""
date: 2015-12-08
tags: ['Canary', 'chrome', '카나리아', '크롬']
comments: true
share: true
---

  

  

  

  

브라우저의 역사는 참으로 복잡합니다. 버블 닷컴 전후에도 수많은 플랫폼들이 출현하였고 많은 종류의 브라우저들이 나타나고 사라졌습니다.(실제로
지금도 엄청나게 많은 브라우저가 있습니다.. 정말 엄청나게 많아요.) 그리고 두각을 나타낸 MS의 IE가 모든 시장의 점유율을 차지하고
있었습니다. IOS/OSX 체제의 애플 클라이언트는 Safari였습니다. 즉, 크게 보면 MS와 애플의 경쟁일 것 같은 싸움에서 구글이라는
친구가 혜성처럼나타나 MS&애플은 물론 브라우저시장의 모든 점유율을 가져갑니다. 모바일 플랫폼에서 구글의 안드로이드가 승승장구하면서 또 한번
모든 판세는 크롬이 매우 유리해졌습니다. 크롬은 직관적이고, 빠릅니다. 정말 빨라요.

  

> "처음에는 불가능할 것으로 생각했다. 하지만 크롬 46 버전을 일주일가량 써본 뒤 상당한 감명을 받을 수 있었다. 메모리 소비량은 무려
절반 가까이 줄었고, 그로기 상태인마냥 늘 굼뜨게 열렸던 탭은 이제 그 어느 때보다 경쾌하게 열린다. 배터리 수명도 부끄럽지 않은 수준으로
좋아졌고, 랩탑에 달린 발열팬도 지속적으로 돌지 않는다." \- The Next Web

  

크롬의 크롬카나리아버전, 크롬의 버전종류는 다양합니다.

아전화 버전, 개발자 버전, 베타 버전 우선적으로 이 세가지가 릴리즈 채널에서 업데이트가 거의 매달 매주 올라오고 있죠. 자세한 내용은
chromium을 참고하시면 좋습니다. 이 중 Canary build(카나리아버전)은 베탈 버전의 일종입니다. 기존 크롬과 별도의 경로로
설치되고 push방식으로 가장빠른 베타 버전 업데이트를 지원합니다.

  

최신 카나리아 버전(*v46)을 테스트해보았을때, 기존의 크롬과 퍼포먼스면에서 큰 차이를 보였습니다.

우선적으로 CPU와 메모리를 20~50% 적게 사용하는 것을 볼 수 있습니다. 항상 9gag나 이외 커뮤니티에서 크롬이 CPU랑 메모리 많이
잡아먹는다고 말했는데 앞으로는 그것도 옛말이될것같습니다. The Next Web은 크롬의 시스템 자원 소모를 줄이기 위해 구글이 다양한
물밑작업을 전개했다며, 누수차단을 비롯하여 **자바스크립트 성능(V8엔진) 개선**과 맥 플랫폼에 대한 그래픽 최적화가 이루어졌다고
설명합니다. 아울러 **시스템 메모리가 충분하지 않을 때 백그라운드에 탭을 '잠자기' 상태로 전환**하는 기술을 크롬 OS로부터 가져온
것으로 보인다고 덧 붙였습니다.

  

추가로 간단한 팁을 드리자면, 윈도우 환경에서 좀 더 퍼포먼스를 높이고 싶다면, 속성 대상값에 아래 구문을 추가합니다. 가속설정하셨다면
60fps근처까지 올라갑니다.

\--enable-accelerated-compositing --enable-gpu-rendering --enable-video-
layering --enable-webgl --enable-accelerated-2d-canvas --enable-fastback

  

  

  

  

![](/assets/images/posts/408/2737F741566640362A5CD9.PNG)

  

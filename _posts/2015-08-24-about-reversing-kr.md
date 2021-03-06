---
layout: post
title: "Reversing.kr,리버스엔지니어링이란?"
description: ""
categories : development
sub_categories : ""
date: 2015-08-24
tags: ['Reverse Engineering', 'writeup', '리버스엔지니어링', '리버싱', '문제풀이', '역공학', '정답', '풀이', '해답']
comments: true
share: true
---

리버스 엔지니어링(reverse engineering)에 관련된 사이트입니다.

문제 난이도는 초반에는 쉬운 편이나, 후반으로 갈수록 어려워지는 게임입니다. 지금 제 블로그에 연재중인
webhacking.kr/wowhacker하고 비슷하다 생각하면됩니다. 아래는 Reversing.kr 서비스의 스크린샷입니다. 참고하시면
도움되실것같아서 첨부합니다.

추가로 아래의 리버스엔지니어링에 대한 짧은소개를 적어놨습니다.

  

이번 포스팅 소개를 마치고, 다음 포스팅부터는 문제풀이를 할 계획입니다.

리버싱이외에도 webhacking.kr,wowhacker 등 웹해킹 관련 문제풀이도 연재하고있으니 참고하시길바라겠습니다.

  

  

![](/assets/images/posts/50/23506A4C55D9DECC0AFD15.PNG)

  

  

![](/assets/images/posts/50/2658944D55D9E3C7102B76.PNG)

  

  

![](/assets/images/posts/50/2753B84C55D9DECE062155.PNG)

  

![](/assets/images/posts/50/263F2B4C55D9DED01D9822.PNG)

  

![](/assets/images/posts/50/26302A4C55D9DED32B859B.PNG)

  

  

현재 문제 목록입니다.

Easy Crack Point: 100

Easy Keygen Point: 100

Easy Unpack Point: 100

Music Player Point: 150

Replace Point: 150

ImagePrc Point: 120

Position Point: 160

Direct3D FPS Point: 140

Ransomeware Point: 120

Twist1 Point: 190

East ELF Point: 100

Windowskernel Point: 220

AutohotKey1 Point: 130

CSHOP Point: 120

PEPassword Point: 150

Hatelntel Point: 150

SimpleVm Point: 240

AutoHotKey2 Point: 130

x64 Lotto Point: 140

CSHARP Point: 160

Flash Encrypt Point: 240

Metroapp Point: 190

CRC1 Point: 250

Multiplicative Point: 170

CRC2 Point: 280

Adventure Point: 250

CustomShell Point: 220

  

  

일단 이 게시물은 리버스 엔지니어링 막 입문하는 입문자라고 가정하고 작성하겟습니다.

리버스엔지니어링*(Reverse engineering)을 직역하자면, '역 공학'입니다.

개발자이외에 제 3자가 프로그램의 소스를 보고싶을때, 이럴때 리버스 엔지니어링을 합니다. 좀 더 명확하게 정의하자면 '사용자가 볼 수없는
프로그램의 소스코드를 어셈블리어로 변환하여 분석하는 것'

리버스 엔지니어링은 리버싱이라고도 부르며 물건이나 기계장치 혹은 시스템 등의 구조, 기능 동작 등을 분석하여

그 원리를 이해하며 단점을 보완하고 새로운 아이디어를 추가하는 일련의 작업을 나타냅니다.

  

  

**리버싱 방법**

리버싱 방법으로는 실행 파일의 분석 방법에 크게 두 가지 방법이 있는데 하나는 정적 분석과 또하나는 동적 분석입니다.

  

정적분석?

정적분석은 겉 모습을 관찰하고 디스어셈블러를 이용해 파일의 종류,크기,헤더,정보 디버깅 정보등의 다양한 내용을 확인 할 수있어 내부 코드와
구조를 확인합니다. 이런 과정은 동적 분석 할 때 좋은 참고자료가 됩니다.

  

동적분석?

파일을 실행 분석, 코드흐름과 메모리 상태, 파일, 레지스트리, 네트워크 등을 관찰하면서 프로그램 행위등을 분석합니다.

그리고 디버거를 이용해 프로그램 내부 구조와 동작원리를 분석합니다.

  

  

**디버거와 어셈블리 언어**

Hello World 같은 프로그램을 디버깅 하고자 할 때 개발 도구(Visual C++)을 이용해 C언어
소스코드(HellowWorld.cpp)를 빌드하면, 실행 파일(HelloWorld.exe)가 생성된다.

이 과정은 C언어 소스코드를 기계가 이해하기 쉬운 기계어(HellowWorld.exe)로 변환하는 것이며

이러한 기버계어는 사람이 알아보기 어렵기 때문에 사람들에게 친숙하게 보이기 위해 디버거(Debugger) 유틸리티를 사용한다.

디버거에 탑재된 디스 어셈블러(Disassembler) 모듈은 이 기계어를 어셈블리(Assembly)언어로 번역해서 보여주게 된다.

  

  

**리버스엔지니어링은 불법인가? 대한민국 법률에서는 아래와 같이 규정하고있다.**

  

제101조의4(프로그램코드역분석)

  

① 정당한 권한에 의하여 프로그램을 이용하는 자 또는 그의 허락을 받은 자는 호환에 필요한 정보를 쉽게 얻을 수 없고 그 획득이 불가피한
경우에는 해당 프로그램의 호환에 필요한 부분에 한하여 프로그램의 저작재산권자의 허락을 받지 아니하고 프로그램코드역분석을 할 수 있다.

  

② 제1항에 따른 프로그램코드역분석을 통하여 얻은 정보는 다음 각 호의 어느 하나에 해당하는 경우에는 이를 이용할 수 없다.

  

1\. 호환 목적 외의 다른 목적을 위하여 이용하거나 제3자에게 제공하는 경우

  

2\. 프로그램코드역분석의 대상이 되는 프로그램과 표현이 실질적으로 유사한 프로그램을 개발ㆍ제작ㆍ판매하거나 그 밖에 프로그램의 저작권을
침해하는 행위에 이용하는 경우

  

[본조신설 2009.4.22]

  

  

(출처 : 저작권법 일부개정 2013.12.30 [법률 제12137호, 시행 2014.07.01] 문화체육관광부 > 종합법률정보 법령)

  

대한민국에서는 리버스 엔지니어링의 상업적 이용에 대해 엄격하게 금지하고 있으나, 비상업적 범위 내에서는 일정 부분 허용되고 있음을 알 수
있다.

  

  


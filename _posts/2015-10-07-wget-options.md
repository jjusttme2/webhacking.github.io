---
layout: post
title: "wget 옵션정리"
description: ""
categories : development
sub_categories : ""
date: 2015-10-07
tags: []
comments: true
share: true
---

**사용법**

네트워크 상에서 데이터를 다운로드 받는다. 유저와의 상호작용이 필요 없으므로 - non interactive - 자동화된 다운로더 시스템을
구성할 수 있다.

  

wget [option]... [URL]...

  

**설명**

GNU wget은 상호작용을 필요로 하지 않는 다운로드 프로그램으로 Web으로 부터 파일들을 가져올 수 있다. HTTP, HTTPS, FTP
프로토콜을 지원하며, HTTp proxy에서 데이터를 가져올 수도 있다.

  

wget이 상호작용을 필요로 하지 않는다는 것은, 백그라운드 상태에서 작동할 수 있음을 의미한다. 사용자는 로그인을 하지 않은 상태에서도
cron이나 Damon을 이용 wget을 실행시킬 수 있다. 또한 cookie, Form action을 지원해서 사용자 액션을 시뮬레이션 할
수도 있다.

  

wget은 HTML과 XHTML 페이지를 다운로드 받아서 로컬 파일시스템에 저장한다. 이때 파일이름과 디렉토리 구조 까지를 그대로
로컬시스템에 구축함으로써, backup, mirror 사이트 구축등에 사용할 수도 있다. 또한 recursive 다운로드를 지원해서, 사이트
전체를 쉽게 내려받을 수 있다.

  

wget은 느리거나 불안정한 네트워크 환경에서도 매우 잘 작동하는 견고한 프로그램이다. 네트워크 환경이 불안해서 도중에 연결이 끊겼다면,
연결이 끊긴 시점부터 다운로드 받는 기능도 가지고 있다.

  

> Startup:

>

>  

>

> -V, --version display the version of Wget and exit.

>

> Wget의 버젼을 보여주고 종료한다.

>

>  

>

> -h, --help print this help.

>

> 도움말을 보여준다.

>

>  

>

> -b, --background go to background after startup.

>

> 시작한 후에 백그라운드에서 작동하도록 한다.

>

>  

>

> -e, --execute=COMMAND execute a `.wgetrc'-style command.

>

> .wgetrc를 읽어서 명령을 실행한다.

>

>  

>

>  

>

> Logging and input file:

>

>  

>

> -o, --output-file=FILE log messages to FILE.

>

> 메세지들을 파일로 남긴다.

>

>  

>

> -a, --append-output=FILE append messages to FILE.

>

> 메세지를 파일에 추가한다.

>

>  

>

> -d, --debug print debug output.

>

> 디버그 내용을 출력한다.

>

>  

>

> -q, --quiet quiet (no output).

>

> 메세지들을 표준출력하지 않는다.

>

>  

>

> -v, --verbose be verbose (this is the default).

>

> 다양함. 기본값입니다.

>

>  

>

> -nv, --non-verbose turn off verboseness, without being quiet.

>

> 기본옵션을 제거한다.

>

>  

>

> -i, --input-file=FILE download URLs found in FILE.

>

> 다운받을 URL주소를 파일에서 찾는다.

>

>  

>

> -F, --force-html treat input file as HTML.

>

> HTML 과 같은 파일을 입력값으로 취급한다.

>

>  

>

> -B, --base=URL prepends URL to relative links in -F -i file.

>

> \--sslcertfile=FILE optional client certificate.

>

> \--sslcertkey=KEYFILE optional keyfile for this certificate.

>

> 파일이나 링크에 관련한 URL, keyfile 을 사용하여 ssl을 증명한다.

>

>  

>

>  

>

> Download:

>

>  

>

> \--bind-address=ADDRESS bind to ADDRESS (hostname or IP) on local host.

>

> 로컬 호스트의 주소를 설정한다.

>

> -t, --tries=NUMBER set number of retries to NUMBER (0 unlimits).

>

> 설정한 숫자 만큼 다시 시도한다. 0은 무한대이다.

>

>  

>

> -O --output-document=FILE write documents to FILE.

>

> 문서를 파일로 쓴다.

>

>  

>

> -nc, --no-clobber don't clobber existing files or use .# suffixes.

>

> 지나치게 파일이나 사용을 종료 하지 않는다.# 첨가.

>

>  

>

> -c, --continue resume getting a partially-downloaded file.

>

> 부분적으로 파일을 이어 받을 수 있게 한다.

>

> \--dot-style=STYLE set retrieval display style.

>

> 복구 스타일로 설정한다.

>

>  

>

> -N, --timestamping don't re-retrieve files unless newer than local.

>

> 로컬에 있는 것보다 새롭지 않으면 파일을 다시 받지 않는다.

>

>  

>

> -S, --server-response print server response.

>

> 서버의 응답을 출력한다.

>

> \--spider don't download anything.

>

> 다운로드를 하지 않는다.

>

>  

>

> -T, --timeout=SECONDS set the read timeout to SECONDS.

>

> 종료될 시간을 초단위로 설정한다.

>

>  

>

> -w, --wait=SECONDS wait SECONDS between retrievals.

>

> \--waitretry=SECONDS wait 1...SECONDS between retries of a retrieval.

>

> 검색하고 기다리는 시간을 초단위로 설정한다.

>

>  

>

> -Y, --proxy=on/off turn proxy on or off.

>

> 프락시 모드를 켜고 끈다.

>

>  

>

> -Q, --quota=NUMBER set retrieval quota to NUMBER.

>

> 숫자 만큼 분담하도록 셋팅한다.

>

>  

>

> Directories: 디렉토리 관리

>

> -nd --no-directories don't create directories.

>

> 디렉토리를 생성하지 않는다.

>

>  

>

> -x, --force-directories force creation of directories.

>

> 디렉토리를 강제로 생성한다.

>

>  

>

> -nH, --no-host-directories don't create host directories.

>

> 호스트 이름의 디렉토리를 생성하지 않는다.

>

>  

>

> -P, --directory-prefix=PREFIX save files to PREFIX/...

>

> 지정한 곳에 파일을 저장한다...

>

> \--cut-dirs=NUMBER ignore NUMBER remote directory components.

>

> 디렉토리 구성요소를 숫자많큼 지우고 무시한다.

>

>  

>

>  

>

> HTTP options:

>

>  

>

> \--http-user=USER set http user to USER.

>

> http 유저의 아이디를 설정한다.

>

> \--http-passwd=PASS set http password to PASS.

>

> http의 패스워드의 암호를 설정한다.

>

>  

>

> -C, --cache=on/off (dis)allow server-cached data (normally allowed).

>

> 서버측의 캐쉬 데이터를 허용하는게 보통이나, 제거 할수도 있다.

>

>  

>

> -E, --html-extension save all text/html documents with .html extension.

>

> 모든 text/html형식의 문서들과 .html 파일을 같이 확장해서 저장한다.

>

> \--ignore-length ignore `Content-Length' header field.

>

> Content-Length라는 헤더의 부분은 무시한다.

>

> \--header=STRING insert STRING among the headers.

>

> 헤더들간의 사이의 글씨를 추가한다.

>

> \--proxy-user=USER set USER as proxy username.

>

> 프락시의 유저이름을 설정한다.

>

> \--proxy-passwd=PASS set PASS as proxy password.

>

> 프락시 패스워드를 설정한다.

>

> \--referer=URL include `Referer: URL' header in HTTP request.

>

> http가 요청하는 헤더에서 URL참조한 것을 추가한다.

>

>  

>

> -s, --save-headers save the HTTP headers to file.

>

> 파일에서 HTTP 헤더를 저장한다.

>

>  

>

> -U, --user-agent=AGENT identify as AGENT instead of Wget/VERSION.

>

> Wget/Version 보다 나은 에이전트를 조사한다.

>

> \--no-http-keep-alive disable HTTP keep-alive (persistent connections).

>

> HTTP 의 Keep-alive 제거 (끈질기게 연결해준다.)

>

> \--cookies=off don't use cookies.

>

> 쿠키사용 안함.

>

> \--load-cookies=FILE load cookies from FILE before session.

>

> 쿠키를 세션전의 파일에서 불러온다.

>

> \--save-cookies=FILE save cookies to FILE after session.

>

> 세션이후의 파일에서 쿠키를 저장한다.

>

>  

>

>  

>

> FTP options:

>

>  

>

> -nr, --dont-remove-listing don't remove `.listing' files.

>

> .listing 이라는 파일에 있는건 지우지 않는다.

>

>  

>

> -g, --glob=on/off turn file name globbing on or off.

>

> 하나의 파일 이름으로 하는지를 켜고 끈다.

>

> \--passive-ftp use the "passive" transfer mode.

>

> 반응하지 않는 전송모드를 사용한다.

>

> \--retr-symlinks when recursing, get linked-to files (not dirs).

>

> 복구중에 링크가 걸린 파일을 가져온다.(디렉토리는 아니다.)

>

>  

>

>  

>

> Recursive retrieval:

>

>  

>

> -r, --recursive recursive web-suck -- use with care!

>

> 웹을 빨아들이는 것을 반복한다. 조심해서 사용하라!

>

>  

>

> -l, --level=NUMBER maximum recursion depth (inf or 0 for infinite).

>

> 최대한 반복한다. 정도는 0 으로하면 헤아릴수 없이 반복한다.

>

> \--delete-after delete files locally after downloading them.

>

> 그것들을 다 받으면 로컬의 파일들을 삭제 한다.

>

>  

>

> -k, --convert-links convert non-relative links to relative.

>

> 관계 없는 링크에서 관계있는 것으로 변환해준다.

>

>  

>

> -K, --backup-converted before converting file X, back up as X.orig.

>

> 변환하기 전에 X라는 파일을 X.orig 라는 파일로 백업해준다.

>

>  

>

> -m, --mirror shortcut option equivalent to -r -N -l inf -nr.

>

> -r -N -l inf -nr 이라는 옵션과 동일한 옵션을 손쉽게 사용할 수 있다.

>

>  

>

> -p, --page-requisites get all images, etc. needed to display HTML page.

>

> 모든 이미지와 기타 HTML 페이지가 표현 가능한 모든것을 가져온다.

>

>  

>

>  

>

> Recursive accept/reject:

>

>  

>

> -A, --accept=LIST comma-separated list of accepted extensions.

>

> 받아들일 것을 확장하기 위해 콤마로 분리된 리스트로 받아들인다.

>

>  

>

> -R, --reject=LIST comma-separated list of rejected extensions.

>

> 거절할 것을 확장하기 위해 콤마로 분리된 리스트로 받아들인다.

>

>  

>

> -D, --domains=LIST comma-separated list of accepted domains.

>

> 받아들일 도메인을 콤마로 분리된 리스트로 받아들인다.

>

> \--exclude-domains=LIST comma-separated list of rejected domains.

>

> 거절할 도메인을 콤마로 분리된 리스트로 받아들인다.

>

> \--follow-ftp follow FTP links from HTML documents.

>

> HTML 문서에서의 FTP 링크를 따라간다.

>

> \--follow-tags=LIST comma-separated list of followed HTML tags.

>

> HTML 태그에서 따라갈 콤마로 분리된 리스트로 받아들인다.

>

>  

>

> -G, --ignore-tags=LIST comma-separated list of ignored HTML tags.

>

> 무시할 HTML 태그를 콤마로 분리된 리스트로 받아들인다.

>

>  

>

> -H, --span-hosts go to foreign hosts when recursive.

>

> 반복할때에 다른 호스트로도 가게 한다.

>

>  

>

> -L, --relative follow relative links only.

>

> 관계있는 링크만 따라간다.

>

>  

>

> -I, --include-directories=LIST list of allowed directories.

>

> 허용할 디렉토리를 리스트로 받아들인다.

>

>  

>

> -X, --exclude-directories=LIST list of excluded directories.

>

> 차단할 디렉토리를 리스트로 받아들인다.

>

>  

>

> -nh, --no-host-lookup don't DNS-lookup hosts.

>

> DNS의 검색 호스트를 사용하지 않는다.

>

>  

>

> -np, --no-parent don't ascend to the parent directory.

>

> 상위 디렉토리를 올라가지 않도록 한다.

  


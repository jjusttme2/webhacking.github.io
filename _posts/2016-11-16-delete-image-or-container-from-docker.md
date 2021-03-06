---
layout: post
title: "Docker - 이미지 또는 컨테이너 삭제"
description: ""
categories : development
sub_categories : ""
date: 2016-11-16
tags: ['CommandLine', 'DEL', 'docker', 'docker 이미지', 'reference', '도커', '명령어', '삭제', '컨테이너']
comments: true
share: true
---

**도커 공식문서 참고**

  * https://docs.docker.com/engine/reference/commandline/rm/  
  

`docker images` 를 통하여 현재 도커 이미지 리스트를 출력합니다.

    root@ip-172-31-18-246:/home/docker# docker images
    REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
    hax0r/truckup       latest              e644e5a96830        10 hours ago        103.6 MB
    registry            latest              5c929a8b587a        4 weeks ago         33.27 MB
    jenkins             latest              1ee9a7400f7b        5 weeks ago         711.8 MB
    ubuntu              latest              426844ebf7f7        7 weeks ago         127 MB
    ubuntu              12.04               cfc2576a1531        7 weeks ago         103.6 MB

  

ubuntu:12.04 를 삭제하고자 한다면 아래 명령어를 사용하면된다.

docker rmi ubuntu:12.04

  

docker rmi <이미지 이름 또는 이미지 ID>:<태그>

태그는 선택사항이며 선택하지않았을경우 이미지 이름에 해당하는 모든 이미지가 삭제됩니다.

  

아래는 출력결과입니다.

    root@ip-172-31-18-246:/home/docker# docker rmi ubuntu:12.04
    Untagged: ubuntu:12.04
    Deleted: cfc2576a1531a99adbe3c48da10618750a0b701ea4d75626b4d6bd5df0242586
    Deleted: 13c47942ea6e885bcd0c9dbd8b16d93214a8f0bdc351fc192fb0af3ac6aebb19
    Deleted: 8cc279ff65569acc942246f9b44cca92aa96572aaf252c5f6f7ef1866471e042
    Deleted: df24de65c9770fbfa543d447a9a91072d408e46435f9acd7cff9749df5e34b2e
    Deleted: 5e12b5525fb8f83c00ae603ef2d0686e96d8699ec4c7e9974e3e84ac398346cb
    Deleted: 94bf329347296d3587998d7ed338a87169770d6884fef92fa7d55043e03569e4

  
컨테이너를 삭제한다고 한다면 docker rm <컨테이너 이름>를 사용하면 됩니다.

정지된 모든 컨테이너를 삭제하려면 해당 명령어를 사용하면 됩니다.

  

    $ docker rm $(docker ps -a -q)

  


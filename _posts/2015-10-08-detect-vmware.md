---
layout: post
title: "Vmware 감지"
description: ""
categories : development
sub_categories : ""
date: 2015-10-08
tags: []
comments: true
share: true
---


    bool IsInsideVMWare()
    
    {
    
    bool rc = true;
    
    __try
    
    {
    
    __asm
    
    {
    
    push edx
    
    push ecx
    
    push ebx
    
    mov eax, 'VMXh'
    
    mov ebx, 0 // any value but not the MAGIC VALUE
    
    mov ecx, 10 // get VMWare version
    
    mov edx, 'VX' // port number
    
    in eax, dx // read port
    
    // on return EAX returns the VERSION
    
    cmp ebx, 'VMXh' // is it a reply from VMWare?
    
    setz [rc] // set return value
    
    pop ebx
    
    pop ecx
    
    pop edx
    
    }
    
    }
    
    __except(EXCEPTION_EXECUTE_HANDLER)
    
    {
    
    rc = false;
    
    }
    
    return rc;
    
    }


  


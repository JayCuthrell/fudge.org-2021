---
comments: true
date: 2010-05-17 11:35:34
layout: post
slug: blackberry-spf-records
cover: http://farm3.static.flickr.com/2271/2115303225_1688c64d8b_m.jpg
title: Blackberry SPF Records
wordpress_id: 34219
categories:
- Consulting Days
- random
tags:
- blackberry
- dns
- email
- spf
---

If you use Blackberry Internet Service and have seen delivery issues related to SPF records when using your own domain name or company domain name you should consider the following suggestions:
  
[Firewall and connection requirements for the BlackBerry Internet Service](http://www.blackberry.com/btsc/search.do?cmd=displayKC&docType=kc&externalId=KB11036&sliceId=SAL_Public&dialogID=119218117&stateId=1%200%20119212726)
  
[Easy SPF Wizard](http://www.spfwizard.net/)
  
Example:
`
$ host -t txt somedomainyouareusing.com
somedomainyouareusing.com text "v=spf1 a:smtp01.bis.na.blackberry.com a:smtp02.bis.na.blackberry.com a:smtp03.bis.na.blackberry.com a:smtp04.bis.na.blackberry.com a:smtp05.bis.na.blackberry.com ~all"
`


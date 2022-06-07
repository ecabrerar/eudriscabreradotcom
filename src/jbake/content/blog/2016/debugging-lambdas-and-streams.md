title=Debugging Lambdas and Streams [EN]
date=2016-12-27
type=post
tags=debugging, lambda expressions, stream api,javase8
status=published
author=Eudris Cabrera
description=Debugging Lambdas and Streams [EN]
shareimage=images/blog/2016/debugging.png
~~~~~~
Streams provide a high level abstraction. This is good for making code clear and easy to understand, but it is bad for debugging. But the __peek()__ method can be used to find what is happening between methods.

A simple example :

```java
List<String> list = Arrays.asList(
"BarCamp", "MongoDB", "10Gen", "TokuMX", "Nagios", "PUCMM", "Ruby", "JSON",
"JSON");

List<String> newList1 = list
.stream()
.filter(s -> (s.length() % 2)==1)
.map(String::toLowerCase)
.peek(System.out::println)
.collect(Collectors.toList());
```

![](/images/blog/2016/debugging.png)


Also, you can use the peek method to put a __breakpoint__ while you are debugging with your favorite IDE.

```java
List<String> newList1 = list
.stream()
.filter(s -> (s.length() % 2)==1)
.map(String::toLowerCase)
.peek(s -> s.toString())
.collect(Collectors.toList());
```
The __breakpoint__ must be set in the peek method.

![](/images/blog/2016/debugging-01.png)


![](/images/blog/2016/debugging-01.png)

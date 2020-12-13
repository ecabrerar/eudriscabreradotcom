title=The problem with anonymous lambda based functions [EN]
date=2016-08-26
type=post
tags=debugging, lambda expressions, stream api,javase8
status=published
author=Eudris Cabrera
description=The problem with anonymous lambda based functions [EN]
~~~~~~

I was practicing an algorithmic concept called Recursion. At first, I write a recursive method for calculating
Factorial.

A simple solution:
```java

import java.util.Scanner;
public class RecursionFactorial {
 public static void main(String[] args) {
  try (Scanner in = new Scanner(System.in)) {
  int n = in.nextInt();
    if(n >=2 && n <=20){
      System.out.println(factorial(n));
    }
  }
}
public static int factorial(int n){
  if(n == 1){
    return 1;
  }else {
    return n * factorial(n-1);
    }
  }
}
```
The above code satisfied the requirements, but I try to do the same using anonymous lambda based functions
and the problem began.

```java
import java.util.Scanner;
import java.util.function.Function;
public class RecursionFactorialJava8 {
public static void main(String[] args) {
  try (Scanner in = new Scanner(System.in)) {
  int n = in.nextInt();
  Function<Integer, Integer> factorial = x -> x==1? x : x * factorial.apply(x - 1);
  if (n >= 2 && n <= 20) {
    System.out.println(factorial.apply(n));
  }
  }
  }
}
```
However, this will not work and will produce a compiler error:

__The local variable factorial may not have been initialized__


Lambdas are most often used to define anonymous functions. A recursive function must call itself. An
anonymous lambda can’t call itself since it has no name, so it can’t be recursive.
The problem above is that we are referencing a variable while initializing it. So it is not yet initialized.
After spending a lot time trying to resolve the above error, I found the solution here. https://
pysaumont.github.io/2014/09/01/Recursive-lambdas-in-Java-8.html.

```java
import java.util.Scanner;
import java.util.function.Function;
public class RecursionFactorialJava8 {
  static final Function<Integer, Integer> factorial = x -> x==1? x : x *
  RecursionFactorialJava8.factorial.apply(x - 1);
  public static void main(String[] args) {
  try (Scanner in = new Scanner(System.in)) {
      int n = in.nextInt();
    if (n >= 2 && n <= 20) {
      System.out.println(factorial.apply(n));
    }
    }
  }
}
```
I just want to let you know about some problems with recursive and Lambdas in Java 8

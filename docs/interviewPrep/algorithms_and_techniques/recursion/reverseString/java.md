# Java Example

## Recursion

```java
public class MyClass {
  public static void main(String args[]) {
    String test = "abcdef";

    System.out.println(reverseStr(test));
  }

  public static String reverseStr(String s) {
    if (s.isEmpty()) {
        return s;
    }
    return reverseStr(s.substring(1)) + s.charAt(0);
  }
}
```

## Iteration

```java
public class MyClass {
  public static void main(String args[]) {
    String test = "abcdef";

    System.out.println(reverseStr(test));
  }

  public static String reverseStr2(String s) {
    String res = "";

    for (int i=0; i<s.length(); i++) {
      res = s.charAt(i) + res;
    }
    return res;
  }
}
```

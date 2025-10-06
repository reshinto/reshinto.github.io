
# Bit Manipulation

## Bitwise Operators

- `&`: AND
- `|`: OR
- `^`: XOR
- `~`: NOT
- `<<`: Binary Left Shift
- `>>`: Binary Right Shift
- `>>>`: Zero Fill Right Shift

## Bit Facts & Tricks

```
  x ^ 0s = x      x & 0s = 0      x | 0s = x
  x ^ 1s = ~x     x & 1s = x      x | 1s = 1s
   x ^ x = 0       x & x = x       x | x = x
 ```

## Two's Complement

- Computers typically store integers in two's complement representation.
- Range of unsigned numbers that can be stored with `N` bits is `0` - `+(2^N - 1)`.
- Range of signed numbers that can be stored with `N` bits in two's complement representation is `-(2^(N - 1))` - `+(2^(N - 1) - 1)`.
- Binary representation of `-K` is `concat(1, bin(2^(N - 1) - K))`. Another way to compute it is to flip the bits of the binary representation of `K`, add `1` and then prepend the sign bit `1`.

## Arithmetic vs. Logical Shift

- In an arithmetic right shift (`>>`), the bits are shifted and the sign bit is put in the MSB.
- In a logical right shift (`>>>`), the bits are shifted and a `0` is put in the MSB.

## Common Bit Tasks

### Get Bit

```java
boolean getBit(int num, int i) &#123;
    return ((num & (1 &lt;&lt; i)) != 0);
&#125;
```

### Set Bit

```java
int setBit(int num, int i) &#123;
    return num | (1 &lt;&lt; i);
&#125;
```

### Clear Bit(s)

```java
int clearBit(int num, int i) &#123;
    return num & ~(1 &lt;&lt; i);
&#125;

int clearBitsMSBThroughI(int num, int i) &#123;
    int mask = (1 &lt;&lt; i) - 1;
    return num & mask;
&#125;

int clearBitsIThrough0(int num, int i) &#123;
    int mask = (-1 &lt;&lt; (i + 1));
    return num & mask;
&#125;
```

### Toggle Bit

```java
int toggleBit(int num, int i) &#123;
    return num ^ (1 &lt;&lt; i);
&#125;
```

### Update Bit

```java
int updateBit(int num, int i, boolean setBit) &#123;
    int value = setBit ? 1 : 0;
    int mask = ~(1 &lt;&lt; i);
    return (num & mask) | (value &lt;&lt; i);
&#125;
```

### Multiply/Divide by 2<sup>n</sup>

```java
num = num &lt;&lt; n;   // multiply
num = num &gt;&gt; n;   // divide
```

# Logarithm

- a mathematical concept that's widely used in computer science and that's defined by the following equation
  - log&lt;sub&gt;b&lt;/sub&gt;&lt;sup&gt;x&lt;/sup&gt; if and only if b&lt;sup&gt;y&lt;/sup&gt; = x
  - in the context of coding interviews, logarithm is used to describe the complexity analysis of algorithms
    - its usage always implies a logarithm of base 2
    - in other words in the context of coding interviews, it is defined by
      - log (n) = y if and only if 2&lt;sup&gt;y&lt;/sup&gt; = n
    - if an algorithm has a logarithmic time complexity O log (n), where n is the size of the input
      - then whenever the algorithm's input doubles in size (whenever n doubles)
        - the number of operations needed to complete the algorithm only increases by 1 unit
    - e.g.: input size of 1,000 will take roughly 10 operations to complete since 2&lt;sup&gt;10&lt;/sup&gt; ~= 1,000

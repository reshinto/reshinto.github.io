# How to compile and run files of different languages in the terminal

# Run C++ files
## compile .cpp & .h files together
### syntax: -Wall: check for errors
* -o: is an output file
* output file name: zzz
* .cpp and .h files
* old method of building
&gt; g++ -Wall -o zzz xxx.cpp abc.h
* new method of building
&gt; g++ -Wall -o zzz xxx.cpp
* run built file
&gt; ./zzz

# Run C files
## same as above but add -x c when compiling
&gt; g++ -x c -Wall -o zzz xxx.c abc.h
## OR
&gt; clang -o zzz xxx.c abc.h
## OR
&gt; make xxx
### If .h header file is in another directory need to use -I
&gt; g++ -I /fullpath/myproject xxx.cpp /fullpath/myproject/header/yyy.h
### use ./ to run file
&gt; ./zzz
### if no output file name is defined earlier
* ouput file will automatically create an a.out file
* to run
&gt; ./a.out

# Run C# files
* Need to have Mono platform to compile and run code
  * if using MacOS
    &gt; brew install mono
## compile file
&gt; mcs xxx.cs
  * xxx.exe will be created
## run file
&gt; mono xxx.exe

# Run Java files
* xxx.java file name must be the same as public class name
* note: it is case sensitive
## compile xxx.java file with javac in terminal
&gt; javac xxx.java
## java class will be created, run class file with java
&gt; java xxx
## java 11 onwards, class will not be created, javac not required
- compile and run java file
&gt; java xxx.java
## compile and run at the same time
javac xxx.java && java xxx
## using package
- e.g.: Main.java
```java
package com.example.java;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Java!");
  }
}
```
### at root directory of project
#### compile file
&gt; javac ./com/example/java/Main.java
#### run file
&gt; java com.example.java.Main
## using modularity
- compile
  &gt; javac -d ./mods/ --module-source-path src $(find src -name "*.java")
- run without optional dependencies
  &gt; java --module-path mods/ -m com.domain.module/com.domain.module.Main
- run with optional dependencies
  &gt; java --module-path mods/ --add-modules com.domain.optionalmodule -m com.domain.module/com.domain.module.Main
# Run Typescript files
## run typescript files without compiling with ts-node in terminal (no javascript created)
&gt; ts-node xxx.ts
## compile xxx.ts file with tsc in terminal
&gt; tsc ./xxx.ts
## javascript file will be created, run file with node
&gt; node xxx.js

# Run Javascript files
## run with nodeJS
&gt; node filename.js
### open nodejs shell
&gt; node

# Run Python files
## run with python 2
&gt; python2 filename.py
### open python 2 shell
&gt; python2
## run with python 3
&gt; python3 filename.py
### open python 3 shell
&gt; python3

# Run Ruby files
&gt; ruby filename.rb
## open ruby shell
&gt; irb

# Run assembly files
* nasm compiler must be installed
  * if using MacOS
    &gt; brew install nasm
## compile & run x86 32 bit files
### compile
  &gt; nasm -f macho xxx32.asm && ld -macosx_version_min 10.7.0 -o xxx32 xxx32.o
### run
  &gt; ./xxx32
## compile & run x86_64 64 bit files
### compile
  &gt; nasm -f macho64 xxx64.asm && ld -macosx_version_min 10.7.0 -lSystem -o xxx64 xxx64.o
### run
  &gt; ./xxx64

# Run Groovy
## Open GroovyShell to use the dynamic interpreter on the terminal
- in the command line type ```groovysh```
## Open GroovyConsole to open an external UI interface editor
- in the command line type ```groovyConsole```
## Execute groovy code on the command line
- ```groovy -e "println 'Hello, World!'"```
## Run groovy file
- ```groovy hello.groovy``` or ```groovy hello```

# Compile Latex file
&gt; xelatex filename.tex

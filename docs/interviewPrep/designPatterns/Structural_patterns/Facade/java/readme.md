# Java Example

- facade/VideoConversionFacade.java

  ```java
  package refactoring_guru.facade.example.facade;

  import refactoring_guru.facade.example.some_complex_media_library.*;

  import java.io.File;

  public class VideoConversionFacade {
      public File convertVideo(String fileName, String format) {
          System.out.println("VideoConversionFacade: conversion started.");
          VideoFile file = new VideoFile(fileName);
          Codec sourceCodec = CodecFactory.extract(file);
          Codec destinationCodec;
          if (format.equals("mp4")) {
              destinationCodec = new OggCompressionCodec();
          } else {
              destinationCodec = new MPEG4CompressionCodec();
          }
          VideoFile buffer = BitrateReader.read(file, sourceCodec);
          VideoFile intermediateResult = BitrateReader.convert(buffer, destinationCodec);
          File result = (new AudioMixer()).fix(intermediateResult);
          System.out.println("VideoConversionFacade: conversion completed.");
          return result;
      }
  }
  ```

- someComplexMediaLibrary

  - someComplexMediaLibrary/AudioMixer.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    import java.io.File;

    public class AudioMixer {
        public File fix(VideoFile result){
            System.out.println("AudioMixer: fixing audio...");
            return new File("tmp");
        }
    }
    ```

  - someComplexMediaLibrary/BitrateReader.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public class BitrateReader {
        public static VideoFile read(VideoFile file, Codec codec) {
            System.out.println("BitrateReader: reading file...");
            return file;
        }

        public static VideoFile convert(VideoFile buffer, Codec codec) {
            System.out.println("BitrateReader: writing file...");
            return buffer;
        }
    }
    ```

  - someComplexMediaLibrary/Codec.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public interface Codec {
    }
    ```

  - someComplexMediaLibrary/CodecFactory.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public class CodecFactory {
        public static Codec extract(VideoFile file) {
            String type = file.getCodecType();
            if (type.equals("mp4")) {
                System.out.println("CodecFactory: extracting mpeg audio...");
                return new MPEG4CompressionCodec();
            }
            else {
                System.out.println("CodecFactory: extracting ogg audio...");
                return new OggCompressionCodec();
            }
        }
    }
    ```

  - someComplexMediaLibrary/MPEG4CompressionCodec.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public class MPEG4CompressionCodec implements Codec {
        public String type = "mp4";

    }
    ```

  - someComplexMediaLibrary/OggCompressionCodec.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public class OggCompressionCodec implements Codec {
        public String type = "ogg";
    }
    ```

  - someComplexMediaLibrary/VideoFile.java

    ```java
    package refactoring_guru.facade.example.some_complex_media_library;

    public class VideoFile {
        private String name;
        private String codecType;

        public VideoFile(String name) {
            this.name = name;
            this.codecType = name.substring(name.indexOf(".") + 1);
        }

        public String getCodecType() {
            return codecType;
        }

        public String getName() {
            return name;
        }
    }
    ```

- Demo.java

  ```java
  package refactoring_guru.facade.example;

  import refactoring_guru.facade.example.facade.VideoConversionFacade;

  import java.io.File;

  public class Demo {
      public static void main(String[] args) {
          VideoConversionFacade converter = new VideoConversionFacade();
          File mp4Video = converter.convertVideo("youtubevideo.ogg", "mp4");
          // ...
      }
  }
  ```

  ```
  VideoConversionFacade: conversion started.
  CodecFactory: extracting ogg audio...
  BitrateReader: reading file...
  BitrateReader: writing file...
  AudioMixer: fixing audio...
  VideoConversionFacade: conversion completed.
  ```

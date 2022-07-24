"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2781],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(g,r(r({ref:n},s),{},{components:a})):t.createElement(g,r({ref:n},s))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var p=2;p<i;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1955:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=a(83117),o=(a(67294),a(3905));const i={},r="Java Example",d={unversionedId:"interviewPrep/designPatterns/Structural_patterns/Proxy/java/readme",id:"interviewPrep/designPatterns/Structural_patterns/Proxy/java/readme",title:"Java Example",description:"- downloader/YouTubeDownloader.java",source:"@site/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/java/readme.md",sourceDirName:"interviewPrep/designPatterns/Structural_patterns/Proxy/java",slug:"/interviewPrep/designPatterns/Structural_patterns/Proxy/java/",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/java/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/java/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/go/"},next:{title:"JavaScript Example",permalink:"/docs/interviewPrep/designPatterns/Structural_patterns/Proxy/javascript/"}},l={},p=[],s={toc:p};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"java-example"},"Java Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"downloader/YouTubeDownloader.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.proxy.example.downloader;\n\nimport refactoring_guru.proxy.example.some_cool_media_library.ThirdPartyYouTubeLib;\nimport refactoring_guru.proxy.example.some_cool_media_library.Video;\n\nimport java.util.HashMap;\n\npublic class YouTubeDownloader {\n    private ThirdPartyYouTubeLib api;\n\n    public YouTubeDownloader(ThirdPartyYouTubeLib api) {\n        this.api = api;\n    }\n\n    public void renderVideoPage(String videoId) {\n        Video video = api.getVideo(videoId);\n        System.out.println("\\n-------------------------------");\n        System.out.println("Video page (imagine fancy HTML)");\n        System.out.println("ID: " + video.id);\n        System.out.println("Title: " + video.title);\n        System.out.println("Video: " + video.data);\n        System.out.println("-------------------------------\\n");\n    }\n\n    public void renderPopularVideos() {\n        HashMap<String, Video> list = api.popularVideos();\n        System.out.println("\\n-------------------------------");\n        System.out.println("Most popular videos on YouTube (imagine fancy HTML)");\n        for (Video video : list.values()) {\n            System.out.println("ID: " + video.id + " / Title: " + video.title);\n        }\n        System.out.println("-------------------------------\\n");\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"proxy/YouTubeCacheProxy.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.proxy.example.proxy;\n\nimport refactoring_guru.proxy.example.some_cool_media_library.ThirdPartyYouTubeClass;\nimport refactoring_guru.proxy.example.some_cool_media_library.ThirdPartyYouTubeLib;\nimport refactoring_guru.proxy.example.some_cool_media_library.Video;\n\nimport java.util.HashMap;\n\npublic class YouTubeCacheProxy implements ThirdPartyYouTubeLib {\n    private ThirdPartyYouTubeLib youtubeService;\n    private HashMap<String, Video> cachePopular = new HashMap<String, Video>();\n    private HashMap<String, Video> cacheAll = new HashMap<String, Video>();\n\n    public YouTubeCacheProxy() {\n        this.youtubeService = new ThirdPartyYouTubeClass();\n    }\n\n    @Override\n    public HashMap<String, Video> popularVideos() {\n        if (cachePopular.isEmpty()) {\n            cachePopular = youtubeService.popularVideos();\n        } else {\n            System.out.println("Retrieved list from cache.");\n        }\n        return cachePopular;\n    }\n\n    @Override\n    public Video getVideo(String videoId) {\n        Video video = cacheAll.get(videoId);\n        if (video == null) {\n            video = youtubeService.getVideo(videoId);\n            cacheAll.put(videoId, video);\n        } else {\n            System.out.println("Retrieved video \'" + videoId + "\' from cache.");\n        }\n        return video;\n    }\n\n    public void reset() {\n        cachePopular.clear();\n        cacheAll.clear();\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some_cool_media_library"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some_cool_media_library/ThirdPartyYouTubeClass.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.proxy.example.some_cool_media_library;\n\nimport java.util.HashMap;\n\npublic class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {\n\n    @Override\n    public HashMap<String, Video> popularVideos() {\n        connectToServer("http://www.youtube.com");\n        return getRandomVideos();\n    }\n\n    @Override\n    public Video getVideo(String videoId) {\n        connectToServer("http://www.youtube.com/" + videoId);\n        return getSomeVideo(videoId);\n    }\n\n    // -----------------------------------------------------------------------\n    // Fake methods to simulate network activity. They as slow as a real life.\n\n    private int random(int min, int max) {\n        return min + (int) (Math.random() * ((max - min) + 1));\n    }\n\n    private void experienceNetworkLatency() {\n        int randomLatency = random(5, 10);\n        for (int i = 0; i < randomLatency; i++) {\n            try {\n                Thread.sleep(100);\n            } catch (InterruptedException ex) {\n                ex.printStackTrace();\n            }\n        }\n    }\n\n    private void connectToServer(String server) {\n        System.out.print("Connecting to " + server + "... ");\n        experienceNetworkLatency();\n        System.out.print("Connected!" + "\\n");\n    }\n\n    private HashMap<String, Video> getRandomVideos() {\n        System.out.print("Downloading populars... ");\n\n        experienceNetworkLatency();\n        HashMap<String, Video> hmap = new HashMap<String, Video>();\n        hmap.put("catzzzzzzzzz", new Video("sadgahasgdas", "Catzzzz.avi"));\n        hmap.put("mkafksangasj", new Video("mkafksangasj", "Dog play with ball.mp4"));\n        hmap.put("dancesvideoo", new Video("asdfas3ffasd", "Dancing video.mpq"));\n        hmap.put("dlsdk5jfslaf", new Video("dlsdk5jfslaf", "Barcelona vs RealM.mov"));\n        hmap.put("3sdfgsd1j333", new Video("3sdfgsd1j333", "Programing lesson#1.avi"));\n\n        System.out.print("Done!" + "\\n");\n        return hmap;\n    }\n\n    private Video getSomeVideo(String videoId) {\n        System.out.print("Downloading video... ");\n\n        experienceNetworkLatency();\n        Video video = new Video(videoId, "Some video title");\n\n        System.out.print("Done!" + "\\n");\n        return video;\n    }\n\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some_cool_media_library/ThirdPartyYouTubeLib.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package refactoring_guru.proxy.example.some_cool_media_library;\n\nimport java.util.HashMap;\n\npublic interface ThirdPartyYouTubeLib {\n    HashMap<String, Video> popularVideos();\n\n    Video getVideo(String videoId);\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some_cool_media_library/Video.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.proxy.example.some_cool_media_library;\n\npublic class Video {\n    public String id;\n    public String title;\n    public String data;\n\n    Video(String id, String title) {\n        this.id = id;\n        this.title = title;\n        this.data = "Random video.";\n    }\n}\n'))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Demo.java"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package refactoring_guru.proxy.example;\n\nimport refactoring_guru.proxy.example.downloader.YouTubeDownloader;\nimport refactoring_guru.proxy.example.proxy.YouTubeCacheProxy;\nimport refactoring_guru.proxy.example.some_cool_media_library.ThirdPartyYouTubeClass;\n\npublic class Demo {\n\n    public static void main(String[] args) {\n        YouTubeDownloader naiveDownloader = new YouTubeDownloader(new ThirdPartyYouTubeClass());\n        YouTubeDownloader smartDownloader = new YouTubeDownloader(new YouTubeCacheProxy());\n\n        long naive = test(naiveDownloader);\n        long smart = test(smartDownloader);\n        System.out.print("Time saved by caching proxy: " + (naive - smart) + "ms");\n\n    }\n\n    private static long test(YouTubeDownloader downloader) {\n        long startTime = System.currentTimeMillis();\n\n        // User behavior in our app:\n        downloader.renderPopularVideos();\n        downloader.renderVideoPage("catzzzzzzzzz");\n        downloader.renderPopularVideos();\n        downloader.renderVideoPage("dancesvideoo");\n        // Users might visit the same page quite often.\n        downloader.renderVideoPage("catzzzzzzzzz");\n        downloader.renderVideoPage("someothervid");\n\n        long estimatedTime = System.currentTimeMillis() - startTime;\n        System.out.print("Time elapsed: " + estimatedTime + "ms\\n");\n        return estimatedTime;\n    }\n}\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Connecting to http://www.youtube.com... Connected!\nDownloading populars... Done!\n\n-------------------------------\nMost popular videos on YouTube (imagine fancy HTML)\nID: sadgahasgdas / Title: Catzzzz.avi\nID: asdfas3ffasd / Title: Dancing video.mpq\nID: 3sdfgsd1j333 / Title: Programing lesson#1.avi\nID: mkafksangasj / Title: Dog play with ball.mp4\nID: dlsdk5jfslaf / Title: Barcelona vs RealM.mov\n-------------------------------\n\nConnecting to http://www.youtube.com/catzzzzzzzzz... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: catzzzzzzzzz\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nConnecting to http://www.youtube.com... Connected!\nDownloading populars... Done!\n\n-------------------------------\nMost popular videos on YouTube (imagine fancy HTML)\nID: sadgahasgdas / Title: Catzzzz.avi\nID: asdfas3ffasd / Title: Dancing video.mpq\nID: 3sdfgsd1j333 / Title: Programing lesson#1.avi\nID: mkafksangasj / Title: Dog play with ball.mp4\nID: dlsdk5jfslaf / Title: Barcelona vs RealM.mov\n-------------------------------\n\nConnecting to http://www.youtube.com/dancesvideoo... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: dancesvideoo\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nConnecting to http://www.youtube.com/catzzzzzzzzz... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: catzzzzzzzzz\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nConnecting to http://www.youtube.com/someothervid... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: someothervid\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nTime elapsed: 9354ms\nConnecting to http://www.youtube.com... Connected!\nDownloading populars... Done!\n\n-------------------------------\nMost popular videos on YouTube (imagine fancy HTML)\nID: sadgahasgdas / Title: Catzzzz.avi\nID: asdfas3ffasd / Title: Dancing video.mpq\nID: 3sdfgsd1j333 / Title: Programing lesson#1.avi\nID: mkafksangasj / Title: Dog play with ball.mp4\nID: dlsdk5jfslaf / Title: Barcelona vs RealM.mov\n-------------------------------\n\nConnecting to http://www.youtube.com/catzzzzzzzzz... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: catzzzzzzzzz\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nRetrieved list from cache.\n\n-------------------------------\nMost popular videos on YouTube (imagine fancy HTML)\nID: sadgahasgdas / Title: Catzzzz.avi\nID: asdfas3ffasd / Title: Dancing video.mpq\nID: 3sdfgsd1j333 / Title: Programing lesson#1.avi\nID: mkafksangasj / Title: Dog play with ball.mp4\nID: dlsdk5jfslaf / Title: Barcelona vs RealM.mov\n-------------------------------\n\nConnecting to http://www.youtube.com/dancesvideoo... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: dancesvideoo\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nRetrieved video 'catzzzzzzzzz' from cache.\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: catzzzzzzzzz\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nConnecting to http://www.youtube.com/someothervid... Connected!\nDownloading video... Done!\n\n-------------------------------\nVideo page (imagine fancy HTML)\nID: someothervid\nTitle: Some video title\nVideo: Random video.\n-------------------------------\n\nTime elapsed: 5875ms\nTime saved by caching proxy: 3479ms\n")))))}u.isMDXComponent=!0}}]);
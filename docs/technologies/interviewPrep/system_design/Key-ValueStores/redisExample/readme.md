# Redis Key-Value Store example
## How to run
- install redis
&gt; brew install redis
- run redis service
&gt; brew services start redis
- install all dependencies
&gt; npm i
- run server
&gt; node server.js
- paste link to browser
&gt; http://localhost:3001/nocache/index.html
  - this will always take 3 seconds to load as there is no cache
&gt; http://localhost:3001/withcache/index.html
  - this will take 3 seconds to load initially
  - subsequent refresh will load instantenously
  - however, this will expire in 10 seconds and will then take 3 seconds to load again

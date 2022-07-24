"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3208],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var s=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,s)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,s,r=function(n,e){if(null==n)return{};var t,s,r={},o=Object.keys(n);for(s=0;s<o.length;s++)t=o[s],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(s=0;s<o.length;s++)t=o[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=s.createContext({}),l=function(n){var e=s.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return s.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),d=l(t),m=r,_=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?s.createElement(_,i(i({ref:e},u),{},{components:t})):s.createElement(_,i({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33822:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const o={},i="Multi-Threading",a={unversionedId:"languageSpecific/python/multithread_async_examples/readme",id:"languageSpecific/python/multithread_async_examples/readme",title:"Multi-Threading",description:"Single Thread",source:"@site/docs/languageSpecific/python/multithread_async_examples/readme.md",sourceDirName:"languageSpecific/python/multithread_async_examples",slug:"/languageSpecific/python/multithread_async_examples/",permalink:"/docs/languageSpecific/python/multithread_async_examples/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/languageSpecific/python/multithread_async_examples/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/languageSpecific/python/"},next:{title:"Handling PIP",permalink:"/docs/languageSpecific/python/pip"}},p={},l=[{value:"Single Thread",id:"single-thread",level:2},{value:"Synchronous",id:"synchronous",level:3},{value:"Asynchronous",id:"asynchronous",level:3},{value:"Multi-Thread",id:"multi-thread",level:2},{value:"Asyncio",id:"asyncio",level:3},{value:"Multi-Processing",id:"multi-processing",level:2},{value:"Multi-Concurrency",id:"multi-concurrency",level:2}],u={toc:l};function c(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-threading"},"Multi-Threading"),(0,r.kt)("h2",{id:"single-thread"},"Single Thread"),(0,r.kt)("h3",{id:"synchronous"},"Synchronous"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\nresults = []\n\n\ndef run_tasks():\n    for post_id in post_ids:\n        print(f"Working on post id {post_id}")\n        response = requests.get(f"{url}{post_id}")\n        results.append(response.json())\n\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n    run_tasks()\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("h3",{id:"asynchronous"},"Asynchronous"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nimport requests\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\nresults = []\n\n\n# normally requires await  to run code\nasync def run_tasks():\n    for post_id in post_ids:\n        print(f"Working on post id {post_id}")\n        response = requests.get(f"{url}{post_id}")\n        results.append(response.json())\n\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n\n    # method 1\n    # loop = asyncio.get_event_loop()\n    # loop.run_until_complete(run_tasks())\n    # loop.close()\n\n    # method 2\n    asyncio.run(run_tasks())\n\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("h2",{id:"multi-thread"},"Multi-Thread"),(0,r.kt)("h3",{id:"asyncio"},"Asyncio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nimport aiohttp\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\nresults = []\n\n\ndef get_tasks(session):\n    tasks = []\n    for post_id in post_ids:\n        print(f"Working on post id {post_id}")\n        tasks.append(session.get(f"{url}{post_id}"))\n    return tasks\n\n\nasync def run_tasks():\n    async with aiohttp.ClientSession() as session:\n        tasks = get_tasks(session)\n        responses = await asyncio.gather(*tasks)\n        for response in responses:\n            results.append(await response.json())\n\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n\n    # method 1\n    # loop = asyncio.get_event_loop()\n    # loop.run_until_complete(run_tasks())\n    # loop.close()\n\n    # method 2\n    asyncio.run(run_tasks())\n\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version 2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nimport aiohttp\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\nresults = []\n\n\ndef get_tasks(session):\n    tasks = []\n    for post_id in post_ids:\n        print(f"Working on post id {post_id}")\n        tasks.append(asyncio.create_task(session.get(f"{url}{post_id}")))\n    return tasks\n\n\nasync def run_tasks():\n    async with aiohttp.ClientSession() as session:\n        tasks = get_tasks(session)\n        responses = await asyncio.gather(*tasks)\n        for response in responses:\n            results.append(await response.json())\n\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n\n    # method 1\n    # loop = asyncio.get_event_loop()\n    # loop.run_until_complete(run_tasks())\n    # loop.close()\n\n    # method 2\n    asyncio.run(run_tasks())\n\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("h2",{id:"multi-processing"},"Multi-Processing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import multiprocessing\nimport requests\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3,  4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\n\n\ndef make_request(post_id, results):\n    response = requests.get(f"{url}{post_id}")\n    results.append(response.json())\n\n\ndef run_tasks():\n    manager = multiprocessing.Manager()\n    results = manager.list()\n    processes = []\n    for post_id in post_ids:\n        print(f"Working on post id {post_id}")\n        p = multiprocessing.Process(target=make_request, args=[post_id, results])\n        processes.append(p)\n        p.start()\n\n    for process in processes:\n        process.join()\n\n    print(results)\n\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n    run_tasks()\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("h2",{id:"multi-concurrency"},"Multi-Concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version 1: not in order")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import concurrent.futures\nimport requests\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3,  4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\n\n\ndef make_request(post_id):\n    response = requests.get(f"{url}{post_id}")\n    return response.json()\n\n\ndef run_tasks():\n    futures = []\n    # with concurrent.futures.ThreadPoolExecutor() as executor:  # change to this to use threads\n    with concurrent.futures.ProcessPoolExecutor() as executor:\n        for post_id in post_ids:\n            print(f"Working on post id {post_id}")\n            f = executor.submit(make_request, post_id)\n            futures.append(f)\n\n        for future in concurrent.futures.as_completed(futures):\n            print(future.result())\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n    run_tasks()\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version 2: in order")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import concurrent.futures\nimport requests\nimport time\n\nurl = "https://jsonplaceholder.typicode.com/posts/"\npost_ids = [\n    1, 2, 3,  4, 5, 6, 7, 8, 9, 10,\n    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,\n    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,\n    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\n    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,\n    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,\n    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,\n    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,\n    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,\n]\n\n\ndef make_request(post_id):\n    response = requests.get(f"{url}{post_id}")\n    return response.json()\n\n\ndef run_tasks():\n    # with concurrent.futures.ThreadPoolExecutor() as executor:  # change to this to use threads\n    with concurrent.futures.ProcessPoolExecutor() as executor:\n        futures = executor.map(make_request, post_ids)\n\n        for future in futures:\n            print(future)\n\nif __name__ == \'__main__\':\n    print("Timer started...")\n    start = time.time()\n    run_tasks()\n    end = time.time()\n    total_time = end - start\n    print(f"It took {total_time} seconds to make {len(post_ids)} API calls")\n')))}c.isMDXComponent=!0}}]);
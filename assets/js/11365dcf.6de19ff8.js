"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[51407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(83117),i=(a(67294),a(3905));const r={},l="Machine Learning Basics",o={unversionedId:"Technologies/machine_learning/readme",id:"Technologies/machine_learning/readme",title:"Machine Learning Basics",description:"data collection",source:"@site/docs/Technologies/machine_learning/readme.md",sourceDirName:"Technologies/machine_learning",slug:"/Technologies/machine_learning/",permalink:"/docs/Technologies/machine_learning/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/machine_learning/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ASP.NET CORE terminal guide",permalink:"/docs/Technologies/fullstack/aspDotNetCore_SDK"},next:{title:"Git",permalink:"/docs/Technologies/others/gitCommands"}},s={},u=[{value:"data collection",id:"data-collection",level:2},{value:"data exploration",id:"data-exploration",level:2},{value:"data preparation",id:"data-preparation",level:2},{value:"modeling",id:"modeling",level:2},{value:"evaluation",id:"evaluation",level:2},{value:"actionable insight",id:"actionable-insight",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machine-learning-basics"},"Machine Learning Basics"),(0,i.kt)("h2",{id:"data-collection"},"data collection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"primary objective is to identify and gather data we intend to use for machine learning",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"check data accuracy")))),(0,i.kt)("h2",{id:"data-exploration"},"data exploration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the process of describing, visualizing, and analyzing data in order to better understand it\nallows us to answer questions such as",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"how many rows and columns are in the data"),(0,i.kt)("li",{parentName:"ul"},"what type of data do we have"),(0,i.kt)("li",{parentName:"ul"},"are there missing, inconsistent or duplicate values in the data")))),(0,i.kt)("h2",{id:"data-preparation"},"data preparation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the process of making sure that our data (by modifying it) is suitable for the machine learning approach that we choose to use",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"check for missing data (changes in data, human error, bias, lack of reliable input)"),(0,i.kt)("li",{parentName:"ul"},"normalizing data: ensures that values share a common property",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"involves scaling data to fall within a small or specified range"),(0,i.kt)("li",{parentName:"ul"},"often required, reduces complexity, improves interpretability"))),(0,i.kt)("li",{parentName:"ul"},"sampling data:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the process of selecting a subset of the instances in a dataset as a proxy for the whole"),(0,i.kt)("li",{parentName:"ul"},"original dataset is referred to as population, subset is sample"))),(0,i.kt)("li",{parentName:"ul"},"dimensionality reduction:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the process of reducing the number of features in a dataset prior to modeling",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helps to reduce time and storage required to process data"),(0,i.kt)("li",{parentName:"ul"},"improves data visualization and model interpretability"))),(0,i.kt)("li",{parentName:"ul"},"reduces complexity and helps avoid the curse of dimensionality"),(0,i.kt)("li",{parentName:"ul"},"feature selection:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the process of identifying the minimal set of features needed to build a good model"),(0,i.kt)("li",{parentName:"ul"},"also known as variable subset selection"))),(0,i.kt)("li",{parentName:"ul"},"feature extraction:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"use of mathematical functions to transform high-dimensional data into lower dimension"),(0,i.kt)("li",{parentName:"ul"},"also known as feature projection")))))))),(0,i.kt)("h2",{id:"modeling"},"modeling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"involves choosing and applying the appropriate machine learning approach that works well with the data we have and solves the problem that we intend to solve",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in supervised ML: objective is to build a model that maps a given input (which we call the independent variables) to the given output (which we call the dependent variable)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"depending on the nature of the dependent variable, problem can be either be called Classification or Regression",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Classification: if dependent variable is a categorical value (e.g.: color, yes or no, the weather)"),(0,i.kt)("li",{parentName:"ul"},"Regression: if we intend to predict a continuous value (e.g.: age, income, temperature)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ml algo that solves only regression",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"logistic regression, simple linear regression, multiple linear regression, poisson regression, polynomial regression"))))))))),(0,i.kt)("li",{parentName:"ul"},"ML algo that can solve both Classification and regression problems",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"descision tree, Naive Bayes, neural networks, k-nearest neighbors, support vector machines")))))),(0,i.kt)("h2",{id:"evaluation"},"evaluation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"after training a ML model, important to see how well suited it is to the problem at hand"),(0,i.kt)("li",{parentName:"ul"},"in order to get an unbiased evaluation of the performance of our model, we must train the model with a different dataset (training data, and test data) from the one we use to evaluate it")),(0,i.kt)("h2",{id:"actionable-insight"},"actionable insight"))}c.isMDXComponent=!0}}]);
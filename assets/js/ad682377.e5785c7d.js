"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9716],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>u});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),l=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=l(n.components);return r.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),g=l(t),u=i,f=g["".concat(p,".").concat(u)]||g[u]||c[u]||a;return t?r.createElement(f,o(o({ref:e},m),{},{components:t})):r.createElement(f,o({ref:e},m))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23717:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={},o="Go Example",s={unversionedId:"interviewPrep/designPatterns/Behavioral_patterns/Template/go/readme",id:"interviewPrep/designPatterns/Behavioral_patterns/Template/go/readme",title:"Go Example",description:"",source:"@site/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/go/readme.md",sourceDirName:"interviewPrep/designPatterns/Behavioral_patterns/Template/go",slug:"/interviewPrep/designPatterns/Behavioral_patterns/Template/go/",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/go/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/go/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C# Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/cSharp/"},next:{title:"Java Example",permalink:"/docs/interviewPrep/designPatterns/Behavioral_patterns/Template/java/"}},p={},l=[],m={toc:l};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-example"},"Go Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype email struct {\n    otp\n}\n\nfunc (s *email) genRandomOTP(len int) string {\n    randomOTP := "1234"\n    fmt.Printf("EMAIL: generating random otp %s\\n", randomOTP)\n    return randomOTP\n}\n\nfunc (s *email) saveOTPCache(otp string) {\n    fmt.Printf("EMAIL: saving otp: %s to cache\\n", otp)\n}\n\nfunc (s *email) getMessage(otp string) string {\n    return "EMAIL OTP for login is " + otp\n}\n\nfunc (s *email) sendNotification(message string) error {\n    fmt.Printf("EMAIL: sending email: %s\\n", message)\n    return nil\n}\n\nfunc (s *email) publishMetric() {\n    fmt.Printf("EMAIL: publishing metrics\\n")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\ntype iOtp interface {\n    genRandomOTP(int) string\n    saveOTPCache(string)\n    getMessage(string) string\n    sendNotification(string) error\n    publishMetric()\n}\n\n// type otp struct {\n// }\n\n// func (o *otp) genAndSendOTP(iOtp iOtp, otpLength int) error {\n//  otp := iOtp.genRandomOTP(otpLength)\n//  iOtp.saveOTPCache(otp)\n//  message := iOtp.getMessage(otp)\n//  err := iOtp.sendNotification(message)\n//  if err != nil {\n//      return err\n//  }\n//  iOtp.publishMetric()\n//  return nil\n// }\n\ntype otp struct {\n    iOtp iOtp\n}\n\nfunc (o *otp) genAndSendOTP(otpLength int) error {\n    otp := o.iOtp.genRandomOTP(otpLength)\n    o.iOtp.saveOTPCache(otp)\n    message := o.iOtp.getMessage(otp)\n    err := o.iOtp.sendNotification(message)\n    if err != nil {\n        return err\n    }\n    o.iOtp.publishMetric()\n    return nil\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype sms struct {\n    otp\n}\n\nfunc (s *sms) genRandomOTP(len int) string {\n    randomOTP := "1234"\n    fmt.Printf("SMS: generating random otp %s\\n", randomOTP)\n    return randomOTP\n}\n\nfunc (s *sms) saveOTPCache(otp string) {\n    fmt.Printf("SMS: saving otp: %s to cache\\n", otp)\n}\n\nfunc (s *sms) getMessage(otp string) string {\n    return "SMS OTP for login is " + otp\n}\n\nfunc (s *sms) sendNotification(message string) error {\n    fmt.Printf("SMS: sending sms: %s\\n", message)\n    return nil\n}\n\nfunc (s *sms) publishMetric() {\n    fmt.Printf("SMS: publishing metrics\\n")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    // otp := otp{}\n\n    // smsOTP := &sms{\n    //  otp: otp,\n    // }\n\n    // smsOTP.genAndSendOTP(smsOTP, 4)\n\n    // emailOTP := &email{\n    //  otp: otp,\n    // }\n    // emailOTP.genAndSendOTP(emailOTP, 4)\n    // fmt.Scanln()\n    smsOTP := &sms{}\n    o := otp{\n        iOtp: smsOTP,\n    }\n    o.genAndSendOTP(4)\n\n    fmt.Println("")\n    emailOTP := &email{}\n    o = otp{\n        iOtp: emailOTP,\n    }\n    o.genAndSendOTP(4)\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SMS: generating random otp 1234\nSMS: saving otp: 1234 to cache\nSMS: sending sms: SMS OTP for login is 1234\nSMS: publishing metrics\n\nEMAIL: generating random otp 1234\nEMAIL: saving otp: 1234 to cache\nEMAIL: sending email: EMAIL OTP for login is 1234\nEMAIL: publishing metrics\n")))}c.isMDXComponent=!0}}]);
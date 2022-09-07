"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[36535],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>h});var l=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,l,o=function(n,e){if(null==n)return{};var t,l,o={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=l.createContext({}),p=function(n){var e=l.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=p(n.components);return l.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=r(n,["components","mdxType","originalType","parentName"]),d=p(t),h=o,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||a;return t?l.createElement(u,i(i({ref:e},s),{},{components:t})):l.createElement(u,i({ref:e},s))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=n,r.mdxType="string"==typeof n?n:o,i[1]=r;for(var p=2;p<a;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5594:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var l=t(83117),o=(t(67294),t(3905));const a={},i="Lifecycle Hooks",r={unversionedId:"Technologies/frontend/angular/lifecyclehooks",id:"Technologies/frontend/angular/lifecyclehooks",title:"Lifecycle Hooks",description:"- A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views",source:"@site/docs/Technologies/frontend/angular/lifecyclehooks.md",sourceDirName:"Technologies/frontend/angular",slug:"/Technologies/frontend/angular/lifecyclehooks",permalink:"/docs/Technologies/frontend/angular/lifecyclehooks",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/Technologies/frontend/angular/lifecyclehooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/Technologies/frontend/angular/events"},next:{title:"Props",permalink:"/docs/Technologies/frontend/angular/props"}},c={},p=[{value:"ngOnInit",id:"ngoninit",level:2},{value:"Example",id:"example",level:3},{value:"Parent",id:"parent",level:4},{value:"Child",id:"child",level:4},{value:"ngOnChanges",id:"ngonchanges",level:2},{value:"Example",id:"example-1",level:3},{value:"Parent",id:"parent-1",level:4},{value:"Child",id:"child-1",level:4},{value:"ngDoCheck",id:"ngdocheck",level:2},{value:"Example",id:"example-2",level:3},{value:"Parent",id:"parent-2",level:4},{value:"Child",id:"child-2",level:4},{value:"ngAfterContentInit",id:"ngaftercontentinit",level:2},{value:"Example",id:"example-3",level:3},{value:"Parent",id:"parent-3",level:4},{value:"Child",id:"child-3",level:4},{value:"ngAfterContentChecked",id:"ngaftercontentchecked",level:2},{value:"Example",id:"example-4",level:3},{value:"Parent",id:"parent-4",level:4},{value:"Child",id:"child-4",level:4},{value:"ngAfterViewInit",id:"ngafterviewinit",level:2},{value:"Example",id:"example-5",level:3},{value:"Parent",id:"parent-5",level:4},{value:"Child",id:"child-5",level:4},{value:"ngAfterViewChecked",id:"ngafterviewchecked",level:2},{value:"Example",id:"example-6",level:3},{value:"Parent",id:"parent-6",level:4},{value:"Child",id:"child-6",level:4},{value:"ngOnDestroy",id:"ngondestroy",level:2},{value:"Example",id:"example-7",level:3},{value:"Parent",id:"parent-7",level:4},{value:"Child",id:"child-7",level:4}],s={toc:p};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,l.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lifecycle-hooks"},"Lifecycle Hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views"),(0,o.kt)("li",{parentName:"ul"},"The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed"),(0,o.kt)("li",{parentName:"ul"},"The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM"),(0,o.kt)("li",{parentName:"ul"},"Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution"),(0,o.kt)("li",{parentName:"ul"},"the application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"initialize new instances"),(0,o.kt)("li",{parentName:"ul"},"initiate change detection when needed"),(0,o.kt)("li",{parentName:"ul"},"respond to updates during change detection"),(0,o.kt)("li",{parentName:"ul"},"clean up before deletion of instances"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor")," is always called first before any lifecycle methods")),(0,o.kt)("h2",{id:"ngoninit"},"ngOnInit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called once, after the first ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChanges()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ngOnInit()")," is still called even when ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChanges()")," is not",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"which is the case when there are no template-bound inputs"))))),(0,o.kt)("li",{parentName:"ul"},"similar to react's ",(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDidMount"))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("h4",{id:"parent"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  isChild = false;\n\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n\n  toggleChild() {\n    this.isChild = !this.isChild;\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Parent Component</h1>\n\n<button (click)="toggleChild()">Toggle Child</button>\n<app-child *ngIf="isChild"></app-child>\n')),(0,o.kt)("h4",{id:"child"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent implements OnInit {\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n")),(0,o.kt)("h2",{id:"ngonchanges"},"ngOnChanges"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Respond when Angular sets or resets data-bound input properties"),(0,o.kt)("li",{parentName:"ul"},"The method receives a SimpleChanges object of current and previous property\nvalues"),(0,o.kt)("li",{parentName:"ul"},"note: This happens frequently, so any operation you perform here impacts performance significantly"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called before ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnInit()")," (if the component has bound inputs) and whenever one or more data-bound input properties change"),(0,o.kt)("li",{parentName:"ul"},"note: If your component has no inputs or you use it without providing any inputs, the framework will not call ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChanges()")))),(0,o.kt)("li",{parentName:"ul"},"try to avoid using ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChange")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ngDoCheck")," in the same component as it might cause a memory leak"),(0,o.kt)("li",{parentName:"ul"},"similar to react's ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange")," attribute")),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"FormsModules")," is imported in ",(0,o.kt)("inlineCode",{parentName:"li"},"app.module.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {BrowserModule} from "@angular/platform-browser";\nimport {NgModule} from "@angular/core";\nimport {FormsModule} from "@angular/forms"; // add this\n\nimport {AppComponent} from "./app.component";\nimport {ParentComponent} from "./components/parent/parent.component";\nimport {ChildComponent} from "./components/child/child.component";\n\n@NgModule({\n  declarations: [AppComponent, ParentComponent, ChildComponent],\n  imports: [BrowserModule, FormsModule], // modify this\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n')),(0,o.kt)("h4",{id:"parent-1"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  channelName = "";\n\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Parent Component</h1>\n\n<input type="text" [(ngModel)]="channelName" />\n<app-child [channelName]="channelName"></app-child>\n')),(0,o.kt)("h4",{id:"child-1"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Component,\n  OnInit,\n  Input,\n  OnChanges,\n  SimpleChanges,\n} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent implements OnInit, OnChanges {\n  @Input()\n  channelName = "";\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n\n  // this is called before ngOnInit\n  // this will be called each time there is a change in channelName\n  ngOnChanges(changes: SimpleChanges): void {\n    console.log(changes);\n    console.log("Child OnChanges is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n<p>{{ channelName }}</p>\n")),(0,o.kt)("h2",{id:"ngdocheck"},"ngDoCheck"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Detect and act upon changes that Angular can't or won't detect on its own"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called immediately after ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChanges()")," on every change detection run, and immediately after ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnInit()")," on the first run"))),(0,o.kt)("li",{parentName:"ul"},"try to avoid using ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChange")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ngDoCheck")," in the same component as it might cause a memory leak"),(0,o.kt)("li",{parentName:"ul"},"similar to react's ",(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDidUpdate"))),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("h4",{id:"parent-2"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit, DoCheck} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit, DoCheck {\n  channelName = "";\n\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n\n  // called first before child\n  ngDoCheck() {\n    console.log("Parent DoCheck is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Parent Component</h1>\n\n<app-child [channelName]="channelName"></app-child>\n')),(0,o.kt)("h4",{id:"child-2"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit, Input, DoCheck} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent implements OnInit, DoCheck {\n  @Input()\n  channelName = "";\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n\n  ngDoCheck(): void {\n    console.log("Child DoCheck is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n<p>{{ channelName }}</p>\n")),(0,o.kt)("h2",{id:"ngaftercontentinit"},"ngAfterContentInit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Respond after Angular projects external content into the component's view, or into the view that a directive is in"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called once after the first ",(0,o.kt)("inlineCode",{parentName:"li"},"ngDoCheck()")))),(0,o.kt)("li",{parentName:"ul"},"similar to react's ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),", but different as it allows control"),(0,o.kt)("li",{parentName:"ul"},"not accessible in ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnInit"),", and initial load for ",(0,o.kt)("inlineCode",{parentName:"li"},"ngOnChanges")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ngDoCheck"))),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("h4",{id:"parent-3"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Parent Component</h1>\n\n<app-child>\n  \x3c!-- location where it gets initialized --\x3e\n  <h2 #projectedContent>Please subscribe</h2>\n</app-child>\n")),(0,o.kt)("h4",{id:"child-3"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Component,\n  OnInit,\n  AfterContentInit,\n  ContentChild,\n  ElementRef,\n} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent implements OnInit, AfterContentInit {\n  @ContentChild("projectedContent")\n  protectedContent: ElementRef;\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n    console.log("OnInit", this.protectedContent); // undefined\n  }\n\n  ngAfterContentInit(): void {\n    console.log("in after content init");\n    console.log("AfterContentInit", this.protectedContent); // can only access this after content has been initialized\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n\n\x3c!-- required to display projectedContent contents --\x3e\n<ng-content></ng-content>\n\n<p>test</p>\n")),(0,o.kt)("h2",{id:"ngaftercontentchecked"},"ngAfterContentChecked"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Respond after Angular checks the content projected into the directive or component"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called after ",(0,o.kt)("inlineCode",{parentName:"li"},"ngAfterContentInit()")," and every subsequent ",(0,o.kt)("inlineCode",{parentName:"li"},"ngDoCheck()"))))),(0,o.kt)("h3",{id:"example-4"},"Example"),(0,o.kt)("h4",{id:"parent-4"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Parent Component</h1>\n\n<app-child>\n  <h2 #projectedContent>Please subscribe</h2>\n</app-child>\n")),(0,o.kt)("h4",{id:"child-4"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Component,\n  OnInit,\n  AfterContentInit,\n  ContentChild,\n  ElementRef,\n  AfterContentChecked,\n} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent\n  implements OnInit, AfterContentInit, AfterContentChecked\n{\n  @ContentChild("projectedContent")\n  protectedContent: ElementRef;\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n\n  ngAfterContentInit(): void {\n    console.log("in after content init");\n  }\n\n  // this runs after ngAfterContentInit has executed and after subsequent ngDoCheck\n  ngAfterContentChecked(): void {\n    console.log("called after content init");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n\n<ng-content></ng-content>\n\n<p>test</p>\n")),(0,o.kt)("h2",{id:"ngafterviewinit"},"ngAfterViewInit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Respond after Angular initializes the component's views and child views, or the view that contains the directive"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called once after the first ",(0,o.kt)("inlineCode",{parentName:"li"},"ngAfterContentChecked()"))))),(0,o.kt)("h3",{id:"example-5"},"Example"),(0,o.kt)("h4",{id:"parent-5"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Parent Component</h1>\n\n<app-child>\n  <h2 #projectedContent>Please subscribe</h2>\n</app-child>\n")),(0,o.kt)("h4",{id:"child-5"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Component,\n  OnInit,\n  AfterContentInit,\n  ContentChild,\n  ElementRef,\n  AfterContentChecked,\n  AfterViewInit,\n} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent\n  implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit\n{\n  @ContentChild("projectedContent")\n  protectedContent: ElementRef;\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n\n  ngAfterContentInit(): void {\n    console.log("in after content init");\n  }\n\n  ngAfterContentChecked(): void {\n    console.log("called after content init");\n  }\n\n  // this runs after ngAfterContentChecked has executed\n  ngAfterViewInit(): void {\n    console.log("called after content checked");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n\n<ng-content></ng-content>\n\n<p>test</p>\n")),(0,o.kt)("h2",{id:"ngafterviewchecked"},"ngAfterViewChecked"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Respond after Angular checks the component's views and child views, or the view that contains the directive"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called after the ",(0,o.kt)("inlineCode",{parentName:"li"},"ngAfterViewInit()")," and every subsequent ",(0,o.kt)("inlineCode",{parentName:"li"},"ngAfterContentChecked()"))))),(0,o.kt)("h3",{id:"example-6"},"Example"),(0,o.kt)("h4",{id:"parent-6"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Parent Component</h1>\n\n<app-child>\n  <h2 #projectedContent>Please subscribe</h2>\n</app-child>\n")),(0,o.kt)("h4",{id:"child-6"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  Component,\n  OnInit,\n  AfterContentInit,\n  ContentChild,\n  ElementRef,\n  AfterContentChecked,\n  AfterViewInit,\n  AfterViewChecked,\n} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent\n  implements\n    OnInit,\n    AfterContentInit,\n    AfterContentChecked,\n    AfterViewInit,\n    AfterViewChecked\n{\n  @ContentChild("projectedContent")\n  protectedContent: ElementRef;\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n  }\n\n  ngAfterContentInit(): void {\n    console.log("in after content init");\n  }\n\n  ngAfterContentChecked(): void {\n    console.log("called after content init");\n  }\n\n  ngAfterViewInit(): void {\n    console.log("called after content checked");\n  }\n\n  // this runs after ngAfterViewInit has executed\n  ngAfterViewChecked(): void {\n    console.log("called after view init");\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n\n<ng-content></ng-content>\n\n<p>test</p>\n")),(0,o.kt)("h2",{id:"ngondestroy"},"ngOnDestroy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"purpose",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cleanup just before Angular destroys the directive or component"),(0,o.kt)("li",{parentName:"ul"},"Unsubscribe Observables and detach event handlers to avoid memory leaks"))),(0,o.kt)("li",{parentName:"ul"},"timing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Called immediately before Angular destroys the directive or component"))),(0,o.kt)("li",{parentName:"ul"},"similar to react's ",(0,o.kt)("inlineCode",{parentName:"li"},"ComponentWillUnmount"))),(0,o.kt)("h3",{id:"example-7"},"Example"),(0,o.kt)("h4",{id:"parent-7"},"Parent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit} from "@angular/core";\n\n@Component({\n  selector: "app-parent",\n  templateUrl: "./parent.component.html",\n  styleUrls: ["./parent.component.css"],\n})\nexport class ParentComponent implements OnInit {\n  isChild = false;\n\n  constructor() {\n    console.log("Parent Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Parent OnInit is called");\n  }\n\n  toggleChild() {\n    this.isChild = !this.isChild;\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Parent Component</h1>\n\n<button (click)="toggleChild()">Toggle Child</button>\n<app-child *ngIf="isChild"></app-child>\n')),(0,o.kt)("h4",{id:"child-7"},"Child"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {Component, OnInit, OnDestroy} from "@angular/core";\n\n@Component({\n  selector: "app-child",\n  templateUrl: "./child.component.html",\n  styleUrls: ["./child.component.css"],\n})\nexport class ChildComponent implements OnInit, OnDestroy {\n  counter = 0;\n  interval: ReturnType<typeof setInterval>;\n\n  constructor() {\n    console.log("Child Constructor is called");\n  }\n\n  ngOnInit(): void {\n    console.log("Child OnInit is called");\n\n    this.interval = setInterval(() => {\n      this.counter += 1;\n      console.log(this.counter);\n    }, 1000);\n  }\n\n  ngOnDestroy(): void {\n    console.log("Child OnDestroy is called");\n    clearInterval(this.interval);\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Child Component</h1>\n")))}m.isMDXComponent=!0}}]);
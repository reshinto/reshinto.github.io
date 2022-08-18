# Angular

[Documentation](https://angular.io/docs)

- an application design framework and development platform for creating efficient and sophisticated Single Page Apps
- it generally runs on the client, but can be used to create full stack apps by making HTTP requests to a backend server
- it can also be run on the server side with `Angular Universal`
- `Angular 1` / `Angular JS` and `Angular 2` is completely different and is a separate framework
  - `Angular 2` is a newly rewritten framework

## Why use Angular

- create dynamic frontend apps & UIs
- full featured framework
  - eg.: router, http, etc.
- integrated TypeScript (optional)
- RxJS
  - uses `Observables`
    - it allows us to write efficient asynchronous programming
- test friendly
  - easy to write unit tests and end-to-end tests
- popular in enterprise business

## Angular Components

- Angular is component driven
- components are pieces of the UI including the template (html), logic and styling
- components are reusable and can be embedded into the template as an XML-like tag
- component design is similar to `React` where a page is broken down to multiple smaller reusable components

### app.component.ts

```ts
import {Component} from "@angular/core";

@Component({
  selector: "app-root", // html tag name of the component to be embedded into the root html
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "angular-crash"; // add properties, custom methods, lifecycle methods, etc.
}
```

### app.component.css

```css
/* empty */
```

### app.component.html

#### retrieve variables or methods from component

```html
<h1>{{ title }}</h1>
```

### app.module.ts

- this same file will be updated when a new component is generated
  - similarly, it also has to be updated during any manual deletion of a component

```ts
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Root HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>AngularCrash</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

## Angular Services

- Angular distinguishes components from services to increase modularity and reusability
- by separating a component's view related functionality from other kinds of processing
  - you can make the component classes lean and efficient
- a component can delegate certain tasks to services
  - example
    - fetching data from the server
    - validating user input
    - logging directly to the console

## Angular CLI

- a standard tooling for Angular development
- a command line interface for creating Angular apps
- Dev server and easy production build
- Commands to generate components, services, etc

### Installation

```
npm install -g @angular/cli
```

```
yarn global add @angular/cli
```

### New Project creation

```
ng new my-app
```

### Run Project

```
ng serve --open
```

### Generate new Component

- this will auto generate and create 4 files in the component folder
- it is able to create a component in nested folders
  - `folderName` is not required if generating component in `app` folder

```
ng generate component folderName/componentName
```

- example
  ```
  ng generate component components/header
  ```

#### Auto generated files

##### components/header.component.css

```css
/* empty */
```

##### components/header.component.html

```html
<p>componentName works!</p>
```

##### components/header.component.ts

```ts
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-header", // this will be the html tag name of the component
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  // similar to React ComponentDidMount lifecycle method
  ngOnInit(): void {}
}
```

##### components/header.component.spec.ts

```ts
import {ComponentFixture, TestBed} from "@angular/core/testing";

import {HeaderComponent} from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
```

#### Auto modified files and might need manual modifications

##### app.module.ts

```ts
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Files to be manually modified

##### app.component.html

- newly generated components have to be added here manually

```html
<h1>{{ title }}</h1>
<app-header></app-header>
```

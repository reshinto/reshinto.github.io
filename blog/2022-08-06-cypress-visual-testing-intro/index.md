---
slug: cypress-visual-testing-introduction
title: Cypress Visual Testing Introduction
authors: [terence]
tags: [cypress, visual-testing]
---

## Step 1: Create a new react app

```
npx create-react-app demo-cypress --template typescript
```

```
yarn create react-app demo-cypress --template typescript
```

### Change directory

```
cd demo-cypress
```

![current directory](./initialProject.png)

## Step 2: Install cypress related modules

```
npm install cypress @cypress/react --save-dev
```

```
yarn add -D cypress @cypress/react
```

- tested with `"@cypress/react": "^6.0.0", "cypress": "^10.4.0"`

## Step 3: Open Cypress

### If running the first time, you might need to verify first

```
npm run cypress verify
```

```
yarn run cypress verify
```

### Open cypress to setup configurations

```
npm run cypress open
```

```
yarn run cypress open
```

![initial cypress config](./initialCypress.png)

## Step 4: Click on `Component Testing` to setup basic configs

### Select frontend framework type

![select frontend framework](./selectFrontendFramework.png)

### Install dev dependencies

![dev dependencies](./devDependencies.png)

### Auto generate configuration files

![new generated files](./newFiles.png)

![new configuration files](./configurationFiles.png)

### Choose browser type

![choose browser](./chooseBrowser.png)

## Step 5: Create new test file

![create first spec](./createFirstSpec.png)

### Create test file with desired name

![create test file](./createTestFile.png)

### New file will be auto generated

![new test file](./newTestFile.png)

### Run the test or create a new test file

![run test](./runTest.png)

## Step 6: Modify the test file

### Initial test code

```ts
describe("App.cy.tsx", () => {
  it("playground", () => {
    // cy.mount()
  });
});
```

![initial test run](./initialCodeTestRun.png)

### New passing sample test code

```ts
import * as React from "react";
import App from "../../src/App";
import {mount} from "@cypress/react";

it("renders react app", () => {
  mount(<App />);
  cy.contains(/learn react/i).should("be.visible");
});
```

![passing test code](./passingTestCode.png)

### Failing sample test code

```ts
import * as React from "react";
import App from "../../src/App";
import {mount} from "@cypress/react";

it("renders react app", () => {
  mount(<App />);
  cy.contains(/learn react not working/i).should("be.visible");
});
```

![failing test code](./failingTestCode.png)

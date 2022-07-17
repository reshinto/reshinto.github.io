# JavaScript Example

```js
class RemoteController {
  setCommand(onCommand, offCommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  clickOnButton() {
    this.onCommand.execute();
  }

  clickOffButton() {
    this.offCommand.execute();
  }
}

module.exports = RemoteController;
```

```js
class TelevisionOffCommand {
  constructor(television) {
    this.television = television;
  }

  execute() {
    this.television.off();
  }

  undo() {
    this.television.on();
  }
}

module.exports = TelevisionOffCommand;
```

```js
class TelevisionOnCommand {
  constructor(television) {
    this.television = television;
  }

  execute() {
    this.television.on();
  }

  undo() {
    this.television.off();
  }
}

module.exports = TelevisionOnCommand;
```

```js
class Television {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

module.exports = Television;
```

```js
const Television = require("./TelevisionReceiver");
const TelevisionOnCommand = require("./TelevisionOnCommand");
const TelevisionOffCommand = require("./TelevisionOffCommand");
const RemoteController = require("./RemoteControllerInvoker");

const television = new Television();
const televisionOnCommand = new TelevisionOnCommand(television);
const televisionOffCommand = new TelevisionOffCommand(television);
const remote = new RemoteController();

remote.setCommand(televisionOnCommand, televisionOffCommand);

console.log("state of television before remote is used:", television.state);
remote.clickOnButton();
console.log(
  "state of television after remote is used with on click:",
  television.state
);
remote.clickOffButton();
console.log(
  "state of television after remote is used with off click:",
  television.state
);
```

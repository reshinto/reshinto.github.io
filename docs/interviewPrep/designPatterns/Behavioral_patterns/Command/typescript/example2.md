# Example 2

```ts
export default interface Command {
  execute(): any;
  undo(): any;
}
```

```ts
import Command from "./CommandInterface";

export default class RemoteController {
  onCommand: Command;
  offCommand: Command;

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
```

```ts
export default class Television {
  state: boolean = false;

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}
```

```ts
import Television from "./TelevisionReceiver";
import Command from "./CommandInterface";

export default class TelevisionOnCommand implements Command {
  television: Television;

  constructor(television: Television) {
    this.television = television;
  }

  execute() {
    this.television.on();
  }

  undo() {
    this.television.off();
  }
}
```

```ts
import Television from "./TelevisionReceiver";
import Command from "./CommandInterface";

export default class TelevisionOffCommand implements Command {
  television: Television;

  constructor(television: Television) {
    this.television = television;
  }

  execute() {
    this.television.off();
  }

  undo() {
    this.television.on();
  }
}
```

```ts
import Television from "./TelevisionReceiver";
import TelevisionOnCommand from "./TelevisionOnCommand";
import TelevisionOffCommand from "./TelevisionOffCommand";
import RemoteController from "./RemoteControllerInvoker";

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

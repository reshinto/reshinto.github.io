# Example 2

```python
class RemoteControllerInvoker:
    def set_command(self, on_command, off_command):
        self.on_command = on_command
        self.off_command = off_command

    def click_on_button(self):
        self.on_command.execute()

    def click_off_button(self):
        self.off_command.execute()
```

```python
class TelevisionOffCommand:
    def __init__(self, television):
        self.television = television

    def execute(self):
        self.television.off()

    def undo(self):
        self.television.on()
```

```python
class TelevisionOnCommand:
    def __init__(self, television):
        self.television = television

    def execute(self):
        self.television.on()

    def undo(self):
        self.television.off()
```

```python
class TelevisionReceiver:
    def __init__(self):
        self.state = False

    def on(self):
        self.state = True

    def off(self):
        self.state = False
```

```python
from RemoteControllerInvoker import RemoteControllerInvoker as RemoteController
from TelevisionOffCommand import TelevisionOffCommand
from TelevisionOnCommand import TelevisionOnCommand
from TelevisionReceiver import TelevisionReceiver as Television

if __name__ == "__main__":
    television = Television()
    television_on_command = TelevisionOnCommand(television)
    television_off_command = TelevisionOffCommand(television)
    remote = RemoteController()

    remote.set_command(television_on_command, television_off_command)

    print("state of television before remote is used:", television.state)
    remote.click_on_button()
    print("state of television after remote is used with on click:", television.state)
    remote.click_off_button()
    print("state of television after remote is used with off click:", television.state)
```

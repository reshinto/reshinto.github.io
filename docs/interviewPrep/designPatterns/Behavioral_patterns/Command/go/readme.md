# Go Example

```go
package main

type button struct {
	command command
}

func (b *button) press() {
	b.command.execute()
}
```

```go
package main

type command interface {
	execute()
}
```

```go
package main

type device interface {
	on()
	off()
}
```

```go
package main

type offCommand struct {
	device device
}

func (c *offCommand) execute() {
	c.device.off()
}
```

```go
package main

type onCommand struct {
	device device
}

func (c *onCommand) execute() {
	c.device.on()
}
```

```go
package main

import "fmt"

type tv struct {
	isRunning bool
}

func (t *tv) on() {
	t.isRunning = true
	fmt.Println("Turning tv on")
}

func (t *tv) off() {
	t.isRunning = false
	fmt.Println("Turning tv off")
}
```

```go
package main

func main() {
	tv := &tv{}

	onCommand := &onCommand{
		device: tv,
	}

	offCommand := &offCommand{
		device: tv,
	}

	onButton := &button{
		command: onCommand,
	}
	onButton.press()

	offButton := &button{
		command: offCommand,
	}
	offButton.press()
}
```

```
Turning tv on
Turning tv off
```

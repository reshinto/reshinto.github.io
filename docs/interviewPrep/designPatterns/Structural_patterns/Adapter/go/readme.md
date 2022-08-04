# Go Example

```go
package main

import "fmt"

type client struct {
}

func (c *client) insertLightningConnectorIntoComputer(com computer) {
    fmt.Println("Client inserts Lightning connector into computer.")
	com.insertIntoLightningPort()
}
```

```go
package main

type computer interface {
	insertIntoLightningPort()
}
```

```go
package main

import "fmt"

type mac struct {
}

func (m *mac) insertIntoLightningPort() {
	fmt.Println("Lightning connector is plugged into mac machine.")
}
```

```go
package main

import "fmt"

type windows struct{}

func (w *windows) insertIntoUSBPort() {
	fmt.Println("USB connector is plugged into windows machine.")
}
```

```go
package main

import "fmt"

type windowsAdapter struct {
	windowMachine *windows
}

func (w *windowsAdapter) insertIntoLightningPort() {
    fmt.Println("Adapter converts Lightning signal to USB.")
	w.windowMachine.insertIntoUSBPort()
}
```

```go
package main

func main() {

	client := &client{}
	mac := &mac{}

	client.insertLightningConnectorIntoComputer(mac)

	windowsMachine := &windows{}
	windowsMachineAdapter := &windowsAdapter{
		windowMachine: windowsMachine,
	}

	client.insertLightningConnectorIntoComputer(windowsMachineAdapter)
}
```

```
Client inserts Lightning connector into computer.
Lightning connector is plugged into mac machine.
Client inserts Lightning connector into computer.
Adapter converts Lightning signal to USB.
USB connector is plugged into windows machine.
```

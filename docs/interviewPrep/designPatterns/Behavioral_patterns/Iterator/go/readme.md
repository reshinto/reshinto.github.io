# Go Example

```go
package main

type collection interface {
	createIterator() iterator
}
```

```go
package main

type iterator interface {
	hasNext() bool
	getNext() *user
}
```

```go
package main

type user struct {
	name string
	age  int
}
```

```go
package main

type userCollection struct {
	users []*user
}

func (u *userCollection) createIterator() iterator {
	return &userIterator{
		users: u.users,
	}
}
```

```go
package main

type userIterator struct {
	index int
	users []*user
}

func (u *userIterator) hasNext() bool {
	if u.index < len(u.users) {
		return true
	}
	return false

}
func (u *userIterator) getNext() *user {
	if u.hasNext() {
		user := u.users[u.index]
		u.index++
		return user
	}
	return nil
}
```

```go
package main

import "fmt"

func main() {

	user1 := &user{
		name: "a",
		age:  30,
	}
	user2 := &user{
		name: "b",
		age:  20,
	}

	userCollection := &userCollection{
		users: []*user{user1, user2},
	}

	iterator := userCollection.createIterator()

	for iterator.hasNext() {
		user := iterator.getNext()
		fmt.Printf("User is %+v\n", user)
	}
}
```

```
User is &{name:a age:30}
User is &{name:b age:20}
```

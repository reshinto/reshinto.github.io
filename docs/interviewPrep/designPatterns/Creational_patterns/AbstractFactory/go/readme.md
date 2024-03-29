# Go Example

- interfaces

  - iShirt.go

    ```go
    package main

    type iShirt interface {
      setLogo(logo string)
      setSize(size int)
      getLogo() string
      getSize() int
    }

    type shirt struct {
      logo string
      size int
    }

    func (s *shirt) setLogo(logo string) {
      s.logo = logo
    }

    func (s *shirt) getLogo() string {
      return s.logo
    }

    func (s *shirt) setSize(size int) {
      s.size = size
    }

    func (s *shirt) getSize() int {
      return s.size
    }
    ```

  - iShoe.go

    ```go
    package main

    type iShoe interface {
      setLogo(logo string)
      setSize(size int)
      getLogo() string
      getSize() int
    }

    type shoe struct {
      logo string
      size int
    }

    func (s *shoe) setLogo(logo string) {
      s.logo = logo
    }

    func (s *shoe) getLogo() string {
      return s.logo
    }

    func (s *shoe) setSize(size int) {
      s.size = size
    }

    func (s *shoe) getSize() int {
      return s.size
    }
    ```

  - iSportsFactory.go

    ```go
    package main

    import "fmt"

    type iSportsFactory interface {
      makeShoe() iShoe
      makeShirt() iShirt
    }

    func getSportsFactory(brand string) (iSportsFactory, error) {
      if brand == "adidas" {
        return &adidas{}, nil
      }

      if brand == "nike" {
        return &nike{}, nil
      }

      return nil, fmt.Errorf("Wrong brand type passed")
    }
    ```

- adidas

  - adidas.go

    ```go
    package main

    type adidas struct {
    }

    func (a *adidas) makeShoe() iShoe {
      return &adidasShoe{
        shoe: shoe{
          logo: "adidas",
          size: 14,
        },
      }
    }

    func (a *adidas) makeShirt() iShirt {
      return &adidasShirt{
        shirt: shirt{
          logo: "adidas",
          size: 14,
        },
      }
    }
    ```

  - adidasShirt.go

    ```go
    package main

    type adidasShirt struct {
      shirt
    }
    ```

  - adidasShoe.go

    ```go
    package main

    type adidasShoe struct {
      shoe
    }
    ```

- nike

  - nike.go

    ```go
    package main

    type nike struct {
    }

    func (n *nike) makeShoe() iShoe {
      return &nikeShoe{
        shoe: shoe{
          logo: "nike",
          size: 14,
        },
      }
    }

    func (n *nike) makeShirt() iShirt {
      return &nikeShirt{
        shirt: shirt{
          logo: "nike",
          size: 14,
        },
      }
    }
    ```

  - nikeShirt.go

    ```go
    package main

    type nikeShirt struct {
      shirt
    }
    ```

  - nikeShoe.go

    ```go
    package main

    type nikeShoe struct {
      shoe
    }
    ```

- main.go

  ```go
  package main

  import "fmt"

  func main() {
    adidasFactory, _ := getSportsFactory("adidas")
    nikeFactory, _ := getSportsFactory("nike")

    nikeShoe := nikeFactory.makeShoe()
    nikeShirt := nikeFactory.makeShirt()

    adidasShoe := adidasFactory.makeShoe()
    adidasShirt := adidasFactory.makeShirt()

    printShoeDetails(nikeShoe)
    printShirtDetails(nikeShirt)

    printShoeDetails(adidasShoe)
    printShirtDetails(adidasShirt)
  }

  func printShoeDetails(s iShoe) {
    fmt.Printf("Logo: %s", s.getLogo())
    fmt.Println()
    fmt.Printf("Size: %d", s.getSize())
    fmt.Println()
  }

  func printShirtDetails(s iShirt) {
    fmt.Printf("Logo: %s", s.getLogo())
    fmt.Println()
    fmt.Printf("Size: %d", s.getSize())
    fmt.Println()
  }
  ```

```
Logo: nike
Size: 14
Logo: nike
Size: 14
Logo: adidas
Size: 14
Logo: adidas
Size: 14
```

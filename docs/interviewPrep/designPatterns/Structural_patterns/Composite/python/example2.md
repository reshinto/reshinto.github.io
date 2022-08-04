# Example 2

```python
class Item:
    def __init__(self, name, type):
        self.name = name
        self.type = type

    def getTyoe(self):
        return self.type

    def getName(self):
        return self.name

    def getDetails(self): pass
```

```python
from Item import Item


class Catalog(Item):
    def __init__(self, name):
        super().__init__(name, "Catalog")
        self.collection = []

    def add(self, product):
        self.collection.append(product)
        return self

    def getDetails(self):
        print(self.getName().upper())
        for item in self.collection:
            item.getDetails()
```

```python
from Item import Item


class Laptop(Item):
    def __init__(self, name, model, cost):
        super().__init__(name, "Laptop")
        self.model = model
        self.cost = cost

    def getDetails(self):
        print(f"{self.getName()} {self.model}, priced at {self.cost}")
```

```python
from Item import Item


class MobilePhone(Item):
    def __init__(self, name, color, cost):
        super().__init__(name, "Mobile Phone")
        self.color = color
        self.cost = cost

    def getDetails(self):
        print(f"{self.getName()} :: {self.color} color, priced at {self.cost}")
```

```python
from MobilePhone import MobilePhone
from Laptop import Laptop
from CatalogCreateComposite import Catalog

# Phone
iPhoneXS = MobilePhone("Apple iPhone XS", "White", 89000)
onePlus = MobilePhone("OnePlus", "Midnight Black", 46000)
galaxy = MobilePhone("Samsung Galaxy", "Ocean Blue", 12000)

iPhoneXS.getDetails()
onePlus.getDetails()
galaxy.getDetails()

# Phone Catalog
Phones = Catalog("** Mobile Phones **")
Phones.add(iPhoneXS).add(onePlus).add(galaxy)

# Laptops
MacbookPro = Laptop("Apple", "Mackbook Pro 16", 150000)
DellInspiron = Laptop("Dell", "Inspiron 5370", 63000)

MacbookPro.getDetails()
DellInspiron.getDetails()


# Laptop Catalog
Laptops = Catalog("** Laptops **")
Laptops.add(MacbookPro).add(DellInspiron)


Phones.getDetails()
Laptops.getDetails()

# Shopping Catalog: Composites can also be collections of other composites
PrimeProducts = Catalog("** Prime Products 2020 **")
PrimeProducts.add(Phones).add(Laptops)

PrimeProducts.getDetails()
```

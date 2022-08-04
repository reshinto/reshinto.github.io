# JavaScript Example

```js
class Item {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getTyoe() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getDetails() {}
}

module.exports = Item;
```

```js
const Item = require("./Item");

class Catalog extends Item {
  constructor(name) {
    super(name, "Catalog");
    this.collection = [];
  }

  add(product) {
    this.collection.push(product);
    return this;
  }

  getDetails() {
    console.log(this.getName().toUpperCase());
    this.collection.forEach((item) => item.getDetails());
  }
}

module.exports = Catalog;
```

```js
const Item = require("./Item");

class Laptop extends Item {
  constructor(name, model, cost) {
    super(name, "Laptop");
    this.model = model;
    this.cost = cost;
  }

  getDetails() {
    console.log(`${this.getName()} ${this.model}, priced at ${this.cost}`);
  }
}

module.exports = Laptop;
```

```js
const Item = require("./Item");

class MobilePhone extends Item {
  constructor(name, color, cost) {
    super(name, "Mobile Phone");
    this.color = color;
    this.cost = cost;
  }

  getDetails() {
    console.log(
      `${this.getName()} :: ${this.color} color, priced at ${this.cost}`
    );
  }
}

module.exports = MobilePhone;
```

```js
const MobilePhone = require("./MobilePhone");
const Laptop = require("./Laptop");
const Catalog = require("./CatalogCreateComposite");

// Phone
const iPhoneXS = new MobilePhone("Apple iPhone XS", "White", 89000);
const onePlus = new MobilePhone("OnePlus", "Midnight Black", 46000);
const galaxy = new MobilePhone("Samsung Galaxy", "Ocean Blue", 12000);

iPhoneXS.getDetails();
onePlus.getDetails();
galaxy.getDetails();

// Phone Catalog
const Phones = new Catalog("** Mobile Phones **");
Phones.add(iPhoneXS).add(onePlus).add(galaxy);

// Laptops
const MacbookPro = new Laptop("Apple", "Mackbook Pro 16", 150000);
const DellInspiron = new Laptop("Dell", "Inspiron 5370", 63000);

MacbookPro.getDetails();
DellInspiron.getDetails();

// Laptop Catalog
const Laptops = new Catalog("** Laptops **");
Laptops.add(MacbookPro).add(DellInspiron);

Phones.getDetails();
Laptops.getDetails();

// Shopping Catalog: Composites can also be collections of other composites
const PrimeProducts = new Catalog("** Prime Products 2020 **");
PrimeProducts.add(Phones).add(Laptops);

PrimeProducts.getDetails();
```

# JavaScript Example

```javascript
class Phone {
  constructor(
    serialNum,
    model = "Generic",
    processor = "Generic",
    RAM = "2 Gb",
    width = 67.3,
    height = 138.4,
    depth = 7.3,
    resolution = "750 x 1334"
  ) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      RAM,
      width,
      height,
      depth,
      resolution,
    };
  }

  dial(num) {
    console.log(`Now dialing ${num}...`);
  }

  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Phone;
```

```javascript
const Phone = require("./PhoneInterface");

class iPhoneXR {
  constructor(serialNum) {
    return new Phone(
      serialNum,
      "iPhone Xr",
      "A12 Bionic",
      "3 Gb",
      75.7,
      150.9,
      8.3,
      "828 x 1792"
    );
  }
}

module.exports = iPhoneXR;
```

```javascript
const Phone = require("./PhoneInterface");

class iPhoneXS {
  constructor(serialNum) {
    return new Phone(
      serialNum,
      "iPhone Xs",
      "A12 Bionic",
      "4 Gb",
      70.9,
      143.6,
      7.7,
      "1125 x 2436"
    );
  }
}

module.exports = iPhoneXS;
```

```javascript
const Phone = require("./PhoneInterface");

class iPhoneXSMax {
  constructor(serialNum) {
    return new Phone(
      serialNum,
      "iPhone Xs Max",
      "A12 Bionic",
      "4 Gb",
      77.4,
      157.5,
      7.9,
      "1242 x 2688"
    );
  }
}

module.exports = iPhoneXSMax;
```

- Method 1

```javascript
// this is tedious, time consuming and prone to errors
// especially if there are more than 1 models to produce
const Phone = require("./PhoneInterface");

const iPhoneXR = new Phone(
  "XR-0001",
  "iphone Xr",
  "A12 Bionic",
  "3 Gb",
  75.7,
  150.9,
  8.3,
  "828 x 1792"
);

iPhoneXR.displayConfig();
iPhoneXR.dial(1234567);
```

- Method 2

```javascript
const IPhoneXR = require("./IphoneXrFactory");
const IPhoneXS = require("./IphoneXsFactory");
const IPhoneXSMax = require("./IphoneXsMaxFactory");

const myNewIphoneXr = new IPhoneXR("XR-0001");
const myNewIphoneXs = new IPhoneXS("XS-0002");
const myNewIphoneXsMax = new IPhoneXSMax("XSMAX-0003");

myNewIphoneXr.displayConfig();
myNewIphoneXr.dial(1234567);

myNewIphoneXs.displayConfig();
myNewIphoneXs.dial(1234567);

myNewIphoneXsMax.displayConfig();
myNewIphoneXsMax.dial(1234567);
```

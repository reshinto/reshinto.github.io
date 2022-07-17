# JavaScript Example

- Factory pattern

  ```js
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

  ```js
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

  ```js
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

  ```js
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

- Abstract Factory pattern utilizing the Factories

  ```js
  const iPhoneXR = require("../../Factory/javascript/IphoneXrFactory");
  const iPhoneXS = require("../../Factory/javascript/IphoneXsFactory");
  const iPhoneXSMax = require("../../Factory/javascript/IphoneXsMaxFactory");

  class iPhoneFactory {
    create(type, serialNum) {
      switch (type) {
        case "iPhone Xr":
          return new iPhoneXR(serialNum);
        case "iPhone Xs":
          return new iPhoneXS(serialNum);
        case "iPhone Xs Max":
          return new iPhoneXSMax(serialNum);
        default: {
          console.log("Unknown iPhone type...");
        }
      }
    }
  }

  module.exports = new iPhoneFactory();
  ```

  ```js
  const iPhoneFactory = require("./IphoneAbstractFactory");

  const iPhoneXR = iPhoneFactory.create("iPhone Xr", "xr-0001");
  const iPhoneXS = iPhoneFactory.create("iPhone Xs", "xs-0002");
  const iPhoneXSMax = iPhoneFactory.create("iPhone Xs Max", "xsmax-0003");

  iPhoneXR.displayConfig();
  iPhoneXS.displayConfig();
  iPhoneXSMax.displayConfig();
  ```

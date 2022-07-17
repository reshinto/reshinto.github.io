# Example 2

```js
import axios from "axios";

export const CurrencyConverter = (fn) => async (qty, price, base, to) => {
  const result = await fn(qty, price); // Call the original function
  const currencyRate = await axios(
    `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=84d74466e0748caf6de3`
  );

  return (
    currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]["val"] *
    result
  );
};

export const CurrencyConverterDecorator = (base, to) => {
  return function (target, name, descriptor) {
    try {
      const fn = descriptor.value; // The original function
      descriptor.value = async (...args) => {
        // Define the decorator
        const result = await fn.call(this, ...args);
        const currencyRate = await axios(
          `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=84d74466e0748caf6de3`
        );

        return await (currencyRate.data[
          `${to.toUpperCase()}_${base.toUpperCase()}`
        ]["val"] * result);
      };

      return descriptor;
    } catch (error) {
      console.log(error);
    }
  };
};
```

```js
import {
  CurrencyConverter,
  CurrencyConverterDecorator,
} from "./CurrencyConverter";

const cost = (qty, price) => Promise.resolve(qty * price);

cost(20, 5).then((result) => console.log(result));

// with converter
const costPlus = CurrencyConverter(cost);
costPlus(20, 5, "SGD", "USD").then((result) => console.log(result));

class Cost {
  @CurrencyConverterDecorator("INR", "USD")
  compute(qty, price) {
    return Promise.resolve(qty * price);
  }
}

const price = new Cost();
price.compute(20, 5).then((result) => console.log(result));
```

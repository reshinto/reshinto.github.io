# The Law of Demeter

- The purpose of the law of Demeter is lower cohesion
- The low cohesion shows that the design is of good quality
- Some violations of the Law of Demeter are harmless, although others are a sign that the public interface has not been segregated correctly or has not been segregated at all
- example
  ```
  1. customer.bicycle.wheel.tire();
  2. customer.bicycle.wheel.rotate();
  3. Object.keys(...).sort(...).join(',');
  ```
  - 1st and 2nd line violates the law of demeter
  - 3rd line is reasonable and does not violate the law of demeter

## Avoiding violations

- how to avoid unnecessary dependency
- problem

  - a User who have Account and this account has a plan and User has discountedPlanPrice which violate the Law of Demeter

  ```ts
  abstract class User {
    private account: Account;

    discountedPlanPrice(coupon: Coupon) {
      return coupon.discount(this.account.getPlan().getPrice());
    }
  }

  class Account {
    private plan: Plan;

    getPlan() {
      return this.plan;
    }
  }
  ```

- solution

  - One of the common ways to remove such chains is by using delegation
    - A wrapper method encapsulates or hides knowledge that would otherwise be implemented in the message chain
    - Delegation is an effective technique to avoid Law of Demeter violations, but only for behavior, not for attributes
  - To avoid such problems, you need to think over the application architecture in advance

  ```ts
  class Account {
    private plan: Plan;

    discountedPlanPrice(coupon) {
      return coupon.discount(this.plan.getPrice());
    }
  }
  ```

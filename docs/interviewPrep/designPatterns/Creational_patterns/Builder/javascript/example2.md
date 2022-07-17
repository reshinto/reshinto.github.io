# Example 2

- User

```js
const {randomBytes} = require("crypto");

class User {
  constructor(name, email, age, photo) {
    return new Promise((resolve, reject) => {
      this.name = name;
      this.email = email;
      this.age = age;
      this.photo = photo;
      resolve(this._doSignup());
    });
  }

  _setPhoto() {
    console.log(`- New photo ${this.photo} uploaded for ${this.name}`);
  }

  _doSignup() {
    if (this.photo) {
      this._setPhoto();
    }
    console.log(`- ${this.name} signed up as a new user!`);
    return randomBytes(12).toString("hex");
  }
}

module.exports = User;
```

- User Preference

```js
class UserPref {
  constructor(userId, nickname, favouriteTopics, isSME, isModerator, isAdmin) {
    return new Promise((resolve, reject) => {
      this.userId = userId;

      if (nickname) {
        this._setNickname(nickname);
      }

      if (favouriteTopics) {
        this._favTopics(favouriteTopics);
      }

      if (isSME) {
        this._setSME(isSME);
      }

      if (isModerator) {
        this._isModerator(isModerator);
      }

      if (isAdmin) {
        this._isAdmin(isAdmin);
      }

      resolve(true);
    });
  }

  _setNickname(nickname) {
    console.log(`- Nickname (${nickname}) set...`);
  }

  _favTopics(topics) {
    console.log(`- User favourite topics (${topics.join(",")}) subscribed!`);
  }

  _setSME(topics) {
    if (topics) {
      console.log(`- User is now an SME for ${topics.join(",")}...`);
    }
  }

  _isModerator(opt) {
    if (opt) {
      console.log(`- User registered as a Moderator!`);
    }
  }

  _isAdmin() {
    console.log("- User is now an Administrator!");
  }
}

module.exports = UserPref;
```

- Sign up interfaces

```js
const User = require("./UserClass");
const UserPref = require("./UserPrefClass");

// normal method
class Signup {
  async create(
    name,
    email,
    age,
    photo,
    nickname,
    favoriteTopics,
    isSME,
    isModerator,
    isAdmin
  ) {
    const newUser = await new User(name, email, age, photo);
    await new UserPref(
      newUser,
      nickname,
      favoriteTopics,
      isSME,
      isModerator,
      isAdmin
    );
  }
}

// using builder method
class Signup2 {
  async create({
    name,
    email,
    age,
    photo,
    nickname,
    favoriteTopics,
    isSME,
    isModerator,
    isAdmin,
  }) {
    const newUser = await new User(name, email, age, photo);
    await new UserPref(
      newUser,
      nickname,
      favoriteTopics,
      isSME,
      isModerator,
      isAdmin
    );
  }
}

module.exports = {
  SignupNormalMethod: new Signup(),
  SignupWithBuilderMethod: new Signup2(),
};
```

- Sign up Builder

```js
const {SignupWithBuilderMethod} = require("./SignupSingletonInterface");

class SignupBuilder {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  setNick(name) {
    this.nickname = name;
    return this;
  }

  setPhoto(photo) {
    this.photo = photo;
    return this;
  }

  setTopics(topics) {
    this.favoriteTopics = topics;
    return this;
  }

  setSME(topics) {
    this.isSME = topics;
    return this;
  }

  setModerator() {
    this.isModerator = true;
    return this;
  }

  setAdmin() {
    this.isAdmin = true;
    return this;
  }

  create() {
    return SignupWithBuilderMethod.create(this);
  }
}

module.exports = SignupBuilder;
```

- main

  - normal method

    ```js
    const {SignupNormalMethod} = require("./SignupSingletonInterface");

    // normal method
    SignupNormalMethod.create(
      "John Doe",
      "john@email.com",
      25,
      "johndoe.jpg",
      "john_D",
      ["JavaScript", "Node.js"],
      ["Node.js"],
      true,
      false
    );
    ```

  - using builder method

    ```js
    const SignupBuilder = require("./SignupBuilderClass");

    // using builder method
    // free to rearrange or exclude
    new SignupBuilder("John Doe", "john@email.com", 25)
      .setPhoto("johndoe.jpg")
      .setNick("John_D")
      .setTopics(["Node.js", "JavaScript"])
      .setSME(["Node.js"])
      .setModerator()
      .setAdmin()
      .create();
    ```

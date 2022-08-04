# JavaScript

```javascript
class Db {
  constructor(db) {
    this.db = db;
  }
  init(collection) {
    return this.db.defaults({[collection]: []}).write();
  }
  add({collection, data}) {
    return this.db.get(collection).push(data).write();
  }
  get(collection) {
    return this.db.get(collection).value();
  }
}

module.exports = Db;
```

```javascript
class LokiAdapter {
  constructor(lokiDb) {
    this.lokiDb = lokiDb;
    this.collection = null;
    this.op = null;
  }
  defaults(obj) {
    this.collection = Object.keys(obj)[0];
    this.op = "INIT";
    return this;
  }
  get(collection) {
    this.collection = this.lokiDb.getCollection(collection);
    return this;
  }
  push(data) {
    this.dataToPush = data;
    this.op = "WRITE";
    return this;
  }
  value() {
    return this.collection.find();
  }
  write() {
    if (this.op) {
      switch (this.op) {
        case "INIT":
          this.lokiDb.addCollection(this.collection);
          this.collection = null;
          this.op = null;
          break;
        case "WRITE":
          this.collection.insert(this.dataToPush);
          this.dataToPush = null;
          this.collection = null;
          this.op = null;
          break;
      }

      this.lokiDb.saveDatabase();
    }

    return this;
  }
}

module.exports = LokiAdapter;
```

```json
{
  "filename": "dbs.json",
  "collections": [
    {
      "name": "users",
      "data": [
        {
          "name": "John Doe",
          "age": 32,
          "meta": {"revision": 0, "created": 1608665527485, "version": 0},
          "$loki": 1
        }
      ],
      "idIndex": null,
      "binaryIndices": {},
      "constraints": null,
      "uniqueNames": [],
      "transforms": {},
      "objType": "users",
      "dirty": false,
      "cachedIndex": null,
      "cachedBinaryIndex": null,
      "cachedData": null,
      "adaptiveBinaryIndices": true,
      "transactional": false,
      "cloneObjects": false,
      "cloneMethod": "parse-stringify",
      "asyncListeners": false,
      "disableMeta": false,
      "disableChangesApi": true,
      "disableDeltaChangesApi": true,
      "autoupdate": false,
      "serializableIndices": true,
      "disableFreeze": true,
      "ttl": null,
      "maxId": 1,
      "DynamicViews": [],
      "events": {
        "insert": [],
        "update": [],
        "pre-insert": [],
        "pre-update": [],
        "close": [],
        "flushbuffer": [],
        "error": [],
        "delete": [null],
        "warning": [null]
      },
      "changes": [],
      "dirtyIds": []
    }
  ],
  "databaseVersion": 1.5,
  "engineVersion": 1.5,
  "autosave": false,
  "autosaveInterval": 5000,
  "autosaveHandle": null,
  "throttledSaves": true,
  "options": {"serializationMethod": "normal", "destructureDelimiter": "$<\n"},
  "persistenceMethod": "fs",
  "persistenceAdapter": null,
  "verbose": false,
  "events": {
    "init": [null],
    "loaded": [],
    "flushChanges": [],
    "close": [],
    "changes": [],
    "warning": []
  },
  "ENV": "NODEJS"
}
```

```javascript
const Db = require("./Db");
const {join} = require("path");

// Database File
const dbFile = join("dbs.json");

// old class
// LowDB
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const adapter = new FileSync(dbFile);
// const dbs = low(adapter);

// DB module instance
// const db = new Db(dbs);

// new class
// LokiJS
const loki = require("lokijs");
const LokiAdapter = require("./LokiAdapter");
const ldb = new loki(dbFile);
const LokiAdp = new LokiAdapter(ldb);

// DB module instance
const db = new Db(LokiAdp);

db.init("users");
db.add({
  collection: "users",
  data: {
    name: "John Doe",
    age: 32,
  },
});

console.log(db.get("users"));
```

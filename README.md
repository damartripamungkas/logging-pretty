<h1 align="center">
    LOGGING-PRETTY
</h1>

<p align="center">
 <img src="https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765" alt="licensemit" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
</p>

> > Awesome logging with option save to file
> > <img src="https://raw.githubusercontent.com/damartripamungkas/logging-pretty/master/screenshots/terminal.png">

<br>

### 💻 Step to install

```
npm install --production logging-pretty
```

### ✏️ Example

#### Typescript

```javascript
import init from "logging-pretty";
const log = init(null, "anything"); // (optional) change params 1 (null) to file path, example "./db.log"
log.info("hello world"); // output = [INFO] #anything hello world
```

#### ESM (import)

```javascript
import init from "logging-pretty";
const log = init.default(null, "anything"); // (optional) change params 1 (null) to file path, example "./db.log"
log.info("hello world"); // output = [INFO] #anything hello world
```

#### CommonJs (require)

```javascript
const { default: init } = require("logging-pretty");
const log = init(null, "anything"); // (optional) change params 1 (null) to file path, example "./db.log"
log.info("hello world"); // output = [INFO] #anything hello world
```

### 🧾 Pre-Requisistes

```
node.js
```

### 📝 License

Licensed under the [MIT License](./LICENSE).

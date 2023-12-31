<h1 align="center">
    LOGGING-PRETTY
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/damartripamungkas/logging-pretty?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="Made by" src="https://img.shields.io/static/v1?label=made%20by&message=damartripamungkas&color=04D361&labelColor=000000">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/damartripamungkas/logging-pretty?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/damartripamungkas/logging-pretty?color=04D361&labelColor=000000">
  </a>
</p>

<br>

> Awesome logging with option save to file
> <img src="https://raw.githubusercontent.com/damartripamungkas/logging-pretty/master/screenshots/terminal.png">

<br>

### 💻 Step to install :

```
npm install logging-pretty
```

### ✏️ Example :

#### Typescript

```javascript
import init from "logging-pretty";
const log = init(null, "anything");
log.info("hello world"); // output = [0000-00-00 00:00:00:000] [INFO] #anything hello world
```

#### ESM (import)

```javascript
import init from "logging-pretty";
const log = init.default(null, "anything");
log.info("hello world"); // output = [0000-00-00 00:00:00:000] [INFO] #anything hello world
```

#### CommonJs (require)

```javascript
const { default: init } = require("logging-pretty");
const log = init(null, "anything");
log.info("hello world"); // output = [0000-00-00 00:00:00:000] [INFO] #anything hello world
```

#### Usage

```javascript
const { default: init } = require("logging-pretty");

let countTask = 16;
let countTaskCompleted = 0;
let percent = 0;

/**
 * @param pathFile [optional] example "./db.log" if path dont have file, script will create and write new file
 * @param uniqTag [optional] unique tag for each log, if this is set then the log output will start with this #....
 * @param force [optional] force mode, if "pathFile" is set but this is set to "console" it will not write to the log file.
 * @param mid [optional] middleware before write to console and file, must be return string
 * @returns object
 */
const log = init(null, "anything", "all", (msg) => {
  if (tag == "INFO") {
    countTaskCompleted += 1;
    percent = (countTaskCompleted / countTask) * 100;
    return `${percent}%. ${msg}`;
  }

  return msg;
});

log.info("task writeFile completed"); // output = [0000-00-00 00:00:00:000] [INFO] #anything 6.25%. task completed
log.info("task appendFile completed"); // output = [0000-00-00 00:00:00:000] [INFO] #anything 12.5%. task completed
```

### 🧾 Pre-Requisistes :

```
node.js
```

### 📝 License :

Licensed under the [MIT License](./LICENSE).

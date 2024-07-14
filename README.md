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

<img src="./screenshots/terminal.png">

<br>

### 💻 Step to install :

```
npm install logging-pretty
```

### ✏️ Example :

```javascript
const { loggingPretty } = require(`..`);

/**
 *
 * @param pathFile [optional] example "./db.log" if path dont have file, script will create and write new file
 * @param force [optional] force mode, if "pathFile" is set but this is set to "console" it will not write to the log file.
 * @param formatTime [optional] set format date time like YYYY-MM-DD HH:mm:ss.
 * @param ovrRenderLog [optional] override function for render log.
 * @param ovrWriteLog [optional] override function for write log in file.
 * @returns object
 */
const log = loggingPretty(
  `./test/store.log`,
  `all`,
  `YYYY-MM-DD HH:mm:ss`,
  ({ strTime, strTag, strStyleTag, strStyleMsg }) => {
    // override render log
    if (strTag == `INFO`)
      console.log(`[${strTime}] ${strStyleTag}: -> -> ${strStyleMsg}`);
    if (strTag == `FAIL`)
      console.log(`[${strTime}] ${strStyleTag}: x x ${strStyleMsg}`);
  }
);

log.info(`info task`); // [2024-07-14 17:46:32] INFO: -> -> info task
log.fail(`fail task`); // [2024-07-14 17:46:32] FAIL: x x fail task
```

### 🧾 Pre-Requisistes :

```
- node.js / bun.js / deno.js
- (optional) typescript
- (optional) commonJS
- (optional) ESM
```

### 📝 License :

Licensed see [here](./LICENSE)

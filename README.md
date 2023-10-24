<h1 align="center">
    LOGGING-PRETTY
</h1>

<p align="center">
 <img src="https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765" alt="licensemit" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
</p>

> Awesome logging with option save to file
> <img src="https://github.com/damartripamungkas/logging-pretty/blob/main/screenshots/terminal.png?raw=true">

<br>

## 💻 Step to install

```
npm install logging-pretty
```

## ✏️ Example

```javascript
// ESM
// import init from "logging-pretty/index.cjs";
// const log = init.default();

const init = require("logging-pretty");
const log = init.default(); // you can also add file path, example "./db.log"
log.info("this is information message log");
log.warn("warn message lorem ipsum");
log.error("oops!! found error in function getData");
log.debug("debugging function data start from 1 ~ 5");
log.trace("tracing function data");
log.fatal("unhandleError!! found error in function getData");
log.custom(
  "LOREM",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  log.listColor.bold,
  log.listColor.whiteBright
);
log.custom(
  "Feature CronJob",
  "syncron data to database success with count data 200",
  log.listColor.bold,
  log.listColor.whiteBright
);
```

see full example on [here](./example)

## 🧾 Pre-Requisistes

```
node.js
```

## 📝 License

Licensed under the [MIT License](./LICENSE).

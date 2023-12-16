var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/log.ts
var import_chalk = __toESM(require("chalk"));

// src/time.ts
var import_dayjs = __toESM(require("dayjs"));
var time_default = () => (0, import_dayjs.default)().format("YYYY-MM-DD HH:mm:ss:SSS");

// src/writeFile.ts
var import_promises = require("fs/promises");
var writeFile_default = (pathFile, msg) => (0, import_promises.appendFile)(pathFile, msg + "\n");

// src/log.ts
var init = (pathFolderLog, hashTag, enableConsole = true, clearBeforeStart = false) => {
  const { red, green, yellow, cyan, blue, bgRed } = import_chalk.default;
  const isFoundPathFolderLog = pathFolderLog === null || pathFolderLog === void 0 ? null : true;
  if (clearBeforeStart === true && isFoundPathFolderLog === true) {
    console.clear();
    writeFile_default(pathFolderLog, "");
  }
  const renderLog = (tag, msg, chalkFunc, chalkFuncBackground) => {
    const time = time_default();
    msg = hashTag === void 0 || hashTag === null ? msg : `#${hashTag} ${msg}`;
    chalkFuncBackground = chalkFuncBackground === void 0 ? msg : chalkFuncBackground(msg);
    if (enableConsole === true) {
      console.log(`[${time}] [${chalkFunc(tag)}] ${chalkFuncBackground}`);
    }
    if (isFoundPathFolderLog === true) {
      writeFile_default(pathFolderLog, `[${time}] [${tag}] ${msg}`);
    }
  };
  return {
    info: (msg) => renderLog("INFO", msg, green, void 0),
    warn: (msg) => renderLog("WARN", msg, yellow, yellow),
    error: (msg) => renderLog("ERR", msg, red, red),
    success: (msg) => renderLog("SUCCESS", msg, green, green),
    debug: (msg) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag, msg, colorTag = import_chalk.default.bold, colorMsg = import_chalk.default.white) => renderLog(tag, msg, colorTag, colorMsg),
    listColor: import_chalk.default,
    _renderLog: renderLog
  };
};
var log_default = init;

// src/index.ts
var src_default = log_default;

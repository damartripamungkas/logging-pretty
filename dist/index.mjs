// src/log.ts
import chalk from "chalk";

// src/time.ts
import dayjs from "dayjs";
var time_default = () => dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");

// src/writeFile.ts
import { appendFile, writeFile } from "fs/promises";
var append = (pathFile, msg) => appendFile(pathFile, msg + "\n");

// src/log.ts
var init = (pathFile, uniqTag, force) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFolderLog = pathFile === null || pathFile === void 0 ? false : true;
  force = force ? force : isFoundPathFolderLog ? "all" : "console";
  const renderLog = (tag, msg, colorUniqTag, colorMsg) => {
    msg = uniqTag === void 0 || uniqTag === null ? msg : `#${uniqTag} ${msg}`;
    colorMsg = colorMsg === void 0 ? msg : colorMsg(msg);
    const time = time_default();
    if (force == "console" || force == "all") {
      console.log(`[${time}] [${colorUniqTag(tag)}] ${colorMsg}`);
    }
    if (isFoundPathFolderLog) {
      if (force == "file" || force == "all") {
        append(pathFile, `[${time}] [${tag}] ${msg}`).then((res) => console.log({ res }));
      }
    }
  };
  return {
    info: (msg) => renderLog("INFO", msg, green, void 0),
    warn: (msg) => renderLog("WARN", msg, yellow, yellow),
    error: (msg) => renderLog("ERROR", msg, red, red),
    success: (msg) => renderLog("SUCCESS", msg, green, green),
    debug: (msg) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag, msg, colorUniqTag = chalk.bold, colorMsg = chalk.white) => renderLog(tag, msg, colorUniqTag, colorMsg),
    _listColor: chalk,
    _renderLog: renderLog
  };
};
var log_default = init;

// src/index.ts
var src_default = log_default;
export {
  src_default as default
};

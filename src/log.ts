import chalk from "chalk"
import getTimeNow from "./time"
import { append } from "./writeFile"
type TypeArgs = string | null

/**
 * @param pathFile example "./db.log" if path dont have file, script will create and write new file
 * @param uniqTag unique tag for each log, if this is set then the log output will start with this #....
 * @param force force mode, if "pathFile" is set but this is set to "console" it will not write to the log file.
 * @returns object
 */
const init = (pathFile: TypeArgs, uniqTag: TypeArgs, force?: "console" | "file" | "all") => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk
  const isFoundPathFolderLog = pathFile === null || pathFile === undefined ? false : true
  force = force ? force : isFoundPathFolderLog ? "all" : "console"

  const renderLog = (tag: string, msg: string, colorUniqTag: any, colorMsg: any) => {
    msg = uniqTag === undefined || uniqTag === null ? msg : `#${uniqTag} ${msg}`
    colorMsg = colorMsg === undefined ? msg : colorMsg(msg)

    const time = getTimeNow()
    if (force == "console" || force == "all") {
      console.log(`[${time}] [${colorUniqTag(tag)}] ${colorMsg}`)
    }

    if (isFoundPathFolderLog) {
      if (force == "file" || force == "all") {
        append(pathFile, `[${time}] [${tag}] ${msg}`).then((res) => console.log({ res }))
      }
    }
  }

  return {
    info: (msg: string) => renderLog("INFO", msg, green, undefined),
    warn: (msg: string) => renderLog("WARN", msg, yellow, yellow),
    error: (msg: string) => renderLog("ERROR", msg, red, red),
    success: (msg: string) => renderLog("SUCCESS", msg, green, green),
    debug: (msg: string) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg: string) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg: string) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag: string, msg: string, colorUniqTag = chalk.bold, colorMsg = chalk.white) => renderLog(tag, msg, colorUniqTag, colorMsg),
    _listColor: chalk,
    _renderLog: renderLog,
  }
}

export default init

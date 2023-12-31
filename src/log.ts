import chalk from "chalk"
import dayjs from "dayjs"
import { appendFile } from "node:fs/promises"

type TypeArgs = string | null
type TypeMid = (msg: string) => string

const getTimeNow = () => {
  return dayjs().format("YYYY-MM-DD HH:mm:ss:SSS")
}

/**
 * @param pathFile [optional] example "./db.log" if path dont have file, script will create and write new file
 * @param uniqTag [optional] unique tag for each log, if this is set then the log output will start with this #....
 * @param force [optional] force mode, if "pathFile" is set but this is set to "console" it will not write to the log file.
 * @param mid [optional] middleware before write to console and file, must be return string
 * @returns object
 */
const init = (pathFile?: TypeArgs, uniqTag?: TypeArgs, force?: "console" | "file" | "all", mid?: TypeMid) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk
  const isFoundPathFile = pathFile === null || pathFile === undefined ? false : true
  force = force ? force : isFoundPathFile ? "all" : "console"
  mid = mid === null || mid === undefined ? (msg: string) => msg : mid

  const renderLog = (tag: string, msg: string, colorUniqTag: any, colorMsg: any) => {
    msg = mid(msg)
    msg = uniqTag === undefined || uniqTag === null ? msg : `#${uniqTag} ${msg}`

    const time = getTimeNow()
    if (force == "console" || force == "all") {
      colorMsg = colorMsg === undefined ? msg : colorMsg(msg)
      console.log(`[${time}] [${colorUniqTag(tag)}] ${colorMsg}`)
    }

    const txtFile = `[${time}] [${tag}] ${msg}\n`
    if (isFoundPathFile) {
      if (force == "file" || force == "all") {
        appendFile(pathFile, txtFile)
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

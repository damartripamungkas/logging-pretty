import chalk from "chalk"
import dayjs from "dayjs"
import { appendFile } from "node:fs/promises"
const { red, green, yellow, cyan, blue, bgRed, bold, white } = chalk

/**
 * Interface for Logger options
 */
type TypeArgs = string | null
type TypeForce = `console` | `file` | `all`
type LoggerOptions = {
  pathFile?: TypeArgs
  force?: TypeForce
  formatTime?: string
}

/**
 * Logger class for handling logging functionality
 */
class LoggingPretty {
  private pathFile?: TypeArgs
  private force: TypeForce
  private formatTime: string
  private isHavePathFile: boolean

  /**
   * Create a new Logger instance
   *
   * @param options Logger configuration options
   */
  constructor(options: LoggerOptions = {}) {
    const { pathFile, force, formatTime } = options

    this.pathFile = pathFile
    this.isHavePathFile = pathFile ? true : false

    // Set default force mode based on pathFile
    if (!force) {
      this.force = this.isHavePathFile ? "all" : "console"
    } else {
      this.force = force
    }

    // Set default format time
    this.formatTime = formatTime || "YYYY-MM-DD HH:mm:ss:SSS"
  }

  /**
   * Get current time in specified format
   *
   * @param format Time format string
   * @returns Formatted time string
   */
  public _getTimeNow(format: string): string {
    return dayjs().format(format)
  }

  /**
   * Default method for rendering logs to console
   * Override this method to customize console output
   *
   * @param logData Log data object
   */
  public _renderLogToConsole(logData: { strTime: string; strTag: string; strStyleTag: string; strMsg: string; strStyleMsg: string }): void {
    const { strTime, strStyleTag, strStyleMsg } = logData
    console.log(`[${strTime}] [${strStyleTag}] ${strStyleMsg}`)
  }

  /**
   * Default method for writing logs to file
   * Override this method to customize file output
   *
   * @param logData Log data object
   */
  public _writeLogToFile(logData: { strTime: string; strTag: string; strStyleTag: string; strMsg: string; strStyleMsg: string }): void {
    const { strTime, strTag, strMsg } = logData
    const txtFile = `[${strTime}] [${strTag}] ${strMsg}\n`
    appendFile(this.pathFile!, txtFile)
  }

  /**
   * Render log message with formatting
   *
   * @param strTag Log tag (e.g., INFO, ERROR)
   * @param strMsg Log message
   * @param colorTag Function to color the tag
   * @param colorMsg Function to color the message
   */
  public _log(strTag: string, strMsg: string, colorTag: any, colorMsg: any): void {
    const strTime = this._getTimeNow(this.formatTime)
    const strStyleTag = colorTag(strTag)

    // Console output
    if (this.force === "console" || this.force === "all") {
      let strStyleMsg = strMsg
      if (colorMsg) {
        strStyleMsg = colorMsg(strMsg)
      }

      this._renderLogToConsole({ strTime, strTag, strStyleTag, strMsg, strStyleMsg })
    }

    // File output
    if (this.isHavePathFile) {
      if (this.force === "file" || this.force === "all") {
        this._writeLogToFile({ strTime, strTag, strStyleTag, strMsg, strStyleMsg: strMsg })
      }
    }
  }

  /**
   * Log an info message
   * @param msg Message to log
   */
  public info(msg: string): void {
    this._log("INFO", msg, green, undefined)
  }

  /**
   * Log a warning message
   * @param msg Message to log
   */
  public warn(msg: string): void {
    this._log("WARN", msg, yellow, yellow)
  }

  /**
   * Log an error message
   * @param msg Message to log
   */
  public error(msg: string): void {
    this._log("ERROR", msg, red, red)
  }

  /**
   * Log a success message
   * @param msg Message to log
   */
  public success(msg: string): void {
    this._log("SUCCESS", msg, green, green)
  }

  /**
   * Log a failed message
   * @param msg Message to log
   */
  public failed(msg: string): void {
    this._log("FAILED", msg, red, red)
  }

  /**
   * Log a fail message
   * @param msg Message to log
   */
  public fail(msg: string): void {
    this._log("FAIL", msg, red, red)
  }

  /**
   * Log a debug message
   * @param msg Message to log
   */
  public debug(msg: string): void {
    this._log("DEBUG", msg, cyan, cyan)
  }

  /**
   * Log a trace message
   * @param msg Message to log
   */
  public trace(msg: string): void {
    this._log("TRACE", msg, blue, blue)
  }

  /**
   * Log a fatal message
   * @param msg Message to log
   */
  public fatal(msg: string): void {
    this._log("FATAL", msg, red, bgRed)
  }

  /**
   * Log a custom message with custom tag and colors
   * @param tag Custom tag
   * @param msg Message to log
   * @param colorUniqTag Function to color the tag
   * @param colorMsg Function to color the message
   */
  public custom(tag: string, msg: string, colorUniqTag = bold, colorMsg = white): void {
    this._log(tag, msg, colorUniqTag, colorMsg)
  }

  /**
   * Get the chalk instance for custom coloring
   */
  public get _listColor(): typeof chalk {
    return chalk
  }
}

export { LoggingPretty }
export default LoggingPretty

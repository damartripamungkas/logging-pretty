import { appendFile } from "node:fs/promises";

export default (pathFile: string, msg: string) => appendFile(pathFile, msg + "\n");

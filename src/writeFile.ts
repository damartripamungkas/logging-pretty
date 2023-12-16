import { appendFile, writeFile } from "node:fs/promises";

const append = (pathFile: string, msg: string) => appendFile(pathFile, msg + "\n");
const write = (pathFile: string, msg: string) => writeFile(pathFile, msg);
export { append, write };

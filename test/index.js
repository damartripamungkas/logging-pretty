// CommonJs (require)
const { default: init } = require("..");

let countTask = 16;
let countTaskCompleted = 0;
let percent = 0;
const log = init("./log.txt", null, "console", (msg, tag) => {
  if (tag == "INFO") {
    countTaskCompleted += 1;
    percent = (countTaskCompleted / countTask) * 100;
    return `${percent}%. ${msg}`;
  }

  return msg;
});

setInterval(() => {
  log.info(`process has been completed`);
}, 1000);

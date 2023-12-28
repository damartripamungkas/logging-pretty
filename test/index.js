// CommonJs (require)
const { default: init } = require("..");
const log = init("./log.txt", null, "all");

setInterval(() => {
  log.info(`hello world, random: ${Math.random()}`);
}, 1000);

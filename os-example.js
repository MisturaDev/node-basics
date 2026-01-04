const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Free memory (MB):", os.freemem() / 1024 / 1024);
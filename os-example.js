const os = require("os");

// Basic info
console.log("Operating System Info:");
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
console.log("Free Memory:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");
console.log("Uptime (seconds):", os.uptime());

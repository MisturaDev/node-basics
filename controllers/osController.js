const os = require("os");

const getOSInfo = (req, res) => {
  const osInfo = {
    type: os.type(),
    platform: os.platform(),
    architecture: os.arch(),
    cpuCores: os.cpus().length,
    totalMemoryGB: (os.totalmem() / (1024 ** 3)).toFixed(2),
    freeMemoryGB: (os.freemem() / (1024 ** 3)).toFixed(2),
    uptimeSeconds: os.uptime(),
  };

  res.status(200).json({
    message: "OS info retrieved successfully",
    data: osInfo,
  });
};

module.exports = { getOSInfo };

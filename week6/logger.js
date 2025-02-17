let version = 2.6;

function log() {
   console.log("logged successfully");
}

// Export both log function and version variable
module.exports = { log, version };

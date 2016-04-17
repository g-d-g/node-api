global.serverRunning = false;
exports.setup = function () {
  if (!global.serverRunning) {
    // TODO: DB setup

    require(process.cwd() + '/bin/www');
    global.serverRunning = true;
  }
};

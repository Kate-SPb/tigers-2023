const fs = require('fs');

function addSomeInfo(path, text) {
  fs.appendFileSync(path, `\n${text}`);
}

module.exports = addSomeInfo;

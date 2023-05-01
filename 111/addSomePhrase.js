const fs = require('fs');

function addSomePhrase(path, phrase) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  fs.appendFileSync(`${path}/phrases.txt`, `\n${phrase}`);
}

module.exports = addSomePhrase;

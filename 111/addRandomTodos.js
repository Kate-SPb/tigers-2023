const fs = require('fs');

function addRandomTodos(arrayNames) {
  for (let i = 0; i < arrayNames.length; i += 1) {
    if (!fs.existsSync('./todos')) {
      fs.mkdirSync('./todos');
    }
    const phrases = fs.readFileSync('./phrases/phrases.txt', 'utf-8').trim().split('\n');
    const random = Math.floor(Math.random() * phrases.length);
    fs.appendFileSync('./todos/todos.txt', `${arrayNames[i]}: ${phrases[random]}\n`);
  }
}

module.exports = addRandomTodos;

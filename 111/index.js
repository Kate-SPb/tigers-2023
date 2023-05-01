const fs = require('fs');

const addSomePhrase = require('./addSomePhrase');
const addSomeInfo = require('./addSomeInfo');
const addRandomTodos = require('./addRandomTodos');

const { names, pathPhrases } = require('./data');

// const { minus, sum } = require('./math');

// const obj = {
//   name: 'Alex',
//   age: 30,
//   salary: 500_000,
// };

// const { name, age, salary } = obj;
// if (!fs.existsSync('./data')) {
//   fs.mkdirSync('./data');
// }
// const fileName = './data/test.txt';
// fs.writeFileSync(fileName, 'Hello tigers! =)');

// fs.appendFileSync(fileName, '\nBye tigers! =(');
// const result = fs.readFileSync(fileName, 'utf-8');
// fs.unlinkSync(fileName);

const ourPhrase = process.argv[2];

addSomePhrase(pathPhrases, ourPhrase);

addRandomTodos(names);

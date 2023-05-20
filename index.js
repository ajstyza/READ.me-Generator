const fs = require('fs');
const math = require('./maths.js')

fs.readFile('maths.js', 'utf-8', (error, math) =>
error ? console.error(error) : console.log(math.nameQ)


);
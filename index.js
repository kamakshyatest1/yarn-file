
const _ = require('lodash');

// Vulnerable use of lodash's merge function
let a = { x: true };
let b = { y: true };
console.log(_.merge(a, b));

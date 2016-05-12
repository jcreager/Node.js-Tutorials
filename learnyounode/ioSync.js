//demonstrates how solution can be done in a single line.
console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1)

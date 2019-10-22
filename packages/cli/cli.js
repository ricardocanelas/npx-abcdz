#!/usr/bin/env node

const path = require('path')
const fs = require('fs')


console.log("is it working?")

const mainjs = path.join(__dirname, '..', '..', 'dist', 'main.js');

const ownPath = path.dirname(
  require.resolve(path.join(__dirname, '..', '..', 'dist', 'main.js'))
);

console.log('main.js', mainjs);
console.log('ownPath', ownPath);

// const files = [
//   { filename: './../../dist/main.js', output: 'main.js' },
// ]

const content = fs.readFileSync(mainjs)
console.log(content.toString());
// const output = './' + files[0].output

// fs.writeFileSync(output, content.toString())

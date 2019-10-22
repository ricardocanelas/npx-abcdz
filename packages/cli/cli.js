#!/usr/bin/env node

const path = require('path')
const fs = require('fs-extra')

console.log("is it working?")

const indexjs = path.join(__dirname, 'index.js');
// const mainjs = path.join(__dirname, '..', '..', 'dist', 'main.js');

// const ownPath = path.dirname(
//   require.resolve(path.join(__dirname, '..', '..', 'dist', 'main.js'))
// );

console.log('index.js', indexjs);
// console.log('main.js', mainjs);
console.log('ownPath', ownPath);

const contentIndex = fs.readFileSync(indexjs)
console.log(contentIndex.toString());

// const contentMain = fs.readFileSync(mainjs)
// console.log(contentMain.toString());

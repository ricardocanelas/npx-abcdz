#!/usr/bin/env node

const path = require('path')
const fs = require('fs-extra')

console.log("--------------------------------------")
const indexjs = path.join(__dirname, 'index.js');
console.log('index.js', indexjs);
const contentIndex = fs.readFileSync(indexjs)
console.log(contentIndex.toString());

console.log("--------------------------------------")
const mainjs = path.join(__dirname, '..', '..', 'dist', 'main.js');
console.log('main.js', mainjs);
const contentMain = fs.readFileSync(mainjs)
console.log(contentMain.toString());

console.log("--------------------------------------")
#!/usr/bin/env node

console.log("is it working?")

const files = [
  { filename: './../../dist/main.js', output: 'main.js' },
]

const content = fs.readFileSync(files[0].filename)
const output = './' + files[0].output

fs.writeFileSync(output, content.toString())
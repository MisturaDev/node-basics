const fs = require("fs");

// Write a file
fs.writeFileSync("hello.txt", "Hello from Node.js!");

// Read the file
const content = fs.readFileSync("hello.txt", "utf-8");
console.log(content);
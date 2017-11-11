const Task = require('./task.js').Task;

const myTask = new Task('important stuff');

console.log(myTask);
console.log(myTask.__proto__);

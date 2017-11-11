const Task = function (name) {
    this.name = name;
    this.isCompleted = false;
};

Task.prototype.complete = function () {
    console.log(`Completing Task: ${this.name}`);
    this.isCompleted = true;
}

Task.prototype.save = function () {
    console.log(`Saving Task: ${this.name}`);
}

module.exports = { Task };

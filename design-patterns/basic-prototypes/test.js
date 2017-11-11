'use strict';

// base prototype
function Creature(action) {
    Object.defineProperty(this, 'action', {
        value: action,
        writable: false,
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, 'do', {
        value: function () {
            console.log(this.action)
        },
        writable: false,
        enumerable: true,
        configurable: true
    });
}

// specific prototype
function Person(name, age, action) {

    Creature.call(this, action);

    Object.defineProperty(this, 'name', {
        value: name,
        writable: true,
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, 'age', {
        value: age,
        writable: true,
        enumerable: true,
        configurable: true
    });
}

// prototypal chaining + constructor setting
Person.prototype = Object.create(Creature.prototype);
Person.prototype.constructor = Person;

// instantiation
const me = new Person('gosho', 42, 'talk trash');
console.log(me);

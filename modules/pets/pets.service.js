const Queue = require('../queue/Queue');
const store = require('../../store');

const Pets = {
    cats: new Queue(),
    dogs: new Queue()
};

store.cats.forEach(cat => Pets.cats.enqueue(cat));
store.dogs.forEach(dog => Pets.dogs.enqueue(dog));

module.exports = {
    get(type) {
        //return the Pets next in line to be adopted
        if (type === 'cats') return Pets.cats.show();
        if (type === 'dogs') return Pets.dogs.show();
    },

    getAll() {
        return { cats: [...Pets.cats.all()], dogs: [...Pets.dogs.all()] }
    },

    dequeue(type) {
        //remove a pet from the queue
        if (type === 'cats') Pets.cats.dequeue();
        if (type === 'dogs') Pets.dogs.dequeue();
    }
};
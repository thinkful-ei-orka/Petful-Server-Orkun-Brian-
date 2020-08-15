const Queue = require('../queue/Queue')
const store = require('../../store')


const people = new Queue()
store.people.forEach(person => people.enqueue(person))



module.exports = {
  get() {
      //return all people in the queue
      return people.all();
  },

  enqueue(person) {
      //Add a person to queue
      return people.enqueue(person);
  },

  dequeue() {
      //remove a person from queue
      return people.dequeue();
  }
}

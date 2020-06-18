
gre = function() {
  console.log('Hi! I\'m ' + this.name + '.');
}
const person1 = {
  name: 'Chris',
  greeting: gre,
}

const person2 = {
  name: 'Deepti',
  greeting: gre,
}

person1.greeting()  // Hi! I'm Chris.
person2.greeting()  // Hi! I'm Deepti.
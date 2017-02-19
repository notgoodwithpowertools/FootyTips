class Person {

  constructor (name = 'Anon', age = undefined) {
    this.name = name;
    console.log(`Constructing ${name} who is ${age} years old`);
    this.age = age;
  }

  getGreeting (type = 'standard' ) {
    console.log('getGreeting - type:', type);
    if (type == 'standard') {
      return `Hi! I'm ${this.name}`
    }
    else {
      return `Why don't you piss off ! I'm ${this.name}`
    }
  }

  getDescription () {
    if (this.age == undefined) {
      return `We don't know how old ${this.name} is??`
    }
    else {
      return `${this.name} is ${this.age} years old`
    }
  }

  toString () {
    return this.name;
  }

}

class Child extends Person {

  constructor (name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }

  getGreeting () {
    return `Hi - I'm a child and my name is ${this.name}`
  }

  getHobby () {
    return `${this.hobby}`

  }
}

class Baby extends Person {
  getGreeting () {
    return `whaaaaaa`
  }
}

var me = new Person('Andrew');
console.log('Me:', me.getGreeting('angry'));
console.log('ToString:', me.toString());
console.log('Desc:', me.getDescription());


var person2 = new Child('Joel', 0);
console.log('Person2:', person2.getGreeting());
console.log('ToString:', person2.toString());
console.log('Desc:', person2.getDescription());

var person3 = new Child(undefined, undefined, 'Riding Bikes');
console.log('Person3:', person3.getGreeting());
console.log('ToString:', person3.toString());
console.log('Desc:', person3.getDescription() + ' Hobby:', person3.getHobby());

var baby = new Baby('Wally', 1);
console.log('Person3:', baby.getGreeting());
console.log('ToString:', baby.toString());
console.log('Desc:', baby.getDescription());

var obj = {
  name: 'Andrew',
  printName: function () {
    console.log(`My name is ${this.name}`);
  }
}

obj.printName();
setTimeout(obj.printName.bind(obj), 1000);

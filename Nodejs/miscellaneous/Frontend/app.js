// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`hi, my name is ${this.name}`);
//         },
//     };
//     return person;

// }




// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi , my name is ${this.name}`);
// }

// let p1 = new Person("vivek",22);
// let p2 = new Person("ayush",21);



class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi ,my name is ${ this.name}`);
    }
}

let p1 = new Person("vivek",22);
let p2 = new Person("ayush",21);


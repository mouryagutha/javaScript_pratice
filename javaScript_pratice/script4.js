//object destructing
// in js is a feature  that allow  you extract the properties of objects into variable

const  person = {
    firstname :"elon",
    lastname :"musk"
}

// let fname = person.firstname;
// let lname = person.lastname;

//or

let {firstname:fname , lastname:lname, age = 45} = person;

console.log(age);

//javascript class
//and
//getter and setter

function Person1(name ,age)
{
    this.name = name;
    this.age = age;
}
1
const person2 = new Person1("elon musk" , 58);

console.log(person2);

class Person{
    constructor(name ,age)
    {
        this.name =name;
        this.age = age;
    }
    // get greet()
    // {
    //     return "hello "+ this.name;
    // }
    set changename(newname){
        this.name = newname;
    }
}

const person1 = new Person("elon musk ", 56);


console.log(person1.greet);
person1.changename = "mourya kumar"
console.log(person1);


class car {
    constructor(name,model)
    {
        this.name = name;
        this.model = model;
    }
    set carname(newname){
        this.name = newname;
    }
    get carname()
    {
        return this.name
    }
}

const car1 = new car("wm","vinto");

console.log(car1);
car1.carname = "bmw";
console.log(car1);

//javascript class expression

let person4 = class {
   constructor(name){
    this.name = name
   }
   getname()
   {
    return this.name
   }
}

const person5 = new person4("hello floks");
console.log(person5);




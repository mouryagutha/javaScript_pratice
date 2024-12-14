//object prototype

// const person = {
//     name: 'elon'
// }
// console.log(person);

//prototype inheritence

function person1(fname, lname)
{
    this.firstname = fname,
    this.lastname = lname
}

person1.prototype.getfullname = function(){
    return  this.firstname + " "+this.lastname;
};

person1.prototype.gender = "male";

const person2 = new person1("elon" ,"musk");
const person3 = new person1("bill" ," gates");

console.log(person2.gender);
console.log(person3.getfullname());

//changing the prototype

function  person_1()
{
    this.name = "Elon musk"
}
person_1.prototype.age = 25;

const person_2 = new person_1();

person_1.prototype = {age:58}

const person_3 = new person_1();

console.log(person_2);
console.log(person_3);






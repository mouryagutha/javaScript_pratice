function display(results) {
    console.log('Display function called with result:', results);
}

function add(num1, num2, mycallback) {
    console.log('mycallback is:', mycallback);
    let sum = num1 + num2;
    mycallback(sum);
}

add(10, 20, display);


//objects 

const person = {
    firstname: "elon",
   "last name" :"musk",
    age:40
}

console.log(typeof person);
console.log(person);

//access of objects properties

console.log(person.firstname,person["last name"]);

//update the porperties

person.firstname = "mourya";
console.log(person.firstname);

//add new porperties

person.company = "google";

console.log(person);

//delete properties

delete person.age;
console.log(person);

//nested objects 

person.address = {
    street :"sbi colony",
    town : "madanapalle",
    state :"AP",
    country :" india"

}

console.log(person.address.street);

//check the properties

console.log("age" in person);

for(let prop in person)
    {
       // console.log(prop);
        console.log(prop +" " +person[prop]);
    }


//create the object
const person2 = new Object({firstname : "modi",
    lastname :"jii",
    age : 70});

// person2.firstname = "modi";
// person2.lastname = "jii";
// person2.age = 70;


console.log(person2);




//javascript objects methods

const person3 = {
    firstname : "mourya",
    lastname: "kumar",
    greet: function (){
        console.log("hello world");
    }
}

person3.greet();

//this keyword

const person4 = {
    firstname : "elon",
    lastname : "musk",
    // greet : function(){
    //     console.log("hello "+ this.firstname);
    // } 

    getfullname : function()
    {
        return this.firstname+ " "+ this.lastname;
    }
    

}
console.log(person4.firstname);
//person4.greet();
console.log(person4.getfullname()); 

console.log(this);


//connstrucor function

// const person5 = {
//     firstname : "iron",
//     lastname : "man"
// }

function person5(first ,last){
    this.firstname =first,
    this.lastname =last
}

const person6 = new person5("iron","man");
const person7 = new person5("super","man");

console.log(person6);
console.log(person7);
person6.age = 60;
console.log(person6.age);

person6.greet = function () {
    console.log("hello, greatstack");

}

person6.greet();
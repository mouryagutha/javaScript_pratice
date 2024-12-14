//inheritence
//super class
// method overriding

class person{
    constructor(name)
    {
        this.name = name;
    }
    greet(){
        console.log("hello" + this.name);
    }
}
class student extends person{
     
    // constructor(name){
    //     super(name);
    // }

    greet()
    {
        console.log("hello student " + this.name);// overriding
    }
}
const student1 = new student("peter");

student1.greet();







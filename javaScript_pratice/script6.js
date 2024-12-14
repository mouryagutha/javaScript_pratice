//static methods
class person{
    constructor(name)
    {
        this.name = name;

    }
    static greet(x)
    {
        console.log("helo "+ x.name);
    }

}

const person1 = new person("lufy");

person.greet(person1);

//priavte methods

class lufy
{
    constructor(firstname,lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    #fullname()// private method
    {
        return this.firstname +" "+ this.lastname;
    }
    display()
    {
        console.log(this.#fullname());
    }
}

const lufyson = new lufy("jackson"," D");

lufyson.display();


//document object model (DOM) is api for manuplucation the html
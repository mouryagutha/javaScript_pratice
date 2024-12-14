
document.write("this also sample text");

console.log("javascript pratise")


//var or let or const

var x = 30;


if(x>10)
    {
        let y = 40;
        console.log(y);
    }

console.log(x);

const a =4;

console.log(a);

let b = 2;

console.log(b);


var c = "hello, hi this mourya";//Global scope variable
function example(){
    console.log(c);

    let n = 5;//function scope varable

    console.log(n);
}
example();


function example1(){
    if(true)
        {
            let bv = "block scope"; // block scope variable
            console.log(bv);
        }
        
}
example1();

/// data types in javascripts

//string
let firstname = "elon";//double quote
let lastname = 'musk';//single quote

//numbers
let num = 96.0;

console.log(num);

let xx= '10';

console.log(typeof xx);

//bollean
// true or false

let learning = true;
let complete = false;

console.log(learning);
console.log(typeof learning);
console.log(complete);

let bx = 20 > 10;
console.log(bx);

//undefined

let age ;
console.log(age);
console.log(typeof age);

//NULL

let number = null;
console.log(number);
console.log(typeof number);

console.log(null == undefined);

//reference data types 
//object

let person = {
    firstName : 'elon',
    LastName : 'musk',
    age : 40
};

console.log(person);
console.log(typeof person);

//array

let nums =[1,2,3,4,5,6];
console.log(nums);
console.log(typeof nums);

//function

function msg()
{
    console.log("hello this is mourya");
}

console.log(msg);
console.log(typeof msg);

//data types

let dx;
console.log(dx);
console.log(typeof dx);

dx = "again this is mourya";
console.log(dx);
console.log(typeof dx);

dx = 100;
console.log(dx);
console.log(typeof dx);

dx = true;
console.log(dx);
console.log(typeof dx);

//operators

//arithmetic
//assignment
//comparison
//logical
//string

//1

let sum = 5 +3;
console.log(sum);

let sub = 5-3;
console.log(sub);

let mul = 5*3;
console.log(mul);

let div = 5/3;
console.log(div);

let rem = 15%3;
console.log(rem);

let expo = 2 ** 4;// exponentation
console.log(expo);


//assignments operator

let ass1 = 5;
ass1+=3;

console.log(ass1);

ass1 *=4;
console.log(ass1);

ass1 %= 4;
console.log(ass1);

//increment and decrement operator

let ass2 =10;
console.log(++ass2);
console.log(ass2);

console.log(--ass2);
console.log(ass2);

console.log(ass2++);
console.log(ass2);

console.log(ass2--);
console.log(ass2);

//comparison operators

//<
//>
//<=
//>=
//==
//!=
//===
//!==
//

let ca = 10;
let cb = 20;

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

console.log(a==b);
console.log(a!=b);

console.log(a===b);
console.log(a!==b);

//logical operators
// && || !

let lx = 5;
let ly = 10;

console.log(lx>0 && ly>0);


//string operators
console.log("hello"+" world");

let sa = 'javascrpt';

sa+=' class';
console.log(sa);

//operator precedence
let results = 2+3*4;

console.log(results);


//operator associativity
//left to right
// right ot left
let oresult = 4-2-1;
console.log(oresult);

let oresult1 = 2 ** 3 ** 2;

console.log(oresult1);

//condiitonal operators
//if 
// else
//else if

if(true)
    {
        console.log("execute");
    }

if(false)
    {
        console.log("no");
    }

let age1= 20;

if(age1 >18)
    {
       console.log("your are adult");
    }

let country = "india";

let age3= 20;
if(age3 >18 && country =="india")
    {
       console.log("you can get driving licence ");
    }


if(age> 18)
    {
        console.log("your are the adult");

    }
else
{
    console.log("your are the not adult");
}

if(age > 18)
    {
        console.log("your are the adult");
    }
else if(age >= 16)
    {
        console.log("your are the teenager");
    }
else 
{
    console.log("not a adult");
}

//switch

let swi_value = 42;

switch(typeof swi_value)
{
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("String");
        break;
    case "boolean":
        console.log("boolean");
        break;
    default :
    console.log("other");
    break;
}

//ternary operator

let tage = 20;
let tmsg = (age >=18) ?"your are an adult":"your are a minor";

console.log(tmsg );

//for loop 
// for(let i=0 ;i<10 ;i++)
//     {
//        // console.log("hi this mourya");
//         console.log(i);

//     }


let coding = ["javascript","python", "java"]

for(let i = 0;i<coding.length;i++)
    {
        console.log(coding[i]);
    }

for(let i = 1;i<=5;i++)
    {
        console.log(i);
        for(let j= 1;j<=3;j++)
            {
                console.log("inner loop"+j);
            }
    }


//while loop

let wi = 0;
while(wi<=10)
    {
        console.log(wi);
        wi++;
    }

//do while

let doi = 1;
do{
    console.log(doi);
    doi++;
}
while(doi<=5);

// break and continue

console.log("---------------");

for(let i = 1; i<=5 ;i++)
    {
        if(i==3)
            {
                break;
            }
            console.log(i);
        
    }
    for(let i = 1; i<=5 ;i++)
        {
            if(i==3)
                {
                        continue;
                }
                console.log(i);
        }

console.log("------------------");

//functions

function funtionname()
{
    console.log("hello");
}

funtionname();

//parameters and arguments

function greet(firstname, lastname,value)
{
 console.log("hello "+firstname +" "+ lastname );
 console.log("hello "+firstname +" "+ lastname+" "+value );
 
}

greet("mourya","kumar");
greet(200,500,5);

//default parameters

function sums(x=0,y=0) 
{
    console.log(x+y);        
}
sums(4);//4 + undefine = NaN(not a number)
sums(4,20);

//funtion return

function add(a,b)
{
    return a+b;
}
let result=add(10,20);
console.log("the sum is "+result);


function fx1(x)
{
    function fx2(y)
    {
        return x*y;
    }
    return fx2;
}
let fresults = fx1(2);
console.log(fresults);
console.log(fresults(3));

//callbacks 
const display = (result) => {
    console.log(result);
}

function add(num11, num22, display2) {
    let sum1 = num11 + num22;
    display2(sum1);
}

add(10, 20, display);



const a=10;
const b=20;

const sum = (a,b) => a+b;

console.log(sum(a,b));

const ar = [4,5,3,2];
console.log(ar[2])
console.log(ar[1]);


let person = {
    name: "saiful",
    email: "s.saifulbubt@gmail.com",
    print: function(){
        console.log("hello "+this.name);
        console.log('emial '+this.email);
        
    }
}
person.print();

//////template string

const name = "saiful";
const id = 12345678;
const address = "dhaka";

// const details = "name :"+name+" id :"+id+" address "+address;

const details = `name ${name}; id ${id}; address ${address}`
console.log(details);


///////////////
//////////////// arrow function

const obj ={
    name : "bubt",
    address: "mirpur",
    subject: "math",

    print(){
        setTimeout(() =>{
            console.log(this.subject)
        }, 2000)
        
    }
}

obj.print()


////////////default parameter

let add = (a, b) => a*b;
console.log(add(10, 5));

let addition = (x, y=x) => x*y;
console.log(addition(10));

const multy = (m=1, n=m) => m*n;
console.log(multy());


/////////// Rest operator

function summation(...num){
    console.log(num);
    return num.reduce((a,b) => a+b);
  
}
let re = summation(10,20,30,40)
console.log(re);


/////////////////// spread operator

let r =[2,4,5,];

let v =[...r, 6,7 ,8]
console.log(v);
/////
let obj1 ={
    name: 'saif',
    email: 'wp@gmail.com',
    print(){
        console.log('hello '+this.email)
    }
}
let obj2 ={
    ...obj1,
    address: 'Dhaka'
}
console.log(obj2.name)
console.log(obj2.print());




/////////////////// arrow function with lexical this
const laptop = {
    name: 'asus',
    hdd: '1TB',
    ram: '4GB',

    display(){
        console.log(`name ${this.name}, ram ${this.ram}, HDD ${this.hdd}`);
        setTimeout(() =>{
            console.log('Nmae '+this.name)
        },2000)
          
    }
}

laptop.display()


////////// Destructuring

const book ={
    book_name:'Javascript learning',
    author: 'Adkinson',
    price: "300"
}

let {book_name, author, price} = book;
console.log(book_name);

function book_print({book_name, author}){
    console.log(`Book: ${book_name}; Auther : ${author}`);

}
book_print({author, book_name});

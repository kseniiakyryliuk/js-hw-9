//Завдання 1

//пункт 1
if (1==1) {let a=1};
console.log(a); //underfined

if (1==1) {var a=1};
console.log(a); //змінна видима тому, що оголошена варом

//пункт 2
for (let i=0; i<2; i++){
let b=2;
}

console.log(b); //underfined

for (let i=0; i<2; i++){
  var b=2;
  }

console.log(b); //змінна видима тому, що оголошена варом

//пункт 3
function func() {
  let c=3;
}
func();
console.log(c); //Variables defined inside a function are not accessible (visible) from outside the function.
function func2() {
  var c=3;
}
func2();
console.log(c); //Variables defined inside a function are not accessible (visible) from outside the function.

//Завдання 2
console.log(first); // не працює
console.log(second); //працює
console.log(third);// не працює
funDeclaration(); //працює
funExpression();// не працює
funArrow();//не працює

let  first=true;
var second=2;
const third='third';

function funDeclaration(){
  console.log('declaration');
};

let funExpression=function(){
  console.log('expression');
}

var funArrow=()=>{
console.log("=>");
}



//Завдання 3
'use strict';
console.log(this);
let info={
  name: "kseniia",
  age:20,
}

info.h=function() {
  console.log(this.name) ;
  console.log(this.age) ;
  //При вызове функции как метода объекта,   через точку или квадратные скобки — функция получает в this этот объект. 
}

info.h();
function func() {
  "use strict";
  console.log(this); // виведе undefined 
}
func();

//Завдання 5

let cL = function(text) {
console.log(text);
} 
cL("Text");
cL(122133);
//Також це завдання можна виконати іншим способом, зробивши прив'язку до контексту


//Завдання 6
const person1={
  name:"Andrii",
  age:22,
  logInfo: function (job,phone){
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd()
  }
}

const person2={
  name:"Olena",
  age:21
}
const f1=person1.logInfo.apply(person2, ["teacher", 77777]);
const f2=person1.logInfo.call(person2, "programer", 21349);
const f3=person1.logInfo.bind(person2);
f3("boss", 6598);

//Завдання 7
function bind(fn, context, ...rest) {
   return function(...args) {
       const uniqId = Date.now().toString()
  
       context[uniqId] = fn
       const result = context[uniqId](...rest.concat(args))
  
       delete context[uniqId]
  
       return result
     }
   }


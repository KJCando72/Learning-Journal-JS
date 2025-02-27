/*variables

document.getElementById("daHead").textContent = `hello`;
/*document.getElementById("daPara").textContent = `pizza`;

let age = 0;
let adult;
    if (age >= 18) {
        adult = true;
    }
    if (age < 18) {
        adult = false;
    }
alert(`You are ${age} years old`);
alert(`Can you drink this beer? ${adult}`);
*/
/* Arithmetic

let slices = 10;
let extraslices = slices % 3;

console.log(extraslices);

slices += 1; <-- increments slices value up one
*/
/*Radio and checkbox
const che = document.getElementById(`daCheck`)
const jor = document.getElementById(`jordan`);
const kob = document.getElementById(`kobe`);
const gobu = document.getElementById(`goat`);
gobu.onclick = function() {
    if(che.checked) {
        console.log(`thanks`);
    }
    else {
        console.log(`plz D:`);
    }
    if(jor.checked) {
        console.log(`close, but not right`);
    }
    if(kob.checked) {
        console.log(`The RIGHT ANSWER`);
    }
}*/
/* Switches
let day = "n";

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break; 
    case 3:
        console.log("Wednesday");
        break; 
    case 4:
        console.log("Thursday");
        break;   
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} isn't a day`);
} */
/* String Methods
 let username = "     kiryu";

console.log(username.charAt(1));
console.log(username.indexOf("k"));
console.log(username.length)
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.replaceAll("k", "j"));
console.log(username.padEnd(15, "j"));
*/
/* String Slicing
const fullname = "JO AMON";

let firstname = fullname.slice(0, fullname.indexOf(" "));
console.log(firstname);

let lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(lastname);
*/
/* Method Chaining
let username = window.prompt("Enter name: ");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
*/
 /* ***NUMBER INCREMENTER

 HTML SECTION
     <label id="countLab">0</label><br><br>
    <div id="btnBunch">
      <button id="delOne" class="buttons">Decrease</button>
      <button id="resetBtn"class="buttons">Reset</button>
      <button  id="addOne"class="buttons">Increase</button>
    </div>
    
const decrease = document.getElementById(`delOne`);
const resetting = document.getElementById(`resetBtn`);
const increase = document.getElementById(`addOne`);
const countValue = document.getElementById(`countLab`);

let count = 0;

increase.onclick = function() {
    count++;
    countValue.textContent = count;
}

decrease.onclick = function() {
    count--;
    countValue.textContent = count;
}

resetting.onclick = function() {
    count = 0;
    countValue.textContent = count;
}
*/
/* ***NUMBER GUESSER
const min = 0;
const max = 50;
const answer = Math.floor(Math.random() * (max - min + 1));

let attempt = 0;
let urNum;
let runGame = true;

while (runGame == true) {
    urNum = window.prompt(`Guess a number from ${min}-${max}: `);
    urNum = Number(urNum);

    if(isNaN(urNum)) {
        window.alert("Not a number, try again");
    }
    else if (urNum > max || urNum < min) {
        window.alert("Number not within parameters. Try again.")
    }
    else{
        attempt++;
        if(urNum < answer) {
            window.alert("Too low, try again.");
        }
        else if(urNum > answer) {
            window.alert("Too high, try again.");
        }
        else{
            window.alert(`CORRECT! It took ${attempt} many attempts to get it right.`);
            runGame = false;   
        }
    } 
}
*/
 /* Functions
function happyBday(username, age) {
    console.log(`Happy Bday ${username}`);
    console.log(`you are ${age} years old.`);
}

happyBday("Amon", 24);

function isEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isEmail("john@gmom.com"));
*/
/* ***TEMPERATURE CONVERTER
const dainput = document.getElementById(`tempPut`);
const farenheit = document.getElementById(`faren`);
const celsius = document.getElementById(`cels`);
const submitButton = document.getElementById("subBTN");
let temp;

function convert() {
    if (farenheit.checked){
        temp = Number(dainput.value);
        temp = temp * (9 / 5) + 32;
        alert(`${temp}°F`);
    }
    else if (celsius.checked) {
        temp = Number(dainput.value);
        temp = (temp - 32) * 5 / 9;
        alert(`${temp}°C`);
    }
    else {
        alert("Select a conversion.")
    }
}
*/
/* Arrays
let protags = ["kiryu", "akiyama", "majima"];
protags.sort().reverse();

for (let protag of protags) {
    console.log(protag);
}
*/
/* Spread
let Uname = "Jo Amon";
let letters = [...Uname].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegtables = ["cucumber", "pickle", "carrot"];

let food = [...fruits, ...vegtables, "eggs"];

console.log(fruits2);
*/
/* Rest Parameters
function sum(...numbers) {
    
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result;
}

function getAverage(...numbers) {
    
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result / numbers.length;
}
const total = sum(1, 5, 6, 2);
const total2 = getAverage(20, 3, 94, 9);

console.log(`total is ${total}`);

console.log(`average is ${total2}`);

function combinations(...strings){
    return strings.join(" ");
}

const fullname = combinations("Jo", "Amon", "IV");

console.log(fullname);
*/
/* ***PASSWORD MAKER
const pwordlength = 15;
const upperButton = document.getElementById("upper");
const lowerButton = document.getElementById("lower");
const symbolButton = document.getElementById("symbols");
const numberButton = document.getElementById("numbers");
const submitButton = document.getElementById("subBTN");

const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = `~!@#$%^&*()-_=+[{|}];:'",<.>/?`;
const numberChars = `1234567890`;


function makePassword(){
    let allowedChars = "";
    let password = ""; 
    
    allowedChars += lowerButton.checked ? lowerChars : "";
    allowedChars += upperButton.checked ? upperChars : "";
    allowedChars += symbolButton.checked ? symbolChars : "";
    allowedChars += numberButton.checked ? numberChars : "";
    
    if(pwordlength <= 0){
       console.log(`make length longer`); 
    }
    if(allowedChars === 0){
        return `(Select One of the boxes)`;
    }

    for(let i = 0; i < pwordlength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

submitButton.onclick = function(){
    const password = makePassword();
    console.log(`Generated Password: ${password}`);
}
*/
/* Callback Function
sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    document.getElementById("theh1").textContent = result;
}
*/
/* forEach
let fruits = ["apple", "orange", "kiwi"];


fruits.forEach(upperFirst);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function upperFirst(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
*/
/* .map
const dates = ["2024-1-10", "2023-3-23", "2021-9-31"];

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const USDates = dates.map(formatDate);
console.log(USDates);
*/
/* .filter
const yaku = ["kiryu", "amon", "akiyama", "date", "tanimura"];

function overFour(element){
    return element.length > 4;
}
/*.reduce
const grades = [75, 99, 50, 34, 98, 82];

const maxG = grades.reduce(getmax);

function getmax(previous, next){
    return Math.max(previous, next);
}

console.log(maxG);
*/
/* function expressions
setTimeout(function(){
    console.log("Hello");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squared = numbers.map(function(element){
    return Math.pow(element, 2);
});

const isEven = numbers.filter(function(element){
    return element % 2 === 0;
});

const total = numbers.reduce(function(previous, next){
    return previous + next;
});

console.log(squared);
console.log(isEven);
console.log(total);
*/
/* arrow functions
const wackNum = [22, 3, 91, 24, 4, 82, 69];

const square = wackNum.map((element) => Math.pow(element, 2));
const isOdd = wackNum.filter((element) =>  element % 2 !== 0);
const total = wackNum.reduce((prev, next) => prev + next);

console.log (square);
console.log(isOdd);
console.log(total);
*/
/* Objects
const protag = {
    firstName: "Akiyama",
    lastName: "Shun",
    age: 54,
    isEmployed: true,
    sayHello: function(){console.log(`Hello`)},
}

const protag2 = {
    firstName: "Kiryu",
    lastName: "Kazama",
    age: 60,
    isEmployed: false,
    sayHello: function(){console.log(`R1 + Triangle`)},
}

console.log(protag.firstName)
protag2.sayHello();
*/
/* this
const yak1 = {
    name: "Kiryu",
    city: "Kamurocho",
    sayName: function(){console.log(`I am ${this.name}`)},
}

const yak2 = {
    name: "Majima",
    city: "Sotenbori",
    sayName: function(){console.log(`I am ${this.name}`)},
}

yak1.sayName();
yak2.sayName();
*/
/* Constructor
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car(`Honda`, `Accord`, 2003, `red`);

console.log(`The first car is a ${car1.make} ${car1.model}`);
*/
/* Classes
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const apple = new Product(`apple`, 4.99);
const banana = new Product(`Banana`, 5.50)

const total = apple.calculateTotal(salesTax);
console.log(`Total price (with tax) is: $${total.toFixed(2)}`);
*/
/* Static (class owns anything static, not the object)
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} users online`);
    }
    sayHi(){
        console.log(`My name is ${this.username}`);
    }
}

const user1 = new User("Bob");
const user2 = new User("Kaiser");

user1.sayHi();
console.log(user2.username);
User.getUserCount();
*/
/* Inheritence
class yak{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping.`);
    }
}

//extends keyword allows child class to inherit parent
class Kiryu extends yak{
    name = "Kiryu";

    styles(){
        console.log(`${this.name} has access to Legend and Agent styles`);
    }
}

class Akimoto extends yak{
    name = "Akimoto";

    cant(){
        console.log(`${this.name} is incapable of fighting`);
    }
}

const kaz = new Kiryu();
const eww = new Akimoto();

kaz.eat();
kaz.styles();

eww.sleep();
eww.cant();
/*

const yakuFour = yaku.filter(overFour);
console.log(yakuFour);
*/
/* Super (references parent properties)
class animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Lion extends animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Bird extends animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const lion = new Lion("leo", 1, 25);
const fish = new Fish("fishy", 2, 12);
const hawk = new Bird("hawky", 3, 50);

lion.run();
fish.swim();
hawk.fly();
*/
/* Getters & Setters
class human{

    constructor(firname, lasname, age){
        this.firstname = firname;
        this.lastname = lasname;
        this.age = age;
    }

    set firstname(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstname = newFirstname;
        }
        else{
            console.error("First name must be a name");
        }
    }

    set lastname(newLastname){
        if(typeof newLastname === "string" && newLastname.length > 0){
            this._lastname = newLastname;
        }
        else{
            console.error("Last name must be a name");
        }
    }

    set age(newage){
        if(typeof newage === "number" && newage > 0){
            this._age = newage;
        }
        else if(newage < 0){
            console.error("age cannot be less than 0");
        }
        else{
            console.error("age must be a number");
        }

    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new human(`Seth`, `Smith`, 99);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
*/
/* Destructuring
const colors = [`red`, `green`, `blue`, `black`];
const [firColor, secColor, thiColor, ...extraColor] = colors;
console.log(firColor);
console.log(extraColor);


const person1 = {
    firName: "Jo",
    lasName: "Amon",
    age: 54,
    job: "Assassin",
}
const person2 = {
    firName: "Shin",
    lasName: "Kamon",
    age: 32,
}
const {firName, lasName, age, job = "Unemployed"} = person1;
console.log(job);
*/
/* Nested Objects
const person = {
    fullName: "Joe Bob",
    age: 30,
    isStudent: true,
    hobbies: [`fishing`, `eating`, `drawing`],
    address: {
        street: "124 my st.",
        city: "Edison",
        country: "america"
    }
}

for(const property in person.address){
    console.log(person.address[property]);
}

class people{
    constructor(name, age, ...addRes){
        this.name = name;
        this.age = age;
        this.address = new address(...addRes);
    }
}

class address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new people("Spongebob", 30, "124 Conch St.", 
                            "Bikini Bottom", "Int. Waters");
const person2 = new people("Patrick", 28, "122 Conch St.", 
                            "Bikini Bottom", "Int. Waters"); 
const person3 = new people("Squidward", 40, "123 Conch St.", 
                            "Bikini Bottom", "Int. Waters");

console.log(person1.address.country);
*/
/* Object Arrays
const veg = [{name: "cauliflower", color: "white", calories: 29}, 
            {name: "pepper", color: "red", calories: 81}, 
            {name: "eggplant", color: "purple", calories: 62}, 
            {name: "mushroom", color: "brown", calories: 52}];

veg.push({name: `lettuce`, color: `green`, calories: 88});

const vegNames = veg.map(veg => veg.name);

const loCal = veg.filter(veg => veg.calories <= 60);

console.log(veg);
veg.forEach(veg => console.log(veg.color));
console.log(vegNames);
console.log(loCal);
*/
/* sort()
let num = [1, 10, 9, 2, 3, 7, 4, 5, 8, 6];
num.sort((a, b) => b - a);

const beat = [{name: "Lennon", age: 42},
              {name: "McCartney", age: 43},
              {name: "Ringo", age: 39}];
beat.sort((a, b) => b.name.localeCompare(a.name));

console.log(num);
console.log(beat);
*/
/*Array Shuffling
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'J', 'Q', 'K'];


function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
    
        [array[i], array[random]] = [array[random], array[i]]
    } 
}
shuffle(cards);

console.log(cards);
*/
/* Date()
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

date.setMonth(9);

console.log(year);
console.log(month);
console.log(day);
console.log(date);
*/
/*Closure
function createScorer(){ let score = 0;

    function increScore(points){
    score += points;
    console.log(`+${points} pts`);
    }

    function decreScore(points){
        score -= points;
        console.log(`-${points} pts`);
    }
    
    function getScore(){
        return score;
    }
    return {increScore, decreScore, getScore};
}

const game = createScorer();

game.increScore(29);
game.decreScore(4);
console.log(`Final Score: ${game.getScore()} pts`);
*/
/* ***DIGITAL CLOCK
function clockUpdate(){

    const now = new Date();
    const hr = now.getHours().toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0); 
    const sec = now.getSeconds().toString().padStart(2, 0); 
    const timeString = `${hr}:${min}:${sec}`;
    document.getElementById(`clock`).textContent = timeString;
}

clockUpdate();
setInterval(clockUpdate, 1000);
*/
/* ***STOPWATCH
const display = document.getElementById(`time`);
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }   
    
}



function stop(){
    if(isRunning = true){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
     startTime = 0;
     elapsedTime = 0;
     isRunning = false;

    display.textContent = `00:00:00:00`;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / (1000) % 60);
    let milisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).toString().padStart(2, 0);
    min = String(min).toString().padStart(2, 0);
    sec = String(sec).toString().padStart(2, 0);
    milisec = String(milisec).toString().padStart(2, 0);

    display.textContent = `${hours}:${min}:${sec}:${milisec}`;
}
*/
/* E6 Modules
import{PI, getArea, getCircum, getSurfaceVolume} from './mathUtil.js';

const area = getArea(3);
const circum = getCircum(3);
const vol = getSurfaceVolume(3);

console.log(getArea(3));
console.log(getCircum(3));
console.log(getSurfaceVolume(3));

console.log(`${area} cm`);
console.log(`${circum} cm2`);
console.log(`${vol} cm3`);
*/
/* Asynchronous Functions
function func1(callback){
    setTimeout(() => {console.log("Task 1"); callback()}, 3000);
}

function func2(){
    console.log("task 2");
    console.log("task 3");
}

func1(func2); //makes it so func2 won't activate without func1
*/
/*Error catching
try{
    const dividend = Number(window.prompt("Enter top number: "));
    const divisor = Number(window.prompt("Enter bottom number: "));

    if(divisor == 0){
        throw new Error(`Can't divide by 0`);
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(`Not a number, try again`);
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log(`The End`);
*/
/* ** CALCULATOR
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";        
    }
}
function clearDisplay(){
    display.value = "";
}
*/
/* DOM intro
document.title = "unicorns";

document.body.style.backgroundColor = "yellow";

console.dir(document);

const username = "kc";
const WelcomeMsg = document.getElementById("Hi");

WelcomeMsg.textContent += username === "" ? 'Guest' : username;
*/
/* element selectors
const heading = document.getElementById("head"); //returns element or null
heading.style.backgroundColor = "yellow";
heading.style.textAlign = "center";
console.log(head);

const fruits = document.getElementsByClassName("fruits"); //for html elements that share same id
for(let fruit of fruits){
    fruit.style.backgroundColor = "pink";
}
Array.from(fruits).forEach(fruit => { //same thing as 930-933, but array functions to be used on html elements
    fruit.style.backgroundColor = "pink";
});

const h4ele = document.getElementsByTagName("h4");
const listed = document.getElementsByTagName("li");
console.log(h4ele);
for(let h4e of h4ele){
    h4e.style.backgroundColor = "cyan";
}
Array.from(listed).forEach(list => {
    list.style.color = "red";
});

const element = document.querySelector(".fruits"); //only returns first match
element.style.color = "cyan"; 
console.log(element);

 const ingredients = document.querySelectorAll("li");
ingredients.forEach(ingred => {
    ingred.style.textAlign = "center";
});
console.log(ingredients);
*/

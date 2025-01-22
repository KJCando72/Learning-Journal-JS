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

const yakuFour = yaku.filter(overFour);
console.log(yakuFour);
*/

//variables for steps 1-6
let name = "Luke";
const numberOfStates = 52;
let sum = 5 + 4;

//step7
function sayHelloWorld() {
    alert('Hello World!');
}

sayHelloWorld();

//step 8
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//step 9
let favVeggies = ["onion", "garlic", "celery", "pickles", "cabbage", "raddish"];
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}

//step 10
let people = [
    { name: "Luke", age: 31 },
    { name: "Audrey", age: 29 },
    { name: "Yzerman", age: 17 },
    { name: "Apollo", age: 6 },
    { name: "Chris", age: 31 },
];

for(let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

//step 11
function getLength(word) {
    return word.length;
}

let length = getLength('Hello World');

if(length % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}
/*
// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
let c = 789;
a = test;

// Destructuring

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;


// Object properties
let a = 'test';
const b = true;
let c = 789;

const okObj = { 
  a,b,c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `hello ${firstName} have I met you before? I think we met in ${city} last summer no?`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAge(age = 30) {
    return `Hello I am ${age - 10} years old`;
}

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = symbol('This is my first symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const test = (username, location) => (username && location) ? 'I am not lost' : 'I am totally lost';
*/

/*
// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = [];

array.forEach((user) => {
    let { username } = user;
    username = username + '!';
    newArray.push(username);
})

console.log(newArray);
//Create an array using map that has all the usernames with a "? to each of the usernames

const newArrayMap = array.map(function(user){
    // let { username } = user;
    // return username + '?';
    return user.username + '?';

});

console.log(newArrayMap);

//Filter the array to only include users who are on team: red

const newArrayFilter = array.filter(function(user) {
    return user.team === 'red';
});

console.log(newArrayFilter);
//Find out the total score of all users using reduce

const newArrayReduce = array.reduce(function(acc, user){
    return acc + user.score;
}, 0)

console.log(newArrayReduce);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});

console.log(newArray1);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const arrayItem = array.map(function(user) {
    user.items = user.items.map(function(item) {
        return item + '!';
    })
    return user;
});

console.log(arrayItem);
*/

//Evaluate these:
//#1
// [2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;
// console.log(object3);


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 



/*
class mamal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    
}

class animal extends mamal {
     constructor(name, type, color) {
       super(name, type, color);
    }
    sound() {
        console.log(`Hello, my name is ${this.name}, I am a ${this.type} and I have ${this.color} color`);
    } 
}

const cow1 = new animal('Suna', 'cow', 'brown');

cow1.sound();
*/


















































































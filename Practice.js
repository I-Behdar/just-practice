
/*
let database = [
	{
		username: 'John',
		password: '111111'
	},
	{
		username: 'Saly',
		password: '222222'
	},
	{
		username: 'Brian',
		password: '333333'
	},
	{
		username: 'Mike',
		password: '444444'
	},
	{
		username: 'Jane',
		password: '555555'
	}
]; 

let newsFeed = [
	{
		username:'Bob',
		timline: 'Tired of all this learning'
	},
	{
		username: 'Sara',
		timline: 'Js is great'
	},
	{
		username: 'Tim',
		timline: 'I need to be as fast as possible'
	}
];

const usernamePrompt = prompt('What is your username?');
const passwordPrompt = prompt('What is your password?');

function isUserValid(user, pass) {

	for(i = 0; i < database.length; i++){

		if(user === database[i].username 
			&& pass === database[i].password) {
			return true;
		} 
	} 
	return false;
}


function signIn(user, pass) {

	if(isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		console.log('Wrong username or password');
	}
}

signIn(usernamePrompt, passwordPrompt);

/*
const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

function createListElement() {
		const li = document.createElement('li');
		const textNode = document.createTextNode(input.value);
		li.appendChild(textNode);
		ul.appendChild(li);
		input.value = '';
}

function liMakerClick() {
	if(input.value.length > 0) {
		createListElement();
	} else {
		alert('Please add an item!');
	}
}

function liMakerKey() {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener('click', liMakerClick);
input.addEventListener('keypress', liMakerKey);
*/

/*
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const colorgrid = document.querySelector('h3');

function colorPicker() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	colorgrid.textContent = `(${color1.value} , ${color2.value})`;
}

color1.addEventListener('input', colorPicker);
color2.addEventListener('input', colorPicker);
*/

/*
const player = 'buddy';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log(wizardLevel);
}

console.log(wizardLevel);
*/

// const array = [1, 2, 5, 10, 20];

// const mapArray =array.map((num) => {
// 	return num*2;
// });

// console.log(mapArray);








































































































































//Destructing
//Example 1

//Destruct from objects
//Example here


//Dot notation
const person = {
    firstName: "Carl",
    lastName: "Hedlund",
    country: "Sweden"
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const country = person.country;
// const greeting = `Hello my name is ${firstName} ${lastName} and im from ${country}`;
// console.log(greeting);


//here use of destructing

const {
    firstName,
    lastName,
    country
} = person;
const greeting = `Hello my name is ${firstName} ${lastName} and im from ${country}`


//destruct a function

function greetUser (userObject){
    const {firstName, country} = userObject;
    console.log("Test1: " + `Hello ${firstName} from ${country}`);
};

// Can also write the function better like this. 
function greetUser1 ({firstName, country, born}){
    console.log("Test2: " + `Hello ${firstName} from ${country}`);
    console.log("Test2: " + `${firstName} is born ${born}`);
};

const user = {
    firstName: "Carl",
    lastName: "Hedlund",
    age: "25",
    born: "21.10.1996",
    country: "Sweden"
};
greetUser(user);
greetUser1(user);


//Destructing in arrays

const people = [
    {name: "Carl", age: "26", score: "20"},
    {name: "Mats", age: "26", score: "9"},
    {name: "Emil", age: "26", score: "15"},
    {name: "Uzo", age: "26", score: "2"}
];

//rule condition score >=5
const winners = people.filter((currentItem) => {
    if(currentItem.score >= 5){
        return true;
    }
});

//Better way to write the code
const winners1 = people.filter(({score})=> {
    if (score >= 10){
        return true;
    }
})
console.log(winners);
console.log(winners1);


//destruct from array

// const [
//     //Values here
// ] = arrayName;
// const [value1, value2] = arrayName;



//First Example
//Destructing arrays
const streetNumbers = [12, 30, 40, 50, 1, 54];

// 'x' will be the index of 0
// 'y' will be the index of 1

const [x, y] = streetNumbers
console.log(x, y);//logs 12 and 30

//Create a string array of names which contains 4 names
//and then destruct the first three names

const names = ["Hesham", "Carl", "Mats", "Fariad", "Linda", "Emil"];

const [name1, name2, name3, ...others] = names;
console.log(name1, name2, name3);//logs Hesham, Carl and Mats;
console.log(others);//Logs rest of the array that wasn't assigned in name1 name2 and name3:: Logs: Fariad, Linda, Emil;



const values = [3, 4, 6, 50, 40]

const [value0, value1, , value3, ...rest] = values; //Put a comma in between in the array to skip an index
console.log(value0, value1, value3); //Logs: 3, 4, 50



const myCat = {
    name: "Lila",
    age: "9",
    typerrr: "Egyptian Mav"
};

const {name, age, typerrr:breed} = myCat;
console.log(`My cat is called ${name} and is ${age} years old. And the type is ${breed}`);
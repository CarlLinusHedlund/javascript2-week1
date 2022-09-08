//example 1

/** 
*add two numbers together
* @param {number} a first value
* @param {number} b second value
*/

function addNumbers(a, b){
    return a + b;
};
addNumbers(3, 3);


//example 2

/**
 * Function that displays a greeting with the value of the param
 * @param {string}
 * @returns the string value to the html span
 */
function greetings (name){
    return `<span>Hello ${name}!</span>`;
};
greetings("Carl");



//Example 3

/**
 * function adds three numbers together.
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c third value
 * @returns sums the value of the three params
 * @example 
 *´´´js
 * // add three numbers together
 * const a = 3;
 * const b = 4;
 * const c = 5;
 * const sum = addThreeNumbers(a, b, c)
 * // expect sum to be 12
 */
function addThreeNumbers(a, b, c){
    return a + b + c;
};
addThreeNumbers();
const a = 1;
const b = 2;
const c = 3;
const sum = addThreeNumbers(a, b, c)



//example 4

/**
 * Displays cat names
 * @param {string} cat1 string value of param 1
 * @param {string} cat2 string value of param 2
 * @param {string} cat3 string value of param 3
 * @param {string} cat4 string value of param 4
 * @returns {string} list of cat names
 */

function addFourCats(cat1, cat2, cat3, cat4){
    return `
<ul>
    <li>${cat1}</li>
    <li>${cat2}</li>
    <li>${cat3}</li>
    <li>${cat4}</li>
</ul>`
}
addFourCats("milo", "andy", "lira", "shown");

/**
 * 
 * @param {number} a first value 
 * @param {number} b second value
 * @param {number} c third value
 * @param {number} d fourth value
 * @returns {number} sum og the numbers
 * @example
 *´´´js
 * //add four numbers
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9; 
 * const sum = addFourNumber(a, b, c, d);
 * //expect the sum to be 110;
 */

function addFourNumber(a, b, c, d){
    return a + b + c + d;
}
addFourNumber(18, 20, 50, 1);

//example 6 with optional parameters

// /**
//  * @param {dataType} {optionalParamName} optionalParamNameDescription
//  */


/**
 * multiply two numbers together
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @returns {number} multiplication of numbers 
 * @example
 * ´´´js
 * const a = 3;
 * const b = 3;
 * const sum = multiplyNumbers(3, 3);
 * //expect the sum to be 9;
 */

function multiplyNumbers (a,b=10){
    return a * b;
}
multiplyNumbers(5);


//example 7

/**
 * Number or string containing number
 * @param {*} a 
 * @typeof {(Number|string)} NumberLike
 */
/**
 * adds two numbers together
 * @param {NumberLike} a 
 * @param {NumberLike} b 
 * @returns 
 */

function addTwoDigits(a, b) {
    return a + b;
};
addTwoDigits();





//complex objects
//example 8

/**
 * 
 * @param {object} userObject my loggedIn user Object;
 * @param {string} userObject.name Linus
 * @param {string} userObject.role Boss
 */

function handleUserLogin({name, role}){
    loginUserWithToken();
}

function loginUserWithToken(){
}

handleUserLogin({
    name: "Hesham",
    role: "to be a teacher"
});


const userLoginData = {
    name: "Hesham",
    role: "to be a teacher"
};
console.log(userLoginData);
console.log(userLoginData.name);





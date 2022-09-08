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
    </ul>
    `
}
addFourCats("milo", "andy", "lira", "shown");





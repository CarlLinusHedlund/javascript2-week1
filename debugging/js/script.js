console.log();
console.warn();
console.error();
console.clear();
console.table();

// 1

console.log("Hello im here");

const name = "carl";

console.log(name);

const responseDataOne = [
    {
        name: "Hesham",
        age: "30"
    },
    {
        name: "emil",
        age: "29"
    }
];

const responseDataTwo = [
    {
        name: "Hesham",
        age: "30"
    },
    {
        name: "emil",
        age: "29"
    }
];

console.log("ResponseDataOne", responseDataOne)
console.log("ResponseDataTwo", responseDataTwo)
console.table("ResponseDataOne Table", responseDataOne)

//2 

// console.clear()


//3 console.table();
    //Gives u a nice and structured table of values.
    console.table(responseDataOne[0])



//4 

console.time(); //This starts the timer
console.timeEnd(); //  This ends the timer

function counter(){
    for (let i = 0; i <= 1000; i++)[
        console.log(i)
    ]
}
console.time("myTimer")
counter();
console.timeEnd("myTimer")



function sum(num1, num2){
    return num1 + num2
}
let total = sum(1,2)

console.log("total", total)

console.log(sum(1,3))



function average (num1, num2, num3){
    return (num1 + num2 + num3) / 3
}

// let myAverage = getAverage(2, 4, 6)

console.log(average(3,3,3));



//create a function which gets the average of the numbers in a array

const myArray = [1, 3, 4, 5];

function getArrayAverage(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    const numberOfItemsInArr = arr.length
    let average = total / numberOfItemsInArr;
    return average;
}

const resultAverage = getArrayAverage(myArray);
getArrayAverage(myArray);
console.log("result", resultAverage);






// When you make an API call
// https://catsfact.ninja/fact

function getCatsFacts(){
    fetch("https://catfact.ninja/facts")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.data)
    })
    .catch(error => {   
    });
}
getCatsFacts();


const url = 'https://catsfact.ninja/fact'

async function fetchCat(){
    const response = await fetch('https://catfact.ninja/facts');
    console.log("response", response)
    const responseJson = await response.json();
    console.log("responseJson", responseJson)
    console.log(catFacts.data)
    return catFacts;
} 
fetchCat();






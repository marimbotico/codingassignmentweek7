/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/

const ages = [3, 9, 23, 64, 2, 8, 28, 93]
function subtract() {
    return ages[ages.length - 1] - ages[0]// last element of the array is array.length-1 and the first element is array[0]
}// I am asking the function to the return the subtraction of the last element from the first element.
console.log("No.1a) The result is: ", subtract());

ages.push(100);// array.push() adds a new element to the end of the array
console.log("No.1b) Add a new element to the array", ages);

let averageAge = 0
let allAges = 0 // I have to define the variables outside the loop
for (let i = 0; i < ages.length; i++) {
    allAges += ages[i]// I am adding all the ages one by one through [i]
} averageAge = allAges / ages.length// I am defining the average to be the result of the sum divided by the length or number of elements

console.log("No.1c) The average age is:", averageAge);


/* 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
let averageLetters = 0
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;// since this is a string and not a number I need to do 'names[i].length'
}
averageLetters = totalLetters / names.length;
console.log("No.2) The average number of letters is:", averageLetters);

let concatenatedNames = "  ";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";// I had to replace names[i].length for names[i] to get the words and not the numbers.
    //to add a space between each iteration I simply added " "
}
console.log("No.2b) The list of concatenated names with spaces is:", concatenatedNames);

/*3. How do you access the last element of any array?*/
const lastElement = names[names.length - 1]
console.log("No.3) The last element is:", lastElement);

/*4. How do you access the first element of any array?*/
const firstElement = names[0];
console.log("No.4) The first element is:", firstElement);

/*5.! Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/
const names1 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
const namesLength = []
for (let i = 0; i < names1.length; i++) {
    namesLength.push(names1[i].length)// names[i].length returns the number not the string contrary to what I did on no. 2
}

console.log("No.5) The length of the names1 array is:", namesLength);

/*6. ! Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/

let sum = 0;
for (let i = 0; i < namesLength.length; i++) {
    sum += namesLength[i];// adding the length (integers) of ach iteration to each other
}
console.log("No.6) The sum of all the name lengths is:", sum);


/*7. ! Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

const word = "hello"
const n = 0

function concat(word, n) {
    let concatenatedWord = ""// I use an empty string to store the result
    for (let i = 0; i < n; i++) { // as long as i is less than the number this loop will iterate
        concatenatedWord += word // in each iteration I concatenate the word to the result word + word + word, ...
    } return concatenatedWord // the result is the word concatenated to itself n amount of times.
}
console.log("No.7) The concatenated word is:", concat(word, 6));// hello will print 6 times but if would switch it to 8, it would print 8 times.
/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name 
should be the first and the last name separated by a space.*/

let firstName = 'Isaac'
let lastName = 'Fernandez'
function fullName(a, b) {
    return firstName + " " + lastName
}
console.log("No.8) My full name is :", fullName());// pretty self explanatory a + b with " " for a space.

/*9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array 
is greater than 100.*/

let numbersArray = [8, 9, 11, 16, 17, 18, 20, 24]
function isItTrue(numbersArray) {
    let sum = 0
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]// once again adding each element to each other
    } if (sum > 100) {
        return true
    } else {
        return false
    }// the sum = 123 so it will return true
}

console.log("No.9) The result is: ", isItTrue(numbersArray));

/*10. Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

const numbersArr = [1, 5, 8, 11, 17, 39, 43, 78];
function avgNum(numbersArr) {
    let totalNum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        totalNum += numbersArr[i];
    }
    let average = totalNum / numbersArr.length;// average = total sum of the elements / by the length or how many elements are there
    return average;
}
console.log("No.10) The average number is:", avgNum(numbersArr));

/*11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

const gearList = ['Sticks', 'Drums', 'Cymbals', 'Music',];
function avgGear(gearList) {
    let totalGear = 0;
    for (let i = 0; i < gearList.length; i++) {
        totalGear += gearList[i].length;
    }
    let average = totalGear / gearList.length;
    return average;
}
console.log("No.11a) The average of gear list is:", avgGear(gearList));
// I need to repeat the steps of No.10 in each array to find the average.

const stageList = ['Lights', 'Music-stands', "Microphones", "Monitors", "Speakers"]
function avgStage(stageList) {
    let totalStage = 0;
    for (let i = 0; i < stageList.length; i++) {
        totalStage += stageList[i].length;
    }
    let average = totalStage / stageList.length;
    return average;
}

console.log("No.11b) The average of stage list is:", avgStage(stageList));

function totalAverage(a, b) {
    if (avgGear > avgStage) {
        return true
    } else {
        return false
    }
}
// avgGear is less than avgStage so it will return false
console.log("No.11c) The total average therefore is:", totalAverage(avgGear, avgStage));

/*12. ! Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

const isHotOutside = true//boolean
const moneyInPocket = 15//number
function willBuyDrink() {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}
console.log("No.12) The answer of will I buy a drink? is:", willBuyDrink());
// 15 is > 10.5 so it will return true

/*13. Create a function of your own that solves a problem. In comments, write what the function does and why
you created it.*/
//

const cryptos = ["bitcoin", "ethereum", "cardano", "solana", "xrp", "doge"];// 6 elements
const prices = [63000, 3000, 0.30, 140, 0.50, 0.20];// 6 elements

function printCryptoPrices(cryptos, prices) {// this function takes 2 parameters which happen to be arrays
    if (cryptos.length !== prices.length) {// if the length of the arrays are not the same it will print the error message
        return "Error: The length of the arrays does not match.";
    } else {
    for (let i = 0; i < cryptos.length; i++) {
        console.log (`${cryptos[i]}: $${prices[i]}`);// instead of using return, I used console.log since once a function is return it exists the loop
     // ${}: These are template literals. They allow us to embed expressions within a string. 
     //console.log(cryptos[i] + ": $" + prices[i]); //ES5 vs ES6
    }
}
}
console.log("No.13: The Names and Prices of the cryptocurrencies are:");
printCryptoPrices(cryptos, prices);

/*Template Literals:
Template literals are a feature of (ES6). They allow for easier string interpolation and 
multiline strings compared to traditional string concatenation methods.

Syntax:

Template literals are delimited by backticks (``).
Within a template literal, placeholders ${} are used to embed expressions. These expressions can be variables, function calls, etc.
When the template literal is evaluated, the placeholders are replaced with the value of the expressions they contain.// In these case the crypto names!

Explanation of the Line:

${cryptos[i]}: inside this template literal, the placeholder is replaced with the value of cryptos[i]. (since it's a loop, it prints array[0],array[1],etc)
: $: This part is static text, it's just a colon followed by a space and a dollar sign, indicating the separator between the cryptocurrency name and its price.
${prices[i]}: This placeholder is replaced with the value of prices[i]. (same as before but with the prices array)
So, the entire template literal ${cryptos[i]}: $${prices[i]} concatenates the cryptocurrency name, a colon (:), a space, a dollar sign ($), and the cryptocurrency price into a single string.

A few benefits of Template Literals:

They offer a more readable and concise syntax compared to traditional string concatenation.
They make it easier to embed variables and expressions directly within strings.*/

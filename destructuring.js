/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
//First how is done without the destructuring

let ages = [23, 37, 34];

//let john = ages[0];
//let ellen = ages[1];
//let maria = ages[2];

//Now with destructuring
//using the [] before the equal trigger es6 to do the distructuring

let [john, ellen, maria] = ages;

console.log(john, ellen, maria);



// Destructuring objects

let jobs = {
    mike: "designer",
    jessica: "developer",
    sarah: "CEO"
}

let {mike, jessica, sarah} = jobs;
console.log(mike, jessica, sarah);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [jhonNative, jhonSecond] = languages;



let [martaNativ, , martaFavourite, ...others] = languages;
//console.log(martaNativ);
//console.log(martaFavourite);
//console.log(others);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "spanish",
    thirdLanguage: "french",
    fourthLanguage: "german"
};

let {firstLanguage, thirdLanguage} = languages2;

console.log(firstLanguage);
console.log(thirdLanguage);




// Using rest parameter syntax

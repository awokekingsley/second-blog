// USING FOR LOOP TO LOOP INTO ITERATION
for (i = 0;i < 10; i++){
    console.log(i);
}

// PRINTING AN ITEM INSIDE AN OBJECT
const fruits = ["Apple", "Orange", "Pineapple"]

console.log(fruits[0]);

// FUNCTION FOR COMPARING BOYS ANF GIRLS NUMBER
function myfunc(Boys, Girls) {
    if(Girls > Boys) {
         return "Girls are more populated in this world!"
     } else {
        return "Boys are more populated"
        }
}

let Boys = 100;
let Girls = 300;

console.log(myfunc(Boys,Girls));

// NULLISH COALECING OPRATOR

let user;

console.log(user ?? "User not found");

//THIS OPRATOR RETURNS DEFAULT VALUE, AS THE USER IS UNDERFINED TGEN IT RETUNRED THE DEFAULT VALUE WHICH IS THE STRING


//WHILE LOOP AND DO...WHILE

let x = 10;
do {
    console.log(x);
    x++;
}
while (x < 100);

//WHILE LOOP

let y = 0;

while (y < 20) {
    console.log(y);
    y++;
}

/*
//A PROGRAM ASKING USER FOR AN INPUT(INT), IF THE INPUT IS NOT INT THEN IT WILL BREAK AND CALCULATR THE TOTAL INPUT THE USER HAS ENTERED

let toBeCalculatedWith = 0;
while (true) {
    const userInput = +prompt("Enter a Number: ");
    if (!userInput) break;
    toBeCalculatedWith += userInput;
}
console.log(userInput);
*/

// THIS PROGRAM IS ABOUT CONTINUE, SO THE PROGRAM CONTINUED WHEN THE I MULTIPLY BY 2 IS NOT EQUALS TO ZERO.
for (let i = 0; i < 10; i++) {
    if (i * 2 == 0) continue;
    console.log(i);
}


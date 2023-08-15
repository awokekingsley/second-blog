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

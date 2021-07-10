// Rules of Hoisting
// Variable declarations (var) rise to the top of their scope like hot air balloons.

// Functions create their own scope and act like cages, preventing declarations from rising out.

// Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// let and const do not get hoisted,  and will throw an error if called before they are declared. 
// const will even throw a syntax error if it is called before it is assigned.

////////////////////////////////////////////
// 1---------------------------------
console.log(hello);                                   
var hello = 'world';

// >> var hello;
// console.log(hello);     >>> Undefined                              
// var hello = 'world';

////////////////////////////////////////////
// 2---------------------------------
var needle = 'haystack';
test();
function test(){
    var needle = 'c';
    console.log(needle);
}
// >>> output: magnet    >> defined as local variable

////////////////////////////////////////////
// 3---------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// >> output: super cool  , the function did not call at all.

////////////////////////////////////////////
// 4---------------------------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// >> interpreter
// var food;
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// food = 'chicken';
// eat();

console.log(food);

// >> output: chicken
// >>        half-checken

////////////////////////////////////////////
// 5---------------------------------
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// >> interpreter
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// >> output: error

////////////////////////////////////////////
// 6---------------------------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// >> interpreter
// var genre;
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);

// >> output: undefined
// >>       : rock
// >>       : r&b
// >>       : disco

////////////////////////////////////////////
// 7---------------------------------

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// >> interpreter
//  var dojo;
// function learn() {
    // var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

// >> output: san jose
// >>       : seattle
// >>       : burbank
// >>       : san jose

////////////////////////////////////////////
// 8---------------------------------
// Bonus ES6: const

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// >> output: { name: 'Chicago', students: 65, hiring: true }
// >>       : error , dojo = "closed for now"; Assignment to constant variable.
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1){
        console.log(i)
    }  
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FIZZBUZZ');
    }
    if (i % 3 == 0) {
        console.log('FIZZ');
    }
    else if (i % 5 == 0) {
        console.log('BUZZ');
    }

}

// Exercise 3 Section
let i = 1;
while (i <= 100) {
    if (1 % 2 !== 0) {
        console.log(i);
    }
    i++;
}

i=1
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
    }
    else if (i % 3 === 0) {
        console.log('FIZZ')
    }
    else if (i % 5 === 0) {
        console.log('BUZZ')
        i++;
    }
}
i=1
do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
    }
    else if (i % 3 === 0) {
        console.log('FIZZ')
    }
    else if (i % 5 === 0) {
        console.log('BUZZ')
        i++;
    }
    else {

    }
    i++;
} while (1<=100);

// Exercise 4 Section

let value = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

let result;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        result = 'Found Value!';
        break;
    }
    else {
        result = 'Did not find value';
    }

}
// Exercise 5 Section
console.log(result)


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); 
// creates a random number between 100 and 1000

console.log(fizzDivisor)
console.log(buzzDivisor)

for (i = start; i <= end; i++){


if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log('FIZZBUZZ')

}
else if (i % fizzDivisor === 0) {
    console.log('FIZZ')

}
else if (i % buzzDivisor===0){ 
console.log('BUZZ')}

}
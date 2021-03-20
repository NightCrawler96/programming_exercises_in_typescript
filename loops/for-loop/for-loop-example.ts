// Initiate array of strings
const x: string[] = ['a', 'b', 'c'];

// for loop
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    // print element
    console.log(element)
}

// Initiate empty array with static typing
const y: number[] = []

// Fill empty array with numbers
for (let index = 0; index < 10; index++) {
    y.push(index);
}

// print y array
console.log(y);

#!/usr/bin/node

const readline = require('readline');


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Welcome to Holberton School, what is your name?\n', (response) => {
    console.log(`Your name is: ${response}`);
    input.close(); // Close the interface here
    console.log('This important software is now closing\n');
});

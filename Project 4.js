"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let currentRating;
let processRatings;
const MAX_RATING = 5;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse === 1) {
        setCurrentRating();
        setContinueResponse();
        for (i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
        }
        return total / numbers.length;
        printGoodbye();
    }
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setCurrentRating() {
    if (currentRating != null && currentRating <= MAX_RATING) {
        currentRating++;
    } else {
        currentRating = 1;
    }
}

function processRatings() {
    while (currentRating <= MAX_RATING) {
        if (currentGrade == 0) {
            console.log(`\n\tThe average rating for this movie is: ${currentRating}`);
            } else {
            setCurrentRating();
        }
    }
}

function printGoodbye() {
    console.log(`\tGoodbye.`);
}

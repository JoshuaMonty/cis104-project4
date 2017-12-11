"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let currentMonth, currentGrade, currentClassroom, upperTuition;
const MAX_GRADE = 8,
    MAX_MONTH = 9,
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse === 1) {
        setCurrentMonth();
        setCurrentGrade();
        setCurrentClassroom();
        processPaymentCoupons();
        setContinueResponse();
        for (let i = 0; i < MAX_CLASSROOM; i++) {
            printGoodbye();
        }
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

function setCurrentMonth() {
    if (currentMonth != null && currentMonth <= MAX_MONTH) {
        currentMonth++;
    } else {
        currentMonth = 1;
    }
}

function setCurrentGrade() {
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) {
        currentGrade++;
    } else {
        currentGrade = 0;
    }
}

function setCurrentClassroom() {
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) {
        currentClassroom++;
    } else {
        currentClassroom = 1;
    }
}

function setUpperTuition() {
    const BASE_TUITION = 60;
    upperTuition = BASE_TUITION * currentGrade;
}

function processPaymentCoupons() {
    while (currentGrade <= MAX_GRADE) {
        while (currentClassroom <= MAX_CLASSROOM) {
            while (currentMonth <= MAX_MONTH) {
                if (currentGrade == 0) {
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`);
                } else {
                    setUpperTuition();
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`);
                }
                setCurrentMonth();
            }
            setCurrentClassroom();
            setCurrentMonth();
        }
        setCurrentGrade();
        setCurrentClassroom();
    }
}

function printGoodbye() {
    console.log(`\tGoodbye.`);
}
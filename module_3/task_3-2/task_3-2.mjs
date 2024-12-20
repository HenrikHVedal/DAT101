"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.
*/
let counterPlu = " ";
for(let counterPlus = 1; counterPlus < 11; counterPlus++) {
    counterPlu += counterPlus + ", ";
}
printOut(counterPlu.toString());

let counterMin = " ";
for(let counterMinus = 10; counterMinus >= 1; counterMinus--) {
    counterMin += counterMinus + ", ";
}
printOut(counterMin.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.
*/

const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber){
    guessNumber = Math.ceil(Math.random() * 60);
}
printOut("Guess Number = " + guessNumber.toString());
printOut(" ");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.
*/

guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber) {
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Number of guesses = " + guessCount.toString() + " used " + timeUsed.toString() + "ms");


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
*/
let result = "";
for(let number = 2; number < 200; number++) {
    let isPrime = true;
    let divider = 2;
    while(divider < number) {
        if(number % divider === 0) {
            isPrime = false;
            break;
        }
        divider++;
    }
    if(isPrime) {
        result += number + " ";
    }
}
printOut(result.toString());

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.

○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.

Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops.

K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7
*/
/*
for(let i = 1; i<10; i++){
    console.log("test1")
    //print "K" + i
    for(let j = 1; j<10;j++){
        console.log("test2")
        // print "r" +j
    }
}

let K = " ";
let R = " ";

for(let i = 1; i < 9; i++) {
        K += i + "K";
    for(let j = 1; j < 7; j++) {
        R += j + "R";
    }
    printOut(K.toString() + R.toString());
}

*/
let col1 = " "; 
let row1 = " "; 
for(let row = 1; row <= 7; row++) {
    let rowOutPut = "";
    for(let col = 1; col <= 9; col++) {
        col1 = "K" + col.toString();
        row1 = "R" + row.toString();
        rowOutPut += col1 + row1 + "&nbsp;";
    }
    rowOutPut += newLine;
    printOut(rowOutPut);
}



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.

*/


const points = Math.ceil(Math.random() * 237);
const percent = points / 236 * 100;
let grade;
if (percent < 40) {
    grade = "F";
} else if (percent < 52) {
    grade = "E";
} else if (percent < 64) {
    grade = "D";
} else if (percent < 76) {
    grade = "C";
} else if (percent < 88) {
    grade = "B";
} else {
    grade = "A";
}

printOut("Studenten fikk " + grade.toString() + " og fikk " + points.toString() + " poeng.");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)
*/
let answerTask7 = "";
  let rolls = 0;
  let done = false;
  let hasYahtzee = false;
  let hasStraight = false;
  let has3Pair = false;
  let hasTower = false;
  do {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const d3 = Math.ceil(Math.random() * 6);
    const d4 = Math.ceil(Math.random() * 6);
    const d5 = Math.ceil(Math.random() * 6);
    const d6 = Math.ceil(Math.random() * 6);
    const txtD = (d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6);
    rolls++;
    if ((d1 === d2) && (d1 === d3) && (d1 === d4) && (d1 === d5) && (d1 === d6)) {
      if (hasYahtzee === false) {
        hasYahtzee = true;
        answerTask7 += txtD + newLine;
        answerTask7 += "Yatzi!" + newLine;
        answerTask7 += "På " + rolls.toString() + " kast!" + newLine + newLine;
      }
    } else {
      const cD1 = (txtD.match(/1/g) || "").length;
      const cD2 = (txtD.match(/2/g) || "").length;
      const cD3 = (txtD.match(/3/g) || "").length;
      const cD4 = (txtD.match(/4/g) || "").length;
      const cD5 = (txtD.match(/5/g) || "").length;
      const cD6 = (txtD.match(/6/g) || "").length;
      if ((cD1 === 1) && (cD2 === 1) && (cD3 === 1) && (cD4 === 1) && (cD5 === 1) && (cD6 === 1)) {
        if (hasStraight === false) {
          hasStraight = true;
          answerTask7 += txtD + newLine;
          answerTask7 += "Full straight" + newLine;
          answerTask7 += "På " + rolls.toString() + " Kast!" + newLine + newLine;
        }
      } else {
        const txtCD = cD1 + "," + cD2 + "," + cD3 + "," + cD4 + "," + cD5 + "," + cD6;
        const ccD2 = (txtCD.match(/2/g) || "").length;
        const ccD4 = (txtCD.match(/4/g) || "").length;
        if (ccD2 === 3) {
          if (has3Pair === false) {
            has3Pair = true;
            answerTask7 += txtD + newLine;
            answerTask7 += "3 Par" + newLine;
            answerTask7 += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        } else if ((ccD2 === 1) && (ccD4 === 1)) {
          if (hasTower === false) {
            hasTower = true;
            answerTask7 += txtD + newLine;
            answerTask7 += "Tårn" + newLine;
            answerTask7 += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        }
      }
    }
    done = hasYahtzee && hasStraight;
  } while (done === false);
  printOut(answerTask7 + newLine);




/*
let txtPrintValue = "";
let rolls = 0;
let done = false;
let hasYahtzee = false;
let hasStraight = false;
let has3Pair = false;
let hasTower = false;
do {
const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let txtD = "";
txtD += d1.toString() + ", ";
txtD += d2.toString() + ", ";
txtD += d3.toString() + ", ";
txtD += d4.toString() + ", ";
txtD += d5.toString() + ", ";
txtD += d6.toString();
printOut("Dice throw: " + txtD);
rolls++;

// diceThrow = "2, 2, 3, 3, 3, 3";
/*
const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;


let diceCount = "";
diceCount += count1.toString() + ", ";
diceCount += count2.toString() + ", ";
diceCount += count3.toString() + ", ";
diceCount += count4.toString() + ", ";
diceCount += count5.toString() + ", ";
diceCount += count6.toString();
printOut("Dice count: " + diceCount);

if ((d1 == d2) && (d1 == d3) && (d1 == d4) && (d1 == d5) && (d1 == d6)) {
    if (hasYahtzee === false) {
        hasYahtzee = true;
        txtPrintValue += txtD + newLine;
        txtPrintValue += "Yatzi!" + newLine;
        txtPrintValue += "På " + rolls.toString() + " kast!" + newLine + newLine;
    }
} else {
    const cD1 = (txtPrintValue.match(/1/g) || "").length;
    const cD2 = (txtPrintValue.match(/2/g) || "").length;
    const cD3 = (txtPrintValue.match(/3/g) || "").length;
    const cD4 = (txtPrintValue.match(/4/g) || "").length;
    const cD5 = (txtPrintValue.match(/5/g) || "").length;
    const cD6 = (txtPrintValue.match(/6/g) || "").length;
    if ((cD1 === 1) && (cD2 === 1) && (cD3 === 1) && (cD4 === 1) && (cD5 === 1) && (cD6 === 1)) {
        if (hasStraight === false) {
            hasStraight = true;
            txtPrintValue += txtD + newLine;
            txtPrintValue += "Full straight" + newLine;
            txtPrintValue += "På " + rolls.toString() + " kast!" + newLine + newLine;
        }
    } else {
        const txtCD = cD1 + "," + cD2 + "," + cD3 + "," + cD4 + "," + cD5 + "," + cD6;
        const ccD2 = (txtCD.match(/2/g) || "").length;
        const ccD4 = (txtCD.match(/4/g) || "").length;
        if (ccD2 === 3) {
            if (has3Pair === false) {
                has3Pair = true;
                txtPrintValue += txtD + newLine;
                txtPrintValue += "3 par" + newLine;
                txtPrintValue += "På " + rolls.toString() + " kast!" + newLine + newLine;
            }
        } else if ((ccD2 === 1) && (ccD4 === 1)) {
            if (hasTower === false) {
                hasTower = true;
                txtPrintValue += txtD + newLine;
                txtPrintValue += "Tårn" + newLine;
                txtPrintValue += "På " + rolls.toString() + " kast!" + newLine + newLine;
            }
        }
    }
}
done = hasYahtzee && hasStraight;
} while (done === false);
printOut(txtPrintValue + newLine);


/*
const equals1 = (diceCount.match(/1/g) || "").length
printOut("Full straight: " + equals1.toString());
const equals6 = (diceCount.match(/6/g) || "").length
printOut("Yatzee: " + equals6.toString());
const equals2 = (diceCount.match(/2`4/g) || "").length
printOut("3 Pairs: " + equals2.toString());
const equals2_4 = (diceCount.match(/2/g) || "").length + (diceCount.match(/4/g) || []).length;
printOut("Tower: " + equals2_4.toString());

if(equals1 == 6){
    printOut("Full straight!")
}
else if(equals6 == 6){
    printOut("YATZEE!!")
}

let throws = 0;
let throwCount = 0;
while(equals1 !== throws) {
    throwCount++;
    throws = Math.ceil(Math.random() * 6);
}
printOut("Number of throws = " + throwCount.toString());

/*
guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while(answerNumber !== guessNumber) {
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Number of guesses = " + guessCount.toString() + " used " + timeUsed.toString() + "ms");
*/
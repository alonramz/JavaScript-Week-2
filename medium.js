// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
// For example: if the user enters the number 3, then it should return the month “March.” 
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput = prompt('Please enter 1-12');

function getMonthName(month){
    let d = new Date();
    d.setMonth(month-1);
    let monthName = d.toLocaleString("default", {month: "long"});
    return monthName;
  }
  
  console.log(getMonthName(userInput)); 
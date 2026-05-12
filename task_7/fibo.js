//1.fibonaccii series 
let first = 0,sec = 1,i;
for(i=1;i<=15;i++){
    fib = first + sec;
    console.log(first);
    first = sec;
    sec = fib;
}

//2.Greatest number between two numbers
let a = 25 , b = 30;
if(a > b){
    console.log(a + " is greater than " + b);
} else {
    console.log(b + " is greater than " + a);
}


//3.find the largest among the numbers
let x = 10, y = 20, z = 15;
if(x > y && x > z){
    console.log(x + " is the largest number.");
} else if(y > x && y > z){
    console.log(y + " is the largest number.");
} else {
    console.log(z + " is the largest number.");
}


//4.check wheather the year is leap year or not
let year = 2020;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//5.check if the number is 2 digit number or 3 digit number
let num = 45;
if(num >= 10 && num <= 99){
    console.log(num + " is a 2 digit number."); 
} else if(num >= 100 && num <= 999){
    console.log(num + " is a 3 digit number.");
} else {
    console.log(num + " is neither a 2 digit nor a 3 digit number.");
}



//6.multiplication table of a number
let number = 5;
console.log("Multiplication Table of " + number + ":");
for(i=1;i<=10;i++){
    console.log(number + " x " + i + " = " + (number * i));
}


//7.sum of numbers from 1 to 100
let sum = 0;
for(i=1;i<=100;i++){
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is: " + sum);



//8.Factorial of a number
let n = 5;
let factorial = 1;
for(i=1;i<=n;i++){
    factorial *= i;
}
console.log("The factorial of " + n + " is: " + factorial);



//10.GCD of numbers
let num1 = 48, num2 = 18;
while(num1 != num2){
    if(num1 > num2){
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}
console.log("The GCD of the numbers is: " + num1);






















// //9.count the number of digits in a number
// let number1 = 12345;
// let count = 0;
// while(number1 != 0){
//     number1 = Math.floor(number1 / 10);
//     count++;
// }
// console.log("The number of digits in the number is: " + count);




// //11.Armstrong number
// let number2 = 153;
// let sumOfCubes = 0;
// let temp = number2;
// while(temp != 0){
//     let digit = temp % 10;
//     sumOfCubes += digit * digit * digit;
//     temp = Math.floor(temp / 10);
// }
// if(sumOfCubes === number2){
//     console.log(number2 + " is an Armstrong number.");
// } else {
//     console.log(number2 + " is not an Armstrong number.");
// }





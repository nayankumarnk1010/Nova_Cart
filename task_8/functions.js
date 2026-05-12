// Function for ATM withdrawal
function ATM(total, withdraw) {
    if (withdraw > total) {
        console.log("Insufficient Balance");
        return;
    }

    console.log("Total Amount: " + total);
    console.log("Amount Withdrawn: " + withdraw);
    console.log("Balance: " + (total - withdraw));
}
ATM(50000, 15000);


// Function for marks grade calculator
function calculateGrade(marks) {
    if (marks >= 90) {
        return "Grade A";
    } else if (marks >= 75) {
        return "Grade B";
    } else if (marks >= 60) {
        return "Grade C";
    } else if (marks >= 50) {
        return "Grade D";
    } else {
        return "Fail";
    }
}
console.log("Grade:", calculateGrade(45));


// Login Validation Function
function validateLogin(username, password) {
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}
console.log(validateLogin("admin", "124"));


// Online Shopping Discount
function calculateDiscount(amount) {
    let discount = 0;

    if (amount >= 5000) {
        discount = amount * 0.20;
    } else if (amount >= 2000) {
        discount = amount * 0.10;
    } else if (amount >= 1000) {
        discount = amount * 0.05;
    }

    let finalAmount = amount - discount;

    return {
        discount: discount,
        finalAmount: finalAmount
    };
}

let result = calculateDiscount(10000);
console.log("Discount:", result.discount);
console.log("Final Amount:", result.finalAmount);


// Electricity Bill Calculator
function Bill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 1;
    } else if (units <= 200) {
        bill = (100 * 1) + (units - 100) * 2;
    } else {
        bill = (100 * 1) + (100 * 2) + (units - 200) * 3;
    }

    return bill;
}
console.log("Electricity Bill:", Bill(400));
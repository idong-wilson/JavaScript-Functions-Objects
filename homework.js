/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(toCelsius(32))






/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/


class User{
    constructor(username, password){
    // create a method on the class.
    //create properties: username, password, email, and checkPassword.
    // Set values for username, password, and email
    // Set value for checkPassword to a function.
    this.username = username;
    this.password = password;
    }

    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.Password) {
            this.password = newPassword;
            console.log("Password has been changed")
        } else {
            this.console.log("This is incorrect password")  
        }
    
    }

}



let user1 = new User('Daniel', 'jg4xz$#');
let user2 = new User('Etoro', 'PPfN76@8');

console.log(user1);
console,log(user2);

user1.changePassword('jg4xz$#23', 'zz#yt@26')
user2.changePassword('PPfN76@8', 'QQr32p965')






/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/


const reNegatives = arr => {
    arr = arr.filter(x => x < 0 && Math.round(x) == x).map(x => x * x)
    return arr;
};

const squareNegatives = reNegatives([-10, -3, 4, -2, 8, 9, -3]) 
console.log(squareNegatives);






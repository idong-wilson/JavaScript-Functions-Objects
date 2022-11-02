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


class UserName(name, pw, email){
    // create a method on the class.
    //create properties: username, password, email, and checkPassword.
    // Set values for username, password, and email
    // Set value for checkPassword to a function.
    this.username = name,
    this.password = pwd,
    this.email = email
    this.checkPassword = function checkPassword(strong_pwd) {
    return this.password === strong_pwd
    }

}





//class User = [
//    {
//        uername: 'jaxytone';
//        password: 'jgxpwfttj'
//    }
//]
//function getInfo() {
//    var username = document.getElementById('username').value
//    var password = document.getElementById('password').value
    
//    for (var i = 0; i < User.length; i++) {
//        if (username == User[i].username && password == User[i].password) {
//            consol.log(username + "is logged in!")
//            window.location.href="#";
//            return
//        }
//    }
//    console.log('incorrect username or password')
//}





/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/


const reNegatives = arr => {
    arr = arr.filter(x => x < 0 && Math.round(x) == x).map(x => x * x).sort((a, b) => b - a);
    return arr;
};

const squareNegatives = reNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
console.log(squareNegatives);






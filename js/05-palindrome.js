//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>This number <span id="palindrome"></span> palindrome.</h1>');
let calculate = function() {
    let number = document.getElementById('number').value;
    let palindrome, 
    reverseNumber = '';
    if(number >= 10000 && number <=99999) {
        for (let i = number.length - 1; i >= 0; i--) {
            reverseNumber = reverseNumber + number[i];
        }
        number == reverseNumber ? palindrome = 'is': palindrome = 'is not';
        
    } else {
        palindrome = 'Type 5-digits number!';
    }
    document.getElementById('palindrome').innerText = palindrome;

}
//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>It is  <span id="sum"></span> <span id="curr" style="text-transform:uppercase;"></span>.</h1>');
let calculate = function() {
    let usd = document.getElementById('usd').value;
    let currency = document.getElementById('currency').value;
    let rateEUR = 0.8955;
    let rateUAH = 24.8105;
    let rateAZN = 1.70002;
    let sum;
    if(usd > 0) {
        if (currency == 'eur') {
            sum = usd * rateEUR;
        } else if (currency == 'uah') {
            sum = usd * rateUAH;
        } else if (currency == "azn") {
            sum = usd * rateAZN;
        } else {
            sum = 'Something went wrong..';
        }
    } else {
        palindrome = 'type USD amount!';
    }
    document.getElementById('sum').innerText = sum.toFixed(2);
    document.getElementById('curr').innerText = currency;

}
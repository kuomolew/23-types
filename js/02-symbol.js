//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Symbol is: <span id="symbol"></span></h1>');
let calculate = function() {
    let number = document.getElementById('number').value;
    let symbols = ')!@#$%^&*(';
    if(number >= 0 && number <= 9) {
        symbol = symbols[number];
    } else {
        symbol = 'please, type a number from 0 to 9:';
    }
    document.getElementById('symbol').innerText = symbol;
}
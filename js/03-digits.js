//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="symbol"></span></h1>');
let calculate = function() {
    let number = document.getElementById('number').value;
    let same = 'No';
    if(number > 99 && number < 1000) {
        for (let i = 0; i < number.length; i ++) {
            for (let j = i+1; j< number.length; j++) {
                if (number[i] == number[j] ) {
                    same = 'Yes';
                    break;
                }
            }
            if (same=='Yes') {
                break;
            }
        }
    } else {
        same = 'Please, type a 3 digits number!';
    }
    document.getElementById('symbol').innerText = same;
}
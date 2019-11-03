//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>This year <span id="bissextile"></span> bissextile.</h1>');
let calculate = function() {
    let year = document.getElementById('year').value;
    let bissextile;
    if(year % 400 == 0) {
        bissextile = 'is';
    } else if (year %4 == 0 && year % 100 != 0 ) {
        bissextile = 'is';
    } else {
        bissextile = 'is not';
    }
    document.getElementById('bissextile').innerText = bissextile;

}
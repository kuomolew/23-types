//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Next day is <span id="nextDay"></span>.</h1>');
let calculate = function() {
    let day = document.getElementById('day').value;
    let nextDay = new Date();
    if(day) {
        day = day.split('-');
        nextDay.setFullYear(day[0], day[1]-1, day[2]);
        nextDay.setTime(nextDay.getTime() + 86400000);
    } else {
        nextDay = 'type valid date!';
    }
    document.getElementById('nextDay').innerText = nextDay;

}
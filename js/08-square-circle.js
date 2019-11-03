//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>It is <span id="possibility"></span>.</h1>');
let calculate = function() {
    let perimeter = document.getElementById('perimeter').value;
    let circumference = document.getElementById('circumference').value;
    let square, diameter, possibility;
    if(perimeter > 0 && circumference > 0) {
        square = perimeter / 4;
        diameter = circumference / Math.PI;
        if (square >= diameter) {
            possibility = 'possible';
        } else {
            possibility = 'not possible';
        }
        
    } else {
        possibility = 'type valid values!';
    }
    document.getElementById('possibility').innerText = possibility;

}
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Person is <span id="status"></span></h1>');

let calculate = function() {
    let age = document.getElementById('age').value;
    let status;
    if(age >= 0 && age <= 150) {
        if (age < 12) {
            status = 'a kid';
        } else if (age < 18) {
            status = 'a teen';
        } else if (age < 60) {
            status = 'an adult';
        } else {
            status = 'a retired';
        }   
    } else {
        status = 'are you sure with the age?';
    }
    document.getElementById('status').innerText = status;
}
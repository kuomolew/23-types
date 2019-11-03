//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>You should pay <span id="discountSum"></span> with discount.</h1>');
let calculate = function() {
    let sum = document.getElementById('sum').value;
    let discountSum;
    if(sum > 0) {
        if (sum < 200) {
            discountSum = sum;
        } else if (sum <= 300) {
            discountSum = sum - 0.03 * sum;
        } else if (sum <= 500) {
            discountSum = sum - 0.05 * sum;
        } else {
            discountSum = sum - 0.07 * sum;
        }
        
    } else {
        discountSum = 'type your payment!';
    }
    document.getElementById('discountSum').innerText = discountSum;

}
//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]//
function swap(arr, index1, index2,) {
    let swapRes = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swapRes;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
//_______________________//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250//
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeValue;
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            exchangeValue = currency.value;
            break;
        }
    }
    return sumUAH / exchangeValue;
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
//_______________________//
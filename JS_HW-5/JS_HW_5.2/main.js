// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий//
creatingList = text => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);}
    document.write(`</ul>`);}
creatingList('Lorem Ipsum');
//___________________//

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)//
creatingList2 = (text, numberfragment) => {
    document.write(`<ul>`);
    for (let i = 0; i < numberfragment; i++) {
        document.write(`<li>${text}</li>`);}
    document.write(`</ul>`);}
creatingList2('Lorem Ipsum Pipsun',7);
//___________________//

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список//
array = [1, 'hello', true, 'world', false];
 creatingList3 = array => {
    document.write(`<ul>`);
    for ( let element of array){
        document.write(`<li>${element}</li>`);}
    document.write(`</ul>`)}
creatingList3(array)
//___________________//

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.//
    userList = [
    {name: 'vasa', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olia', age: 28, status: false},
];
users = arr => {for (let user of arr)
    {console.log(user);
        document.write(`<div>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</div>`);}
}
users(userList);
//_________________________//

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13//
numarr=[ 11, 25, 25,];
 sum = numarr => {
    let sumNum= 0 ;
    for (let num of numarr){
        sumNum += num;}
    return sumNum;
}
console.log(sum(numarr));
//_________________________//

//створити функцію яка повертає найменьше число з масиву//
numarr2=[ 1, 25, 45,];
    findLeastNum = arr =>Math.min(...arr);
    LeastNum=findLeastNum(numarr2);
    console.log(LeastNum);
//_________________________//
//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]//
swap = (arr, index1, index2,)=>{
    let swapRes = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swapRes;
    return arr;}
console.log(swap([11, 22, 33, 44], 0, 1));
//_________________________//

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250//
exchange = (sumUAH, currencyValues, exchangeCurrency)=> {
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
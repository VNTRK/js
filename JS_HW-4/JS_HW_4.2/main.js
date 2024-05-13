// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий//
function creatingList(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
creatingList('Lorem Ipsum');
//___________________//

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)//
function creatingList2(text, numberfragment) {
    document.write(`<ul>`);
    for (let i = 0; i < numberfragment; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
creatingList2('Lorem Ipsum Pipsun',4);
//___________________//

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список//
array = [1, 'hello', true, 'world', false];
function creatingList3(array){
     document.write(`<ul>`);
     for ( let element of array){
         document.write(`<li>${element}</li>`);
     }
     document.write(`</ul>`)
 }
creatingList3(array)
//___________________//

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.//
userList = [
    {name: 'vasa', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olia', age: 28, status: false},
    {name: 'max', age: 30, status: true},
];
function users(arr){
    for (let user of arr){
        console.log(user);
        document.write(`<div>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</div>`);
    }
}
users(userList);
//_________________________//

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13//
numarr=[ 10, 25, 25,];
function sum() {
    let sumNum= 0 ;
    for (let num of numarr){
      sumNum += num;
    }
    return sumNum;
 }
 console.log(sum(numarr));
//_________________________//

//створити функцію яка повертає найменьше число з масиву//
numarr2=[ 1, 25, 45,];
function findLeastNum(arr) {
    return Math.min(...arr)
}
let LeastNum=findLeastNum(numarr2);
console.log(LeastNum);
//_________________________//
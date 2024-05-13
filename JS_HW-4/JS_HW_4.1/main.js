//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б//
function rg(side1, side2){
    return side1 * side2;
}
console.log(rg(5,25))
//__________________//

//створити функцію яка обчислює та повертає площу кола з радіусом r//
function areaCircle(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log(areaCircle(5))
//__________________//

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r//
function areaCylinder(h, r){
    return 2 * Math.PI * r * (r + h);
}
console.log(areaCylinder(2,5))
//__________________//
//Функція для виведення кожного елемента масиву://
function loop (array) {
    for(const item of array){
        console.log(item);
    }
}
let userList = [
    {name: 'vasa', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olia', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'ola', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
loop(userList);
//__________________//

//створити функцію яка створює параграф з текстом. Текст задати через аргумент//
function creatingParagraph(text) {
    document.write(`<p> ${text}</p>`);
}
creatingParagraph(`lorem ipsum`);
//__________________//
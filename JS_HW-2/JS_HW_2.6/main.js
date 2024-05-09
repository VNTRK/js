//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.//
let num1 = parseFloat(prompt('enter the first number:' ));
let num2 = parseFloat(prompt('enter the second number:' ));
let maxNum;
if (num1 > num2) { maxNum = num1;}
else if (num2 > num1) {maxNum = num2;}
else {maxNum = 'The numbers are equal to each other.';}
console.log('max number: ' + maxNum);
//____________________________//

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).//
let x;
if (!x) {
    x = "default";
}
console.log(x)
//____________________________//
//За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
//____________________________//

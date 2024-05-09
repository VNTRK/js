//логічні розгалуження//
//Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3//
let x= 11;
    if (x !==0 ) {console.log(true)}
    else{console.log(false)}

let a= 1;
    if (a !== x ) {console.log(true)}
    else{console.log(false)}

let b= 0;
    if (b !== x ) {console.log(true)}
    else{console.log(false)}

let c= -3;
    if (c !== x ) {console.log(true)}
    else{console.log(false)}
//____________________________//
//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).//
let time= 48;
    if ( time >= 0 && time <= 15 ){
        console.log('first part');}

    else if ( time >= 16 && time <= 30 ){
        console.log('second part');}

    else if ( time >= 31 && time <= 45 ){
        console.log('third part');}

    else if ( time >= 46 && time <= 59 ){
        console.log('fourth part');}
//____________________________//
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).//
let day=20;
    if ( day >= 1 && day <= 10 ){
        console.log('first decade');}

    else if ( day >= 11 && day <= 20 ){
        console.log('second decade');}

    else if ( day >= 21 && day <= 31 ){
        console.log('third decade');}
//____________________________//
//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день//
let dayNum = parseFloat(prompt('enter the day of the week number( 1 - 7):'));
let schedule;
switch (dayNum) {
    case 1: schedule = 'Monday'; break;
    case 2: schedule = 'Tuesday'; break;
    case 3: schedule = 'Wednesday'; break;
    case 4: schedule = 'Thursday'; break;
    case 5: schedule = 'Friday'; break;
    case 6: schedule = 'Saturday'; break;
    case 7: schedule = 'Sunday'; break;
}
console.log(schedule);
//____________________________//

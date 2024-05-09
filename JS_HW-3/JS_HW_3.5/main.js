//  - користувачів які старші за 30 років//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let a=0; a < users.length; a++){
    if (users[a].age > 30){
        console.log(users[a])
    }
}
//________________________//

//  - користувачів зі статусом true
for (let t=0; t < users.length; t++){
    if (users[t].status === true){
        console.log(users[t])
    }
}
//________________________//

//  - користувачів зі статусом false

for (let f=0; f < users.length; f++){
    if (users[f].status === false){
        console.log(users[f])
    }
}
//________________________//
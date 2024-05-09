//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let htmlString = '<ul>';
for (let i = 0; i < listOfItems.length; i++) {
    htmlString += `<li>${listOfItems[i]}</li>`;
}
htmlString += '</ul>';
document.write(htmlString);
//_______________________//
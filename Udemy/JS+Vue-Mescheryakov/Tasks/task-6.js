// В данных задачах старайтесь не использовать методы массивов. Используйте циклы и условия.
// Вопросы к этому заданию








// 5.Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

// 6.Дан объект:
// let list = {
// name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


// 1.На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
const str = 'i am in the easycode'
let splitStr = str.split(' ')
for(let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase()+splitStr[i].slice(1,splitStr[i].length)
    console.log(splitStr[i]);
}
let newStr = splitStr.join(' ');

console.log(newStr);

// 2.Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
// (то есть последняя буква становится первой, предпоследняя - второй итд).
const initStr = 'tseb eht ma i'
let splitInitStr = initStr.split(' ')
let revStringArr = [];
for(let i = 0; i < splitInitStr.length; i++) {
    let word = splitInitStr[i].split('')
    let revWord = (word.reverse()).join('')
    revStringArr.push(revWord)
    
}
console.log(revStringArr);
let revString = revStringArr.reverse().join(' ')

console.log(revString);

// 3.Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let fact = 1;
for(let i = 1; i <= 3; i++) {
    
    fact = i*(i)*fact
    console.log(fact);
}
console.log('sum: '+fact);


// 4.На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let myStr = 'JavaScript is a pretty good language'
let myStrSplit = myStr.split(' ')
console.log(myStrSplit);
for(let i = 0; i < myStrSplit.length; i++) {
    myStrSplit[i][0] = myStrSplit[i][0].toUpperCase()
}
//-----------------------------TASK 4------------------------------------------------
//4.1
let a = 0 || 'string' //'string'
a = 1 && 'string' //'string'
a = null || 25 //25
a = null && 25 //null
a = null || 0 || 35 //35
a = null && 0 && 35 //null

console.log(a)

//4.2
let b = 12+14+'12' //2612
b = 3+2-'1' //4
b = '3'+2-1 //31
b = true+2 //3
b = +'10'+1 //11
b = undefined+2 //NaN
b = null+5 //5
b = true+undefined //NaN


console.log(b)

//4.3
let visState = null
if(visState === 'hidden') {
    visState = 'visible'
}
else {
    visState = 'hidden'
}
console.log(visState)

//4.4
let num = 20
if(num === 0) {
    num = 1
}
else if(num<0) {
    num = 'less then zero'
}
else {
    num *=10
}

console.log(num);

//4.5
let car = {
    name: 'Lexus',
    age: 6,
    create: 2008,
    needRepair: false
}

if(car.age > 5) {
    car.needRepair = true
    console.log('Need Repair');
}
else {
    car.needRepair = false
}

console.log(car);

//4.6
let item = {
    name: 'intel core i7',
    price: '100$',
    discount: '15%'
}

if(item.discount && item.discount != NaN && item.price && item.price != NaN) {

    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price)*parseInt(item.discount)/100)
    console.log(item.priceWithDiscount);
}
else {
    console.log(item.price);
}

//4.7
let product = {
    name: 'Яблоко',
    price: '10$'
}
let min = 10
let max = 20

if(parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name)
}
else {
    console.log('товаров не найдено')
}
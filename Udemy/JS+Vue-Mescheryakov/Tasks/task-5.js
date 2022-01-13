//-----------------------------TASK 5-----------------------------------
//5.1
let a = 'none'
switch(a) {
    case 'block':
        console.log('block')
        break;
    case 'none':
        console.log('none')
        break;
    case 'inline':
        console.log('inline')
        break;
    default:
        console.log('other')
}

//5.2
let b = 'hidden'
b = b === 'hidden' ? 'visible' : 'hidden'
console.log(b);

//5.3
let c = 10
c = c === 0 ? 1 : c < 0 ? 'less then zero' : c*10
console.log(c);

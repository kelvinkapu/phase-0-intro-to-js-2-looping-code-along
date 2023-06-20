// Code your solutions in this file
// function writeCards(name, event) {
 function writeCards(name, event) {
const array = []
    for (let m = 0; m < name.length; m++) {
        array.push(`Thank you, ${name[m]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
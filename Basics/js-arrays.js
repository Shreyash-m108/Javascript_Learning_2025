// let number = [0,1,2,3,4,5,6]
// console.log(typeof(number))

// // number.push(7)
// number.unshift(12)
// console.log(number)

let originalArray = [1,2,3,4,5,6,7,8,9,10]
console.log('Original ',originalArray);

let sliceOperation = originalArray.slice(4,8)
console.log('Slice ',sliceOperation);
console.log('OG after slice ',originalArray);

let spliceOperation = originalArray.splice(1,4)
console.log('Splice ',spliceOperation);
console.log('OG after splice ',originalArray);
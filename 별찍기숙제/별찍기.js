// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(i + 1));
}

// *****
// ****
// ***
// **
// *

console.log('--------------------------')

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(5 - i));
}

// *
// ***
// *****
// *******
// *********

console.log('--------------------------')

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(2 * i + 1));
}

// *********
// *******
// *****
// ***
// *

console.log('--------------------------')

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(2 * (5 - i) - 1));
}

// *****
//  ****
//   ***
//    **
//     *

console.log('--------------------------')

for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(i) + '*'.repeat(5 - i));
}

//     *
//    **
//   ***
//  ****
// *****

console.log('--------------------------')

for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(4 - i) + '*'.repeat(i + 1));
}

//    *  
//   ***
//  *****
//   ***
//    *

console.log('--------------------------')

for (let i = 0; i < 6; i++) {
  console.log(' '.repeat(2 - (5 % i)) + '*'.repeat((5 % i) * 2 + 1))
}
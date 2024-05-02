// // function fun1(parameter1) {
// //     console.log('Hello ' + parameter1)
// // }
// // fun1('Mary');

// // const product = {
// //     name: 'socks',
// //     price: 1020
// // }
// // console.log(product['name'])
// // console.log(product);
// // product.size = 'M'
// // console.log(product);
// // delete product.size;
// // console.log(product);

// var product2 = {
//     name: 'Mary',
//     age: 26,
//     likes: {
//         water: 'swimming',
//         food: 'Chicken',
//         drink: 'Soda'
//     },
//     fun: function function1() {
//         console.log('Hey Engineer');
//     }
// }
// product2.hobbies = {};
// product2.hobbies.travel = 'Mombasa';
// console.log(product2.fun());














// function arraysss(Array) {
//     for (let i = 0; i < Array.length; i++) {
//         let j = Array[i]
//         if (j === 'search') {
//             console.log(i)
//             break
//         }
//     }
// }
// arraysss(['hello', 'world', 'search', 'good', 'search'])


// function findindex(array, word) {
//     for (let i = 0; i < array.length; i++) {
//         let j = array[i]
//         if (j === word) {
//             console.log(i)
//             break
//         }
//     }
//     return -1
// }

// findindex(['green', 'red', 'blue', 'red'], 'red')
// console.log(findindex(['green', 'red', 'blue', 'red'], 'yellow'));


// function removeEgg(foods) {
//     for (let i = foods.length - 3; i >= 0; i--) {
//         let j = foods[i]
//         if (j === 'egg') {
//             foods.splice(i, 1)
//         }
//     }
//     return foods
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// function removeEgg(foods) {
//     for (i = 0; i < foods.length; i++) {
//         let j = foods[i]
//         if (j === 'egg') {
//             foods.splice(j, 1)
//         }
//     }
//     return foods
// }
// console.log(removeEgg(['egg', 'egg', 'apple', 'egg', 'egg', 'ham']));

// function removeEgg(foods){
//     let h = 0;
//     let foodsb = foods.slice();
//     for (let i = 0; i < foodsb.length; i++){
//         let j = foodsb[i]
//         if (j === "egg"){
//             h += 1;
//             foodsb.splice(i, 1)
//             if (h === 2){
//                 break;
//             }
//             i--; // add this line to decrement i so that the next iteration checks the same index
//         }
//     }
//     return foodsb
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));




function unique(array) {
    let k = []
    for (let i = 0; i < array.length; i++) {
        let j = array[i]
        if (!k.includes(j)) {
            k.push(j);
        }
    }
    console.log(k)
}
unique(['Mary', 'Mwende', 'Mary', 'Mwende'])
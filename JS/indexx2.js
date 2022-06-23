console.log(true || false && false )
// returns true, because && is executed first
console.log((true || false) && false)   
// returns false, because grouping has the highest precedence


// let age = 18
// let money = 900
// let dog = false

// if (age >= 18 && money >= 1000 && dog) {
//     console.log("Success! Please, get your ticket!")
// } else if (age < 18) {
//     console.log("Come back when you grow up!")
// } else if (money < 1000) {
//     console.log("Come back when you have enough money!")
// } else if (!dog) {
//     console.log("So, what are you doing here?")
// } else {
//     console.log("Who are you?")
// }

// if (age >= 18 && money >= 1000 && dog) {
//     console.log("Success! Please, get your ticket!")
// } else {if (age < 18) {
//     console.log("Come back when you grow up!")
// } if (money < 1000) {
//     console.log("Come back when you have enough money!")
// } if (!dog) {
//     console.log("So, what are you doing here?")
// } } // will return all the errors (if age, money, dog are false)


// switch
// let dog_show = true
// let age = 17
// let money = 900
// let dog = false

// switch (dog_show) {
//     case age>= 18:
//         console.log("Time to win")
//         break;
// }
// and so on


// count = 0
// while (count < 10) {
//     console.log(count, "Logging!")
//     count++
// }

// count = 0
// while (count < 10) {
//     if (count % 2 == 0) {
//     console.log(count, "even")
// }
//     count++
// }

// count = 0
// while (count < 10) {
//     if (count % 2 == 1) {
//     console.log(count, "not even")
// }
//     count++
// }

// for (let i = 0; i < 10; i++) {
//     console.log("The number is", i)
// }

// mm = [1,5.4,65,67,8,3,555,656,343,2,45,7]
// for (let i = 0; i < mm.length; i++) {
//     console.log(i, "The number is", mm[i])
// }

// mm = [1,5.4,65,67,8,3,555,656,343,2,45,7]
// for (let i = 0; i < 10; i++) {
//     if (mm[i] <= 343) {
//     console.log("The number is", mm[i])
//    }
// }

// console.log(typeof(mm))


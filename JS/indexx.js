let name = "Name"
console.log(name)

let age = 23

let person = name + " " + age
console.log(person)

let user_age = 30
let work_period = 10

let age_first_working_day = user_age - work_period // +, -, *, /
console.log(age_first_working_day)

// how to check: use type of 
// console.log(typeof("age_first_working_day = " + age_first_working_day))
console.log("age_first_working_day = " + age_first_working_day) // string
console.log("age_first_working_day =", age_first_working_day) // number


let morning = false
console.log("morning = ", morning)
console.log(typeof(morning))

let evening = true
console.log("evening = ", evening)
console.log(typeof(evening))


let apples = 19
let cherries = 20
let compare = apples <= cherries
console.log("compare = ", compare)

// if (compare){
//     console.log("Compare is ", compare) // If true, it runs  the code
// }

// if (true){
//     console.log("Compare is", compare) // the code will run (when if=true it runs)
// }

// if (false){
//     console.log("Compare is", compare) // the code won't run
// }

if (compare) {
    console.log("Compare is ", compare)
} else if (apples == cherries) {
    console.log("The amount of apples is the same as the amount of cherries")
 } else {
    console.log("!!! Compare is ", compare)
}
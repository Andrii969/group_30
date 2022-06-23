
// ------------------------- the solition is not passed

// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
//     if (typeof age == "number") { // checks if the typeof(age) is number
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
// } else if ((age >= age_2) && (age < age_3)) {
//     console.log("Welcome!!!")
// } else if (age >= age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// } } 
//     else {console.log("Not integer value!")
// }
// }

// checkAge(17)
// checkAge(18)
// checkAge(59)
// checkAge(60)
// checkAge(100)
// checkAge("dfdfdfdf") 
// checkAge("24") //  >>> not passed (because the typeof is string)
// checkAge(0)

// ------------------------------------- the solution is not passed

// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
//    age = Number(age) // turn into the number value
//    console.log(age) 
//    if (typeof age == "number") {
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
// } else if ((age >= age_2) && (age < age_3)) {
//     console.log("Welcome!!!")
// } else if (age >= age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// } } 
//     else console.log("Not integer value!") 
//    // console.log(typeof age) // added by myself
// }

// checkAge(17)
// checkAge(18)
// checkAge(59)
// checkAge(60)
// checkAge(100)
// checkAge("dfdfdfdf") // not passed > returns as typeof number which is NaN (not-a-number)
// checkAge("20") 
// checkAge("0") 

// ----------------------------------- still have one problem

// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
//    //console.log(age) 
//    if (!isNaN(age)) { 
//     // check if ! (not) not-a-number > gives true or false
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
// } else if ((age >= age_2) && (age < age_3)) {
//     console.log("Welcome!!!")
// } else if (age >= age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// } }
//     else {console.log("Not an integer value!") 
//    // console.log(typeof age) // added by myself
// }
// }

// checkAge(17)
// checkAge(18)
// checkAge(59)
// checkAge(60)
// checkAge(100)
// checkAge("dfdfdfdf") 
// checkAge("20")
// checkAge(0)
// checkAge("0")
// checkAge("") // >>> returns 0 instead of "Not an integer value!"

// ------------------------------ the working solution from the team member (but is has a bug)

// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
//    //console.log(age) 
//    if (age && !isNaN(age)) { 
//     // 1) check if age is filled AND 2) check ! (not) not-a-number > gives true or false
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
// } else if ((age >= age_2) && (age < age_3)) {
//     console.log("Welcome!!!")
// } else if (age >= age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// } } 
//     else console.log("Not an integer value!") 
//    // console.log(typeof age) // added by myself
// }

// checkAge(17)
// checkAge(18)
// checkAge(59)
// checkAge(60)
// checkAge(100)
// checkAge("dfdfdfdf") 
// checkAge("20")
// checkAge(0) // >>> returns Not an integer value!
// checkAge("0")

// ------------------------ my solution (fixed the issue with 0)

// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
//    //console.log(age) 
//    if (age && !isNaN(age)) { 
//     // 1) check if age is filled AND 2) check ! (not) not-a-number > gives true or false
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
// } else if ((age >= age_2) && (age < age_3)) {
//     console.log("Welcome!!!")
// } else if (age >= age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// } } 
//     else if (age === 0) {
//         console.log("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
//     }
//     else console.log("Not an integer value!") 
//    // console.log(typeof age) // added by myself
// }

// checkAge(17)
// checkAge(18)
// checkAge(59)
// checkAge(60)
// checkAge(100)
// checkAge("dfdfdfdf") 
// checkAge("20")
// checkAge(0)
// checkAge("0")
// checkAge("")


// ------------- implementation in browser

const age_2 = 18
const age_3 = 60

const checkAge = function(age) {
   //console.log(age) 
   if (age && !isNaN(age)) { 
    // 1) check if age is filled AND 2) check ! (not) not-a-number > gives true or false
if (age < age_2) {
    alert("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
} else if ((age >= age_2) && (age < age_3)) {
    alert("Welcome!!!")
} else if (age >= age_3) {
    alert("Keep calm and look Culture channel");
} else {
    alert("Technical work");
} } 
    else if (age === 0) {
        alert("You don't have access cause your age is " + age + ". It's less than " + age_2 + ".");
    }
    else alert("Not an integer value!") 
   // console.log(typeof age) // added by myself
}


let a = prompt("Enter your age")

checkAge(a)
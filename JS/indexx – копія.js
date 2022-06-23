let apples = 19
let cherries = 20
let compare = apples > cherries
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
} else if (apples === cherries) {
    console.log("The amount of apples is the same as the amount of cherries")
 } else {
    console.log("!!! Compare is ", compare)
}
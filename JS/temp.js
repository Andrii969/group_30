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
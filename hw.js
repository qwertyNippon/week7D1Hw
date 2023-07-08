

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_name){
    d_s = dog_string;
    d_n = dog_name;
    // for (let i in d_n){
        
    // }
    for (let i = 0; i < d_n.length; i++) {
        console.log(d_n[0]);
        if (d_s.includes(d_n[i])){
            console.log('matched' + d_n[i]);
        return console.log('no matches');
        }
      }
}



findWords(dog_string, dog_names)



// function countByOne(){
//     // For Loop
//     for(let i = 0; i < 20; i++){
//         console.log(i)
//     }
//     return 'Counting has stopped'
// }

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]














// Two codewars are below


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

function squareSum(numbers){
    let ans = 0
    for (let i = 0; i < numbers.length; i++){
        ans += numbers[i] ** 2
    }
    return ans
}

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
   if (bool) return "Yes";
   return 'No';
}

// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript


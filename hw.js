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


// Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number.

// Examples:

// findGreaterNumbers([1,2,3]) // 3

// findGreaterNumbers([6,1,2,7]) // 4

// findGreaterNumbers([5,4,3,2,1]) // 0

// findGreaterNumbers([]) // 0

function findGreaterNumbers(arr){
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
              ctr++;
            }
        }
    }
    return ctr;
}

console.log(findGreaterNumbers([1,2,3]));
console.log(findGreaterNumbers([6,1,2,7]));
console.log(findGreaterNumbers([5,4,3,2,1]));
console.log(findGreaterNumbers([]));
// Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

// Implement a function called numInversions which counts the number of inversions in the array.

// Examples:

// numInversions([]); // 0

// numInversions([5]); // 0

// numInversions([1,2]); // 0

// numInversions([2,1]); // 1

// numInversions([1,2,3]); // 0

// numInversions([1,3,2]); // 1

// numInversions([3,1,2]); // 2

// numInversions([3,2,1]); // 3

// numInversions([5,3,4,1,2]); // 8

// numInversions([1,1,1,1]); // 0

// numInversions([2,2,1,1]); // 4

// numInversions([3,3,3,2,2,1]); // 11

// numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22


function numInversions(arr){
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              ctr++;
        }
    }
    return ctr;


}
console.log(numInversions([])); // 0
console.log(numInversions([5])); // 0
console.log(numInversions([1,2])); // 0
console.log(numInversions([2,1])); // 1
console.log(numInversions([1,2,3])); // 0
console.log(numInversions([1,3,2])); // 1
console.log(numInversions([3,1,2])); // 2
console.log(numInversions([3,2,1])); // 3
console.log(numInversions([5,3,4,1,2])); // 8
console.log(numInversions([1,1,1,1])); // 0
console.log(numInversions([2,2,1,1])); // 4
console.log(numInversions([3,3,3,2,2,1])); // 11
console.log(numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2])); // 22


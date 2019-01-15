// Write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. You should not consider "y" to be a vowel.

// Examples:

// reverseVowels("Hello!"); // "Holle!"

// reverseVowels("Tomatoes"); // "Temotaos"

// reverseVowels("Reverse Vowels In A String"); // "RivArsI Vewols en e Streng"

// reverseVowels("aeiou"); // "uoiea"

// reverseVowels("why try, shy fly?"); // "why try, shy fly?"

function reverseVowels(s){
    var result = '';
    var string = [];
    var vowels = []; 
    // Start from front of string to find consonants and vowels.
    for (var i=0; i<s.length; i++) {
        var orig = s[i];
        var char = s[i].toLowerCase();
     
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels.push(s[i]);
            orig = null; // placeholder
        }
        string.push(orig);
    }
    // Insert vowels.
    for (var i=0; i<string.length; i++) {
        if (!string[i]) {
            string[i] = vowels.splice(vowels.length - 1, 1)[0];
        }
    }   
    result = string.join('');  
    return result;
}
console.log(reverseVowels("Hello!"));
console.log(reverseVowels("Tomatoes"));
console.log(reverseVowels("Reverse Vowels In A String"));
console.log(reverseVowels("aeiou"));
console.log(reverseVowels("why try, shy fly?"));
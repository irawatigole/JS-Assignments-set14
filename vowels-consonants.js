// Create a function isAlt that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// Examples:

// isAlt("amazon") // true

// isAlt("apple") // false

// isAlt("banana") // true

function isAlt(str){
    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz'
    let result;
    for (let i=0; i<str.length; i++){  
       if (vowels.includes(str[i])==true && consonants.includes(str[i+1])==true) {     
            result = true;       
        } 
        else if (vowels.includes(str[i+1])==true && consonants.includes(str[i])==true){
            result = true;
              } 
        else if (vowels.includes(str[i])==true && vowels.includes(str[i+1])==true) {
            result = false;
          return result; 
        } else if (consonants.includes(str[i])==true && consonants.includes(str[i+1])==true){
            result = false;  
            return result;                
      }    
}
return result;
}
console.log(isAlt("amazon")); //true
console.log(isAlt("apple")); //false
console.log(isAlt("banana")); //true
console.log(isAlt('omkar')); //false
console.log(isAlt('gauri')); //false
console.log(isAlt('irawati'))// true


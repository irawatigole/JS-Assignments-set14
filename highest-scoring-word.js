// Given a string of words, your goal is to find the highest scoring word in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. You can assume that strings will consist only of lowercase letters and spaces.

// In the event that two words have the same score, return the word that appears first in the string.

// Examples:

// highestScoringWord("a b c d e f"); // "f"

// highestScoringWord("hello world"); // "world"

// highestScoringWord("go ahead make my day"); // "my"

// highestScoringWord("there is no place like home"); // "there"

// highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"

// highestScoringWord("bbb cc f aaaaaa"); // "bbb"

// highestScoringWord("this sentence has two highest scoring words"); // "sentence"


function highestScoringWord(x){
    var words = x.split(' '),
        mx = 0,
        res = '';
    for(let i = 0; i < words.length; i++){
      var s = words[i],
          val = 0;
      for(let j = 0; j < s.length; j++){
        val += (s.charCodeAt(j) - 96);
        
      }
      if(val > mx){
        mx = val;
        res = s;
      }
    }
    return res;
  }
console.log(highestScoringWord("go ahead make my day"));
console.log(highestScoringWord("there is no place like home"));
console.log(highestScoringWord("aaaaaa bbb cc f"));
console.log(highestScoringWord("bbb cc f aaaaaa"));
console.log(highestScoringWord("this sentence has two highest scoring words"));
console.log(highestScoringWord("a b c d e f"));
console.log(highestScoringWord("hello world"));



// function strWeight(a,b){
// 	c = 'abcdefghijklmnopqrstuvwxyz'.split('');
// 	var sum = 0;
// 	for (var i=1; i<=26; i++){
// 		sum1 = sum + c.indexOf(a[i]);
// 		sum2 = sum + c.indexOf(b[i]);
// 		if (sum1 > sum2){
// 			return 1;
// 		} else if (sum2 > sum1){
// 			return 2;
// 		} else if (sum1 == sum2){
// 			return 'equal';
// 		}
// 	}
// }
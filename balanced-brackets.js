module.exports = function isValid(str) {
  // write your code here
    let openParenthesesCount = 0;
    let openCurlyBracesCount = 0;
    let openSquareBracketsCount = 0;
  
    for (let char of str) {
      if (char === '(') {
        openParenthesesCount++;
      } else if (char === '{') {
        openCurlyBracesCount++;
      } else if (char === '[') {
        openSquareBracketsCount++;
      } else if (char === ')') {
        openParenthesesCount--;
        if (openParenthesesCount < 0) {
          return false;
        }
      } else if (char === '}') {
        openCurlyBracesCount--;
        if (openCurlyBracesCount < 0) {
          return false;
        }
      } else if (char === ']') {
        openSquareBracketsCount--;
        if (openSquareBracketsCount < 0) {
          return false;
        }
      }
    }
  
    return (
      openParenthesesCount === 0 &&
      openCurlyBracesCount === 0 &&
      openSquareBracketsCount === 0
    );
  }


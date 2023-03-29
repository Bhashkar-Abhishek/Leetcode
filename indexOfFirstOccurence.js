function strStr(haystack, needle) {
    if (needle === '') {
      return 0;
    }
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      if (haystack.substr(i, needle.length) === needle) {
        return i;
      }
    }
    
    return -1;
  }

  console.log(strStr('hello world', 'l')); // Output: 2
console.log(strStr('hello world', 'o')); // Output: 4
console.log(strStr('hello world', 'ld')); // Output: 9
console.log(strStr('hello world', 'foo')); // Output: -1
console.log(strStr('', 'foo')); // Output: -1
console.log(strStr('hello world', '')); // Output: 0

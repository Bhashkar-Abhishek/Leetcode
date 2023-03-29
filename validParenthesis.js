function isValid(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      
      if (c === '(' || c === '{' || c === '[') {
        stack.push(c);
      } else {
        const last = stack.pop();
        
        if ((c === ')' && last !== '(') || (c === '}' && last !== '{') || (c === ']' && last !== '[')) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }

  console.log(isValid('()')); // Output: true
console.log(isValid('()[]{}')); // Output: true
console.log(isValid('(]')); // Output: false
console.log(isValid('([)]')); // Output: false
console.log(isValid('{[]}')); // Output: true

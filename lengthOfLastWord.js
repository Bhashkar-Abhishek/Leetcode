function lengthOfLastWord(s) {
    // Trim whitespace from end of string
    s = s.trim();
  
    let length = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ') {
        break;
      }
      
      length++;
    }
    
    return length;
  }

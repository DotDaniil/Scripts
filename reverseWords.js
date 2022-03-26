const reverseWords = (s) => {
   return s
   .split(' ')
   .reverse().join(' ')
   .replace(/\s+/g,' ' )
   .trim()
}
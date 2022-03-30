const whoLikes = (names) => {
  let lastPerson = names[names.length - 1];
  let isPlural = false;
  let isBigPlural = false
  let others = ((otherNames) => { 
   otherNames = [...names];
   names.length >= 2 ? otherNames.length -= 1 : otherNames.length;
   return otherNames.join(', ');
  })();

  let numberPers = names.length - 2;
  
  if (names.length === 0) lastPerson = 'no one';
  
  if (names.length >= 2) isPlural = !isPlural;
  
  if (names.length >= 4) isBigPlural = !isBigPlural;

  let resultStr = isPlural ? 
    `${others} and ${lastPerson} like${isPlural ? '' : 's'} this` :
    `${lastPerson} likes this`;
  return resultStr = isBigPlural ? `${names[0] + ', ' + names[1]} and ${numberPers} others like this` : resultStr; 
}

console.log(whoLikes(['Max', 'John', 'Mark']));





//[]               -->  "no one likes this"
//["Peter"]        -->  "Peter likes this"
//["Jacob", "Alex"]-->  "Jacob and Alex like this"
//["Max", "John", "Mark"]-->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]-->  "Alex, Jacob and 2 others like this"


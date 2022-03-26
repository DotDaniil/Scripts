const checkRow = (words) => {
    const firstRow = /[qwertyuiop]/g;
    const secondRow = /[asdfghjkl]/g;
    const thirdRow = /[zxcvbnm]/g;
    const array = [];
    words.forEach((el) => {
        elLower = el.toLowerCase()
        if(((elLower.match(firstRow) || elLower.match(secondRow) || elLower.match(thirdRow)) || []).join('').length === el.length) 
        array.push(el);
    });
    return array
}

console.log(checkRow(["Hello","Alaska","Dad","Peace"]));












// const checkRow = (words) => {
//     const firstRow = /[qwertyuiop]/g;
//     const secondRow = /[asdfghjkl]/g;
//     const thirdRow = /[zxcvbnm]/g;
//     const array_0 = [];
//     const array_1 = [];
//     const array_2 = [];
//     words.forEach((el) => {
//         elLower = el.toLowerCase()
//         if(((elLower.match(firstRow) || elLower.match(secondRow) || elLower(thirdRow)) || []).join('').length === el.length) array_1.push(el);
//         // if((el.toLowerCase().match(secondRow) || []).join('').length === el.length) array_2.push(el);
//         // if((el.toLowerCase().match(thirdRow) || []).join('').length === el.length) array_1.push(el)
//     });

//     // if (array_0.length > array_1.length && array_0.length > array_2.length) return array_0;
//     // if (array_1.length > array_0.length && array_1.length > array_2.length) return array_1;
//     // if (array_2.length > array_0.length && array_2.length > array_1.length) return array_2;
//     return array_1
// }

// console.log(checkRow(["Hello","Alaska","Dad","Peace"]));

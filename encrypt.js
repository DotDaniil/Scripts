const encrypt = text => {
    let result = '';
    for (let i = 0; i < text.length; i += 2) {
        text[i + 1] !== undefined ? result += text[i + 1] + text[i] : result += text[i]    
    }
    return result;
};

console.log(encrypt('Я научился программировать на JS'))
function checkPolindrom(string) {
    polindromCounter = 0;
    const arr = string.split(" ");
    arr.forEach(el => {
        let reversedEl = "";
        for(let i = el.length -1; i >= 0; i--) {
            reversedEl += el[i]; 
        }
        el === reversedEl ?
        (() => {
            console.log(`УСПЕХ! Слово ${el} - полиндром!`);
            polindromCounter++;
        })()
        : console.log(`НЕУДАЧА! Слово ${el} - не полиндром!`);
    });
    polindromCounter === arr.length ? 
    console.log(`СУПЕ-Е-ЕР! Все слова во фразе [${string}] являются полиндромами :)`)
    : console.log(`НЕ ПОВЕЗЛО! Не все слова во фразе [${string}] являются полиндромами ;(`)
}

checkPolindrom('12345 privet шалаш')
console.log('/////////////////////////////////')
checkPolindrom('12321 privetevirp kekskek')
console.log('/////////////////////////////////')
checkPolindrom('аргентинаманитнегра')
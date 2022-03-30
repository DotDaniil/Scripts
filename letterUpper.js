const checkLetter = (name, surname) => {
    return `${name[0].toUpperCase() + name.slice(1).toLowerCase()} ${surname[0].toUpperCase() + surname.slice(1).toLowerCase()}`
}

console.log(checkLetter('dAnIiL', 'tIkHoNov'))

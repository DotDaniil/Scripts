const checkPassword = (pass) => {
    return pass.includes('_') || pass.includes('-') && pass.length >= 4 
}

console.log( checkPassword('1232-'))

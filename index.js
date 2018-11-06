window.addEventListener("load", () => {
  //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "1234567890"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10)
    console.log(passwordLength)
    if (passwordLength < 4) {
      alert('Enter a password length that is 4 or more')
return
}
    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
   const randomLowerCaseIndex =  Math.round(Math.random() * lowerCaseLetters.length)
   password = password + lowerCaseLetters[randomLowerCaseIndex]
    if (password.length === passwordLength) {
      break
    }
   const randomUpperCaseIndex = Math.round(Math.random() * upperCaseLetters.length)
   password = password + upperCaseLetters[randomUpperCaseIndex]
     if (password.length === passwordLength) {
      break
    }
    const randomNumbersIndex = Math.round(Math.random() * numbers.length)
    password = password + numbers[randomNumbersIndex]
     if (password.length === passwordLength) {
      break
    }
    const specialCharactersIndex = Math.round(Math.random() * specialCharacters.length)
    password = password + specialCharacters[specialCharactersIndex]
     if (password.length === passwordLength) {
      break
    }
   

  }
      console.log(password)
      
      const result = document.querySelector('#result')
      result.innerText = password
  }
  )
});
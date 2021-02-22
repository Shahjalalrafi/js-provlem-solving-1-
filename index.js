function isPrime(num) {
    if(num < 2) {
        return false
    }
    for(let i = 2; i< num; i++) {
        if(num % i == 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(11))
// console.log(isPrime(10))
// console.log(isPrime(127))
// console.log(isPrime(126))

function countLetters(str) {
    let tempArr = str.split('')
    let count = 1
    let letters = []
    for(let i = 0; i< tempArr.length; i++) {
        if(tempArr[i] === tempArr[i+1]) {
            count
        }else {
            let value = `${count}${tempArr[i]}`
            letters = [...letters, value]
            count = 1
        }
    }
    return letters.join('')
}

// console.log(countLetters('aasdkfkalksdhgla'))

function checkPalindrome(str) {
    str = str.toLowerCase()
    let first = str.split(' ').join('')
    let second = first.split('').reverse().join('')
    
    return first === second
}

console.log(checkPalindrome('was it a car or a cat i saw'))
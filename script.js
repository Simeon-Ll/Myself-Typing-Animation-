const words = ['Simeon', 'a Designer', 'a Developer', 'the Future', 'the Man']

let wordIndex = 0
let charIndex = 0
let isDeleting = false
let dynamicText = document.querySelector('span')

const typeEffect =() => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar
    dynamicText.classList.add('stop-blinking')

    if (!isDeleting && charIndex < currentWord.length) {
        //if the condition is true, type the next character
        charIndex ++;
        setTimeout(typeEffect, 200)
    }else if (isDeleting && charIndex > 0){
        //If condition is true, remove the previous character
        charIndex--
        setTimeout(typeEffect, 100)
    }else{
        //if the word is deleted, switch to the next
        dynamicText.classList.remove('stop-blinking')
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(typeEffect, 1200)

        

    }



}



typeEffect()


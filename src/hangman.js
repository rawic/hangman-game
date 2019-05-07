class Hangman {
    constructor(words, remainingGuesses) {
        this.words = words.toLowerCase()
        this.letters = words.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.letters.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            const emoji = this.remainingGuesses >= 3 ? '😁' : '😱'
            return `Guesses left: ${this.remainingGuesses} ${emoji}`
        } else if (this.status === 'failed') {
            return `Oh no! You have not guessed: ${this.words} 😭 But you can still <button type="button" class="button button-celebrate">celebrate 🎉🎈</button>`
        } else {
            return `Booyah! You guessed the word. Do you want to <button type="button" class="button button-celebrate">celebrate 🎉🎈?</button>`
        }
    }
    get gameLetters() {
        let gameLetters = ''

        this.letters.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                gameLetters += letter
            } else {
                gameLetters += '*'
            }
        })

        return gameLetters
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.letters.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

export { Hangman as default }

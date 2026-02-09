// Flashcard Pro Deck Builder Functionality

class Flashcard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.isFlipped = false;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
    }
}

class Deck {
    constructor(name) {
        this.name = name;
        this.flashcards = [];
    }

    addFlashcard(question, answer) {
        const newFlashcard = new Flashcard(question, answer);
        this.flashcards.push(newFlashcard);
    }

    getFlashcards() {
        return this.flashcards;
    }
}

// Example usage
const myDeck = new Deck('Study Deck');
myDeck.addFlashcard('What is the capital of France?', 'Paris');
myDeck.addFlashcard('What is 2 + 2?', '4');

console.log(myDeck.getFlashcards());